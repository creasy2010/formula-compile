// Generated from /Users/dong/yzfworkbench/formula-compile/java/FormulaTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0016\u008c\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0005\u000fK\n\u000f\u0003\u000f\u0006\u000fN\n\u000f",
    "\r\u000f\u000e\u000fO\u0003\u000f\u0005\u000fS\n\u000f\u0003\u000f\u0007",
    "\u000fV\n\u000f\f\u000f\u000e\u000fY\u000b\u000f\u0003\u0010\u0006\u0010",
    "\\\n\u0010\r\u0010\u000e\u0010]\u0003\u0011\u0003\u0011\u0007\u0011",
    "b\n\u0011\f\u0011\u000e\u0011e\u000b\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012n",
    "\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0006\u0012s\n\u0012\r",
    "\u0012\u000e\u0012t\u0003\u0012\u0003\u0012\u0003\u0013\u0006\u0013",
    "z\n\u0013\r\u0013\u000e\u0013{\u0003\u0014\u0006\u0014\u007f\n\u0014",
    "\r\u0014\u000e\u0014\u0080\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0006\u0015\u0087\n\u0015\r\u0015\u000e\u0015\u0088\u0003\u0015",
    "\u0003\u0015\u0002\u0002\u0016\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015",
    ")\u0016\u0003\u0002\t\u0003\u00022;\u0006\u00022;C\\aac|\u0005\u0002",
    "\f\f\u000f\u000f))\u0003\u0002C\\\u0007\u00022;C\\aac|\u4e02\u9fa7\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0005\u0002C\\aac|\u0002\u0096\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002",
    "\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002",
    "#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003",
    "\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0003+\u0003\u0002",
    "\u0002\u0002\u0005-\u0003\u0002\u0002\u0002\u0007/\u0003\u0002\u0002",
    "\u0002\t1\u0003\u0002\u0002\u0002\u000b3\u0003\u0002\u0002\u0002\r6",
    "\u0003\u0002\u0002\u0002\u000f8\u0003\u0002\u0002\u0002\u0011;\u0003",
    "\u0002\u0002\u0002\u0013>\u0003\u0002\u0002\u0002\u0015@\u0003\u0002",
    "\u0002\u0002\u0017B\u0003\u0002\u0002\u0002\u0019D\u0003\u0002\u0002",
    "\u0002\u001bF\u0003\u0002\u0002\u0002\u001dJ\u0003\u0002\u0002\u0002",
    "\u001f[\u0003\u0002\u0002\u0002!_\u0003\u0002\u0002\u0002#m\u0003\u0002",
    "\u0002\u0002%y\u0003\u0002\u0002\u0002\'~\u0003\u0002\u0002\u0002)\u0084",
    "\u0003\u0002\u0002\u0002+,\u0007*\u0002\u0002,\u0004\u0003\u0002\u0002",
    "\u0002-.\u0007+\u0002\u0002.\u0006\u0003\u0002\u0002\u0002/0\u0007.",
    "\u0002\u00020\b\u0003\u0002\u0002\u000212\u0007@\u0002\u00022\n\u0003",
    "\u0002\u0002\u000234\u0007@\u0002\u000245\u0007?\u0002\u00025\f\u0003",
    "\u0002\u0002\u000267\u0007>\u0002\u00027\u000e\u0003\u0002\u0002\u0002",
    "89\u0007>\u0002\u00029:\u0007?\u0002\u0002:\u0010\u0003\u0002\u0002",
    "\u0002;<\u0007?\u0002\u0002<=\u0007?\u0002\u0002=\u0012\u0003\u0002",
    "\u0002\u0002>?\u0007-\u0002\u0002?\u0014\u0003\u0002\u0002\u0002@A\u0007",
    ",\u0002\u0002A\u0016\u0003\u0002\u0002\u0002BC\u00071\u0002\u0002C\u0018",
    "\u0003\u0002\u0002\u0002DE\u0007/\u0002\u0002E\u001a\u0003\u0002\u0002",
    "\u0002FG\u0007#\u0002\u0002GH\u0007?\u0002\u0002H\u001c\u0003\u0002",
    "\u0002\u0002IK\u0007/\u0002\u0002JI\u0003\u0002\u0002\u0002JK\u0003",
    "\u0002\u0002\u0002KM\u0003\u0002\u0002\u0002LN\t\u0002\u0002\u0002M",
    "L\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002",
    "\u0002OP\u0003\u0002\u0002\u0002PR\u0003\u0002\u0002\u0002QS\u00070",
    "\u0002\u0002RQ\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002SW\u0003",
    "\u0002\u0002\u0002TV\t\u0002\u0002\u0002UT\u0003\u0002\u0002\u0002V",
    "Y\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002",
    "\u0002X\u001e\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002Z\\\t",
    "\u0003\u0002\u0002[Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002",
    "][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^ \u0003\u0002\u0002",
    "\u0002_c\u0007)\u0002\u0002`b\n\u0004\u0002\u0002a`\u0003\u0002\u0002",
    "\u0002be\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002",
    "\u0002\u0002df\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002fg\u0007",
    ")\u0002\u0002g\"\u0003\u0002\u0002\u0002hi\u0007}\u0002\u0002ij\u0005",
    "%\u0013\u0002jk\u0007\u007f\u0002\u0002kl\u0007#\u0002\u0002ln\u0003",
    "\u0002\u0002\u0002mh\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002",
    "no\u0003\u0002\u0002\u0002op\u0007]\u0002\u0002pr\t\u0005\u0002\u0002",
    "qs\t\u0002\u0002\u0002rq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002",
    "\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\u0003\u0002",
    "\u0002\u0002vw\u0007_\u0002\u0002w$\u0003\u0002\u0002\u0002xz\t\u0006",
    "\u0002\u0002yx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{y\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|&\u0003\u0002\u0002\u0002",
    "}\u007f\t\u0007\u0002\u0002~}\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
    "\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u0081\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\b",
    "\u0014\u0002\u0002\u0083(\u0003\u0002\u0002\u0002\u0084\u0086\u0007",
    "&\u0002\u0002\u0085\u0087\t\b\u0002\u0002\u0086\u0085\u0003\u0002\u0002",
    "\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0007&\u0002\u0002\u008b*\u0003\u0002\u0002\u0002",
    "\u000e\u0002JORW]cmt{\u0080\u0088\u0003\b\u0002\u0002"].join("");


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
FormulaTSLexer.OPERATE_GREATE = 4;
FormulaTSLexer.OPERATE_GREATE_EQ = 5;
FormulaTSLexer.OPERATE_LESS = 6;
FormulaTSLexer.OPERATE_LESS_EQ = 7;
FormulaTSLexer.OPERATE_EQ = 8;
FormulaTSLexer.OPERATE_PLUS = 9;
FormulaTSLexer.OPERATE_multiply = 10;
FormulaTSLexer.OPERATE_DIVIDE = 11;
FormulaTSLexer.OPERATE_MINUS = 12;
FormulaTSLexer.OPERATE_NEQ = 13;
FormulaTSLexer.NUMBER = 14;
FormulaTSLexer.FORMULANAME = 15;
FormulaTSLexer.STRING = 16;
FormulaTSLexer.CELLLoc = 17;
FormulaTSLexer.SheetName = 18;
FormulaTSLexer.WS = 19;
FormulaTSLexer.CONSTVAR = 20;

FormulaTSLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FormulaTSLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FormulaTSLexer.prototype.literalNames = [ null, "'('", "')'", "','", "'>'", 
                                          "'>='", "'<'", "'<='", "'=='", 
                                          "'+'", "'*'", "'/'", "'-'", "'!='" ];

FormulaTSLexer.prototype.symbolicNames = [ null, null, null, null, "OPERATE_GREATE", 
                                           "OPERATE_GREATE_EQ", "OPERATE_LESS", 
                                           "OPERATE_LESS_EQ", "OPERATE_EQ", 
                                           "OPERATE_PLUS", "OPERATE_multiply", 
                                           "OPERATE_DIVIDE", "OPERATE_MINUS", 
                                           "OPERATE_NEQ", "NUMBER", "FORMULANAME", 
                                           "STRING", "CELLLoc", "SheetName", 
                                           "WS", "CONSTVAR" ];

FormulaTSLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "OPERATE_GREATE", 
                                       "OPERATE_GREATE_EQ", "OPERATE_LESS", 
                                       "OPERATE_LESS_EQ", "OPERATE_EQ", 
                                       "OPERATE_PLUS", "OPERATE_multiply", 
                                       "OPERATE_DIVIDE", "OPERATE_MINUS", 
                                       "OPERATE_NEQ", "NUMBER", "FORMULANAME", 
                                       "STRING", "CELLLoc", "SheetName", 
                                       "WS", "CONSTVAR" ];

FormulaTSLexer.prototype.grammarFileName = "FormulaTS.g4";


exports.FormulaTSLexer = FormulaTSLexer;

