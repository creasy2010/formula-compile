// Generated from /Users/dong/yzfworkbench/formula-compile/java/FormulaTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0019\u0096\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0005\u0011W\n\u0011\u0003\u0011\u0006\u0011Z\n\u0011\r\u0011",
    "\u000e\u0011[\u0003\u0011\u0005\u0011_\n\u0011\u0003\u0011\u0007\u0011",
    "b\n\u0011\f\u0011\u000e\u0011e\u000b\u0011\u0003\u0012\u0006\u0012h",
    "\n\u0012\r\u0012\u000e\u0012i\u0003\u0013\u0003\u0013\u0007\u0013n\n",
    "\u0013\f\u0013\u000e\u0013q\u000b\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0006\u0015}\n\u0015\r\u0015\u000e\u0015~\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0006\u0016\u0084\n\u0016\r\u0016\u000e\u0016",
    "\u0085\u0003\u0017\u0006\u0017\u0089\n\u0017\r\u0017\u000e\u0017\u008a",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0006\u0018\u0091\n",
    "\u0018\r\u0018\u000e\u0018\u0092\u0003\u0018\u0003\u0018\u0002\u0002",
    "\u0019\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018",
    "/\u0019\u0003\u0002\b\u0003\u00022;\u0007\u00022;C\\aac|\u4e02\u9fa7",
    "\u0005\u0002\f\f\u000f\u000f))\u0003\u0002C\\\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u0005\u0002C\\aac|\u0002\u009f\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
    "\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002",
    ")\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003",
    "\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00031\u0003\u0002",
    "\u0002\u0002\u00053\u0003\u0002\u0002\u0002\u00075\u0003\u0002\u0002",
    "\u0002\t8\u0003\u0002\u0002\u0002\u000b;\u0003\u0002\u0002\u0002\r=",
    "\u0003\u0002\u0002\u0002\u000f?\u0003\u0002\u0002\u0002\u0011A\u0003",
    "\u0002\u0002\u0002\u0013C\u0003\u0002\u0002\u0002\u0015E\u0003\u0002",
    "\u0002\u0002\u0017G\u0003\u0002\u0002\u0002\u0019J\u0003\u0002\u0002",
    "\u0002\u001bL\u0003\u0002\u0002\u0002\u001dO\u0003\u0002\u0002\u0002",
    "\u001fR\u0003\u0002\u0002\u0002!V\u0003\u0002\u0002\u0002#g\u0003\u0002",
    "\u0002\u0002%k\u0003\u0002\u0002\u0002\'t\u0003\u0002\u0002\u0002)y",
    "\u0003\u0002\u0002\u0002+\u0083\u0003\u0002\u0002\u0002-\u0088\u0003",
    "\u0002\u0002\u0002/\u008e\u0003\u0002\u0002\u000212\u0007*\u0002\u0002",
    "2\u0004\u0003\u0002\u0002\u000234\u0007+\u0002\u00024\u0006\u0003\u0002",
    "\u0002\u000256\u0007K\u0002\u000267\u0007H\u0002\u00027\b\u0003\u0002",
    "\u0002\u000289\u0007\u5984\u0002\u00029:\u0007\u679e\u0002\u0002:\n",
    "\u0003\u0002\u0002\u0002;<\u0007.\u0002\u0002<\f\u0003\u0002\u0002\u0002",
    "=>\u0007,\u0002\u0002>\u000e\u0003\u0002\u0002\u0002?@\u00071\u0002",
    "\u0002@\u0010\u0003\u0002\u0002\u0002AB\u0007-\u0002\u0002B\u0012\u0003",
    "\u0002\u0002\u0002CD\u0007/\u0002\u0002D\u0014\u0003\u0002\u0002\u0002",
    "EF\u0007@\u0002\u0002F\u0016\u0003\u0002\u0002\u0002GH\u0007@\u0002",
    "\u0002HI\u0007?\u0002\u0002I\u0018\u0003\u0002\u0002\u0002JK\u0007>",
    "\u0002\u0002K\u001a\u0003\u0002\u0002\u0002LM\u0007>\u0002\u0002MN\u0007",
    "?\u0002\u0002N\u001c\u0003\u0002\u0002\u0002OP\u0007?\u0002\u0002PQ",
    "\u0007?\u0002\u0002Q\u001e\u0003\u0002\u0002\u0002RS\u0007#\u0002\u0002",
    "ST\u0007?\u0002\u0002T \u0003\u0002\u0002\u0002UW\u0007/\u0002\u0002",
    "VU\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WY\u0003\u0002\u0002",
    "\u0002XZ\t\u0002\u0002\u0002YX\u0003\u0002\u0002\u0002Z[\u0003\u0002",
    "\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\",
    "^\u0003\u0002\u0002\u0002]_\u00070\u0002\u0002^]\u0003\u0002\u0002\u0002",
    "^_\u0003\u0002\u0002\u0002_c\u0003\u0002\u0002\u0002`b\t\u0002\u0002",
    "\u0002a`\u0003\u0002\u0002\u0002be\u0003\u0002\u0002\u0002ca\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002d\"\u0003\u0002\u0002\u0002ec",
    "\u0003\u0002\u0002\u0002fh\t\u0003\u0002\u0002gf\u0003\u0002\u0002\u0002",
    "hi\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002",
    "\u0002j$\u0003\u0002\u0002\u0002ko\u0007)\u0002\u0002ln\n\u0004\u0002",
    "\u0002ml\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002",
    "\u0002\u0002op\u0003\u0002\u0002\u0002pr\u0003\u0002\u0002\u0002qo\u0003",
    "\u0002\u0002\u0002rs\u0007)\u0002\u0002s&\u0003\u0002\u0002\u0002tu",
    "\u0007}\u0002\u0002uv\u0005+\u0016\u0002vw\u0007\u007f\u0002\u0002w",
    "x\u0007#\u0002\u0002x(\u0003\u0002\u0002\u0002yz\u0007]\u0002\u0002",
    "z|\t\u0005\u0002\u0002{}\t\u0002\u0002\u0002|{\u0003\u0002\u0002\u0002",
    "}~\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081\u0007_",
    "\u0002\u0002\u0081*\u0003\u0002\u0002\u0002\u0082\u0084\t\u0003\u0002",
    "\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002",
    "\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002",
    "\u0002\u0086,\u0003\u0002\u0002\u0002\u0087\u0089\t\u0006\u0002\u0002",
    "\u0088\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002",
    "\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002",
    "\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008d\b\u0017\u0002\u0002",
    "\u008d.\u0003\u0002\u0002\u0002\u008e\u0090\u0007&\u0002\u0002\u008f",
    "\u0091\t\u0007\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091",
    "\u0092\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092",
    "\u0093\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094",
    "\u0095\u0007&\u0002\u0002\u00950\u0003\u0002\u0002\u0002\r\u0002V[^",
    "cio~\u0085\u008a\u0092\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function FormulaTSLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

FormulaTSLexer.prototype = Object.create(antlr4.Lexer.prototype);
FormulaTSLexer.prototype.constructor = FormulaTSLexer;

Object.defineProperty(FormulaTSLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

FormulaTSLexer.EOF = antlr4.Token.EOF;
FormulaTSLexer.T__0 = 1;
FormulaTSLexer.T__1 = 2;
FormulaTSLexer.T__2 = 3;
FormulaTSLexer.T__3 = 4;
FormulaTSLexer.T__4 = 5;
FormulaTSLexer.OPERATE_multiply = 6;
FormulaTSLexer.OPERATE_DIVIDE = 7;
FormulaTSLexer.OPERATE_PLUS = 8;
FormulaTSLexer.OPERATE_MINUS = 9;
FormulaTSLexer.OPERATE_GREATE = 10;
FormulaTSLexer.OPERATE_GREATE_EQ = 11;
FormulaTSLexer.OPERATE_LESS = 12;
FormulaTSLexer.OPERATE_LESS_EQ = 13;
FormulaTSLexer.OPERATE_EQ = 14;
FormulaTSLexer.OPERATE_NEQ = 15;
FormulaTSLexer.NUMBER = 16;
FormulaTSLexer.FORMULANAME = 17;
FormulaTSLexer.STRING = 18;
FormulaTSLexer.RefSheet = 19;
FormulaTSLexer.CELLLoc = 20;
FormulaTSLexer.SheetName = 21;
FormulaTSLexer.WS = 22;
FormulaTSLexer.CONSTVAR = 23;

FormulaTSLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FormulaTSLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FormulaTSLexer.prototype.literalNames = [ null, "'('", "')'", "'IF'", "'\u5982\u679C'", 
                                          "','", "'*'", "'/'", "'+'", "'-'", 
                                          "'>'", "'>='", "'<'", "'<='", 
                                          "'=='", "'!='" ];

FormulaTSLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                           null, "OPERATE_multiply", "OPERATE_DIVIDE", 
                                           "OPERATE_PLUS", "OPERATE_MINUS", 
                                           "OPERATE_GREATE", "OPERATE_GREATE_EQ", 
                                           "OPERATE_LESS", "OPERATE_LESS_EQ", 
                                           "OPERATE_EQ", "OPERATE_NEQ", 
                                           "NUMBER", "FORMULANAME", "STRING", 
                                           "RefSheet", "CELLLoc", "SheetName", 
                                           "WS", "CONSTVAR" ];

FormulaTSLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                       "OPERATE_multiply", "OPERATE_DIVIDE", 
                                       "OPERATE_PLUS", "OPERATE_MINUS", 
                                       "OPERATE_GREATE", "OPERATE_GREATE_EQ", 
                                       "OPERATE_LESS", "OPERATE_LESS_EQ", 
                                       "OPERATE_EQ", "OPERATE_NEQ", "NUMBER", 
                                       "FORMULANAME", "STRING", "RefSheet", 
                                       "CELLLoc", "SheetName", "WS", "CONSTVAR" ];

FormulaTSLexer.prototype.grammarFileName = "FormulaTS.g4";


exports.FormulaTSLexer = FormulaTSLexer;

