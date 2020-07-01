// Generated from /Users/dong/yzfworkbench/formula-compile/java/Formula.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FormulaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, OPERATE_GREATE=4, OPERATE_GREATE_EQ=5, OPERATE_LESS=6, 
		OPERATE_LESS_EQ=7, OPERATE_EQ=8, OPERATE_PLUS=9, OPERATE_multiply=10, 
		OPERATE_DIVIDE=11, OPERATE_MINUS=12, OPERATE_NEQ=13, NUMBER=14, FORMULANAME=15, 
		STRING=16, CELLLoc=17, SheetName=18, WS=19, CONSTVAR=20;
	public static final int
		RULE_formulaUnit = 0, RULE_formulaFunction = 1, RULE_formulaParams = 2, 
		RULE_formulaParam = 3, RULE_formulaFunctionName = 4, RULE_formulaParamConst = 5, 
		RULE_formulaParamNum = 6, RULE_formulaParamString = 7, RULE_formulaCELLLoc = 8, 
		RULE_formulaExpress = 9, RULE_formulaOperation = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"formulaUnit", "formulaFunction", "formulaParams", "formulaParam", "formulaFunctionName", 
			"formulaParamConst", "formulaParamNum", "formulaParamString", "formulaCELLLoc", 
			"formulaExpress", "formulaOperation"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "','", "'>'", "'>='", "'<'", "'<='", "'=='", "'+'", 
			"'*'", "'/'", "'-'", "'!='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "OPERATE_GREATE", "OPERATE_GREATE_EQ", "OPERATE_LESS", 
			"OPERATE_LESS_EQ", "OPERATE_EQ", "OPERATE_PLUS", "OPERATE_multiply", 
			"OPERATE_DIVIDE", "OPERATE_MINUS", "OPERATE_NEQ", "NUMBER", "FORMULANAME", 
			"STRING", "CELLLoc", "SheetName", "WS", "CONSTVAR"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Formula.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FormulaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class FormulaUnitContext extends ParserRuleContext {
		public FormulaFunctionContext formulaFunction() {
			return getRuleContext(FormulaFunctionContext.class,0);
		}
		public FormulaExpressContext formulaExpress() {
			return getRuleContext(FormulaExpressContext.class,0);
		}
		public FormulaUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaUnit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaUnit(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaUnit(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaUnitContext formulaUnit() throws RecognitionException {
		FormulaUnitContext _localctx = new FormulaUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_formulaUnit);
		try {
			setState(24);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(22);
				formulaFunction();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(23);
				formulaExpress(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormulaFunctionContext extends ParserRuleContext {
		public FormulaFunctionNameContext formulaFunctionName() {
			return getRuleContext(FormulaFunctionNameContext.class,0);
		}
		public FormulaParamsContext formulaParams() {
			return getRuleContext(FormulaParamsContext.class,0);
		}
		public FormulaFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaFunction; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaFunction(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaFunction(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaFunction(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaFunctionContext formulaFunction() throws RecognitionException {
		FormulaFunctionContext _localctx = new FormulaFunctionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_formulaFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			formulaFunctionName();
			setState(27);
			match(T__0);
			setState(29);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				{
				setState(28);
				formulaParams();
				}
				break;
			}
			setState(31);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormulaParamsContext extends ParserRuleContext {
		public List<FormulaParamContext> formulaParam() {
			return getRuleContexts(FormulaParamContext.class);
		}
		public FormulaParamContext formulaParam(int i) {
			return getRuleContext(FormulaParamContext.class,i);
		}
		public FormulaParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaParams; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaParams(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaParams(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaParams(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaParamsContext formulaParams() throws RecognitionException {
		FormulaParamsContext _localctx = new FormulaParamsContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_formulaParams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << NUMBER) | (1L << FORMULANAME) | (1L << STRING) | (1L << CELLLoc) | (1L << CONSTVAR))) != 0)) {
				{
				{
				setState(33);
				formulaParam();
				setState(35);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__2) {
					{
					setState(34);
					match(T__2);
					}
				}

				}
				}
				setState(41);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormulaParamContext extends ParserRuleContext {
		public FormulaExpressContext formulaExpress() {
			return getRuleContext(FormulaExpressContext.class,0);
		}
		public FormulaParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaParam; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaParam(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaParam(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaParam(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaParamContext formulaParam() throws RecognitionException {
		FormulaParamContext _localctx = new FormulaParamContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_formulaParam);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			formulaExpress(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormulaFunctionNameContext extends ParserRuleContext {
		public TerminalNode FORMULANAME() { return getToken(FormulaParser.FORMULANAME, 0); }
		public FormulaFunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaFunctionName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaFunctionName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaFunctionName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaFunctionName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaFunctionNameContext formulaFunctionName() throws RecognitionException {
		FormulaFunctionNameContext _localctx = new FormulaFunctionNameContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_formulaFunctionName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			match(FORMULANAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormulaParamConstContext extends ParserRuleContext {
		public TerminalNode CONSTVAR() { return getToken(FormulaParser.CONSTVAR, 0); }
		public FormulaParamConstContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaParamConst; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaParamConst(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaParamConst(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaParamConst(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaParamConstContext formulaParamConst() throws RecognitionException {
		FormulaParamConstContext _localctx = new FormulaParamConstContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_formulaParamConst);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(CONSTVAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormulaParamNumContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(FormulaParser.NUMBER, 0); }
		public FormulaParamNumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaParamNum; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaParamNum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaParamNum(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaParamNum(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaParamNumContext formulaParamNum() throws RecognitionException {
		FormulaParamNumContext _localctx = new FormulaParamNumContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_formulaParamNum);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormulaParamStringContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(FormulaParser.STRING, 0); }
		public FormulaParamStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaParamString; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaParamString(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaParamString(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaParamString(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaParamStringContext formulaParamString() throws RecognitionException {
		FormulaParamStringContext _localctx = new FormulaParamStringContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_formulaParamString);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormulaCELLLocContext extends ParserRuleContext {
		public TerminalNode CELLLoc() { return getToken(FormulaParser.CELLLoc, 0); }
		public FormulaCELLLocContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaCELLLoc; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaCELLLoc(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaCELLLoc(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaCELLLoc(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaCELLLocContext formulaCELLLoc() throws RecognitionException {
		FormulaCELLLocContext _localctx = new FormulaCELLLocContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_formulaCELLLoc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(CELLLoc);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormulaExpressContext extends ParserRuleContext {
		public List<FormulaExpressContext> formulaExpress() {
			return getRuleContexts(FormulaExpressContext.class);
		}
		public FormulaExpressContext formulaExpress(int i) {
			return getRuleContext(FormulaExpressContext.class,i);
		}
		public FormulaParamConstContext formulaParamConst() {
			return getRuleContext(FormulaParamConstContext.class,0);
		}
		public FormulaOperationContext formulaOperation() {
			return getRuleContext(FormulaOperationContext.class,0);
		}
		public FormulaFunctionContext formulaFunction() {
			return getRuleContext(FormulaFunctionContext.class,0);
		}
		public FormulaParamNumContext formulaParamNum() {
			return getRuleContext(FormulaParamNumContext.class,0);
		}
		public FormulaCELLLocContext formulaCELLLoc() {
			return getRuleContext(FormulaCELLLocContext.class,0);
		}
		public FormulaParamStringContext formulaParamString() {
			return getRuleContext(FormulaParamStringContext.class,0);
		}
		public FormulaExpressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaExpress; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaExpress(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaExpress(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaExpress(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaExpressContext formulaExpress() throws RecognitionException {
		return formulaExpress(0);
	}

	private FormulaExpressContext formulaExpress(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		FormulaExpressContext _localctx = new FormulaExpressContext(_ctx, _parentState);
		FormulaExpressContext _prevctx = _localctx;
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_formulaExpress, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(55);
				match(T__0);
				setState(56);
				formulaExpress(0);
				setState(57);
				match(T__1);
				}
				break;
			case 2:
				{
				setState(59);
				formulaParamConst();
				setState(60);
				formulaOperation();
				setState(61);
				formulaExpress(6);
				}
				break;
			case 3:
				{
				setState(63);
				formulaParamConst();
				}
				break;
			case 4:
				{
				setState(64);
				formulaFunction();
				}
				break;
			case 5:
				{
				setState(65);
				formulaParamNum();
				}
				break;
			case 6:
				{
				setState(66);
				formulaCELLLoc();
				}
				break;
			case 7:
				{
				setState(67);
				formulaParamString();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(76);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new FormulaExpressContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_formulaExpress);
					setState(70);
					if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
					setState(71);
					formulaOperation();
					setState(72);
					formulaExpress(9);
					}
					} 
				}
				setState(78);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class FormulaOperationContext extends ParserRuleContext {
		public TerminalNode OPERATE_GREATE() { return getToken(FormulaParser.OPERATE_GREATE, 0); }
		public TerminalNode OPERATE_GREATE_EQ() { return getToken(FormulaParser.OPERATE_GREATE_EQ, 0); }
		public TerminalNode OPERATE_LESS() { return getToken(FormulaParser.OPERATE_LESS, 0); }
		public TerminalNode OPERATE_LESS_EQ() { return getToken(FormulaParser.OPERATE_LESS_EQ, 0); }
		public TerminalNode OPERATE_EQ() { return getToken(FormulaParser.OPERATE_EQ, 0); }
		public TerminalNode OPERATE_NEQ() { return getToken(FormulaParser.OPERATE_NEQ, 0); }
		public TerminalNode OPERATE_PLUS() { return getToken(FormulaParser.OPERATE_PLUS, 0); }
		public TerminalNode OPERATE_MINUS() { return getToken(FormulaParser.OPERATE_MINUS, 0); }
		public TerminalNode OPERATE_DIVIDE() { return getToken(FormulaParser.OPERATE_DIVIDE, 0); }
		public TerminalNode OPERATE_multiply() { return getToken(FormulaParser.OPERATE_multiply, 0); }
		public FormulaOperationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formulaOperation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).enterFormulaOperation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FormulaListener ) ((FormulaListener)listener).exitFormulaOperation(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof FormulaVisitor ) return ((FormulaVisitor<? extends T>)visitor).visitFormulaOperation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormulaOperationContext formulaOperation() throws RecognitionException {
		FormulaOperationContext _localctx = new FormulaOperationContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_formulaOperation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPERATE_GREATE) | (1L << OPERATE_GREATE_EQ) | (1L << OPERATE_LESS) | (1L << OPERATE_LESS_EQ) | (1L << OPERATE_EQ) | (1L << OPERATE_PLUS) | (1L << OPERATE_multiply) | (1L << OPERATE_DIVIDE) | (1L << OPERATE_MINUS) | (1L << OPERATE_NEQ))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 9:
			return formulaExpress_sempred((FormulaExpressContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean formulaExpress_sempred(FormulaExpressContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\26T\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\3\2\3\2\5\2\33\n\2\3\3\3\3\3\3\5\3 \n\3\3\3\3\3\3\4\3\4\5\4&\n"+
		"\4\7\4(\n\4\f\4\16\4+\13\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n"+
		"\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\5\13G\n\13\3\13\3\13\3\13\3\13\7\13M\n\13\f\13\16\13P\13\13\3\f"+
		"\3\f\3\f\2\3\24\r\2\4\6\b\n\f\16\20\22\24\26\2\3\3\2\6\17\2S\2\32\3\2"+
		"\2\2\4\34\3\2\2\2\6)\3\2\2\2\b,\3\2\2\2\n.\3\2\2\2\f\60\3\2\2\2\16\62"+
		"\3\2\2\2\20\64\3\2\2\2\22\66\3\2\2\2\24F\3\2\2\2\26Q\3\2\2\2\30\33\5\4"+
		"\3\2\31\33\5\24\13\2\32\30\3\2\2\2\32\31\3\2\2\2\33\3\3\2\2\2\34\35\5"+
		"\n\6\2\35\37\7\3\2\2\36 \5\6\4\2\37\36\3\2\2\2\37 \3\2\2\2 !\3\2\2\2!"+
		"\"\7\4\2\2\"\5\3\2\2\2#%\5\b\5\2$&\7\5\2\2%$\3\2\2\2%&\3\2\2\2&(\3\2\2"+
		"\2\'#\3\2\2\2(+\3\2\2\2)\'\3\2\2\2)*\3\2\2\2*\7\3\2\2\2+)\3\2\2\2,-\5"+
		"\24\13\2-\t\3\2\2\2./\7\21\2\2/\13\3\2\2\2\60\61\7\26\2\2\61\r\3\2\2\2"+
		"\62\63\7\20\2\2\63\17\3\2\2\2\64\65\7\22\2\2\65\21\3\2\2\2\66\67\7\23"+
		"\2\2\67\23\3\2\2\289\b\13\1\29:\7\3\2\2:;\5\24\13\2;<\7\4\2\2<G\3\2\2"+
		"\2=>\5\f\7\2>?\5\26\f\2?@\5\24\13\b@G\3\2\2\2AG\5\f\7\2BG\5\4\3\2CG\5"+
		"\16\b\2DG\5\22\n\2EG\5\20\t\2F8\3\2\2\2F=\3\2\2\2FA\3\2\2\2FB\3\2\2\2"+
		"FC\3\2\2\2FD\3\2\2\2FE\3\2\2\2GN\3\2\2\2HI\f\n\2\2IJ\5\26\f\2JK\5\24\13"+
		"\13KM\3\2\2\2LH\3\2\2\2MP\3\2\2\2NL\3\2\2\2NO\3\2\2\2O\25\3\2\2\2PN\3"+
		"\2\2\2QR\t\2\2\2R\27\3\2\2\2\b\32\37%)FN";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}