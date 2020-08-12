// Generated from /Users/dong/yzfworkbench/formula-compile/java/FormulaTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FormulaTSListener = require('./FormulaTSListener').FormulaTSListener;
var FormulaTSVisitor = require('./FormulaTSVisitor').FormulaTSVisitor;

var grammarFileName = "FormulaTS.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\"\u00aa\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0003\u0002\u0006\u0002*\n\u0002\r\u0002\u000e\u0002+\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00033\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00048\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0005\u0005>\n\u0005\u0007\u0005",
    "@\n\u0005\f\u0005\u000e\u0005C\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006I\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007U\n\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007c\n\u0007\f\u0007",
    "\u000e\u0007f\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bl\n",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\tv\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0005\n}\n\n\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u0084\n\u000b",
    "\f\u000b\u000e\u000b\u0087\u000b\u000b\u0003\u000b\u0003\u000b\u0007",
    "\u000b\u008b\n\u000b\f\u000b\u000e\u000b\u008e\u000b\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0005\u000e",
    "\u0097\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0005\u0010\u009e\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0002\u0003\f\u0015\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0002\u000b",
    "\u0003\u0002\u0019\u001a\u0003\u0002\u000f\u0010\u0003\u0002\u0011\u0012",
    "\u0003\u0002\u0013\u0018\u0003\u0002\u0005\u0006\u0003\u0002\u0007\b",
    "\u0003\u0002\t\n\u0003\u0002\u000b\f\u0003\u0002\r\u000e\u0002\u00b7",
    "\u0002)\u0003\u0002\u0002\u0002\u00042\u0003\u0002\u0002\u0002\u0006",
    "4\u0003\u0002\u0002\u0002\bA\u0003\u0002\u0002\u0002\nH\u0003\u0002",
    "\u0002\u0002\fT\u0003\u0002\u0002\u0002\u000eg\u0003\u0002\u0002\u0002",
    "\u0010o\u0003\u0002\u0002\u0002\u0012y\u0003\u0002\u0002\u0002\u0014",
    "\u0080\u0003\u0002\u0002\u0002\u0016\u0091\u0003\u0002\u0002\u0002\u0018",
    "\u0093\u0003\u0002\u0002\u0002\u001a\u0096\u0003\u0002\u0002\u0002\u001c",
    "\u009a\u0003\u0002\u0002\u0002\u001e\u009d\u0003\u0002\u0002\u0002 ",
    "\u00a1\u0003\u0002\u0002\u0002\"\u00a3\u0003\u0002\u0002\u0002$\u00a5",
    "\u0003\u0002\u0002\u0002&\u00a7\u0003\u0002\u0002\u0002(*\u0005\u0004",
    "\u0003\u0002)(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+)\u0003",
    "\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,\u0003\u0003\u0002\u0002",
    "\u0002-3\u0005\u0010\t\u0002.3\u0005\u0012\n\u0002/3\u0005\u0014\u000b",
    "\u000203\u0005\u0006\u0004\u000213\u0005\f\u0007\u00022-\u0003\u0002",
    "\u0002\u00022.\u0003\u0002\u0002\u00022/\u0003\u0002\u0002\u000220\u0003",
    "\u0002\u0002\u000221\u0003\u0002\u0002\u00023\u0005\u0003\u0002\u0002",
    "\u000245\u0005\u0016\f\u000257\u0005\"\u0012\u000268\u0005\b\u0005\u0002",
    "76\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029:\u0005$\u0013\u0002:\u0007\u0003\u0002\u0002\u0002;=\u0005\n",
    "\u0006\u0002<>\u0005&\u0014\u0002=<\u0003\u0002\u0002\u0002=>\u0003",
    "\u0002\u0002\u0002>@\u0003\u0002\u0002\u0002?;\u0003\u0002\u0002\u0002",
    "@C\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002",
    "\u0002B\t\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002DI\u0005",
    "\u0018\r\u0002EI\u0005\u001a\u000e\u0002FI\u0005\u001c\u000f\u0002G",
    "I\u0005\f\u0007\u0002HD\u0003\u0002\u0002\u0002HE\u0003\u0002\u0002",
    "\u0002HF\u0003\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002I\u000b\u0003",
    "\u0002\u0002\u0002JK\b\u0007\u0001\u0002KU\u0005\u000e\b\u0002LU\u0005",
    "\u0012\n\u0002MU\u0005\u0014\u000b\u0002NU\u0005\u0006\u0004\u0002O",
    "U\u0005\u0018\r\u0002PU\u0005\u001a\u000e\u0002QU\u0005\u001e\u0010",
    "\u0002RU\u0005 \u0011\u0002SU\u0005\u001c\u000f\u0002TJ\u0003\u0002",
    "\u0002\u0002TL\u0003\u0002\u0002\u0002TM\u0003\u0002\u0002\u0002TN\u0003",
    "\u0002\u0002\u0002TO\u0003\u0002\u0002\u0002TP\u0003\u0002\u0002\u0002",
    "TQ\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TS\u0003\u0002\u0002",
    "\u0002Ud\u0003\u0002\u0002\u0002VW\f\u000f\u0002\u0002WX\t\u0002\u0002",
    "\u0002Xc\u0005\f\u0007\u0010YZ\f\u000e\u0002\u0002Z[\t\u0003\u0002\u0002",
    "[c\u0005\f\u0007\u000f\\]\f\r\u0002\u0002]^\t\u0004\u0002\u0002^c\u0005",
    "\f\u0007\u000e_`\f\f\u0002\u0002`a\t\u0005\u0002\u0002ac\u0005\f\u0007",
    "\rbV\u0003\u0002\u0002\u0002bY\u0003\u0002\u0002\u0002b\\\u0003\u0002",
    "\u0002\u0002b_\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002db\u0003",
    "\u0002\u0002\u0002de\u0003\u0002\u0002\u0002e\r\u0003\u0002\u0002\u0002",
    "fd\u0003\u0002\u0002\u0002gk\u0005\"\u0012\u0002hl\u0005\f\u0007\u0002",
    "il\u0005\u001a\u000e\u0002jl\u0005\u0018\r\u0002kh\u0003\u0002\u0002",
    "\u0002ki\u0003\u0002\u0002\u0002kj\u0003\u0002\u0002\u0002lm\u0003\u0002",
    "\u0002\u0002mn\u0005$\u0013\u0002n\u000f\u0003\u0002\u0002\u0002op\u0007",
    "\"\u0002\u0002pu\u0007\u0003\u0002\u0002qv\u0005\u0012\n\u0002rv\u0005",
    "\u0014\u000b\u0002sv\u0005\u0006\u0004\u0002tv\u0005\f\u0007\u0002u",
    "q\u0003\u0002\u0002\u0002ur\u0003\u0002\u0002\u0002us\u0003\u0002\u0002",
    "\u0002ut\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0007\u0004",
    "\u0002\u0002x\u0011\u0003\u0002\u0002\u0002yz\t\u0006\u0002\u0002z|",
    "\u0005\"\u0012\u0002{}\u0005\b\u0005\u0002|{\u0003\u0002\u0002\u0002",
    "|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u007f\u0005$\u0013",
    "\u0002\u007f\u0013\u0003\u0002\u0002\u0002\u0080\u0081\t\u0007\u0002",
    "\u0002\u0081\u0085\u0005\"\u0012\u0002\u0082\u0084\u000b\u0002\u0002",
    "\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u0087\u0003\u0002\u0002",
    "\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002",
    "\u0002\u0086\u0088\u0003\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002",
    "\u0002\u0088\u008c\u0005&\u0014\u0002\u0089\u008b\u000b\u0002\u0002",
    "\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008b\u008e\u0003\u0002\u0002",
    "\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002",
    "\u0002\u008d\u008f\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0005$\u0013\u0002\u0090\u0015\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0007\u001c\u0002\u0002\u0092\u0017\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0007\"\u0002\u0002\u0094\u0019\u0003\u0002\u0002",
    "\u0002\u0095\u0097\t\u0004\u0002\u0002\u0096\u0095\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0007\u001b\u0002\u0002\u0099\u001b\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0007\u001d\u0002\u0002\u009b\u001d\u0003\u0002\u0002",
    "\u0002\u009c\u009e\u0007\u001e\u0002\u0002\u009d\u009c\u0003\u0002\u0002",
    "\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0007\u001f\u0002\u0002\u00a0\u001f\u0003\u0002\u0002",
    "\u0002\u00a1\u00a2\u0007 \u0002\u0002\u00a2!\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\t\b\u0002\u0002\u00a4#\u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\t\t\u0002\u0002\u00a6%\u0003\u0002\u0002\u0002\u00a7\u00a8\t\n\u0002",
    "\u0002\u00a8\'\u0003\u0002\u0002\u0002\u0012+27=AHTbdku|\u0085\u008c",
    "\u0096\u009d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "';'", "'IF'", "'\u5982\u679C'", "'RefTemplate'", 
                     "'\u6A21\u677F\u516C\u5F0F'", "'('", "'\uFF08'", "')'", 
                     "'\uFF09'", "','", "'\uFF0C'", "'*'", "'/'", null, 
                     null, "'>'", "'>='", "'<'", "'<='", "'=='", "'!='", 
                     "'&&'", "'||'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "OPERATE_multiply", "OPERATE_DIVIDE", 
                      "OPERATE_PLUS", "OPERATE_MINUS", "OPERATE_GREATE", 
                      "OPERATE_GREATE_EQ", "OPERATE_LESS", "OPERATE_LESS_EQ", 
                      "OPERATE_EQ", "OPERATE_NEQ", "OPERATE_AND", "OPERATE_OR", 
                      "NUMBER", "FORMULANAME", "STRING", "RefSheet", "CELLLoc", 
                      "CELLTPLLoc", "WS", "CONSTVAR" ];

var ruleNames =  [ "formula", "formulaUnit", "formulaFunction", "formulaParams", 
                   "formulaParam", "formulaExpress", "formulaBracketExpress", 
                   "formulaVarDeclareStatement", "formulaIfFunction", "formulaRefTemplateFunction", 
                   "formulaFunctionName", "formulaParamConst", "formulaParamNum", 
                   "formulaParamString", "formulaCELLLoc", "formulaCELLTPLLoc", 
                   "skipFuncLBracket", "skipFuncRBracket", "skipParamComma" ];

function FormulaTSParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FormulaTSParser.prototype = Object.create(antlr4.Parser.prototype);
FormulaTSParser.prototype.constructor = FormulaTSParser;

Object.defineProperty(FormulaTSParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FormulaTSParser.EOF = antlr4.Token.EOF;
FormulaTSParser.T__0 = 1;
FormulaTSParser.T__1 = 2;
FormulaTSParser.T__2 = 3;
FormulaTSParser.T__3 = 4;
FormulaTSParser.T__4 = 5;
FormulaTSParser.T__5 = 6;
FormulaTSParser.T__6 = 7;
FormulaTSParser.T__7 = 8;
FormulaTSParser.T__8 = 9;
FormulaTSParser.T__9 = 10;
FormulaTSParser.T__10 = 11;
FormulaTSParser.T__11 = 12;
FormulaTSParser.OPERATE_multiply = 13;
FormulaTSParser.OPERATE_DIVIDE = 14;
FormulaTSParser.OPERATE_PLUS = 15;
FormulaTSParser.OPERATE_MINUS = 16;
FormulaTSParser.OPERATE_GREATE = 17;
FormulaTSParser.OPERATE_GREATE_EQ = 18;
FormulaTSParser.OPERATE_LESS = 19;
FormulaTSParser.OPERATE_LESS_EQ = 20;
FormulaTSParser.OPERATE_EQ = 21;
FormulaTSParser.OPERATE_NEQ = 22;
FormulaTSParser.OPERATE_AND = 23;
FormulaTSParser.OPERATE_OR = 24;
FormulaTSParser.NUMBER = 25;
FormulaTSParser.FORMULANAME = 26;
FormulaTSParser.STRING = 27;
FormulaTSParser.RefSheet = 28;
FormulaTSParser.CELLLoc = 29;
FormulaTSParser.CELLTPLLoc = 30;
FormulaTSParser.WS = 31;
FormulaTSParser.CONSTVAR = 32;

FormulaTSParser.RULE_formula = 0;
FormulaTSParser.RULE_formulaUnit = 1;
FormulaTSParser.RULE_formulaFunction = 2;
FormulaTSParser.RULE_formulaParams = 3;
FormulaTSParser.RULE_formulaParam = 4;
FormulaTSParser.RULE_formulaExpress = 5;
FormulaTSParser.RULE_formulaBracketExpress = 6;
FormulaTSParser.RULE_formulaVarDeclareStatement = 7;
FormulaTSParser.RULE_formulaIfFunction = 8;
FormulaTSParser.RULE_formulaRefTemplateFunction = 9;
FormulaTSParser.RULE_formulaFunctionName = 10;
FormulaTSParser.RULE_formulaParamConst = 11;
FormulaTSParser.RULE_formulaParamNum = 12;
FormulaTSParser.RULE_formulaParamString = 13;
FormulaTSParser.RULE_formulaCELLLoc = 14;
FormulaTSParser.RULE_formulaCELLTPLLoc = 15;
FormulaTSParser.RULE_skipFuncLBracket = 16;
FormulaTSParser.RULE_skipFuncRBracket = 17;
FormulaTSParser.RULE_skipParamComma = 18;


function FormulaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formula;
    return this;
}

FormulaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaContext.prototype.constructor = FormulaContext;

FormulaContext.prototype.formulaUnit = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormulaUnitContext);
    } else {
        return this.getTypedRuleContext(FormulaUnitContext,i);
    }
};

FormulaContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormula(this);
	}
};

FormulaContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormula(this);
	}
};

FormulaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormula(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaContext = FormulaContext;

FormulaTSParser.prototype.formula = function() {

    var localctx = new FormulaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FormulaTSParser.RULE_formula);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 38;
            this.formulaUnit();
            this.state = 41; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (FormulaTSParser.T__2 - 3)) | (1 << (FormulaTSParser.T__3 - 3)) | (1 << (FormulaTSParser.T__4 - 3)) | (1 << (FormulaTSParser.T__5 - 3)) | (1 << (FormulaTSParser.T__6 - 3)) | (1 << (FormulaTSParser.T__7 - 3)) | (1 << (FormulaTSParser.OPERATE_PLUS - 3)) | (1 << (FormulaTSParser.OPERATE_MINUS - 3)) | (1 << (FormulaTSParser.NUMBER - 3)) | (1 << (FormulaTSParser.FORMULANAME - 3)) | (1 << (FormulaTSParser.STRING - 3)) | (1 << (FormulaTSParser.RefSheet - 3)) | (1 << (FormulaTSParser.CELLLoc - 3)) | (1 << (FormulaTSParser.CELLTPLLoc - 3)) | (1 << (FormulaTSParser.CONSTVAR - 3)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaUnit;
    return this;
}

FormulaUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaUnitContext.prototype.constructor = FormulaUnitContext;

FormulaUnitContext.prototype.formulaVarDeclareStatement = function() {
    return this.getTypedRuleContext(FormulaVarDeclareStatementContext,0);
};

FormulaUnitContext.prototype.formulaIfFunction = function() {
    return this.getTypedRuleContext(FormulaIfFunctionContext,0);
};

FormulaUnitContext.prototype.formulaRefTemplateFunction = function() {
    return this.getTypedRuleContext(FormulaRefTemplateFunctionContext,0);
};

FormulaUnitContext.prototype.formulaFunction = function() {
    return this.getTypedRuleContext(FormulaFunctionContext,0);
};

FormulaUnitContext.prototype.formulaExpress = function() {
    return this.getTypedRuleContext(FormulaExpressContext,0);
};

FormulaUnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaUnit(this);
	}
};

FormulaUnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaUnit(this);
	}
};

FormulaUnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaUnitContext = FormulaUnitContext;

FormulaTSParser.prototype.formulaUnit = function() {

    var localctx = new FormulaUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FormulaTSParser.RULE_formulaUnit);
    try {
        this.state = 48;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 43;
            this.formulaVarDeclareStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 44;
            this.formulaIfFunction();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 45;
            this.formulaRefTemplateFunction();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 46;
            this.formulaFunction();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 47;
            this.formulaExpress(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaFunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaFunction;
    return this;
}

FormulaFunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaFunctionContext.prototype.constructor = FormulaFunctionContext;

FormulaFunctionContext.prototype.formulaFunctionName = function() {
    return this.getTypedRuleContext(FormulaFunctionNameContext,0);
};

FormulaFunctionContext.prototype.skipFuncLBracket = function() {
    return this.getTypedRuleContext(SkipFuncLBracketContext,0);
};

FormulaFunctionContext.prototype.skipFuncRBracket = function() {
    return this.getTypedRuleContext(SkipFuncRBracketContext,0);
};

FormulaFunctionContext.prototype.formulaParams = function() {
    return this.getTypedRuleContext(FormulaParamsContext,0);
};

FormulaFunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaFunction(this);
	}
};

FormulaFunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaFunction(this);
	}
};

FormulaFunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaFunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaFunctionContext = FormulaFunctionContext;

FormulaTSParser.prototype.formulaFunction = function() {

    var localctx = new FormulaFunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FormulaTSParser.RULE_formulaFunction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.formulaFunctionName();
        this.state = 51;
        this.skipFuncLBracket();
        this.state = 53;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 52;
            this.formulaParams();

        }
        this.state = 55;
        this.skipFuncRBracket();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaParams;
    return this;
}

FormulaParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaParamsContext.prototype.constructor = FormulaParamsContext;

FormulaParamsContext.prototype.formulaParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormulaParamContext);
    } else {
        return this.getTypedRuleContext(FormulaParamContext,i);
    }
};

FormulaParamsContext.prototype.skipParamComma = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SkipParamCommaContext);
    } else {
        return this.getTypedRuleContext(SkipParamCommaContext,i);
    }
};

FormulaParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaParams(this);
	}
};

FormulaParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaParams(this);
	}
};

FormulaParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaParamsContext = FormulaParamsContext;

FormulaTSParser.prototype.formulaParams = function() {

    var localctx = new FormulaParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FormulaTSParser.RULE_formulaParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (FormulaTSParser.T__2 - 3)) | (1 << (FormulaTSParser.T__3 - 3)) | (1 << (FormulaTSParser.T__4 - 3)) | (1 << (FormulaTSParser.T__5 - 3)) | (1 << (FormulaTSParser.T__6 - 3)) | (1 << (FormulaTSParser.T__7 - 3)) | (1 << (FormulaTSParser.OPERATE_PLUS - 3)) | (1 << (FormulaTSParser.OPERATE_MINUS - 3)) | (1 << (FormulaTSParser.NUMBER - 3)) | (1 << (FormulaTSParser.FORMULANAME - 3)) | (1 << (FormulaTSParser.STRING - 3)) | (1 << (FormulaTSParser.RefSheet - 3)) | (1 << (FormulaTSParser.CELLLoc - 3)) | (1 << (FormulaTSParser.CELLTPLLoc - 3)) | (1 << (FormulaTSParser.CONSTVAR - 3)))) !== 0)) {
            this.state = 57;
            this.formulaParam();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===FormulaTSParser.T__10 || _la===FormulaTSParser.T__11) {
                this.state = 58;
                this.skipParamComma();
            }

            this.state = 65;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaParam;
    return this;
}

FormulaParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaParamContext.prototype.constructor = FormulaParamContext;

FormulaParamContext.prototype.formulaParamConst = function() {
    return this.getTypedRuleContext(FormulaParamConstContext,0);
};

FormulaParamContext.prototype.formulaParamNum = function() {
    return this.getTypedRuleContext(FormulaParamNumContext,0);
};

FormulaParamContext.prototype.formulaParamString = function() {
    return this.getTypedRuleContext(FormulaParamStringContext,0);
};

FormulaParamContext.prototype.formulaExpress = function() {
    return this.getTypedRuleContext(FormulaExpressContext,0);
};

FormulaParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaParam(this);
	}
};

FormulaParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaParam(this);
	}
};

FormulaParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaParamContext = FormulaParamContext;

FormulaTSParser.prototype.formulaParam = function() {

    var localctx = new FormulaParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FormulaTSParser.RULE_formulaParam);
    try {
        this.state = 70;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 66;
            this.formulaParamConst();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
            this.formulaParamNum();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 68;
            this.formulaParamString();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 69;
            this.formulaExpress(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaExpressContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaExpress;
    this.op = null; // Token
    return this;
}

FormulaExpressContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaExpressContext.prototype.constructor = FormulaExpressContext;

FormulaExpressContext.prototype.formulaBracketExpress = function() {
    return this.getTypedRuleContext(FormulaBracketExpressContext,0);
};

FormulaExpressContext.prototype.formulaIfFunction = function() {
    return this.getTypedRuleContext(FormulaIfFunctionContext,0);
};

FormulaExpressContext.prototype.formulaRefTemplateFunction = function() {
    return this.getTypedRuleContext(FormulaRefTemplateFunctionContext,0);
};

FormulaExpressContext.prototype.formulaFunction = function() {
    return this.getTypedRuleContext(FormulaFunctionContext,0);
};

FormulaExpressContext.prototype.formulaParamConst = function() {
    return this.getTypedRuleContext(FormulaParamConstContext,0);
};

FormulaExpressContext.prototype.formulaParamNum = function() {
    return this.getTypedRuleContext(FormulaParamNumContext,0);
};

FormulaExpressContext.prototype.formulaCELLLoc = function() {
    return this.getTypedRuleContext(FormulaCELLLocContext,0);
};

FormulaExpressContext.prototype.formulaCELLTPLLoc = function() {
    return this.getTypedRuleContext(FormulaCELLTPLLocContext,0);
};

FormulaExpressContext.prototype.formulaParamString = function() {
    return this.getTypedRuleContext(FormulaParamStringContext,0);
};

FormulaExpressContext.prototype.formulaExpress = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormulaExpressContext);
    } else {
        return this.getTypedRuleContext(FormulaExpressContext,i);
    }
};

FormulaExpressContext.prototype.OPERATE_OR = function() {
    return this.getToken(FormulaTSParser.OPERATE_OR, 0);
};

FormulaExpressContext.prototype.OPERATE_AND = function() {
    return this.getToken(FormulaTSParser.OPERATE_AND, 0);
};

FormulaExpressContext.prototype.OPERATE_multiply = function() {
    return this.getToken(FormulaTSParser.OPERATE_multiply, 0);
};

FormulaExpressContext.prototype.OPERATE_DIVIDE = function() {
    return this.getToken(FormulaTSParser.OPERATE_DIVIDE, 0);
};

FormulaExpressContext.prototype.OPERATE_PLUS = function() {
    return this.getToken(FormulaTSParser.OPERATE_PLUS, 0);
};

FormulaExpressContext.prototype.OPERATE_MINUS = function() {
    return this.getToken(FormulaTSParser.OPERATE_MINUS, 0);
};

FormulaExpressContext.prototype.OPERATE_GREATE = function() {
    return this.getToken(FormulaTSParser.OPERATE_GREATE, 0);
};

FormulaExpressContext.prototype.OPERATE_GREATE_EQ = function() {
    return this.getToken(FormulaTSParser.OPERATE_GREATE_EQ, 0);
};

FormulaExpressContext.prototype.OPERATE_LESS = function() {
    return this.getToken(FormulaTSParser.OPERATE_LESS, 0);
};

FormulaExpressContext.prototype.OPERATE_LESS_EQ = function() {
    return this.getToken(FormulaTSParser.OPERATE_LESS_EQ, 0);
};

FormulaExpressContext.prototype.OPERATE_EQ = function() {
    return this.getToken(FormulaTSParser.OPERATE_EQ, 0);
};

FormulaExpressContext.prototype.OPERATE_NEQ = function() {
    return this.getToken(FormulaTSParser.OPERATE_NEQ, 0);
};

FormulaExpressContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaExpress(this);
	}
};

FormulaExpressContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaExpress(this);
	}
};

FormulaExpressContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaExpress(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FormulaTSParser.prototype.formulaExpress = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new FormulaExpressContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, FormulaTSParser.RULE_formulaExpress, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaTSParser.T__6:
        case FormulaTSParser.T__7:
            this.state = 73;
            this.formulaBracketExpress();
            break;
        case FormulaTSParser.T__2:
        case FormulaTSParser.T__3:
            this.state = 74;
            this.formulaIfFunction();
            break;
        case FormulaTSParser.T__4:
        case FormulaTSParser.T__5:
            this.state = 75;
            this.formulaRefTemplateFunction();
            break;
        case FormulaTSParser.FORMULANAME:
            this.state = 76;
            this.formulaFunction();
            break;
        case FormulaTSParser.CONSTVAR:
            this.state = 77;
            this.formulaParamConst();
            break;
        case FormulaTSParser.OPERATE_PLUS:
        case FormulaTSParser.OPERATE_MINUS:
        case FormulaTSParser.NUMBER:
            this.state = 78;
            this.formulaParamNum();
            break;
        case FormulaTSParser.RefSheet:
        case FormulaTSParser.CELLLoc:
            this.state = 79;
            this.formulaCELLLoc();
            break;
        case FormulaTSParser.CELLTPLLoc:
            this.state = 80;
            this.formulaCELLTPLLoc();
            break;
        case FormulaTSParser.STRING:
            this.state = 81;
            this.formulaParamString();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 98;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 96;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 84;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 85;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===FormulaTSParser.OPERATE_AND || _la===FormulaTSParser.OPERATE_OR)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 86;
                    this.formulaExpress(14);
                    break;

                case 2:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 87;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 88;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===FormulaTSParser.OPERATE_multiply || _la===FormulaTSParser.OPERATE_DIVIDE)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 89;
                    this.formulaExpress(13);
                    break;

                case 3:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 90;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 91;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===FormulaTSParser.OPERATE_PLUS || _la===FormulaTSParser.OPERATE_MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 92;
                    this.formulaExpress(12);
                    break;

                case 4:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 93;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 94;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaTSParser.OPERATE_GREATE) | (1 << FormulaTSParser.OPERATE_GREATE_EQ) | (1 << FormulaTSParser.OPERATE_LESS) | (1 << FormulaTSParser.OPERATE_LESS_EQ) | (1 << FormulaTSParser.OPERATE_EQ) | (1 << FormulaTSParser.OPERATE_NEQ))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 95;
                    this.formulaExpress(11);
                    break;

                } 
            }
            this.state = 100;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function FormulaBracketExpressContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaBracketExpress;
    return this;
}

FormulaBracketExpressContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaBracketExpressContext.prototype.constructor = FormulaBracketExpressContext;

FormulaBracketExpressContext.prototype.skipFuncLBracket = function() {
    return this.getTypedRuleContext(SkipFuncLBracketContext,0);
};

FormulaBracketExpressContext.prototype.skipFuncRBracket = function() {
    return this.getTypedRuleContext(SkipFuncRBracketContext,0);
};

FormulaBracketExpressContext.prototype.formulaExpress = function() {
    return this.getTypedRuleContext(FormulaExpressContext,0);
};

FormulaBracketExpressContext.prototype.formulaParamNum = function() {
    return this.getTypedRuleContext(FormulaParamNumContext,0);
};

FormulaBracketExpressContext.prototype.formulaParamConst = function() {
    return this.getTypedRuleContext(FormulaParamConstContext,0);
};

FormulaBracketExpressContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaBracketExpress(this);
	}
};

FormulaBracketExpressContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaBracketExpress(this);
	}
};

FormulaBracketExpressContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaBracketExpress(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaBracketExpressContext = FormulaBracketExpressContext;

FormulaTSParser.prototype.formulaBracketExpress = function() {

    var localctx = new FormulaBracketExpressContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FormulaTSParser.RULE_formulaBracketExpress);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.skipFuncLBracket();
        this.state = 105;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.state = 102;
            this.formulaExpress(0);
            break;

        case 2:
            this.state = 103;
            this.formulaParamNum();
            break;

        case 3:
            this.state = 104;
            this.formulaParamConst();
            break;

        }
        this.state = 107;
        this.skipFuncRBracket();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaVarDeclareStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaVarDeclareStatement;
    return this;
}

FormulaVarDeclareStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaVarDeclareStatementContext.prototype.constructor = FormulaVarDeclareStatementContext;

FormulaVarDeclareStatementContext.prototype.CONSTVAR = function() {
    return this.getToken(FormulaTSParser.CONSTVAR, 0);
};

FormulaVarDeclareStatementContext.prototype.formulaIfFunction = function() {
    return this.getTypedRuleContext(FormulaIfFunctionContext,0);
};

FormulaVarDeclareStatementContext.prototype.formulaRefTemplateFunction = function() {
    return this.getTypedRuleContext(FormulaRefTemplateFunctionContext,0);
};

FormulaVarDeclareStatementContext.prototype.formulaFunction = function() {
    return this.getTypedRuleContext(FormulaFunctionContext,0);
};

FormulaVarDeclareStatementContext.prototype.formulaExpress = function() {
    return this.getTypedRuleContext(FormulaExpressContext,0);
};

FormulaVarDeclareStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaVarDeclareStatement(this);
	}
};

FormulaVarDeclareStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaVarDeclareStatement(this);
	}
};

FormulaVarDeclareStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaVarDeclareStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaVarDeclareStatementContext = FormulaVarDeclareStatementContext;

FormulaTSParser.prototype.formulaVarDeclareStatement = function() {

    var localctx = new FormulaVarDeclareStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FormulaTSParser.RULE_formulaVarDeclareStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(FormulaTSParser.CONSTVAR);
        this.state = 110;
        this.match(FormulaTSParser.T__0);
        this.state = 115;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.state = 111;
            this.formulaIfFunction();
            break;

        case 2:
            this.state = 112;
            this.formulaRefTemplateFunction();
            break;

        case 3:
            this.state = 113;
            this.formulaFunction();
            break;

        case 4:
            this.state = 114;
            this.formulaExpress(0);
            break;

        }
        this.state = 117;
        this.match(FormulaTSParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaIfFunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaIfFunction;
    return this;
}

FormulaIfFunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaIfFunctionContext.prototype.constructor = FormulaIfFunctionContext;

FormulaIfFunctionContext.prototype.skipFuncLBracket = function() {
    return this.getTypedRuleContext(SkipFuncLBracketContext,0);
};

FormulaIfFunctionContext.prototype.skipFuncRBracket = function() {
    return this.getTypedRuleContext(SkipFuncRBracketContext,0);
};

FormulaIfFunctionContext.prototype.formulaParams = function() {
    return this.getTypedRuleContext(FormulaParamsContext,0);
};

FormulaIfFunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaIfFunction(this);
	}
};

FormulaIfFunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaIfFunction(this);
	}
};

FormulaIfFunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaIfFunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaIfFunctionContext = FormulaIfFunctionContext;

FormulaTSParser.prototype.formulaIfFunction = function() {

    var localctx = new FormulaIfFunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FormulaTSParser.RULE_formulaIfFunction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__2 || _la===FormulaTSParser.T__3)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 120;
        this.skipFuncLBracket();
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        if(la_===1) {
            this.state = 121;
            this.formulaParams();

        }
        this.state = 124;
        this.skipFuncRBracket();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaRefTemplateFunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaRefTemplateFunction;
    return this;
}

FormulaRefTemplateFunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaRefTemplateFunctionContext.prototype.constructor = FormulaRefTemplateFunctionContext;

FormulaRefTemplateFunctionContext.prototype.skipFuncLBracket = function() {
    return this.getTypedRuleContext(SkipFuncLBracketContext,0);
};

FormulaRefTemplateFunctionContext.prototype.skipParamComma = function() {
    return this.getTypedRuleContext(SkipParamCommaContext,0);
};

FormulaRefTemplateFunctionContext.prototype.skipFuncRBracket = function() {
    return this.getTypedRuleContext(SkipFuncRBracketContext,0);
};

FormulaRefTemplateFunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaRefTemplateFunction(this);
	}
};

FormulaRefTemplateFunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaRefTemplateFunction(this);
	}
};

FormulaRefTemplateFunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaRefTemplateFunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaRefTemplateFunctionContext = FormulaRefTemplateFunctionContext;

FormulaTSParser.prototype.formulaRefTemplateFunction = function() {

    var localctx = new FormulaRefTemplateFunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FormulaTSParser.RULE_formulaRefTemplateFunction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__4 || _la===FormulaTSParser.T__5)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 127;
        this.skipFuncLBracket();

        this.state = 131;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 128;
                this.matchWildcard(); 
            }
            this.state = 133;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

        this.state = 134;
        this.skipParamComma();

        this.state = 138;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 135;
                this.matchWildcard(); 
            }
            this.state = 140;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

        this.state = 141;
        this.skipFuncRBracket();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaFunctionNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaFunctionName;
    return this;
}

FormulaFunctionNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaFunctionNameContext.prototype.constructor = FormulaFunctionNameContext;

FormulaFunctionNameContext.prototype.FORMULANAME = function() {
    return this.getToken(FormulaTSParser.FORMULANAME, 0);
};

FormulaFunctionNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaFunctionName(this);
	}
};

FormulaFunctionNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaFunctionName(this);
	}
};

FormulaFunctionNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaFunctionName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaFunctionNameContext = FormulaFunctionNameContext;

FormulaTSParser.prototype.formulaFunctionName = function() {

    var localctx = new FormulaFunctionNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FormulaTSParser.RULE_formulaFunctionName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(FormulaTSParser.FORMULANAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaParamConstContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaParamConst;
    return this;
}

FormulaParamConstContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaParamConstContext.prototype.constructor = FormulaParamConstContext;

FormulaParamConstContext.prototype.CONSTVAR = function() {
    return this.getToken(FormulaTSParser.CONSTVAR, 0);
};

FormulaParamConstContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaParamConst(this);
	}
};

FormulaParamConstContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaParamConst(this);
	}
};

FormulaParamConstContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaParamConst(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaParamConstContext = FormulaParamConstContext;

FormulaTSParser.prototype.formulaParamConst = function() {

    var localctx = new FormulaParamConstContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FormulaTSParser.RULE_formulaParamConst);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(FormulaTSParser.CONSTVAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaParamNumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaParamNum;
    this.sign = null; // Token
    return this;
}

FormulaParamNumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaParamNumContext.prototype.constructor = FormulaParamNumContext;

FormulaParamNumContext.prototype.NUMBER = function() {
    return this.getToken(FormulaTSParser.NUMBER, 0);
};

FormulaParamNumContext.prototype.OPERATE_PLUS = function() {
    return this.getToken(FormulaTSParser.OPERATE_PLUS, 0);
};

FormulaParamNumContext.prototype.OPERATE_MINUS = function() {
    return this.getToken(FormulaTSParser.OPERATE_MINUS, 0);
};

FormulaParamNumContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaParamNum(this);
	}
};

FormulaParamNumContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaParamNum(this);
	}
};

FormulaParamNumContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaParamNum(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaParamNumContext = FormulaParamNumContext;

FormulaTSParser.prototype.formulaParamNum = function() {

    var localctx = new FormulaParamNumContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FormulaTSParser.RULE_formulaParamNum);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FormulaTSParser.OPERATE_PLUS || _la===FormulaTSParser.OPERATE_MINUS) {
            this.state = 147;
            localctx.sign = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===FormulaTSParser.OPERATE_PLUS || _la===FormulaTSParser.OPERATE_MINUS)) {
                localctx.sign = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 150;
        this.match(FormulaTSParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaParamStringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaParamString;
    return this;
}

FormulaParamStringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaParamStringContext.prototype.constructor = FormulaParamStringContext;

FormulaParamStringContext.prototype.STRING = function() {
    return this.getToken(FormulaTSParser.STRING, 0);
};

FormulaParamStringContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaParamString(this);
	}
};

FormulaParamStringContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaParamString(this);
	}
};

FormulaParamStringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaParamString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaParamStringContext = FormulaParamStringContext;

FormulaTSParser.prototype.formulaParamString = function() {

    var localctx = new FormulaParamStringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FormulaTSParser.RULE_formulaParamString);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(FormulaTSParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaCELLLocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaCELLLoc;
    return this;
}

FormulaCELLLocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaCELLLocContext.prototype.constructor = FormulaCELLLocContext;

FormulaCELLLocContext.prototype.CELLLoc = function() {
    return this.getToken(FormulaTSParser.CELLLoc, 0);
};

FormulaCELLLocContext.prototype.RefSheet = function() {
    return this.getToken(FormulaTSParser.RefSheet, 0);
};

FormulaCELLLocContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaCELLLoc(this);
	}
};

FormulaCELLLocContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaCELLLoc(this);
	}
};

FormulaCELLLocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaCELLLoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaCELLLocContext = FormulaCELLLocContext;

FormulaTSParser.prototype.formulaCELLLoc = function() {

    var localctx = new FormulaCELLLocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FormulaTSParser.RULE_formulaCELLLoc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FormulaTSParser.RefSheet) {
            this.state = 154;
            this.match(FormulaTSParser.RefSheet);
        }

        this.state = 157;
        this.match(FormulaTSParser.CELLLoc);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormulaCELLTPLLocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaCELLTPLLoc;
    return this;
}

FormulaCELLTPLLocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaCELLTPLLocContext.prototype.constructor = FormulaCELLTPLLocContext;

FormulaCELLTPLLocContext.prototype.CELLTPLLoc = function() {
    return this.getToken(FormulaTSParser.CELLTPLLoc, 0);
};

FormulaCELLTPLLocContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaCELLTPLLoc(this);
	}
};

FormulaCELLTPLLocContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaCELLTPLLoc(this);
	}
};

FormulaCELLTPLLocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaCELLTPLLoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaCELLTPLLocContext = FormulaCELLTPLLocContext;

FormulaTSParser.prototype.formulaCELLTPLLoc = function() {

    var localctx = new FormulaCELLTPLLocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FormulaTSParser.RULE_formulaCELLTPLLoc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(FormulaTSParser.CELLTPLLoc);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SkipFuncLBracketContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_skipFuncLBracket;
    return this;
}

SkipFuncLBracketContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SkipFuncLBracketContext.prototype.constructor = SkipFuncLBracketContext;


SkipFuncLBracketContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterSkipFuncLBracket(this);
	}
};

SkipFuncLBracketContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitSkipFuncLBracket(this);
	}
};

SkipFuncLBracketContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitSkipFuncLBracket(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.SkipFuncLBracketContext = SkipFuncLBracketContext;

FormulaTSParser.prototype.skipFuncLBracket = function() {

    var localctx = new SkipFuncLBracketContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FormulaTSParser.RULE_skipFuncLBracket);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__6 || _la===FormulaTSParser.T__7)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SkipFuncRBracketContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_skipFuncRBracket;
    return this;
}

SkipFuncRBracketContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SkipFuncRBracketContext.prototype.constructor = SkipFuncRBracketContext;


SkipFuncRBracketContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterSkipFuncRBracket(this);
	}
};

SkipFuncRBracketContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitSkipFuncRBracket(this);
	}
};

SkipFuncRBracketContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitSkipFuncRBracket(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.SkipFuncRBracketContext = SkipFuncRBracketContext;

FormulaTSParser.prototype.skipFuncRBracket = function() {

    var localctx = new SkipFuncRBracketContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FormulaTSParser.RULE_skipFuncRBracket);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__8 || _la===FormulaTSParser.T__9)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SkipParamCommaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_skipParamComma;
    return this;
}

SkipParamCommaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SkipParamCommaContext.prototype.constructor = SkipParamCommaContext;


SkipParamCommaContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterSkipParamComma(this);
	}
};

SkipParamCommaContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitSkipParamComma(this);
	}
};

SkipParamCommaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitSkipParamComma(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.SkipParamCommaContext = SkipParamCommaContext;

FormulaTSParser.prototype.skipParamComma = function() {

    var localctx = new SkipParamCommaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FormulaTSParser.RULE_skipParamComma);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__10 || _la===FormulaTSParser.T__11)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


FormulaTSParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 5:
			return this.formulaExpress_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FormulaTSParser.prototype.formulaExpress_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FormulaTSParser = FormulaTSParser;
