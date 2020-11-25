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
    let formula=`IF(
              QUERY_SZJDXX(
                '733634444935020544',
                2020,
                6,
                '',
                '',
                '2',
                '1',
                '3200020003',
                '4',
              ) == '1',
              KMYE_DEBIT('733634444935020544', 2020, 6, '其他应收款') +
                KMYE_CREDIT('733634444935020544', 2020, 6, '其他应付款'),
              0,
            ) +0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0-0+0+0+0+0-0+0+0+0+0-0-0+0-0+0-0+0+0+0+0+0+((if(0,0,0)+1000)/100)
  `;//ok
    // let formula=`IF(11,"2000-00-00",aa(1,2,3,'ZCRQ'))`;
    // let formula=`$KMDZID$=GET_TOP_XJKMDZID($ZTDM$, $KJND_B$);UDEF_PZ_XJLL($ZTDM$,$KMDZID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','主营业务收入|SR/-|主营业务收入|ZC/+|其他业务收入|SR/-|其他业务收入|ZC/+|应收票据|SR/-|应收票据|ZC/+|应收账款|SR/-|应收账款|ZC/+|预收账款|SR/-|预收账款|ZC')`;

    let ast  =await visitor.toAst(formula);
    // console.log(JSON.stringify(ast,null,2));
    // expect(ast).toMatchSnapshot('测试公式formulas[]');
    const f = formulaFormat(ast);
    expect(f).toEqual(formula.replace(/\s+/g,""));
  })
});
