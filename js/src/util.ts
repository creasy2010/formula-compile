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
  debugger;
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
