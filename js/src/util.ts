import {CommonToken, ParserRuleContext, Token} from "antlr4";
import {TerminalNodeImpl} from "antlr4/tree/Tree";

/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2020/7/9
 **/



export function toJSON(tree:ParserRuleContext){
  let result  ={};
  traverse(tree,result);
  return result;
}


export function getTokenInfo(token:Token){
  return {
    // type:token.type,
    line:token.line,
    start:token.start,
    stop:token.stop,
    column:token.column,
  };
}


export function getRangeInfo(ctx:ParserRuleContext){

  // return "todo";
  return {
    depth:ctx.depth(),
    start: getTokenInfo(ctx.start),
    stop: getTokenInfo(ctx.stop),
    _source: ctx.getText(),
  }
}

export function getTerminalNodeInfo(terminalNode:TerminalNodeImpl){
  let token  = terminalNode.getSymbol();

  return {
    "!":"TerminalNodeImpl",
    value:terminalNode.getText(),
    range:{
      // type:token.type,
      line:token.line,
      startIndex:token.start,
      stopIndex:token.stop,
      column:token.column,
      _source:terminalNode.getText()
    }
  }
}
function traverse(tree:ParserRuleContext,result){

  if(tree instanceof TerminalNodeImpl){
    let token = tree.getSymbol();
    // result.token=token;
    result.range={
      type:token.type,
      line:token.line,
      startIndex:token.start,
      stopIndex:token.stop,
      column:token.column,
    };
    result.text =token.text;
  }else{
    let children = [];
    let name  = Object.getPrototypeOf(tree).constructor.name.replace(/Context$/,"");
    result[name] = children;
    //@ts-ignore
    if(tree?.children?.length>0){
      //@ts-ignore
      for (let i = 0, iLen = tree.children?.length; i < iLen; i++) {
        //@ts-ignore
        let child = tree.children[i];
        let childInfo={
          type:name,
        };
        children.push(childInfo);
        traverse(child,childInfo);
      }
    }
  }

}

export const formulaFormat = (()=>{
  const format = (ast)=>{
    let rawFormula = '';
    if (ast && Object.prototype.toString.call(ast.formulas) === "[object Array]") {
      ast.formulas.forEach((formula, index)=>{
        rawFormula += formatAtomicFormula(formula)
        if (index !== ast.formulas.length-1) {
          rawFormula += ';'
        }
      })
    }
    return rawFormula;
  }
  const formatAtomicFormula = (obj, newLine=false, space='\t')=>{
    let rawAtomicFormula = '';
    if (newLine) {
      // rawAtomicFormula += '\n' + space;
      // space += '\t';  //处理缩进层级显示
    }
    if(!obj){
      return rawAtomicFormula;
    }
    if (typeof obj === 'string') {
      return rawAtomicFormula;
    }
    const name = obj.name;
    const type = obj['!'];
    return rawAtomicFormula + formulaStrategy[type](obj, newLine, space);
  }

  var formulaStrategy = {
    FormulaRefTemplateFunction: (obj, newLine, space)=>{
      return `RefTemplate(${obj.refSheet.value},${obj.refCell.value})`;
    },
    FormulaIfFunction: (obj, newLine, space)=>{
      let rawAtomicFormula = '';
      rawAtomicFormula += `IF(`;
      const leftExp = formatAtomicFormula(obj.condition.content, false, space);
      const thenExp = formatAtomicFormula(obj.thenStatement.content, true, space);
      const elseExp = formatAtomicFormula(obj.elseStatement.content, true, space);
      rawAtomicFormula += `${leftExp},${thenExp},${elseExp})`;
      return rawAtomicFormula;
    },
    FormulaBracketExpress: (obj, newLine, space)=>{
      let rawAtomicFormula = '';
      rawAtomicFormula += `(`;
      obj.express.forEach(exp=>{
        rawAtomicFormula += formatAtomicFormula(exp, false, space);
      })
      rawAtomicFormula += `)`;
      return rawAtomicFormula;
    },
    FormulaBinaryOperationExpress: (obj, newLine, space)=>{
      let rawAtomicFormula = '';
      rawAtomicFormula += `${formatAtomicFormula(obj.leftExp, false, space)}`;
      if(obj.operate){
        if (obj.operate.value === '+' || obj.operate.value === '-' || obj.operate.value === '*' || obj.operate.value === '/') {
          // rawAtomicFormula += '\n\t';
        }
        rawAtomicFormula += `${obj.operate.value}`;
      }
      if(obj.rightExp){
        rawAtomicFormula += `${formatAtomicFormula(obj.rightExp, false, space)}`;
      }
      return rawAtomicFormula;
    },
    FormulaParamString: (obj, newLine, space)=>{
      return `'${obj.value}'`;
    },
    FormulaParamConst: (obj, newLine, space)=>{
      return `${obj.value}`;
    },
    FormulaParamNum: (obj, newLine, space)=>{
      return `${obj.value}`;
    },
    FormulaExpress: (obj, newLine, space)=>{
      let rawAtomicFormula = '';
      obj.express.forEach(exp=>{
        rawAtomicFormula += formatAtomicFormula(exp, newLine, space);
      })
      return rawAtomicFormula;
    },
    FormulaCELLLoc: (obj, newLine, space)=>{
      let rawAtomicFormula = '';
      if (obj.sheetName) {
        rawAtomicFormula += `{${obj.sheetName}}!`;
      }
      if (obj.cellLoc) {
        rawAtomicFormula += `[${obj.cellLoc}]`;
      }
      return rawAtomicFormula;
    },
    FormulaFunction: (obj, newLine,space)=>{
      let rawAtomicFormula = '';
      const name = obj.name;      
      if (typeof name === 'string') {
        rawAtomicFormula += `${name}(`;
        obj.params.forEach((param, paramIndex)=>{
            const paramRes = formatAtomicFormula(param.content, false, space);
            if (obj.params.length === 1) {
              rawAtomicFormula += `${paramRes}`;
            }else if (paramIndex===0) {
              rawAtomicFormula += `${paramRes},`;
            }else if(paramIndex === obj.params.length -1){
              rawAtomicFormula += `${paramRes}`;
            }else{
              rawAtomicFormula += `${paramRes},`;
            }
        })
        rawAtomicFormula += `)`;
      }
      return rawAtomicFormula;
    }
  }

  return format;
})()