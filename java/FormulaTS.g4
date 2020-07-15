grammar FormulaTS;

formulaUnit  :
    formulaIfFunction
    |  formulaRefTemplateFunction
    |  formulaFunction
    |  formulaExpress;

formulaFunction :formulaFunctionName skipFuncLBracket formulaParams? skipFuncRBracket;

formulaParams :(formulaParam skipParamComma?)*;

////公式变量;
formulaParam
    : formulaParamConst
    | formulaParamNum
    | formulaParamString
    | formulaExpress
    ;

formulaExpress :
  formulaExpress (OPERATE_OR|OPERATE_AND) formulaExpress
 |formulaExpress (OPERATE_multiply|OPERATE_DIVIDE) formulaExpress
 |formulaExpress (OPERATE_PLUS|OPERATE_MINUS) formulaExpress
 |formulaExpress (OPERATE_GREATE|OPERATE_GREATE_EQ|OPERATE_LESS|OPERATE_LESS_EQ|OPERATE_EQ|OPERATE_NEQ) formulaExpress
 |formulaBracketExpress
 |formulaParamConst
 |formulaFunction
 |formulaIfFunction
 |formulaRefTemplateFunction
 |formulaParamNum
 |formulaCELLLoc
 |formulaParamString
 ;
//
//formulaBinaryOperation:
// formulaExpress (OPERATE_multiply|OPERATE_DIVIDE) formulaExpress
// |formulaExpress (OPERATE_PLUS|OPERATE_MINUS) formulaExpress
// |formulaExpress (OPERATE_GREATE|OPERATE_GREATE_EQ|OPERATE_LESS|OPERATE_LESS_EQ|OPERATE_EQ|OPERATE_NEQ) formulaExpress
//;

 //带括号的表达式;
formulaBracketExpress :'('formulaExpress ')';


//如果方法
formulaIfFunction: ('IF'|'如果') skipFuncLBracket formulaParams? skipFuncRBracket;
//模板公式引用
formulaRefTemplateFunction: ('RefTemplate'|'模板公式') skipFuncLBracket (.*) ',' (.*) skipFuncRBracket;

//公式方法名称;
formulaFunctionName : FORMULANAME;
// 公式中固定变量;
formulaParamConst:CONSTVAR;
// 公式参数 数字变化;
formulaParamNum:NUMBER;
// 公式参数 字符串
formulaParamString: STRING;
formulaCELLLoc: RefSheet? CELLLoc;

formulaOperation
        :OPERATE_GREATE
        |OPERATE_GREATE_EQ
        |OPERATE_LESS
        |OPERATE_LESS_EQ
        |OPERATE_EQ
        |OPERATE_NEQ
        |OPERATE_PLUS
        |OPERATE_MINUS
        |OPERATE_DIVIDE
        |OPERATE_multiply
         ;


skipFuncLBracket:'(';
skipFuncRBracket:')';
//参数间隔符号;
skipParamComma : ',' ;

//操作符;
OPERATE_multiply:'*';
OPERATE_DIVIDE:'/';

OPERATE_PLUS:'+';
OPERATE_MINUS:'-';

OPERATE_GREATE:'>';
OPERATE_GREATE_EQ:'>=';
OPERATE_LESS:'<';
OPERATE_LESS_EQ:'<=';
OPERATE_EQ:'==';
OPERATE_NEQ : '!=';

OPERATE_AND : '&&';
OPERATE_OR : '||';


//数字 包含浮点与整数;
NUMBER:'-'?[0-9]+'.'?[0-9]*;
//方法名称
FORMULANAME :   [A-Za-z_0-9\u4e00-\u9fa5]+;
//字符串  中文
STRING:         '\''~['\r\n]*'\'';

//所引用的内部sheet名称;
RefSheet:'{'SheetName'}!';
//sheet 内单元格;
CELLLoc:'['CELLNum']';
fragment CELLNum: [A-Z][0-9]+;

//SheetName:[A-Za-z_0-9\u4e00-\u9fa5]+;
fragment SheetName: ~[}]*;


//ID  :            [a-z]+;
//空格
WS  :            [ \t\r\n]+ ->skip;
//静态变量
//CONSTVAR :       [A-Za-z_]+;
CONSTVAR :  '$'[A-Za-z_]+'$';
