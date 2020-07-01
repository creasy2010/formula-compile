// Generated from /Users/dong/yzfworkbench/formula-compile/java/Formula.g4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FormulaParser}.
 */
public interface FormulaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaUnit}.
	 * @param ctx the parse tree
	 */
	void enterFormulaUnit(FormulaParser.FormulaUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaUnit}.
	 * @param ctx the parse tree
	 */
	void exitFormulaUnit(FormulaParser.FormulaUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaFunction}.
	 * @param ctx the parse tree
	 */
	void enterFormulaFunction(FormulaParser.FormulaFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaFunction}.
	 * @param ctx the parse tree
	 */
	void exitFormulaFunction(FormulaParser.FormulaFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaParams}.
	 * @param ctx the parse tree
	 */
	void enterFormulaParams(FormulaParser.FormulaParamsContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaParams}.
	 * @param ctx the parse tree
	 */
	void exitFormulaParams(FormulaParser.FormulaParamsContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaParam}.
	 * @param ctx the parse tree
	 */
	void enterFormulaParam(FormulaParser.FormulaParamContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaParam}.
	 * @param ctx the parse tree
	 */
	void exitFormulaParam(FormulaParser.FormulaParamContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaFunctionName}.
	 * @param ctx the parse tree
	 */
	void enterFormulaFunctionName(FormulaParser.FormulaFunctionNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaFunctionName}.
	 * @param ctx the parse tree
	 */
	void exitFormulaFunctionName(FormulaParser.FormulaFunctionNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaParamConst}.
	 * @param ctx the parse tree
	 */
	void enterFormulaParamConst(FormulaParser.FormulaParamConstContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaParamConst}.
	 * @param ctx the parse tree
	 */
	void exitFormulaParamConst(FormulaParser.FormulaParamConstContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaParamNum}.
	 * @param ctx the parse tree
	 */
	void enterFormulaParamNum(FormulaParser.FormulaParamNumContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaParamNum}.
	 * @param ctx the parse tree
	 */
	void exitFormulaParamNum(FormulaParser.FormulaParamNumContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaParamString}.
	 * @param ctx the parse tree
	 */
	void enterFormulaParamString(FormulaParser.FormulaParamStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaParamString}.
	 * @param ctx the parse tree
	 */
	void exitFormulaParamString(FormulaParser.FormulaParamStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaCELLLoc}.
	 * @param ctx the parse tree
	 */
	void enterFormulaCELLLoc(FormulaParser.FormulaCELLLocContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaCELLLoc}.
	 * @param ctx the parse tree
	 */
	void exitFormulaCELLLoc(FormulaParser.FormulaCELLLocContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaExpress}.
	 * @param ctx the parse tree
	 */
	void enterFormulaExpress(FormulaParser.FormulaExpressContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaExpress}.
	 * @param ctx the parse tree
	 */
	void exitFormulaExpress(FormulaParser.FormulaExpressContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormulaParser#formulaOperation}.
	 * @param ctx the parse tree
	 */
	void enterFormulaOperation(FormulaParser.FormulaOperationContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormulaParser#formulaOperation}.
	 * @param ctx the parse tree
	 */
	void exitFormulaOperation(FormulaParser.FormulaOperationContext ctx);
}