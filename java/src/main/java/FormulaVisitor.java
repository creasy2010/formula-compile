// Generated from /Users/dong/yzfworkbench/formula-compile/java/Formula.g4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link FormulaParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface FormulaVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaUnit}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaUnit(FormulaParser.FormulaUnitContext ctx);
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaFunction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaFunction(FormulaParser.FormulaFunctionContext ctx);
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaParams}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaParams(FormulaParser.FormulaParamsContext ctx);
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaParam}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaParam(FormulaParser.FormulaParamContext ctx);
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaFunctionName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaFunctionName(FormulaParser.FormulaFunctionNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaParamConst}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaParamConst(FormulaParser.FormulaParamConstContext ctx);
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaParamNum}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaParamNum(FormulaParser.FormulaParamNumContext ctx);
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaParamString}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaParamString(FormulaParser.FormulaParamStringContext ctx);
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaCELLLoc}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaCELLLoc(FormulaParser.FormulaCELLLocContext ctx);
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaExpress}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaExpress(FormulaParser.FormulaExpressContext ctx);
	/**
	 * Visit a parse tree produced by {@link FormulaParser#formulaOperation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormulaOperation(FormulaParser.FormulaOperationContext ctx);
}