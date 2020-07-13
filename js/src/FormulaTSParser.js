// Generated from /Users/dong/yzfworkbench/formula-compile/java/FormulaTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FormulaTSListener = require('./FormulaTSListener').FormulaTSListener;
var FormulaTSVisitor = require('./FormulaTSVisitor').FormulaTSVisitor;

var grammarFileName = "FormulaTS.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0019w\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0003\u0002\u0003\u0002\u0005\u0002%\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003+\n\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003/\n\u0003\u0003\u0004\u0003\u0004\u0005\u0004",
    "3\n\u0004\u0007\u00045\n\u0004\f\u0004\u000e\u00048\u000b\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005>\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006G\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007",
    "\u0006R\n\u0006\f\u0006\u000e\u0006U\u000b\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0005\b^\n\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0005\rk\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0002\u0003\n\u0012\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0002\u0007\u0003\u0002",
    "\b\t\u0003\u0002\n\u000b\u0003\u0002\f\u0011\u0003\u0002\u0005\u0006",
    "\u0003\u0002\b\u0011\u0002x\u0002$\u0003\u0002\u0002\u0002\u0004.\u0003",
    "\u0002\u0002\u0002\u00066\u0003\u0002\u0002\u0002\b=\u0003\u0002\u0002",
    "\u0002\nF\u0003\u0002\u0002\u0002\fV\u0003\u0002\u0002\u0002\u000eZ",
    "\u0003\u0002\u0002\u0002\u0010a\u0003\u0002\u0002\u0002\u0012c\u0003",
    "\u0002\u0002\u0002\u0014e\u0003\u0002\u0002\u0002\u0016g\u0003\u0002",
    "\u0002\u0002\u0018j\u0003\u0002\u0002\u0002\u001an\u0003\u0002\u0002",
    "\u0002\u001cp\u0003\u0002\u0002\u0002\u001er\u0003\u0002\u0002\u0002",
    " t\u0003\u0002\u0002\u0002\"%\u0005\u0004\u0003\u0002#%\u0005\n\u0006",
    "\u0002$\"\u0003\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%\u0003\u0003",
    "\u0002\u0002\u0002&/\u0005\u000e\b\u0002\'(\u0005\u0010\t\u0002(*\u0005",
    "\u001c\u000f\u0002)+\u0005\u0006\u0004\u0002*)\u0003\u0002\u0002\u0002",
    "*+\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,-\u0005\u001e\u0010",
    "\u0002-/\u0003\u0002\u0002\u0002.&\u0003\u0002\u0002\u0002.\'\u0003",
    "\u0002\u0002\u0002/\u0005\u0003\u0002\u0002\u000202\u0005\b\u0005\u0002",
    "13\u0005 \u0011\u000221\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u000235\u0003\u0002\u0002\u000240\u0003\u0002\u0002\u000258\u0003\u0002",
    "\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027\u0007",
    "\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u00029>\u0005\u0012\n\u0002",
    ":>\u0005\u0014\u000b\u0002;>\u0005\u0016\f\u0002<>\u0005\n\u0006\u0002",
    "=9\u0003\u0002\u0002\u0002=:\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002",
    "\u0002=<\u0003\u0002\u0002\u0002>\t\u0003\u0002\u0002\u0002?@\b\u0006",
    "\u0001\u0002@G\u0005\f\u0007\u0002AG\u0005\u0012\n\u0002BG\u0005\u0004",
    "\u0003\u0002CG\u0005\u0014\u000b\u0002DG\u0005\u0018\r\u0002EG\u0005",
    "\u0016\f\u0002F?\u0003\u0002\u0002\u0002FA\u0003\u0002\u0002\u0002F",
    "B\u0003\u0002\u0002\u0002FC\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002",
    "\u0002FE\u0003\u0002\u0002\u0002GS\u0003\u0002\u0002\u0002HI\f\u000b",
    "\u0002\u0002IJ\t\u0002\u0002\u0002JR\u0005\n\u0006\fKL\f\n\u0002\u0002",
    "LM\t\u0003\u0002\u0002MR\u0005\n\u0006\u000bNO\f\t\u0002\u0002OP\t\u0004",
    "\u0002\u0002PR\u0005\n\u0006\nQH\u0003\u0002\u0002\u0002QK\u0003\u0002",
    "\u0002\u0002QN\u0003\u0002\u0002\u0002RU\u0003\u0002\u0002\u0002SQ\u0003",
    "\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002T\u000b\u0003\u0002\u0002",
    "\u0002US\u0003\u0002\u0002\u0002VW\u0007\u0003\u0002\u0002WX\u0005\n",
    "\u0006\u0002XY\u0007\u0004\u0002\u0002Y\r\u0003\u0002\u0002\u0002Z[",
    "\t\u0005\u0002\u0002[]\u0005\u001c\u000f\u0002\\^\u0005\u0006\u0004",
    "\u0002]\\\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^_\u0003",
    "\u0002\u0002\u0002_`\u0005\u001e\u0010\u0002`\u000f\u0003\u0002\u0002",
    "\u0002ab\u0007\u0013\u0002\u0002b\u0011\u0003\u0002\u0002\u0002cd\u0007",
    "\u0019\u0002\u0002d\u0013\u0003\u0002\u0002\u0002ef\u0007\u0012\u0002",
    "\u0002f\u0015\u0003\u0002\u0002\u0002gh\u0007\u0014\u0002\u0002h\u0017",
    "\u0003\u0002\u0002\u0002ik\u0007\u0015\u0002\u0002ji\u0003\u0002\u0002",
    "\u0002jk\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0007\u0016",
    "\u0002\u0002m\u0019\u0003\u0002\u0002\u0002no\t\u0006\u0002\u0002o\u001b",
    "\u0003\u0002\u0002\u0002pq\u0007\u0003\u0002\u0002q\u001d\u0003\u0002",
    "\u0002\u0002rs\u0007\u0004\u0002\u0002s\u001f\u0003\u0002\u0002\u0002",
    "tu\u0007\u0007\u0002\u0002u!\u0003\u0002\u0002\u0002\r$*.26=FQS]j"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'IF'", "'\u5982\u679C'", "','", 
                     "'*'", "'/'", "'+'", "'-'", "'>'", "'>='", "'<'", "'<='", 
                     "'=='", "'!='" ];

var symbolicNames = [ null, null, null, null, null, null, "OPERATE_multiply", 
                      "OPERATE_DIVIDE", "OPERATE_PLUS", "OPERATE_MINUS", 
                      "OPERATE_GREATE", "OPERATE_GREATE_EQ", "OPERATE_LESS", 
                      "OPERATE_LESS_EQ", "OPERATE_EQ", "OPERATE_NEQ", "NUMBER", 
                      "FORMULANAME", "STRING", "RefSheet", "CELLLoc", "SheetName", 
                      "WS", "CONSTVAR" ];

var ruleNames =  [ "formulaUnit", "formulaFunction", "formulaParams", "formulaParam", 
                   "formulaExpress", "formulaBracketExpress", "formulaIfFunction", 
                   "formulaFunctionName", "formulaParamConst", "formulaParamNum", 
                   "formulaParamString", "formulaCELLLoc", "formulaOperation", 
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
FormulaTSParser.OPERATE_multiply = 6;
FormulaTSParser.OPERATE_DIVIDE = 7;
FormulaTSParser.OPERATE_PLUS = 8;
FormulaTSParser.OPERATE_MINUS = 9;
FormulaTSParser.OPERATE_GREATE = 10;
FormulaTSParser.OPERATE_GREATE_EQ = 11;
FormulaTSParser.OPERATE_LESS = 12;
FormulaTSParser.OPERATE_LESS_EQ = 13;
FormulaTSParser.OPERATE_EQ = 14;
FormulaTSParser.OPERATE_NEQ = 15;
FormulaTSParser.NUMBER = 16;
FormulaTSParser.FORMULANAME = 17;
FormulaTSParser.STRING = 18;
FormulaTSParser.RefSheet = 19;
FormulaTSParser.CELLLoc = 20;
FormulaTSParser.SheetName = 21;
FormulaTSParser.WS = 22;
FormulaTSParser.CONSTVAR = 23;

FormulaTSParser.RULE_formulaUnit = 0;
FormulaTSParser.RULE_formulaFunction = 1;
FormulaTSParser.RULE_formulaParams = 2;
FormulaTSParser.RULE_formulaParam = 3;
FormulaTSParser.RULE_formulaExpress = 4;
FormulaTSParser.RULE_formulaBracketExpress = 5;
FormulaTSParser.RULE_formulaIfFunction = 6;
FormulaTSParser.RULE_formulaFunctionName = 7;
FormulaTSParser.RULE_formulaParamConst = 8;
FormulaTSParser.RULE_formulaParamNum = 9;
FormulaTSParser.RULE_formulaParamString = 10;
FormulaTSParser.RULE_formulaCELLLoc = 11;
FormulaTSParser.RULE_formulaOperation = 12;
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
        this.state = 34;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 32;
            this.formulaFunction();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 33;
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

FormulaFunctionContext.prototype.formulaIfFunction = function() {
    return this.getTypedRuleContext(FormulaIfFunctionContext,0);
};

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
        this.state = 44;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaTSParser.T__2:
        case FormulaTSParser.T__3:
            this.enterOuterAlt(localctx, 1);
            this.state = 36;
            this.formulaIfFunction();
            break;
        case FormulaTSParser.FORMULANAME:
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            this.formulaFunctionName();
            this.state = 38;
            this.skipFuncLBracket();
            this.state = 40;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
            if(la_===1) {
                this.state = 39;
                this.formulaParams();

            }
            this.state = 42;
            this.skipFuncRBracket();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
        this.state = 52;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaTSParser.T__0) | (1 << FormulaTSParser.T__2) | (1 << FormulaTSParser.T__3) | (1 << FormulaTSParser.NUMBER) | (1 << FormulaTSParser.FORMULANAME) | (1 << FormulaTSParser.STRING) | (1 << FormulaTSParser.RefSheet) | (1 << FormulaTSParser.CELLLoc) | (1 << FormulaTSParser.CONSTVAR))) !== 0)) {
            this.state = 46;
            this.formulaParam();
            this.state = 48;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===FormulaTSParser.T__4) {
                this.state = 47;
                this.skipParamComma();
            }

            this.state = 54;
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
        this.state = 59;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            this.formulaParamConst();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 56;
            this.formulaParamNum();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 57;
            this.formulaParamString();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 58;
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
    return this;
}

FormulaExpressContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaExpressContext.prototype.constructor = FormulaExpressContext;

FormulaExpressContext.prototype.formulaBracketExpress = function() {
    return this.getTypedRuleContext(FormulaBracketExpressContext,0);
};

FormulaExpressContext.prototype.formulaParamConst = function() {
    return this.getTypedRuleContext(FormulaParamConstContext,0);
};

FormulaExpressContext.prototype.formulaFunction = function() {
    return this.getTypedRuleContext(FormulaFunctionContext,0);
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
        this.state = 68;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaTSParser.T__0:
            this.state = 62;
            this.formulaBracketExpress();
            break;
        case FormulaTSParser.CONSTVAR:
            this.state = 63;
            this.formulaParamConst();
            break;
        case FormulaTSParser.T__2:
        case FormulaTSParser.T__3:
        case FormulaTSParser.FORMULANAME:
            this.state = 64;
            this.formulaFunction();
            break;
        case FormulaTSParser.NUMBER:
            this.state = 65;
            this.formulaParamNum();
            break;
        case FormulaTSParser.RefSheet:
        case FormulaTSParser.CELLLoc:
            this.state = 66;
            this.formulaCELLLoc();
            break;
        case FormulaTSParser.STRING:
            this.state = 67;
            this.formulaParamString();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 81;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 79;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 70;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 71;
                    _la = this._input.LA(1);
                    if(!(_la===FormulaTSParser.OPERATE_multiply || _la===FormulaTSParser.OPERATE_DIVIDE)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 72;
                    this.formulaExpress(10);
                    break;

                case 2:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 73;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 74;
                    _la = this._input.LA(1);
                    if(!(_la===FormulaTSParser.OPERATE_PLUS || _la===FormulaTSParser.OPERATE_MINUS)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 75;
                    this.formulaExpress(9);
                    break;

                case 3:
                    localctx = new FormulaExpressContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FormulaTSParser.RULE_formulaExpress);
                    this.state = 76;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 77;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaTSParser.OPERATE_GREATE) | (1 << FormulaTSParser.OPERATE_GREATE_EQ) | (1 << FormulaTSParser.OPERATE_LESS) | (1 << FormulaTSParser.OPERATE_LESS_EQ) | (1 << FormulaTSParser.OPERATE_EQ) | (1 << FormulaTSParser.OPERATE_NEQ))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 78;
                    this.formulaExpress(8);
                    break;

                } 
            }
            this.state = 83;
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

FormulaBracketExpressContext.prototype.formulaExpress = function() {
    return this.getTypedRuleContext(FormulaExpressContext,0);
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
        this.state = 84;
        this.match(FormulaTSParser.T__0);
        this.state = 85;
        this.formulaExpress(0);
        this.state = 86;
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
        this.state = 88;
        _la = this._input.LA(1);
        if(!(_la===FormulaTSParser.T__2 || _la===FormulaTSParser.T__3)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 89;
        this.skipFuncLBracket();
        this.state = 91;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 90;
            this.formulaParams();

        }
        this.state = 93;
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
    this.enterRule(localctx, 14, FormulaTSParser.RULE_formulaFunctionName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
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
    this.enterRule(localctx, 16, FormulaTSParser.RULE_formulaParamConst);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
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
    return this;
}

FormulaParamNumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaParamNumContext.prototype.constructor = FormulaParamNumContext;

FormulaParamNumContext.prototype.NUMBER = function() {
    return this.getToken(FormulaTSParser.NUMBER, 0);
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
    this.enterRule(localctx, 18, FormulaTSParser.RULE_formulaParamNum);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
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
    this.enterRule(localctx, 20, FormulaTSParser.RULE_formulaParamString);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
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
    this.enterRule(localctx, 22, FormulaTSParser.RULE_formulaCELLLoc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FormulaTSParser.RefSheet) {
            this.state = 103;
            this.match(FormulaTSParser.RefSheet);
        }

        this.state = 106;
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


function FormulaOperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaTSParser.RULE_formulaOperation;
    return this;
}

FormulaOperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaOperationContext.prototype.constructor = FormulaOperationContext;

FormulaOperationContext.prototype.OPERATE_GREATE = function() {
    return this.getToken(FormulaTSParser.OPERATE_GREATE, 0);
};

FormulaOperationContext.prototype.OPERATE_GREATE_EQ = function() {
    return this.getToken(FormulaTSParser.OPERATE_GREATE_EQ, 0);
};

FormulaOperationContext.prototype.OPERATE_LESS = function() {
    return this.getToken(FormulaTSParser.OPERATE_LESS, 0);
};

FormulaOperationContext.prototype.OPERATE_LESS_EQ = function() {
    return this.getToken(FormulaTSParser.OPERATE_LESS_EQ, 0);
};

FormulaOperationContext.prototype.OPERATE_EQ = function() {
    return this.getToken(FormulaTSParser.OPERATE_EQ, 0);
};

FormulaOperationContext.prototype.OPERATE_NEQ = function() {
    return this.getToken(FormulaTSParser.OPERATE_NEQ, 0);
};

FormulaOperationContext.prototype.OPERATE_PLUS = function() {
    return this.getToken(FormulaTSParser.OPERATE_PLUS, 0);
};

FormulaOperationContext.prototype.OPERATE_MINUS = function() {
    return this.getToken(FormulaTSParser.OPERATE_MINUS, 0);
};

FormulaOperationContext.prototype.OPERATE_DIVIDE = function() {
    return this.getToken(FormulaTSParser.OPERATE_DIVIDE, 0);
};

FormulaOperationContext.prototype.OPERATE_multiply = function() {
    return this.getToken(FormulaTSParser.OPERATE_multiply, 0);
};

FormulaOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.enterFormulaOperation(this);
	}
};

FormulaOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof FormulaTSListener ) {
        listener.exitFormulaOperation(this);
	}
};

FormulaOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaTSVisitor ) {
        return visitor.visitFormulaOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaTSParser.FormulaOperationContext = FormulaOperationContext;

FormulaTSParser.prototype.formulaOperation = function() {

    var localctx = new FormulaOperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FormulaTSParser.RULE_formulaOperation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaTSParser.OPERATE_multiply) | (1 << FormulaTSParser.OPERATE_DIVIDE) | (1 << FormulaTSParser.OPERATE_PLUS) | (1 << FormulaTSParser.OPERATE_MINUS) | (1 << FormulaTSParser.OPERATE_GREATE) | (1 << FormulaTSParser.OPERATE_GREATE_EQ) | (1 << FormulaTSParser.OPERATE_LESS) | (1 << FormulaTSParser.OPERATE_LESS_EQ) | (1 << FormulaTSParser.OPERATE_EQ) | (1 << FormulaTSParser.OPERATE_NEQ))) !== 0))) {
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
        this.state = 110;
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
        this.state = 112;
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
        this.state = 114;
        this.match(FormulaTSParser.T__4);
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
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FormulaTSParser = FormulaTSParser;
