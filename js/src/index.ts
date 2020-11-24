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
import {Recognizer} from "antlr4/Recognizer";
import {Token} from "antlr4/Token";

let astGen = new FormulaTSVisitor();

export async function toAst(formulaStr:string) {
  return astGen.toAst(formulaStr);
}

export function walk(tree:ParserRuleContext,listener:FormulaTSListener){
  let walker = new ParseTreeWalker();
  walker.walk(listener, tree);
}


/**
 * 解析公式字符串
 * @param formulaStr
 */
export async function parseFormula(formulaStr:string):Promise<ParserRuleContext>{
  return new Promise((resolve,reject)=>{

    var chars = new antlr4.InputStream(formulaStr);
    let lexer = new FormulaTSLexer(chars);
    // console.time('parseFormula:tokens')
    var tokens  = new antlr4.CommonTokenStream(lexer);
    // console.timeEnd('parseFormula:tokens')
    //tokens.getTokens(0,5)
    //@ts-ignore
    // console.log(`所有tokens如下 ::${tokens.getTokens(0,tokens.getNumberOfOnChannelTokens()).map(item=>`type[${item.type}]:${item.text}`)}`);
//用token生成parser
//     console.time('parseFormula:parser gen')
    var parser = new FormulaTSParser(tokens);
    // console.timeEnd('parseFormula:parser gen')

//生成语法树遍历监听器
    parser.addErrorListener({
      syntaxError:(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: any)=>{

       reject({
         type:"syntaxError",
         recognizer, offendingSymbol, line, column, msg, e
       });
      },
      reportAmbiguity:(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, exact: any, ambigAlts: any, configs: any)=>{

        // reject({
        //   type:"reportAmbiguity",
        //   recognizer, dfa, startIndex, stopIndex, exact, ambigAlts,configs
        // });
      },
      reportAttemptingFullContext:(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any)=>{
        // reject({
        //   type:"reportAttemptingFullContext",
        //   recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs
        // });
      },
      reportContextSensitivity:(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any)=>{

        // reject(
        //   {
        //     type:"reportContextSensitivity",
        //     recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs
        //   }
        // );
      },
    });
    //配置parser 生成语法树
    parser.buildParseTrees = true;
    var tree = parser.formulaUnit();
    resolve(tree);
  })
}
