// Generated from /Users/dong/yzfworkbench/formula-compile/java/FormulaTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FormulaTSListener = require('./FormulaTSListener').FormulaTSListener;
var FormulaTSVisitor = require('./FormulaTSVisitor').FormulaTSVisitor;

var grammarFileName = "FormulaTS.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003%\u00ac\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0003\u0002\u0003\u0002\u0005\u0002+\n\u0002\u0003\u0002\u0005",
    "\u0002.\n\u0002\u0006\u00020\n\u0002\r\u0002\u000e\u00021\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u00037\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004=\n\u0004\u0007\u0004?\n\u0004\f",
    "\u0004\u000e\u0004B\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005I\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006U\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006i\n\u0006",
    "\f\u0006\u000e\u0006l\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007r\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0005\by\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007",
    "\t\u0080\n\t\f\t\u000e\t\u0083\u000b\t\u0003\t\u0003\t\u0007\t\u0087",
    "\n\t\f\t\u000e\t\u008a\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0005\r\u0097",
    "\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0005\u0010\u00a0\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0002\u0003\n\u0015\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0002",
    "\u000b\u0003\u0002\u001b\u001c\u0003\u0002\u0011\u0012\u0003\u0002\u0013",
    "\u0014\u0003\u0002\u0015\u001a\u0003\u0002\u0006\u0007\u0003\u0002\b",
    "\t\u0003\u0002\u000b\f\u0003\u0002\r\u000e\u0003\u0002\u000f\u0010\u0002",
    "\u00b6\u0002/\u0003\u0002\u0002\u0002\u00043\u0003\u0002\u0002\u0002",
    "\u0006@\u0003\u0002\u0002\u0002\bH\u0003\u0002\u0002\u0002\nT\u0003",
    "\u0002\u0002\u0002\fm\u0003\u0002\u0002\u0002\u000eu\u0003\u0002\u0002",
    "\u0002\u0010|\u0003\u0002\u0002\u0002\u0012\u008d\u0003\u0002\u0002",
    "\u0002\u0014\u0091\u0003\u0002\u0002\u0002\u0016\u0093\u0003\u0002\u0002",
    "\u0002\u0018\u0096\u0003\u0002\u0002\u0002\u001a\u009a\u0003\u0002\u0002",
    "\u0002\u001c\u009c\u0003\u0002\u0002\u0002\u001e\u009f\u0003\u0002\u0002",
    "\u0002 \u00a3\u0003\u0002\u0002\u0002\"\u00a5\u0003\u0002\u0002\u0002",
    "$\u00a7\u0003\u0002\u0002\u0002&\u00a9\u0003\u0002\u0002\u0002(+\u0005",
    "\n\u0006\u0002)+\u0005\u0012\n\u0002*(\u0003\u0002\u0002\u0002*)\u0003",
    "\u0002\u0002\u0002+-\u0003\u0002\u0002\u0002,.\u0007\u0003\u0002\u0002",
    "-,\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.0\u0003\u0002\u0002",
    "\u0002/*\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u00021/\u0003\u0002",
    "\u0002\u000212\u0003\u0002\u0002\u00022\u0003\u0003\u0002\u0002\u0002",
    "34\u0005\u0014\u000b\u000246\u0005\"\u0012\u000257\u0005\u0006\u0004",
    "\u000265\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u000278\u0003\u0002",
    "\u0002\u000289\u0005$\u0013\u00029\u0005\u0003\u0002\u0002\u0002:<\u0005",
    "\b\u0005\u0002;=\u0005&\u0014\u0002<;\u0003\u0002\u0002\u0002<=\u0003",
    "\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002>:\u0003\u0002\u0002\u0002",
    "?B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002A\u0007\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002CI\u0005",
    "\u0016\f\u0002DI\u0005\u001c\u000f\u0002EI\u0005\u0018\r\u0002FI\u0005",
    "\u001a\u000e\u0002GI\u0005\n\u0006\u0002HC\u0003\u0002\u0002\u0002H",
    "D\u0003\u0002\u0002\u0002HE\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002",
    "\u0002HG\u0003\u0002\u0002\u0002I\t\u0003\u0002\u0002\u0002JK\b\u0006",
    "\u0001\u0002KU\u0005\f\u0007\u0002LU\u0005\u000e\b\u0002MU\u0005\u0010",
    "\t\u0002NU\u0005\u0004\u0003\u0002OU\u0005\u0016\f\u0002PU\u0005\u0018",
    "\r\u0002QU\u0005\u001e\u0010\u0002RU\u0005 \u0011\u0002SU\u0005\u001a",
    "\u000e\u0002TJ\u0003\u0002\u0002\u0002TL\u0003\u0002\u0002\u0002TM\u0003",
    "\u0002\u0002\u0002TN\u0003\u0002\u0002\u0002TO\u0003\u0002\u0002\u0002",
    "TP\u0003\u0002\u0002\u0002TQ\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002",
    "\u0002TS\u0003\u0002\u0002\u0002Uj\u0003\u0002\u0002\u0002VW\f\u0010",
    "\u0002\u0002WX\t\u0002\u0002\u0002Xi\u0005\n\u0006\u0011YZ\f\u000f\u0002",
    "\u0002Z[\t\u0003\u0002\u0002[i\u0005\n\u0006\u0010\\]\f\u000e\u0002",
    "\u0002]^\t\u0004\u0002\u0002^i\u0005\n\u0006\u000f_`\f\r\u0002\u0002",
    "`a\t\u0005\u0002\u0002ai\u0005\n\u0006\u000ebc\f\u0003\u0002\u0002c",
    "d\u0007\u0004\u0002\u0002de\u0005\n\u0006\u0002ef\u0007\u0005\u0002",
    "\u0002fg\u0005\n\u0006\u0004gi\u0003\u0002\u0002\u0002hV\u0003\u0002",
    "\u0002\u0002hY\u0003\u0002\u0002\u0002h\\\u0003\u0002\u0002\u0002h_",
    "\u0003\u0002\u0002\u0002hb\u0003\u0002\u0002\u0002il\u0003\u0002\u0002",
    "\u0002jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002k\u000b\u0003",
    "\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002mq\u0005\"\u0012\u0002n",
    "r\u0005\n\u0006\u0002or\u0005\u0018\r\u0002pr\u0005\u0016\f\u0002qn",
    "\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qp\u0003\u0002\u0002",
    "\u0002rs\u0003\u0002\u0002\u0002st\u0005$\u0013\u0002t\r\u0003\u0002",
    "\u0002\u0002uv\t\u0006\u0002\u0002vx\u0005\"\u0012\u0002wy\u0005\u0006",
    "\u0004\u0002xw\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yz\u0003",
    "\u0002\u0002\u0002z{\u0005$\u0013\u0002{\u000f\u0003\u0002\u0002\u0002",
    "|}\t\u0007\u0002\u0002}\u0081\u0005\"\u0012\u0002~\u0080\u000b\u0002",
    "\u0002\u0002\u007f~\u0003\u0002\u0002\u0002\u0080\u0083\u0003\u0002",
    "\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002",
    "\u0002\u0002\u0082\u0084\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002",
    "\u0002\u0002\u0084\u0088\u0005&\u0014\u0002\u0085\u0087\u000b\u0002",
    "\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087\u008a\u0003\u0002",
    "\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002",
    "\u0002\u0002\u0089\u008b\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002",
    "\u0002\u0002\u008b\u008c\u0005$\u0013\u0002\u008c\u0011\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0007%\u0002\u0002\u008e\u008f\u0007\n\u0002",
    "\u0002\u008f\u0090\u0005\n\u0006\u0002\u0090\u0013\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0007\u001f\u0002\u0002\u0092\u0015\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0007%\u0002\u0002\u0094\u0017\u0003\u0002\u0002",
    "\u0002\u0095\u0097\t\u0004\u0002\u0002\u0096\u0095\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0007\u001e\u0002\u0002\u0099\u0019\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0007 \u0002\u0002\u009b\u001b\u0003\u0002\u0002",
    "\u0002\u009c\u009d\u0007\u001d\u0002\u0002\u009d\u001d\u0003\u0002\u0002",
    "\u0002\u009e\u00a0\u0007!\u0002\u0002\u009f\u009e\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002",
    "\u0002\u00a1\u00a2\u0007\"\u0002\u0002\u00a2\u001f\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0007#\u0002\u0002\u00a4!\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\t\b\u0002\u0002\u00a6#\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\t\t\u0002\u0002\u00a8%\u0003\u0002\u0002\u0002\u00a9\u00aa\t\n\u0002",
    "\u0002\u00aa\'\u0003\u0002\u0002\u0002\u0012*-16<@HThjqx\u0081\u0088",
    "\u0096\u009f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'?'", "':'", "'IF'", "'\u5982\u679C'", 
                     "'RefTemplate'", "'\u6A21\u677F\u516C\u5F0F'", "'='", 
                     "'('", "'\uFF08'", "')'", "'\uFF09'", "','", "'\uFF0C'", 
                     "'*'", "'/'", null, null, "'>'", "'>='", "'<'", "'<='", 
                     "'=='", "'!='", "'&&'", "'||'", "'null'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "OPERATE_multiply", 
                      "OPERATE_DIVIDE", "OPERATE_PLUS", "OPERATE_MINUS", 
                      "OPERATE_GREATE", "OPERATE_GREATE_EQ", "OPERATE_LESS", 
                      "OPERATE_LESS_EQ", "OPERATE_EQ", "OPERATE_NEQ", "OPERATE_AND", 
                      "OPERATE_OR", "NULL", "NUMBER", "FORMULANAME", "STRING", 
                      "RefSheet", "CELLLoc", "CELLTPLLoc", "WS", "CONSTVAR" ];

var ruleNames =  [ "formulaUnit", "formulaFunction", "formulaParams", "formulaParam", 
                   "formulaExpress", "formulaBracketExpress", "formulaIfFunction", 
                   "formulaRefTemplateFunction", "formulaAssignExpress", 
                   "formulaFunctionName", "formulaParamConst", "formulaParamNum", 
                   "formulaParamString", "formulaParamNull", "formulaCELLLoc", 
                   "formulaCELLTPLLoc", "skipFuncLBracket", "skipFuncRBracket", 
                   "skipParamComma" ];

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
FormulaTSParser.T__12 = 13;
FormulaTSParser.T__13 = 14;
FormulaTSParser.OPERATE_multiply = 15;
FormulaTSParser.OPERATE_DIVIDE = 16;
FormulaTSParser.OPERATE_PLUS = 17;
FormulaTSParser.OPERATE_MINUS = 18;
FormulaTSParser.OPERATE_GREATE = 19;
FormulaTSParser.OPERATE_GREATE_EQ = 20;
FormulaTSParser.OPERATE_LESS = 21;
FormulaTSParser.OPERATE_LESS_EQ = 22;
FormulaTSParser.OPERATE_EQ = 23;
FormulaTSParser.OPERATE_NEQ = 24;
FormulaTSParser.OPERATE_AND = 25;
FormulaTSParser.OPERATE_OR = 26;
FormulaTSParser.NULL = 27;
FormulaTSParser.NUMBER = 28;
FormulaTSParser.FORMULANAME = 29;
FormulaTSParser.STRING = 30;
FormulaTSParser.RefSheet = 31;
FormulaTSParser.CELLLoc = 32;
FormulaTSParser.CELLTPLLoc = 33;
FormulaTSParser.WS = 34;
FormulaTSParser.CONSTVAR = 35;

FormulaTSParser.RULE_formulaUnit = 0;
FormulaTSParser.RULE_formulaFunction = 1;
FormulaTSParser.RULE_formulaParams = 2;
FormulaTSParser.RULE_formulaParam = 3;
FormulaTSParser.RULE_formulaExpress = 4;
FormulaTSParser.RULE_formulaBracketExpress = 5;
FormulaTSParser.RULE_formulaIfFunction = 6;
FormulaTSParser.RULE_formulaRefTemplateFunction = 7;
FormulaTSParser.RULE_formulaAssignExpress = 8;
FormulaTSParser.RULE_formulaFunctionName = 9;
FormulaTSParser.RULE_formulaParamConst = 10;
FormulaTSParser.RULE_formulaParamNum = 11;
FormulaTSParser.RULE_formulaParamString = 12;
FormulaTSParser.RULE_formulaParamNull = 13;
FormulaTSParser.RULE_formulaCELLLoc = 14;
FormulaTSParser.RULE_formulaCELLTPLLoc = 15;
FormulaTSParser.RULE_skipFuncLBracket = 16;
FormulaTSParser.RULE_skipFuncRBracket = 17;
FormulaTSParser.RULE_skipParamComma = 18;


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

FormulaUnitContext.prototype.formulaExpress = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormulaExpressContext);
    } else {
        return this.getTypedRuleContext(FormulaExpressContext,i);
    }
};

FormulaUnitContext.prototype.formulaAssignExpress = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormulaAssignExpressContext);
    } else {
        return this.getTypedRuleContext(FormulaAssignExpressContext,i);
    }
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
    this.enterRule(localctx, 0, FormulaTSParser.RULE_formulaUnit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 40;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 38;
                this.formulaExpress(0);
                break;

            case 2:
                this.state = 39;
                this.formulaAssignExpress();
                break;

            }
            this.state = 43;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===FormulaTSParser.T__0) {
                this.state = 42;
                this.match(FormulaTSParser.T__0);
            }

            this.state = 47; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (FormulaTSParser.T__3 - 4)) | (1 << (FormulaTSParser.T__4 - 4)) | (1 << (FormulaTSParser.T__5 - 4)) | (1 << (FormulaTSParser.T__6 - 4)) | (1 << (FormulaTSParser.T__8 - 4)) | (1 << (FormulaTSParser.T__9 - 4)) | (1 << (FormulaTSParser.OPERATE_PLUS - 4)) | (1 << (FormulaTSParser.OPERATE_MINUS - 4)) | (1 << (FormulaTSParser.NUMBER - 4)) | (1 << (FormulaTSParser.FORMULANAME - 4)) | (1 << (FormulaTSParser.STRING - 4)) | (1 << (FormulaTSParser.RefSheet - 4)) | (1 << (FormulaTSParser.CELLLoc - 4)) | (1 << (FormulaTSParser.CELLTPLLoc - 4)) | (1 << (FormulaTSParser.CONSTVAR - 4)))) !== 0));
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
    this.enterRule(localctx, 2, FormulaTSParser.RULE_formulaFunction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.formulaFunctionName();
        this.state = 50;
        this.skipFuncLBracket();
        this.state = 52;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        if(la_===1) {
            this.state = 51;
            this.formulaParams();

        }
        this.state = 54;
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
    this.enterRule(localctx, 4, FormulaTSParser.RULE_formulaParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (FormulaTSParser.T__3 - 4)) | (1 << (FormulaTSParser.T__4 - 4)) | (1 << (FormulaTSParser.T__5 - 4)) | (1 << (FormulaTSParser.T__6 - 4)) | (1 << (FormulaTSParser.T__8 - 4)) | (1 << (FormulaTSParser.T__9 - 4)) | (1 << (FormulaTSParser.OPERATE_PLUS - 4)) | (1 << (FormulaTSParser.OPERATE_MINUS - 4)) | (1 << (FormulaTSParser.NULL - 4)) | (1 << (FormulaTSParser.NUMBER - 4)) | (1 << (FormulaTSParser.FORMULANAME - 4)) | (1 << (FormulaTSParser.STRING - 4)) | (1 << (FormulaTSParser.RefSheet - 4)) | (1 << (FormulaTSParser.CELLLoc - 4)) | (1 << (FormulaTSParser.CELLTPLLoc - 4)) | (1 << (FormulaTSParser.CONSTVAR - 4)))) !== 0)) {
            this.state = 56;
            this.formulaParam();
            this.state = 58;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===FormulaTSParser.T__12 || _la===FormulaTSParser.T__13) {
                this.state = 57;
                this.skipParamComma();
            }

            this.state = 64;
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

FormulaParamContext.prototype.formulaParamNull = function() {
    return this.getTypedRuleContext(FormulaParamNullContext,0);
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
    this.enterRule(localctx, 6, FormulaTSParser.RULE_formulaParam);
    try {
        this.state = 70;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 65;
            this.formulaParamConst();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.formulaParamNull();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.formulaParamNum();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 68;
            this.formulaParamString();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
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
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, FormulaTSParser.RULE_formulaExpress, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaTSParser.T__8:
        case FormulaTSParser.T__9:
            this.state = 73;
            this.formulaBracketExpress();
            break;
        case FormulaTSParser.T__3:
        case FormulaTSParser.T__4:
            this.state = 74;
            this.formulaIfFunction();
            break;
        case FormulaTSParser.T__5:
        case FormulaTSParser.T__6:
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
        this.state = 104;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 102;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 84;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
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
                    this.formulaExpress(15);
                    break;

                case 2:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 87;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
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
                    this.formulaExpress(14);
                    break;

                case 3:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 90;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
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
                    this.formulaExpress(13);
                    break;

                case 4:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 93;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
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
                    this.formulaExpress(12);
                    break;

                case 5:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 96;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 97;
                    localctx.op = this.match(FormulaTSParser.T__1);
                    this.state = 98;
                    this.formulaExpress(0);
                    this.state = 99;
                    this.match(FormulaTSParser.T__2);
                    this.state = 100;
                    this.formulaExpress(2);
                    break;

                } 
            }
            this.state = 106;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
    this.enterRule(localctx, 10, FormulaTSParser.RULE_formulaBracketExpress);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.skipFuncLBracket();
        this.state = 111;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.state = 108;
            this.formulaExpress(0);
            break;

        case 2:
            this.state = 109;
            this.formulaParamNum();
            break;

        case 3:
            this.state = 110;
            this.formulaParamConst();
            break;

        }
        this.state = 113;
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
    this.enterRule(localctx, 12, FormulaTSParser.RULE_formulaIfFunction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__3 || _la===FormulaTSParser.T__4)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 116;
        this.skipFuncLBracket();
        this.state = 118;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        if(la_===1) {
            this.state = 117;
            this.formulaParams();

        }
        this.state = 120;
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
    this.enterRule(localctx, 14, FormulaTSParser.RULE_formulaRefTemplateFunction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__5 || _la===FormulaTSParser.T__6)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 123;
        this.skipFuncLBracket();

        this.state = 127;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 124;
                this.matchWildcard(); 
            }
            this.state = 129;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

        this.state = 130;
        this.skipParamComma();

        this.state = 134;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 131;
                this.matchWildcard(); 
            }
            this.state = 136;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

        this.state = 137;
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


function FormulaAssignExpressContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaAssignExpress;
    return this;
}

FormulaAssignExpressContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaAssignExpressContext.prototype.constructor = FormulaAssignExpressContext;

FormulaAssignExpressContext.prototype.CONSTVAR = function() {
    return this.getToken(FormulaTSParser.CONSTVAR, 0);
};

FormulaAssignExpressContext.prototype.formulaExpress = function() {
    return this.getTypedRuleContext(FormulaExpressContext,0);
};

FormulaAssignExpressContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaAssignExpress(this);
	}
};

FormulaAssignExpressContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaAssignExpress(this);
	}
};

FormulaAssignExpressContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaAssignExpress(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaAssignExpressContext = FormulaAssignExpressContext;

FormulaTSParser.prototype.formulaAssignExpress = function() {

    var localctx = new FormulaAssignExpressContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FormulaTSParser.RULE_formulaAssignExpress);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(FormulaTSParser.CONSTVAR);
        this.state = 140;
        this.match(FormulaTSParser.T__7);
        this.state = 141;
        this.formulaExpress(0);
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
    this.enterRule(localctx, 18, FormulaTSParser.RULE_formulaFunctionName);
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
    this.enterRule(localctx, 20, FormulaTSParser.RULE_formulaParamConst);
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
    this.enterRule(localctx, 22, FormulaTSParser.RULE_formulaParamNum);
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
    this.enterRule(localctx, 24, FormulaTSParser.RULE_formulaParamString);
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


function FormulaParamNullContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaParamNull;
    return this;
}

FormulaParamNullContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaParamNullContext.prototype.constructor = FormulaParamNullContext;

FormulaParamNullContext.prototype.NULL = function() {
    return this.getToken(FormulaTSParser.NULL, 0);
};

FormulaParamNullContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaParamNull(this);
	}
};

FormulaParamNullContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaParamNull(this);
	}
};

FormulaParamNullContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaParamNull(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaParamNullContext = FormulaParamNullContext;

FormulaTSParser.prototype.formulaParamNull = function() {

    var localctx = new FormulaParamNullContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FormulaTSParser.RULE_formulaParamNull);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(FormulaTSParser.NULL);
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
        this.state = 157;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FormulaTSParser.RefSheet) {
            this.state = 156;
            this.match(FormulaTSParser.RefSheet);
        }

        this.state = 159;
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
        this.state = 161;
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
        this.state = 167;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__12 || _la===FormulaTSParser.T__13)) {
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
	case 4:
			return this.formulaExpress_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FormulaTSParser.prototype.formulaExpress_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FormulaTSParser = FormulaTSParser;
