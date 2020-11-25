grammar FormulaTS;

formulaUnit  :((formulaExpress
         |  formulaAssignExpress)';'?)+
         ;

formulaFunction :formulaFunctionName skipFuncLBracket formulaParams? skipFuncRBracket;

formulaParams :(formulaParam skipParamComma?)*;

////公式变量;
formulaParam
    : formulaParamConst
    | formulaParamNull
    | formulaParamNum
    | formulaParamString
    | formulaExpress
    ;

formulaExpress :
  formulaExpress op=(OPERATE_OR | OPERATE_AND) formulaExpress
 |formulaExpress op=(OPERATE_multiply | OPERATE_DIVIDE) formulaExpress
 |formulaExpress op=(OPERATE_PLUS | OPERATE_MINUS) formulaExpress
 |formulaExpress op=(OPERATE_GREATE | OPERATE_GREATE_EQ | OPERATE_LESS | OPERATE_LESS_EQ | OPERATE_EQ | OPERATE_NEQ) formulaExpress

 |formulaBracketExpress
//方法的处理
 |formulaIfFunction
 |formulaRefTemplateFunction
 |formulaFunction

//当个参数的处理
 |formulaParamConst
 |formulaParamNum
 |formulaCELLLoc
 |formulaCELLTPLLoc
 |formulaParamString
 |formulaExpress op='?' formulaExpress ':' formulaExpress
 ;

 //带括号的表达式;
formulaBracketExpress :skipFuncLBracket(formulaExpress |formulaParamNum | formulaParamConst ) skipFuncRBracket;

//formulaTernaryExpression :formulaExpress op='?' formulaExpress ':' formulaExpress;

//如果方法
formulaIfFunction: ('IF'|'如果') skipFuncLBracket formulaParams? skipFuncRBracket;
//模板公式引用
formulaRefTemplateFunction: ('RefTemplate'|'模板公式') skipFuncLBracket (.*) skipParamComma (.*) skipFuncRBracket;
//赋值表达式;
formulaAssignExpress:CONSTVAR '=' formulaExpress;

//公式方法名称;
formulaFunctionName : FORMULANAME;
// 公式中固定变量;
formulaParamConst:CONSTVAR;
// 公式参数 数字变化;
formulaParamNum:(sign=(OPERATE_PLUS|OPERATE_MINUS))?NUMBER;
// 公式参数 字符串
formulaParamString: STRING;
formulaParamNull: NULL;
formulaCELLLoc: RefSheet? CELLLoc;
formulaCELLTPLLoc: CELLTPLLoc;


skipFuncLBracket:('('|'（') ;
skipFuncRBracket:(')'|'）') ;
//参数间隔符号;
skipParamComma : (','|'，') ;

//操作符;
OPERATE_multiply:'*';
OPERATE_DIVIDE:'/';

OPERATE_PLUS:FlagPlus;
OPERATE_MINUS:FlagSub;

OPERATE_GREATE:'>';
OPERATE_GREATE_EQ:'>=';
OPERATE_LESS:'<';
OPERATE_LESS_EQ:'<=';
OPERATE_EQ:'==';
OPERATE_NEQ : '!=';

OPERATE_AND : '&&';
OPERATE_OR : '||';


fragment FlagPlus: '+';
fragment FlagSub: '-';

NULL : 'null';
//数字 包含浮点与整数;
NUMBER: [0-9]+'.'?[0-9]*;
//方法名称
FORMULANAME :   [A-Za-z_0-9、\u4e00-\u9fa5]+;
//字符串  中文
STRING:         ['"]~['\r\n]*['"];

//所引用的内部sheet名称;
RefSheet:'{'SheetName'}!';
//sheet 内单元格;
CELLLoc:'['CELLNum']';
CELLTPLLoc:'_@'CELLNum;
fragment CELLNum: [A-Z]+[0-9]+;

//SheetName:[A-Za-z_0-9\u4e00-\u9fa5]+;
fragment SheetName: ~[}]*;


//ID  :            [a-z]+;
//空格
WS  :            [ \t\r\n]+ ->skip;
//静态变量
//CONSTVAR :       [A-Za-z_]+;
CONSTVAR :  '$'[A-Za-z_0-9\-]+'$';
