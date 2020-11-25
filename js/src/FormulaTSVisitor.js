// Generated from /Users/dong/yzfworkbench/formula-compile/java/FormulaTS.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FormulaTSParser.

function FormulaTSVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FormulaTSVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FormulaTSVisitor.prototype.constructor = FormulaTSVisitor;

// Visit a parse tree produced by FormulaTSParser#formulaUnit.
FormulaTSVisitor.prototype.visitFormulaUnit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaFunction.
FormulaTSVisitor.prototype.visitFormulaFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaParams.
FormulaTSVisitor.prototype.visitFormulaParams = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaParam.
FormulaTSVisitor.prototype.visitFormulaParam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaExpress.
FormulaTSVisitor.prototype.visitFormulaExpress = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaBracketExpress.
FormulaTSVisitor.prototype.visitFormulaBracketExpress = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaIfFunction.
FormulaTSVisitor.prototype.visitFormulaIfFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaRefTemplateFunction.
FormulaTSVisitor.prototype.visitFormulaRefTemplateFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaAssignExpress.
FormulaTSVisitor.prototype.visitFormulaAssignExpress = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaFunctionName.
FormulaTSVisitor.prototype.visitFormulaFunctionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaParamConst.
FormulaTSVisitor.prototype.visitFormulaParamConst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaParamNum.
FormulaTSVisitor.prototype.visitFormulaParamNum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaParamString.
FormulaTSVisitor.prototype.visitFormulaParamString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaParamNull.
FormulaTSVisitor.prototype.visitFormulaParamNull = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaCELLLoc.
FormulaTSVisitor.prototype.visitFormulaCELLLoc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#formulaCELLTPLLoc.
FormulaTSVisitor.prototype.visitFormulaCELLTPLLoc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#skipFuncLBracket.
FormulaTSVisitor.prototype.visitSkipFuncLBracket = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#skipFuncRBracket.
FormulaTSVisitor.prototype.visitSkipFuncRBracket = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaTSParser#skipParamComma.
FormulaTSVisitor.prototype.visitSkipParamComma = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FormulaTSVisitor = FormulaTSVisitor;