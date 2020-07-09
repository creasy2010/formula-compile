/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2020/7/9
 **/
import {ParseTreeVisitor, TerminalNodeImpl} from 'antlr4/tree/Tree';
import {parseFormula} from './index';
import {ParserRuleContext} from 'antlr4';
import {getRange, getRangeInfo, getTerminalNodeInfo, getTokenInfo} from './util';

export interface FormulaAst {
  [name: string]: any;
}

/**
 * 转换为ast
 */
export class FormulaTSVisitor extends ParseTreeVisitor {

  constructor() {
    super();
  }

  toAst(formula: string): FormulaAst {
    let context = parseFormula(formula);
     return this.visit(context);
  }

  visitFormulaUnit(ctx: ParserRuleContext) {
    return {
      '!': 'FormulaUnit',
      range: getRangeInfo(ctx),
      formulas: this.visitChildren(ctx),
    };
  }

  // Visit a parse tree produced by FormulaTSParser#formulaFunction.
  visitFormulaFunction(ctx) {
    let params=[];
    if( ctx.children.length > 3 && ctx.children[2].children) {
      params = ctx.children[2].children?.map(item=>{
        if(item instanceof TerminalNodeImpl) {
          return getTerminalNodeInfo(item);
        } else {
          return this.visit(item)
        }
      }).filter(item=>!!item)
    }

    return {
      '!': 'FormulaFunction',
      range: getRangeInfo(ctx),
      name:this.visit(ctx.children[0]),
      params
    };
  }

  // Visit a parse tree produced by FormulaTSParser#formulaParams.
  visitFormulaParams(ctx) {
    debugger;
    return this.visitChildren(ctx.children)
  }

  // Visit a parse tree produced by FormulaTSParser#formulaParam.
  visitFormulaParam(ctx) {
    debugger;
    return {
      '!': 'FormulaParam',
      range: getRangeInfo(ctx),
      content:this.visit(ctx.children[0])
    }
  }

  // Visit a parse tree produced by FormulaTSParser#formulaFunctionName.
  visitFormulaFunctionName(ctx:ParserRuleContext) {
    return ctx.getText();
  }

  // Visit a parse tree produced by FormulaTSParser#formulaParamConst.
  visitFormulaParamConst(ctx:ParserRuleContext) {
    return {
      '!': 'FormulaParamConst',
      range: getRangeInfo(ctx),
      value:ctx.getText()
    }
  }

  // Visit a parse tree produced by FormulaTSParser#formulaParamNum.
  visitFormulaParamNum(ctx) {
    return {
      '!': 'FormulaParamNum',
      range: getRangeInfo(ctx),
      value:ctx.getText()
    }
  }

  // Visit a parse tree produced by FormulaTSParser#formulaParamString.
  visitFormulaParamString(ctx) {
    return {
      '!': 'FormulaParamString',
      range: getRangeInfo(ctx),
      value:ctx.getText()
    }
  }

  // Visit a parse tree produced by FormulaTSParser#formulaCELLLoc.
  visitFormulaCELLLoc(ctx) {
    return {
      '!': 'FormulaCELLLoc',
      range: getRangeInfo(ctx),
      value:ctx.getText()
    };
  }

  // Visit a parse tree produced by FormulaTSParser#formulaExpress.
  visitFormulaExpress(ctx) {
    // TODO dong 2020/7/9 ast 解析的有问题.
    return {
      '!': 'FormulaExpress',
      range: getRangeInfo(ctx),
      express:this.visit(ctx.children),
    };
  }

  // Visit a parse tree produced by FormulaTSParser#formulaOperation.
  visitFormulaOperation(ctx) {
    return {
      '!': 'FormulaOperation',
      range: getRangeInfo(ctx),
      value:ctx.getText()
    };
  }


// Visit a parse tree produced by FormulaTSParser#skipFuncLBracket.
  visitSkipFuncLBracket(ctx) {
    return ;
  };


// Visit a parse tree produced by FormulaTSParser#skipFuncRBracket.
  visitSkipFuncRBracket(ctx) {
    return ;
  };


// Visit a parse tree produced by FormulaTSParser#skipParamComma.
  visitSkipParamComma(ctx) {
    return ;
  };


}
