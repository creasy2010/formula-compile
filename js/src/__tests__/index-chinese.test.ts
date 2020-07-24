/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2020/7/9
 **/
import {FormulaTSVisitor} from "../FormulaTSVisitor";
import {toJSON, formulaFormat, toggleRangeInfo} from "../util";

toggleRangeInfo();

describe('中英文场景', async() => {

  it('visitor处理',async()=>{
    let visitor  = new FormulaTSVisitor();
    for (let i = 0, iLen = formulas.length; i < iLen; i++) {
      let formula = formulas[i];
      if(!formula) {
        continue;
      }
      let timeFLag =`公式[${i}]耗时 长度:${formula?.length}`;
      console.time(timeFLag);
      try {

        let ast  =await visitor.toAst(formula);
        expect(ast).toMatchSnapshot('测试公式formulas['+i+']');
      } catch (err) {
        expect(jest.fn()).not.toBeCalled();
      }
      console.timeEnd(timeFLag);
    }
  })

});


let formulas:string[] = [
  `if（1+1>2，0，1）`
];
