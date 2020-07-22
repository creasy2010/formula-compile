/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2020/7/1
 **/


import * as antlr4 from  'antlr4';
import {FormulaTSLexer} from './FormulaTSLexer';
import {FormulaTSParser} from './FormulaTSParser';
import {FormulaTSListener} from './FormulaTSListener';
import {ParseTree, ParseTreeWalker, TerminalNodeImpl} from "antlr4/tree/Tree";
import {ParserRuleContext} from "antlr4";
import {toJSON} from "./util";
import {FormulaTSVisitor} from "./FormulaTSVisitor";

let astGen = new FormulaTSVisitor();

export function toAst(formulaStr:string) {
  return astGen.toAst(formulaStr);
}

export function parseFormula2Json(formulaStr:string){
  return toJSON(parseFormula(formulaStr));
}

export function walk(tree:ParserRuleContext,listener:FormulaTSListener){
  let walker = new ParseTreeWalker();
  walker.walk(listener, tree);
}


/**
 * 解析公式字符串
 * @param formulaStr
 */
export function parseFormula(formulaStr:string):ParserRuleContext{
  var chars = new antlr4.InputStream(formulaStr);
  let lexer = new FormulaTSLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  //tokens.getTokens(0,5)
  //@ts-ignore
  // console.log(`所有tokens如下 ::${tokens.getTokens(0,tokens.getNumberOfOnChannelTokens()).map(item=>`type[${item.type}]:${item.text}`)}`);
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
