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
    // let formula=`IF((QUERY_SZJDXX($ZTDM$,$KJND$,$KJQJ$,'-1','','4','4')=='1'||QUERY_SZJDXX($ZTDM$,$KJND$,$KJQJ$,'-1','','4','4')=='2'),KMYE_DEBIT($ZTDM$,$KJND$,0,'2202')-IF(UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'22029997')>0,UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'22029997'),0)+KMYE_CREDIT($ZTDM$,$KJND$,0,'1123')+IF(UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'11239997')>0,0,UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'11239997')),UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'2202'))  IF(QUERY_SZJDXX($ZTDM$,$KJND$,$KJQJ$,'-1','','4','4')=='0',UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'2202')-UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'11239997'),KMYE_DEBIT($ZTDM$,$KJND$,$KJQJ$,'2202')-IF(UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'22029997')>0,UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'22029997'),0)+KMYE_CREDIT($ZTDM$,$KJND$,$KJQJ$,'1123')+IF(UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'11239997')>0,0,UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'11239997')))`;
    let formula=`IF(1==1,0,1)IF(1==1,0,1)`;

    let ast  =await visitor.toAst(formula);
    // expect(ast).toMatchSnapshot('测试公式formulas[]');
    const f = formulaFormat(ast);
    expect(f).toEqual(formula.replace(/\s+/g,""));
  })



  it('单个用例2',async()=>{
    let visitor  = new FormulaTSVisitor();
    let formula=`$KMDZID$=GET_TOP_XJKMDZID($ZTDM$, $KJND_B$);UDEF_PZ_XJLL($ZTDM$,$KMDZID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','主营业务收入|SR/-|主营业务收入|ZC/+|其他业务收入|SR/-|其他业务收入|ZC/+|应收票据|SR/-|应收票据|ZC/+|应收账款|SR/-|应收账款|ZC/+|预收账款|SR/-|预收账款|ZC/+|BQ0028|SR/-|BQ0028|ZC')`;

    let ast  =await visitor.toAst(formula);
    expect(ast).toMatchSnapshot();
    const f = formulaFormat(ast);
    expect(f).toEqual(formula.replace(/\s+/g,""));
  })
});
