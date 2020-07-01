// Generated from /Users/dong/ast/antlr4-execrse/1hello/java/formula/Formula.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FormulaLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, OPERATE_GREATE=4, OPERATE_GREATE_EQ=5, OPERATE_LESS=6, 
		OPERATE_LESS_EQ=7, OPERATE_EQ=8, OPERATE_PLUS=9, OPERATE_multiply=10, 
		OPERATE_DIVIDE=11, OPERATE_MINUS=12, OPERATE_NEQ=13, NUMBER=14, FORMULANAME=15, 
		STRING=16, CELLLoc=17, SheetName=18, WS=19, CONSTVAR=20;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "OPERATE_GREATE", "OPERATE_GREATE_EQ", "OPERATE_LESS", 
			"OPERATE_LESS_EQ", "OPERATE_EQ", "OPERATE_PLUS", "OPERATE_multiply", 
			"OPERATE_DIVIDE", "OPERATE_MINUS", "OPERATE_NEQ", "NUMBER", "FORMULANAME", 
			"STRING", "CELLLoc", "SheetName", "WS", "CONSTVAR"
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


	public FormulaLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Formula.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\26\u008c\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3"+
		"\6\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3"+
		"\r\3\r\3\16\3\16\3\16\3\17\5\17K\n\17\3\17\6\17N\n\17\r\17\16\17O\3\17"+
		"\5\17S\n\17\3\17\7\17V\n\17\f\17\16\17Y\13\17\3\20\6\20\\\n\20\r\20\16"+
		"\20]\3\21\3\21\7\21b\n\21\f\21\16\21e\13\21\3\21\3\21\3\22\3\22\3\22\3"+
		"\22\3\22\5\22n\n\22\3\22\3\22\3\22\6\22s\n\22\r\22\16\22t\3\22\3\22\3"+
		"\23\6\23z\n\23\r\23\16\23{\3\24\6\24\177\n\24\r\24\16\24\u0080\3\24\3"+
		"\24\3\25\3\25\6\25\u0087\n\25\r\25\16\25\u0088\3\25\3\25\2\2\26\3\3\5"+
		"\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21"+
		"!\22#\23%\24\'\25)\26\3\2\t\3\2\62;\6\2\62;C\\aac|\5\2\f\f\17\17))\3\2"+
		"C\\\7\2\62;C\\aac|\u4e02\u9fa7\5\2\13\f\17\17\"\"\5\2C\\aac|\2\u0096\2"+
		"\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2"+
		"\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2"+
		"\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2"+
		"\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\3+\3\2\2\2\5-\3\2\2\2\7/\3\2\2\2"+
		"\t\61\3\2\2\2\13\63\3\2\2\2\r\66\3\2\2\2\178\3\2\2\2\21;\3\2\2\2\23>\3"+
		"\2\2\2\25@\3\2\2\2\27B\3\2\2\2\31D\3\2\2\2\33F\3\2\2\2\35J\3\2\2\2\37"+
		"[\3\2\2\2!_\3\2\2\2#m\3\2\2\2%y\3\2\2\2\'~\3\2\2\2)\u0084\3\2\2\2+,\7"+
		"*\2\2,\4\3\2\2\2-.\7+\2\2.\6\3\2\2\2/\60\7.\2\2\60\b\3\2\2\2\61\62\7@"+
		"\2\2\62\n\3\2\2\2\63\64\7@\2\2\64\65\7?\2\2\65\f\3\2\2\2\66\67\7>\2\2"+
		"\67\16\3\2\2\289\7>\2\29:\7?\2\2:\20\3\2\2\2;<\7?\2\2<=\7?\2\2=\22\3\2"+
		"\2\2>?\7-\2\2?\24\3\2\2\2@A\7,\2\2A\26\3\2\2\2BC\7\61\2\2C\30\3\2\2\2"+
		"DE\7/\2\2E\32\3\2\2\2FG\7#\2\2GH\7?\2\2H\34\3\2\2\2IK\7/\2\2JI\3\2\2\2"+
		"JK\3\2\2\2KM\3\2\2\2LN\t\2\2\2ML\3\2\2\2NO\3\2\2\2OM\3\2\2\2OP\3\2\2\2"+
		"PR\3\2\2\2QS\7\60\2\2RQ\3\2\2\2RS\3\2\2\2SW\3\2\2\2TV\t\2\2\2UT\3\2\2"+
		"\2VY\3\2\2\2WU\3\2\2\2WX\3\2\2\2X\36\3\2\2\2YW\3\2\2\2Z\\\t\3\2\2[Z\3"+
		"\2\2\2\\]\3\2\2\2][\3\2\2\2]^\3\2\2\2^ \3\2\2\2_c\7)\2\2`b\n\4\2\2a`\3"+
		"\2\2\2be\3\2\2\2ca\3\2\2\2cd\3\2\2\2df\3\2\2\2ec\3\2\2\2fg\7)\2\2g\"\3"+
		"\2\2\2hi\7}\2\2ij\5%\23\2jk\7\177\2\2kl\7#\2\2ln\3\2\2\2mh\3\2\2\2mn\3"+
		"\2\2\2no\3\2\2\2op\7]\2\2pr\t\5\2\2qs\t\2\2\2rq\3\2\2\2st\3\2\2\2tr\3"+
		"\2\2\2tu\3\2\2\2uv\3\2\2\2vw\7_\2\2w$\3\2\2\2xz\t\6\2\2yx\3\2\2\2z{\3"+
		"\2\2\2{y\3\2\2\2{|\3\2\2\2|&\3\2\2\2}\177\t\7\2\2~}\3\2\2\2\177\u0080"+
		"\3\2\2\2\u0080~\3\2\2\2\u0080\u0081\3\2\2\2\u0081\u0082\3\2\2\2\u0082"+
		"\u0083\b\24\2\2\u0083(\3\2\2\2\u0084\u0086\7&\2\2\u0085\u0087\t\b\2\2"+
		"\u0086\u0085\3\2\2\2\u0087\u0088\3\2\2\2\u0088\u0086\3\2\2\2\u0088\u0089"+
		"\3\2\2\2\u0089\u008a\3\2\2\2\u008a\u008b\7&\2\2\u008b*\3\2\2\2\16\2JO"+
		"RW]cmt{\u0080\u0088\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}