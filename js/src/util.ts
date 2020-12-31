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

let config ={
  isShowRange:true
}

export function toggleRangeInfo(flag?:boolean){
  if(flag ==undefined || flag == null) {
    config.isShowRange=!config.isShowRange
  }else {
    config.isShowRange = flag;
  }
}

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
  return config.isShowRange?{
    depth:ctx.depth(),
    start: getTokenInfo(ctx.start),
    stop: getTokenInfo(ctx.stop),
    _source: ctx.getText(),
  }:{ _source: ctx.getText()};
}

export function getTerminalNodeInfo(terminalNode:TerminalNodeImpl){
  let token  = terminalNode.getSymbol();

  return {
    "!":"TerminalNodeImpl",
    value:terminalNode.getText(),
    range:config.isShowRange?{
      // type:token.type,
      line:token.line,
      startIndex:token.start,
      stopIndex:token.stop,
      column:token.column,
      _source:terminalNode.getText()
    }:{_source:terminalNode.getText()}
  }
}
function traverse(tree:ParserRuleContext,result){

  if(tree instanceof TerminalNodeImpl){
    let token = tree.getSymbol();
    // result.token=token;

    if(config.isShowRange){
     result.range={
      type:token.type,
      line:token.line,
      startIndex:token.start,
      stopIndex:token.stop,
      column:token.column,
    };
    }
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
        if(formula){
          rawFormula += formatAtomicFormula(formula)
          if (index !== ast.formulas.length-1) {
            rawFormula += ';'
          }
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

    if(!formulaStrategy[type]){
      throw new Error('格式化为对应类型'+type);
    }

    return rawAtomicFormula + formulaStrategy[type](obj, newLine, space);
  }

  var formulaStrategy = {
    FormulaAssignExpress: (obj, newLine, space)=>{

      const varName =obj.varName
      const express =formatAtomicFormula(obj.express, false, space)
      // debugger;
      return `${varName}=${express}`;
    },
    FormulaTernaryExpression: (obj, newLine, space)=>{

      const conditionExp =formatAtomicFormula(obj.condition, false, space)
      const trueExp =formatAtomicFormula(obj.trueExp, false, space)
      const falseExp =formatAtomicFormula(obj.falseExp, false, space)
      return `${conditionExp}?${trueExp}:${falseExp}`;
    },
    FormulaRefTemplateFunction: (obj, newLine, space)=>{
      return `RefTemplate(${obj.refSheet.value},${obj.refCell.value})`;
    },
    FormulaParamNull:(obj, newLine, space)=>{
      return `null`
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
    FormulaLabelArgumentParamString: (obj, newLine, space)=>{
      return `'#${obj.argumentName}#:${obj.value}'`;
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
