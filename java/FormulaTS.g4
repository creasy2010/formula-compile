grammar Formula;

formulaUnit  :
   formulaFunction
 | formulaExpress
;
formulaFunction : formulaFunctionName '(' formulaParams? ')';
formulaParams :(formulaParam ','?)*;
////公式变量;
formulaParam
    : formulaExpress
    ;

//公式方法名称;
formulaFunctionName : FORMULANAME;
// 公式中固定变量;
formulaParamConst:CONSTVAR;
// 公式参数 数字变化;
formulaParamNum:NUMBER;
// 公式参数 字符串
formulaParamString: STRING;
formulaCELLLoc: CELLLoc;

formulaExpress :
 formulaExpress formulaOperation formulaExpress
 |'('formulaExpress ')'
 |formulaParamConst formulaOperation formulaExpress
 |formulaParamConst
 |formulaFunction
 |formulaParamNum
 |formulaCELLLoc
 |formulaParamString
 ;

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



//操作符;
OPERATE_GREATE:'>';
OPERATE_GREATE_EQ:'>=';
OPERATE_LESS:'<';
OPERATE_LESS_EQ:'<=';
OPERATE_EQ:'==';
OPERATE_PLUS:'+';
OPERATE_multiply:'*';
OPERATE_DIVIDE:'/';
OPERATE_MINUS:'-';
OPERATE_NEQ : '!=';


//数字 包含浮点与整数;
NUMBER:'-'?[0-9]+'.'?[0-9]*;
//方法名称
FORMULANAME :   [A-Za-z_0-9]+;
//字符串  中文
STRING:         '\''~['\r\n]*'\'';
//FORMULANAME : [A-Za-z_]+;
CELLLoc:('{'SheetName'}!')?'[' [A-Z][0-9]+ ']';

SheetName:[A-Za-z_0-9\u4e00-\u9fa5]+;

//ID  :            [a-z]+;
//空格
WS  :            [ \t\r\n]+ ->skip;

//静态变量
//CONSTVAR :       [A-Za-z_]+;
CONSTVAR :  '$'[A-Za-z_]+'$';