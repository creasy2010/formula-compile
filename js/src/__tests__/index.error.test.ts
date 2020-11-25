/**
 * @desc
 * 每一个测试用例都应该把错误信息发出来的
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2020/7/9
 **/
import {FormulaTSVisitor} from "../FormulaTSVisitor";
import {toJSON, formulaFormat, toggleRangeInfo} from "../util";

toggleRangeInfo();

describe('公式错误测试', () => {
  it('visitor处理',async()=>{
    let visitor  = new FormulaTSVisitor();
    for (let i = 0, iLen = formulas.length; i < iLen; i++) {
      let formula = formulas[i];
      let errorHandleFn =jest.fn();
      try{
        let ast = await visitor.toAst(formula);
        expect(ast).not.toBeNull();
      } catch(err){
        errorHandleFn(err)
      }
      expect(errorHandleFn).toBeCalledTimes(1);
    }
  })

});


let formulas:string[] = [
  // `0-1+(-2)//`,
  `IF((2020*100+6)<=202003,0,IF(IF((2020*100+6)`
  ,/*不能包含- 用_代替*/`取进项发票明细-根据开票事项()`
  ,/*不能"与'混用, 贪婪模式会导致问题发生*/`IF(11,"2000-00-00",aa(1,2,3,'ZCRQ'))`
];
