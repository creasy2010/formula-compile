/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2020/7/1
 **/


import * as antlr4 from  'antlr4';
import * as fse from 'fs-extra';
import {FormulaTSLexer} from './FormulaTSLexer';
import {FormulaTSParser} from './FormulaTSParser';
import {FormulaTSListener} from './FormulaTSListener';
import {ParseTree, ParseTreeWalker, TerminalNodeImpl} from "antlr4/tree/Tree";



export function toJSON(tree:ParseTree){
  let result  ={};
  traverse(tree,result);
  return result;
}



function traverse(tree:ParseTree,result){

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

export function parseFormula2Json(formulaStr:string){
  return toJSON(parseFormula(formulaStr));
}

export function walk(tree:ParseTree,listener:FormulaTSListener){
  let walker = new ParseTreeWalker();
  walker.walk(listener, tree);
}


/**
 * 解析公式字符串
 * @param formulaStr
 */
export function parseFormula(formulaStr:string):ParseTree{
  var chars = new antlr4.InputStream(formulaStr);
  let lexer = new FormulaTSLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
//用token生成parser
  var parser = new FormulaTSParser(tokens);

//生成语法树遍历监听器
  var listener = new FormulaTSListener(function(tree){
    console.log('parse final!!!!');
    // callback(tree);
  });
  // parser.addErrorListener(ConsoleErrorListener);
  //配置parser 生成语法树
  parser.buildParseTrees = true;
  var tree = parser.formulaUnit();
  return tree; 
}
