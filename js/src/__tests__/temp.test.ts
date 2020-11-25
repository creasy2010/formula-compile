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

describe('临时测试', () => {

  it('单个用例',async()=>{
    let visitor  = new FormulaTSVisitor();
    // let formula=`IF([E5]!=0,[D5]/([E5]==0 ? 1 : [E5]),0)`;
    let formula=`$KMDZID$=GET_TOP_XJKMDZID($ZTDM$, $KJND_B$);UDEF_PZ_XJLL($ZTDM$,$KMDZID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','主营业务收入|SR/-|主营业务收入|ZC/+|其他业务收入|SR/-|其他业务收入|ZC/+|应收票据|SR/-|应收票据|ZC/+|应收账款|SR/-|应收账款|ZC/+|预收账款|SR/-|预收账款|ZC')`;

    let ast  =await visitor.toAst(formula);
    console.log(JSON.stringify(ast,null,2));
    // expect(ast).toMatchSnapshot('测试公式formulas[]');
    const f = formulaFormat(ast);
    expect(f).toEqual(formula.replace(/\s+/g,""));
  })
});
