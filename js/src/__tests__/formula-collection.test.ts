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
import {readFile,readFileSync} from  'fs-extra';
import {join} from 'path';

toggleRangeInfo();

// let formulas:string[] =readFileSync(join(__dirname,"test.all.formula.txt")).toString().split(/\n\r?/);


// describe('测试环境所有公式测试', () => {
//
//   it('all parse test',async()=>{
//     let visitor  = new FormulaTSVisitor();
//     for (let i = 0, iLen = formulas.length; i < iLen; i++) {
//     // for (let i = formulas.length-1, iLen = formulas.length; i < iLen; i++) {
//     //   console.log(`当前处理公式行号: ${i+1}`)
//       let formula = formulas[i];
//       try {
//         if(!formula) {
//           continue;
//         }
//         // let timeFLag =`公式[${i}]耗时 长度:${formula?.length}`;
//         // console.time(timeFLag);
//         let ast  =await visitor.toAst(formula);
//         // console.timeEnd(timeFLag);
//         // expect(ast).toMatchSnapshot('测试公式formulas['+i+']');
//       } catch (err) {
//         console.log(`公式解析出错:${formula}`)
//
//       }
//
//     }
//     // let tree  = parseFormula(formulas[2]);
//     // visitor.visit(tree);
//   })
// });



