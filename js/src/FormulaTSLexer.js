// Generated from /Users/dong/yzfworkbench/formula-compile/java/FormulaTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001c\u00ae\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0005",
    "\u0013n\n\u0013\u0003\u0013\u0006\u0013q\n\u0013\r\u0013\u000e\u0013",
    "r\u0003\u0013\u0005\u0013v\n\u0013\u0003\u0013\u0007\u0013y\n\u0013",
    "\f\u0013\u000e\u0013|\u000b\u0013\u0003\u0014\u0006\u0014\u007f\n\u0014",
    "\r\u0014\u000e\u0014\u0080\u0003\u0015\u0003\u0015\u0007\u0015\u0085",
    "\n\u0015\f\u0015\u000e\u0015\u0088\u000b\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0006\u0018",
    "\u0097\n\u0018\r\u0018\u000e\u0018\u0098\u0003\u0019\u0006\u0019\u009c",
    "\n\u0019\r\u0019\u000e\u0019\u009d\u0003\u001a\u0006\u001a\u00a1\n\u001a",
    "\r\u001a\u000e\u001a\u00a2\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0006\u001b\u00a9\n\u001b\r\u001b\u000e\u001b\u00aa\u0003\u001b",
    "\u0003\u001b\u0002\u0002\u001c\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015",
    ")\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c\u0003\u0002\b\u0003",
    "\u00022;\u0007\u00022;C\\aac|\u4e02\u9fa7\u0005\u0002\f\f\u000f\u000f",
    "))\u0003\u0002C\\\u0005\u0002\u000b\f\u000f\u000f\"\"\u0005\u0002C\\",
    "aac|\u0002\u00b7\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00037\u0003",
    "\u0002\u0002\u0002\u00059\u0003\u0002\u0002\u0002\u0007;\u0003\u0002",
    "\u0002\u0002\t>\u0003\u0002\u0002\u0002\u000bA\u0003\u0002\u0002\u0002",
    "\rM\u0003\u0002\u0002\u0002\u000fR\u0003\u0002\u0002\u0002\u0011T\u0003",
    "\u0002\u0002\u0002\u0013V\u0003\u0002\u0002\u0002\u0015X\u0003\u0002",
    "\u0002\u0002\u0017Z\u0003\u0002\u0002\u0002\u0019\\\u0003\u0002\u0002",
    "\u0002\u001b^\u0003\u0002\u0002\u0002\u001da\u0003\u0002\u0002\u0002",
    "\u001fc\u0003\u0002\u0002\u0002!f\u0003\u0002\u0002\u0002#i\u0003\u0002",
    "\u0002\u0002%m\u0003\u0002\u0002\u0002\'~\u0003\u0002\u0002\u0002)\u0082",
    "\u0003\u0002\u0002\u0002+\u008b\u0003\u0002\u0002\u0002-\u0090\u0003",
    "\u0002\u0002\u0002/\u0094\u0003\u0002\u0002\u00021\u009b\u0003\u0002",
    "\u0002\u00023\u00a0\u0003\u0002\u0002\u00025\u00a6\u0003\u0002\u0002",
    "\u000278\u0007*\u0002\u00028\u0004\u0003\u0002\u0002\u00029:\u0007+",
    "\u0002\u0002:\u0006\u0003\u0002\u0002\u0002;<\u0007K\u0002\u0002<=\u0007",
    "H\u0002\u0002=\b\u0003\u0002\u0002\u0002>?\u0007\u5984\u0002\u0002?",
    "@\u0007\u679e\u0002\u0002@\n\u0003\u0002\u0002\u0002AB\u0007T\u0002",
    "\u0002BC\u0007g\u0002\u0002CD\u0007h\u0002\u0002DE\u0007V\u0002\u0002",
    "EF\u0007g\u0002\u0002FG\u0007o\u0002\u0002GH\u0007r\u0002\u0002HI\u0007",
    "n\u0002\u0002IJ\u0007c\u0002\u0002JK\u0007v\u0002\u0002KL\u0007g\u0002",
    "\u0002L\f\u0003\u0002\u0002\u0002MN\u0007\u6a23\u0002\u0002NO\u0007",
    "\u6781\u0002\u0002OP\u0007\u516e\u0002\u0002PQ\u0007\u5f11\u0002\u0002",
    "Q\u000e\u0003\u0002\u0002\u0002RS\u0007.\u0002\u0002S\u0010\u0003\u0002",
    "\u0002\u0002TU\u0007,\u0002\u0002U\u0012\u0003\u0002\u0002\u0002VW\u0007",
    "1\u0002\u0002W\u0014\u0003\u0002\u0002\u0002XY\u0007-\u0002\u0002Y\u0016",
    "\u0003\u0002\u0002\u0002Z[\u0007/\u0002\u0002[\u0018\u0003\u0002\u0002",
    "\u0002\\]\u0007@\u0002\u0002]\u001a\u0003\u0002\u0002\u0002^_\u0007",
    "@\u0002\u0002_`\u0007?\u0002\u0002`\u001c\u0003\u0002\u0002\u0002ab",
    "\u0007>\u0002\u0002b\u001e\u0003\u0002\u0002\u0002cd\u0007>\u0002\u0002",
    "de\u0007?\u0002\u0002e \u0003\u0002\u0002\u0002fg\u0007?\u0002\u0002",
    "gh\u0007?\u0002\u0002h\"\u0003\u0002\u0002\u0002ij\u0007#\u0002\u0002",
    "jk\u0007?\u0002\u0002k$\u0003\u0002\u0002\u0002ln\u0007/\u0002\u0002",
    "ml\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002np\u0003\u0002\u0002",
    "\u0002oq\t\u0002\u0002\u0002po\u0003\u0002\u0002\u0002qr\u0003\u0002",
    "\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002su\u0003",
    "\u0002\u0002\u0002tv\u00070\u0002\u0002ut\u0003\u0002\u0002\u0002uv",
    "\u0003\u0002\u0002\u0002vz\u0003\u0002\u0002\u0002wy\t\u0002\u0002\u0002",
    "xw\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002",
    "\u0002z{\u0003\u0002\u0002\u0002{&\u0003\u0002\u0002\u0002|z\u0003\u0002",
    "\u0002\u0002}\u007f\t\u0003\u0002\u0002~}\u0003\u0002\u0002\u0002\u007f",
    "\u0080\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080",
    "\u0081\u0003\u0002\u0002\u0002\u0081(\u0003\u0002\u0002\u0002\u0082",
    "\u0086\u0007)\u0002\u0002\u0083\u0085\n\u0004\u0002\u0002\u0084\u0083",
    "\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084",
    "\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0089",
    "\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0007)\u0002\u0002\u008a*\u0003\u0002\u0002\u0002\u008b\u008c\u0007",
    "}\u0002\u0002\u008c\u008d\u00051\u0019\u0002\u008d\u008e\u0007\u007f",
    "\u0002\u0002\u008e\u008f\u0007#\u0002\u0002\u008f,\u0003\u0002\u0002",
    "\u0002\u0090\u0091\u0007]\u0002\u0002\u0091\u0092\u0005/\u0018\u0002",
    "\u0092\u0093\u0007_\u0002\u0002\u0093.\u0003\u0002\u0002\u0002\u0094",
    "\u0096\t\u0005\u0002\u0002\u0095\u0097\t\u0002\u0002\u0002\u0096\u0095",
    "\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u0096",
    "\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u00990",
    "\u0003\u0002\u0002\u0002\u009a\u009c\t\u0003\u0002\u0002\u009b\u009a",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009b",
    "\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e2",
    "\u0003\u0002\u0002\u0002\u009f\u00a1\t\u0006\u0002\u0002\u00a0\u009f",
    "\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a0",
    "\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4",
    "\u0003\u0002\u0002\u0002\u00a4\u00a5\b\u001a\u0002\u0002\u00a54\u0003",
    "\u0002\u0002\u0002\u00a6\u00a8\u0007&\u0002\u0002\u00a7\u00a9\t\u0007",
    "\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002",
    "\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002",
    "\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007&",
    "\u0002\u0002\u00ad6\u0003\u0002\u0002\u0002\r\u0002mruz\u0080\u0086",
    "\u0098\u009d\u00a2\u00aa\u0003\b\u0002\u0002"].join("");


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
FormulaTSLexer.T__5 = 6;
FormulaTSLexer.T__6 = 7;
FormulaTSLexer.OPERATE_multiply = 8;
FormulaTSLexer.OPERATE_DIVIDE = 9;
FormulaTSLexer.OPERATE_PLUS = 10;
FormulaTSLexer.OPERATE_MINUS = 11;
FormulaTSLexer.OPERATE_GREATE = 12;
FormulaTSLexer.OPERATE_GREATE_EQ = 13;
FormulaTSLexer.OPERATE_LESS = 14;
FormulaTSLexer.OPERATE_LESS_EQ = 15;
FormulaTSLexer.OPERATE_EQ = 16;
FormulaTSLexer.OPERATE_NEQ = 17;
FormulaTSLexer.NUMBER = 18;
FormulaTSLexer.FORMULANAME = 19;
FormulaTSLexer.STRING = 20;
FormulaTSLexer.RefSheet = 21;
FormulaTSLexer.CELLLoc = 22;
FormulaTSLexer.CELLNum = 23;
FormulaTSLexer.SheetName = 24;
FormulaTSLexer.WS = 25;
FormulaTSLexer.CONSTVAR = 26;

FormulaTSLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FormulaTSLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FormulaTSLexer.prototype.literalNames = [ null, "'('", "')'", "'IF'", "'\u5982\u679C'", 
                                          "'RefTemplate'", "'\u6A21\u677F\u516C\u5F0F'", 
                                          "','", "'*'", "'/'", "'+'", "'-'", 
                                          "'>'", "'>='", "'<'", "'<='", 
                                          "'=='", "'!='" ];

FormulaTSLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                           null, null, null, "OPERATE_multiply", 
                                           "OPERATE_DIVIDE", "OPERATE_PLUS", 
                                           "OPERATE_MINUS", "OPERATE_GREATE", 
                                           "OPERATE_GREATE_EQ", "OPERATE_LESS", 
                                           "OPERATE_LESS_EQ", "OPERATE_EQ", 
                                           "OPERATE_NEQ", "NUMBER", "FORMULANAME", 
                                           "STRING", "RefSheet", "CELLLoc", 
                                           "CELLNum", "SheetName", "WS", 
                                           "CONSTVAR" ];

FormulaTSLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                       "T__5", "T__6", "OPERATE_multiply", 
                                       "OPERATE_DIVIDE", "OPERATE_PLUS", 
                                       "OPERATE_MINUS", "OPERATE_GREATE", 
                                       "OPERATE_GREATE_EQ", "OPERATE_LESS", 
                                       "OPERATE_LESS_EQ", "OPERATE_EQ", 
                                       "OPERATE_NEQ", "NUMBER", "FORMULANAME", 
                                       "STRING", "RefSheet", "CELLLoc", 
                                       "CELLNum", "SheetName", "WS", "CONSTVAR" ];

FormulaTSLexer.prototype.grammarFileName = "FormulaTS.g4";


exports.FormulaTSLexer = FormulaTSLexer;

