// Generated from /Users/dong/yzfworkbench/formula-compile/java/FormulaTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FormulaTSListener = require('./FormulaTSListener').FormulaTSListener;
var FormulaTSVisitor = require('./FormulaTSVisitor').FormulaTSVisitor;

var grammarFileName = "FormulaTS.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001c\u0091\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002\'\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    ",\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0005\u0004",
    "2\n\u0004\u0007\u00044\n\u0004\f\u0004\u000e\u00047\u000b\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005=\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006H\n\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006V",
    "\n\u0006\f\u0006\u000e\u0006Y\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007_\n\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0005\bf\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0007\tm\n\t\f\t\u000e\tp\u000b\t\u0003\t\u0003\t\u0007\tt\n\t\f",
    "\t\u000e\tw\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0005\f\u0080\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0005\u000e\u0087\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0002\u0003\n\u0012\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \u0002\b\u0003\u0002\u0014\u0015\u0003",
    "\u0002\n\u000b\u0003\u0002\f\r\u0003\u0002\u000e\u0013\u0003\u0002\u0005",
    "\u0006\u0003\u0002\u0007\b\u0002\u009b\u0002&\u0003\u0002\u0002\u0002",
    "\u0004(\u0003\u0002\u0002\u0002\u00065\u0003\u0002\u0002\u0002\b<\u0003",
    "\u0002\u0002\u0002\nG\u0003\u0002\u0002\u0002\fZ\u0003\u0002\u0002\u0002",
    "\u000eb\u0003\u0002\u0002\u0002\u0010i\u0003\u0002\u0002\u0002\u0012",
    "z\u0003\u0002\u0002\u0002\u0014|\u0003\u0002\u0002\u0002\u0016\u007f",
    "\u0003\u0002\u0002\u0002\u0018\u0083\u0003\u0002\u0002\u0002\u001a\u0086",
    "\u0003\u0002\u0002\u0002\u001c\u008a\u0003\u0002\u0002\u0002\u001e\u008c",
    "\u0003\u0002\u0002\u0002 \u008e\u0003\u0002\u0002\u0002\"\'\u0005\u000e",
    "\b\u0002#\'\u0005\u0010\t\u0002$\'\u0005\u0004\u0003\u0002%\'\u0005",
    "\n\u0006\u0002&\"\u0003\u0002\u0002\u0002&#\u0003\u0002\u0002\u0002",
    "&$\u0003\u0002\u0002\u0002&%\u0003\u0002\u0002\u0002\'\u0003\u0003\u0002",
    "\u0002\u0002()\u0005\u0012\n\u0002)+\u0005\u001c\u000f\u0002*,\u0005",
    "\u0006\u0004\u0002+*\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",-\u0003\u0002\u0002\u0002-.\u0005\u001e\u0010\u0002.\u0005\u0003\u0002",
    "\u0002\u0002/1\u0005\b\u0005\u000202\u0005 \u0011\u000210\u0003\u0002",
    "\u0002\u000212\u0003\u0002\u0002\u000224\u0003\u0002\u0002\u00023/\u0003",
    "\u0002\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u0002",
    "56\u0003\u0002\u0002\u00026\u0007\u0003\u0002\u0002\u000275\u0003\u0002",
    "\u0002\u00028=\u0005\u0014\u000b\u00029=\u0005\u0016\f\u0002:=\u0005",
    "\u0018\r\u0002;=\u0005\n\u0006\u0002<8\u0003\u0002\u0002\u0002<9\u0003",
    "\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<;\u0003\u0002\u0002\u0002",
    "=\t\u0003\u0002\u0002\u0002>?\b\u0006\u0001\u0002?H\u0005\f\u0007\u0002",
    "@H\u0005\u000e\b\u0002AH\u0005\u0010\t\u0002BH\u0005\u0004\u0003\u0002",
    "CH\u0005\u0014\u000b\u0002DH\u0005\u0016\f\u0002EH\u0005\u001a\u000e",
    "\u0002FH\u0005\u0018\r\u0002G>\u0003\u0002\u0002\u0002G@\u0003\u0002",
    "\u0002\u0002GA\u0003\u0002\u0002\u0002GB\u0003\u0002\u0002\u0002GC\u0003",
    "\u0002\u0002\u0002GD\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002",
    "GF\u0003\u0002\u0002\u0002HW\u0003\u0002\u0002\u0002IJ\f\u000e\u0002",
    "\u0002JK\t\u0002\u0002\u0002KV\u0005\n\u0006\u000fLM\f\r\u0002\u0002",
    "MN\t\u0003\u0002\u0002NV\u0005\n\u0006\u000eOP\f\f\u0002\u0002PQ\t\u0004",
    "\u0002\u0002QV\u0005\n\u0006\rRS\f\u000b\u0002\u0002ST\t\u0005\u0002",
    "\u0002TV\u0005\n\u0006\fUI\u0003\u0002\u0002\u0002UL\u0003\u0002\u0002",
    "\u0002UO\u0003\u0002\u0002\u0002UR\u0003\u0002\u0002\u0002VY\u0003\u0002",
    "\u0002\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002X\u000b",
    "\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002Z^\u0007\u0003\u0002",
    "\u0002[_\u0005\n\u0006\u0002\\_\u0005\u0016\f\u0002]_\u0005\u0014\u000b",
    "\u0002^[\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002^]\u0003",
    "\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`a\u0007\u0004\u0002\u0002",
    "a\r\u0003\u0002\u0002\u0002bc\t\u0006\u0002\u0002ce\u0005\u001c\u000f",
    "\u0002df\u0005\u0006\u0004\u0002ed\u0003\u0002\u0002\u0002ef\u0003\u0002",
    "\u0002\u0002fg\u0003\u0002\u0002\u0002gh\u0005\u001e\u0010\u0002h\u000f",
    "\u0003\u0002\u0002\u0002ij\t\u0007\u0002\u0002jn\u0005\u001c\u000f\u0002",
    "km\u000b\u0002\u0002\u0002lk\u0003\u0002\u0002\u0002mp\u0003\u0002\u0002",
    "\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002oq\u0003\u0002",
    "\u0002\u0002pn\u0003\u0002\u0002\u0002qu\u0007\t\u0002\u0002rt\u000b",
    "\u0002\u0002\u0002sr\u0003\u0002\u0002\u0002tw\u0003\u0002\u0002\u0002",
    "us\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002vx\u0003\u0002\u0002",
    "\u0002wu\u0003\u0002\u0002\u0002xy\u0005\u001e\u0010\u0002y\u0011\u0003",
    "\u0002\u0002\u0002z{\u0007\u0017\u0002\u0002{\u0013\u0003\u0002\u0002",
    "\u0002|}\u0007\u001c\u0002\u0002}\u0015\u0003\u0002\u0002\u0002~\u0080",
    "\t\u0004\u0002\u0002\u007f~\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
    "\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0082\u0007",
    "\u0016\u0002\u0002\u0082\u0017\u0003\u0002\u0002\u0002\u0083\u0084\u0007",
    "\u0018\u0002\u0002\u0084\u0019\u0003\u0002\u0002\u0002\u0085\u0087\u0007",
    "\u0019\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003",
    "\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0089\u0007",
    "\u001a\u0002\u0002\u0089\u001b\u0003\u0002\u0002\u0002\u008a\u008b\u0007",
    "\u0003\u0002\u0002\u008b\u001d\u0003\u0002\u0002\u0002\u008c\u008d\u0007",
    "\u0004\u0002\u0002\u008d\u001f\u0003\u0002\u0002\u0002\u008e\u008f\u0007",
    "\t\u0002\u0002\u008f!\u0003\u0002\u0002\u0002\u0010&+15<GUW^enu\u007f",
    "\u0086"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'IF'", "'\u5982\u679C'", "'RefTemplate'", 
                     "'\u6A21\u677F\u516C\u5F0F'", "','", "'*'", "'/'", 
                     null, null, "'>'", "'>='", "'<'", "'<='", "'=='", "'!='", 
                     "'&&'", "'||'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, "OPERATE_multiply", 
                      "OPERATE_DIVIDE", "OPERATE_PLUS", "OPERATE_MINUS", 
                      "OPERATE_GREATE", "OPERATE_GREATE_EQ", "OPERATE_LESS", 
                      "OPERATE_LESS_EQ", "OPERATE_EQ", "OPERATE_NEQ", "OPERATE_AND", 
                      "OPERATE_OR", "NUMBER", "FORMULANAME", "STRING", "RefSheet", 
                      "CELLLoc", "WS", "CONSTVAR" ];

var ruleNames =  [ "formulaUnit", "formulaFunction", "formulaParams", "formulaParam", 
                   "formulaExpress", "formulaBracketExpress", "formulaIfFunction", 
                   "formulaRefTemplateFunction", "formulaFunctionName", 
                   "formulaParamConst", "formulaParamNum", "formulaParamString", 
                   "formulaCELLLoc", "skipFuncLBracket", "skipFuncRBracket", 
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
FormulaTSParser.OPERATE_multiply = 8;
FormulaTSParser.OPERATE_DIVIDE = 9;
FormulaTSParser.OPERATE_PLUS = 10;
FormulaTSParser.OPERATE_MINUS = 11;
FormulaTSParser.OPERATE_GREATE = 12;
FormulaTSParser.OPERATE_GREATE_EQ = 13;
FormulaTSParser.OPERATE_LESS = 14;
FormulaTSParser.OPERATE_LESS_EQ = 15;
FormulaTSParser.OPERATE_EQ = 16;
FormulaTSParser.OPERATE_NEQ = 17;
FormulaTSParser.OPERATE_AND = 18;
FormulaTSParser.OPERATE_OR = 19;
FormulaTSParser.NUMBER = 20;
FormulaTSParser.FORMULANAME = 21;
FormulaTSParser.STRING = 22;
FormulaTSParser.RefSheet = 23;
FormulaTSParser.CELLLoc = 24;
FormulaTSParser.WS = 25;
FormulaTSParser.CONSTVAR = 26;

FormulaTSParser.RULE_formulaUnit = 0;
FormulaTSParser.RULE_formulaFunction = 1;
FormulaTSParser.RULE_formulaParams = 2;
FormulaTSParser.RULE_formulaParam = 3;
FormulaTSParser.RULE_formulaExpress = 4;
FormulaTSParser.RULE_formulaBracketExpress = 5;
FormulaTSParser.RULE_formulaIfFunction = 6;
FormulaTSParser.RULE_formulaRefTemplateFunction = 7;
FormulaTSParser.RULE_formulaFunctionName = 8;
FormulaTSParser.RULE_formulaParamConst = 9;
FormulaTSParser.RULE_formulaParamNum = 10;
FormulaTSParser.RULE_formulaParamString = 11;
FormulaTSParser.RULE_formulaCELLLoc = 12;
FormulaTSParser.RULE_skipFuncLBracket = 13;
FormulaTSParser.RULE_skipFuncRBracket = 14;
FormulaTSParser.RULE_skipParamComma = 15;


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
    this.enterRule(localctx, 0, FormulaTSParser.RULE_formulaUnit);
    try {
        this.state = 36;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 32;
            this.formulaIfFunction();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 33;
            this.formulaRefTemplateFunction();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 34;
            this.formulaFunction();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 35;
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
    this.enterRule(localctx, 2, FormulaTSParser.RULE_formulaFunction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.formulaFunctionName();
        this.state = 39;
        this.skipFuncLBracket();
        this.state = 41;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        if(la_===1) {
            this.state = 40;
            this.formulaParams();

        }
        this.state = 43;
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
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaTSParser.T__0) | (1 << FormulaTSParser.T__2) | (1 << FormulaTSParser.T__3) | (1 << FormulaTSParser.T__4) | (1 << FormulaTSParser.T__5) | (1 << FormulaTSParser.OPERATE_PLUS) | (1 << FormulaTSParser.OPERATE_MINUS) | (1 << FormulaTSParser.NUMBER) | (1 << FormulaTSParser.FORMULANAME) | (1 << FormulaTSParser.STRING) | (1 << FormulaTSParser.RefSheet) | (1 << FormulaTSParser.CELLLoc) | (1 << FormulaTSParser.CONSTVAR))) !== 0)) {
            this.state = 45;
            this.formulaParam();
            this.state = 47;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===FormulaTSParser.T__6) {
                this.state = 46;
                this.skipParamComma();
            }

            this.state = 53;
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
    this.enterRule(localctx, 6, FormulaTSParser.RULE_formulaParam);
    try {
        this.state = 58;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.formulaParamConst();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 55;
            this.formulaParamNum();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 56;
            this.formulaParamString();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 57;
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
        this.state = 69;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaTSParser.T__0:
            this.state = 61;
            this.formulaBracketExpress();
            break;
        case FormulaTSParser.T__2:
        case FormulaTSParser.T__3:
            this.state = 62;
            this.formulaIfFunction();
            break;
        case FormulaTSParser.T__4:
        case FormulaTSParser.T__5:
            this.state = 63;
            this.formulaRefTemplateFunction();
            break;
        case FormulaTSParser.FORMULANAME:
            this.state = 64;
            this.formulaFunction();
            break;
        case FormulaTSParser.CONSTVAR:
            this.state = 65;
            this.formulaParamConst();
            break;
        case FormulaTSParser.OPERATE_PLUS:
        case FormulaTSParser.OPERATE_MINUS:
        case FormulaTSParser.NUMBER:
            this.state = 66;
            this.formulaParamNum();
            break;
        case FormulaTSParser.RefSheet:
        case FormulaTSParser.CELLLoc:
            this.state = 67;
            this.formulaCELLLoc();
            break;
        case FormulaTSParser.STRING:
            this.state = 68;
            this.formulaParamString();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 85;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 83;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 71;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 72;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===FormulaTSParser.OPERATE_AND || _la===FormulaTSParser.OPERATE_OR)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 73;
                    this.formulaExpress(13);
                    break;

                case 2:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 74;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 75;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===FormulaTSParser.OPERATE_multiply || _la===FormulaTSParser.OPERATE_DIVIDE)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 76;
                    this.formulaExpress(12);
                    break;

                case 3:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 77;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 78;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===FormulaTSParser.OPERATE_PLUS || _la===FormulaTSParser.OPERATE_MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 79;
                    this.formulaExpress(11);
                    break;

                case 4:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 80;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 81;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaTSParser.OPERATE_GREATE) | (1 << FormulaTSParser.OPERATE_GREATE_EQ) | (1 << FormulaTSParser.OPERATE_LESS) | (1 << FormulaTSParser.OPERATE_LESS_EQ) | (1 << FormulaTSParser.OPERATE_EQ) | (1 << FormulaTSParser.OPERATE_NEQ))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 82;
                    this.formulaExpress(10);
                    break;

                } 
            }
            this.state = 87;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
        this.state = 88;
        this.match(FormulaTSParser.T__0);
        this.state = 92;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.state = 89;
            this.formulaExpress(0);
            break;

        case 2:
            this.state = 90;
            this.formulaParamNum();
            break;

        case 3:
            this.state = 91;
            this.formulaParamConst();
            break;

        }
        this.state = 94;
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
    this.enterRule(localctx, 12, FormulaTSParser.RULE_formulaIfFunction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__2 || _la===FormulaTSParser.T__3)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 97;
        this.skipFuncLBracket();
        this.state = 99;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 98;
            this.formulaParams();

        }
        this.state = 101;
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
        this.state = 103;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__4 || _la===FormulaTSParser.T__5)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 104;
        this.skipFuncLBracket();

        this.state = 108;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 105;
                this.matchWildcard(); 
            }
            this.state = 110;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

        this.state = 111;
        this.match(FormulaTSParser.T__6);

        this.state = 115;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 112;
                this.matchWildcard(); 
            }
            this.state = 117;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

        this.state = 118;
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
    this.enterRule(localctx, 16, FormulaTSParser.RULE_formulaFunctionName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
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
    this.enterRule(localctx, 18, FormulaTSParser.RULE_formulaParamConst);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
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
    this.enterRule(localctx, 20, FormulaTSParser.RULE_formulaParamNum);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FormulaTSParser.OPERATE_PLUS || _la===FormulaTSParser.OPERATE_MINUS) {
            this.state = 124;
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

        this.state = 127;
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
    this.enterRule(localctx, 22, FormulaTSParser.RULE_formulaParamString);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
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
    this.enterRule(localctx, 24, FormulaTSParser.RULE_formulaCELLLoc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FormulaTSParser.RefSheet) {
            this.state = 131;
            this.match(FormulaTSParser.RefSheet);
        }

        this.state = 134;
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
    this.enterRule(localctx, 26, FormulaTSParser.RULE_skipFuncLBracket);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.match(FormulaTSParser.T__0);
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
    this.enterRule(localctx, 28, FormulaTSParser.RULE_skipFuncRBracket);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
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
    this.enterRule(localctx, 30, FormulaTSParser.RULE_skipParamComma);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(FormulaTSParser.T__6);
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
			return this.precpred(this._ctx, 12);
		case 1:
			return this.precpred(this._ctx, 11);
		case 2:
			return this.precpred(this._ctx, 10);
		case 3:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FormulaTSParser = FormulaTSParser;
