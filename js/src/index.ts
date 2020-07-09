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
import {ParseTree, TerminalNodeImpl} from "antlr4/tree/Tree";


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
      line:token.line,
      startIndex:token.start,
      stopIndex:token.stop,
      column:token.column,
      type:token.type,
    };
    result.text =token.text;
  }else{
    let children = [];
    let name  = Object.getPrototypeOf(tree).constructor.name.replace(/Context$/,"");
    result[name] = children;
    if(tree?.children?.length>0){
      for (let i = 0, iLen = tree.children?.length; i < iLen; i++) {
        let child = tree.children[i];
        let childInfo={};
        children.push(childInfo);
        traverse(child,childInfo);
      }
    }
  }

}

/**
 * 解析公式字符串
 * @param formulaStr
 */
export function parseFormula(formulaStr:string){
  var chars = new antlr4.InputStream(formulaStr);
  let lexer = new FormulaTSLexer(chars)
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
