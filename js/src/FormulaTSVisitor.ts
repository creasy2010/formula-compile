/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2020/7/9
 **/
import {ParseTreeVisitor, TerminalNodeImpl} from 'antlr4/tree/Tree';
import {ParserRuleContext} from 'antlr4';
import { getRangeInfo, getTerminalNodeInfo, getTokenInfo} from './util';

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

 async toAst(formula: string): Promise<FormulaAst> {
    let parse=require('./index').parseFormula;
    // console.time('vistor:parse');
    let context = await parse(formula);
   // console.timeEnd('vistor:parse');
     return this.visit(context);
  }

  visitFormulaUnit(ctx: ParserRuleContext) {

    return {
      '!': 'FormulaUnit',
      range: getRangeInfo(ctx),
      formulas: this.visitChildren(ctx).filter(item=>{
        return !!item;
      }),
    };
  }

  // Visit a parse tree produced by FormulaTSParser#formulaIfFunction.
  visitFormulaIfFunction (ctx) {
    let [condition,thenStatement,elseStatement]  = this.visit(ctx.children[2].children).filter(item=>!!item);

    return {
      '!': 'FormulaIfFunction',
      range: getRangeInfo(ctx),
      name:ctx.children[0].getText(),
      condition,
      thenStatement,
      elseStatement
    };
  };

  // Visit a parse tree produced by FormulaTSParser#formulaRefTemplateFunction.
  visitFormulaRefTemplateFunction(ctx) {
    return {
      '!': 'FormulaRefTemplateFunction',
      range: getRangeInfo(ctx),
      name:ctx.children[0].getText(),
      refSheet:{
        range:getTerminalNodeInfo(ctx.children[2]),
        value:ctx.children[2].getText()
      },
      refCell:{
        range:getTerminalNodeInfo(ctx.children[4]),
        value:ctx.children[4].getText()
      }
    };
  };

  visitFormulaAssignExpress(ctx){
    return {
      '!': 'FormulaAssignExpress',
      range: getRangeInfo(ctx),
      varName:ctx.children[0].getText(),
      express:this.visit(ctx.children[2])
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
    return this.visitChildren(ctx.children)
  }

  // Visit a parse tree produced by FormulaTSParser#formulaParam.
  visitFormulaParam(ctx) {
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
  visitFormulaParamNum(ctx:ParserRuleContext) {

    return {
      '!': 'FormulaParamNum',
      range: getRangeInfo(ctx),
      value:ctx.getText()
    }
  }

  // Visit a parse tree produced by FormulaTSParser#formulaParamString.
  visitFormulaParamString(ctx:ParserRuleContext) {
    let content =ctx.getText();
    return {
      '!': 'FormulaParamString',
      range: getRangeInfo(ctx),
      value:content.substring(1,content.length-1)
    }
  }


// Visit a parse tree produced by FormulaTSParser#formulaParamNull.
  visitFormulaParamNull(ctx) {
    return {
      '!': 'FormulaParamNull',
      range: getRangeInfo(ctx),
      value:ctx.getText()
    };
  }

  // Visit a parse tree produced by FormulaTSParser#formulaCELLLoc.
  visitFormulaCELLLoc(ctx:ParserRuleContext) {
    let cellLoc = null , sheetName=null;
     if(ctx.getChildCount()===1){
       let cellStr:string = ctx.getChild(0).getText();
       cellLoc=cellStr.substr(1,cellStr.length-2);
     } else if(ctx.getChildCount()===2){
        let sheetStr:string = ctx.getChild(0).getText();
        sheetName=sheetStr.substr(1,sheetStr.length-3);
       let cellStr:string = ctx.getChild(1).getText();
       cellLoc=cellStr.substr(1,cellStr.length-2);
     }else{
       throw new Error('未知语法格式');
     }

    return {
      '!': 'FormulaCELLLoc',
      range: getRangeInfo(ctx),
      cellLoc,
      sheetName,
    };


  }
//公式模板引用位置.
  visitFormulaCELLTPLLoc(ctx) {

    let cellLoc=ctx.children[0].getText().replace("_@","");
    return {
      '!': 'FormulaCELLTPLLoc',
      range: getRangeInfo(ctx),
      cellLoc,
    };
  };

  // Visit a parse tree produced by FormulaTSParser#formulaExpress.
  visitFormulaExpress(ctx) {
    // TODO dong 2020/7/9 ast 解析的有问题.

    if(ctx.getChildCount()===1) {
      return {
        '!': 'FormulaExpress',
        range: getRangeInfo(ctx),
        express:this.visit(ctx.children),
      };
``    } else if(ctx.getChildCount()===5 && ctx.children[1].getText()==='?' && ctx.children[3].getText()===':') {
      //三元表达式;

      return  {
          '!': 'FormulaTernaryExpression',
          range: getRangeInfo(ctx),
          condition:this.visit(ctx.children[0]),
          trueExp:this.visit(ctx.children[2]),
          falseExp:this.visit(ctx.children[4]),
        }
    } else if(ctx.getChildCount()===3) {
      //二元运算;
      // if(!this.visit(ctx.children[0])) {
      //   debugger;
      // }
      return {
        '!': 'FormulaBinaryOperationExpress',
        range: getRangeInfo(ctx),
        leftExp:this.visit(ctx.children[0]),
        operate:getTerminalNodeInfo(ctx.children[1]),
        rightExp:this.visit(ctx.children[2]),
      };
    } else {
      throw new Error('未知表达式'+ ctx.getText());
    }

  }


// Visit a parse tree produced by FormulaTSParser#formulaBracketExpress.
  visitFormulaBracketExpress (ctx) {
    let express = ctx.children.slice(1,ctx.children.length-1).map(item=>this.visit(item));

    return {
      '!': 'FormulaBracketExpress',
      range: getRangeInfo(ctx),
      express:express,
    };
  };



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
