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

describe('公式第二批', () => {

  it('visitor处理',async()=>{
    let visitor  = new FormulaTSVisitor();
    for (let i = 0, iLen = formulas.length; i < iLen; i++) {
    // for (let i = formulas.length-1, iLen = formulas.length; i < iLen; i++) {
      let formula = formulas[i];
      if(!formula) {
        continue;
      }
      let timeFLag =`公式[${i}]耗时 长度:${formula?.length}`;
      console.time(timeFLag);
      let ast  =await visitor.toAst(formula);
      console.timeEnd(timeFLag);
      expect(ast).toMatchSnapshot('测试公式formulas['+i+']');
    }
    // let tree  = parseFormula(formulas[2]);
    // visitor.visit(tree);
  })
});




let formulas:string[] = [
  `0-1+(-2)`,
  `0-1`,
  `(0-1+(-2))/1000`,
  `IF(
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
  `
  ,`IF(($KJND$*100+$KJQJ$)<=201812,IF((UDEF_QYXX('DJZCLX_DM',$QYID$)=='727'||UDEF_QYXX('DJZCLX_DM',$QYID$)=='708'),IF(($RPT_PERIOD$==1 &&_@T002+_@T004+[D10]+[D13]+[D20]+[D21]<30000.004) || ($RPT_PERIOD$==2 && QUERY_QY_ZCRQ_YXYF($QYID$,$KJND$,$KJQJ$)==1&&_@T002+_@T004+[D10]+[D13]+[D20]+[D21]+_@T010-UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','税务机关代开的增值税专用发票不含税销售额1@@本期数##服务、不动产和无形资产',9,0)-UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','税务机关代开的增值税专用发票不含税销售额@@本期数##服务、不动产和无形资产',9,0)<30000.004)|| ($RPT_PERIOD$==2 && QUERY_QY_ZCRQ_YXYF($QYID$,$KJND$,$KJQJ$)==2&&_@T002+_@T004+[D10]+[D13]+[D20]+[D21]+_@T010-UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','税务机关代开的增值税专用发票不含税销售额1@@本期数##服务、不动产和无形资产',9,0)-UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','税务机关代开的增值税专用发票不含税销售额@@本期数##服务、不动产和无形资产',9,0)<60000.004)|| ($RPT_PERIOD$==2 && (QUERY_QY_ZCRQ_YXYF($QYID$,$KJND$,$KJQJ$)==3||QUERY_QY_ZCRQ_YXYF($QYID$,$KJND$,$KJQJ$)==0)&&_@T002+_@T004+[D10]+[D13]+[D20]+[D21]+_@T010-UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','税务机关代开的增值税专用发票不含税销售额1@@本期数##服务、不动产和无形资产',9,0)-UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','税务机关代开的增值税专用发票不含税销售额@@本期数##服务、不动产和无形资产',9,0)<90000.004),_@T002+_@T004+UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','未达起征点销售额@@本期数##服务、不动产和无形资产',9,0),0),0),IF((UDEF_QYXX('DJZCLX_DM',$QYID$)=='727'||UDEF_QYXX('DJZCLX_DM',$QYID$)=='716'),IF(($RPT_PERIOD$==1 &&_@T001+_@T011+[C10]+[C15]+[C20]+[C21]+_@T002+_@T012+_@T004+[D10]+[D13]+[D20]+[D21]<100000.004)||($RPT_PERIOD$==2&&_@T001+_@T011+[C10]+[C15]+[C20]+[C21]+_@T009-UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','税务机关代开的增值税专用发票不含税销售额1@@本期数##货物及劳务',9,0)-UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','(三) 销售使用过的应税固定资产不含税销售额@@本期数##货物及劳务',9,0)+_@T002+_@T012+_@T004+[D10]+[D13]+[D20]+[D21]+_@T010-UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','税务机关代开的增值税专用发票不含税销售额1@@本期数##服务、不动产和无形资产',9,0)-UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','税务机关代开的增值税专用发票不含税销售额@@本期数##服务、不动产和无形资产',9,0)<300000.004),_@T002+_@T012+_@T004+UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'32001023','申报表(小规模纳税人适用)','未达起征点销售额@@本期数##服务、不动产和无形资产',9,0),0),0))`
  ,`IF((QUERY_SZJDXX($ZTDM$,$KJND$,$KJQJ$,'-1','','4','4')=='1'||QUERY_SZJDXX($ZTDM$,$KJND$,$KJQJ$,'-1','','4','4')=='2'),KMYE_DEBIT($ZTDM$,$KJND$,0,'2202')-IF(UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'22029997')>0,UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'22029997'),0)+KMYE_CREDIT($ZTDM$,$KJND$,0,'1123')+IF(UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'11239997')>0,0,UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'11239997')),UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'2202'))  IF(QUERY_SZJDXX($ZTDM$,$KJND$,$KJQJ$,'-1','','4','4')=='0',UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'2202')-UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'11239997'),KMYE_DEBIT($ZTDM$,$KJND$,$KJQJ$,'2202')-IF(UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'22029997')>0,UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'22029997'),0)+KMYE_CREDIT($ZTDM$,$KJND$,$KJQJ$,'1123')+IF(UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'11239997')>0,0,UDEF_KM('YE',$ZTDM$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'11239997')))`
  ,"获取发票指标(\"测试参数\",[E6])"
  ,`IF(11,'2000-00-00',aa(1,2,3,'ZCRQ'))`
  ,`ROUND(IF([E5]!=0,[D5]/([E5]==0 ? 1 : [E5]),0),2)`
  ,`$KMDZID$=GET_TOP_XJKMDZID($ZTDM$, $KJND_B$);UDEF_PZ_XJLL($ZTDM$,$KMDZID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','主营业务收入|SR/-|主营业务收入|ZC/+|其他业务收入|SR/-|其他业务收入|ZC/+|应收票据|SR/-|应收票据|ZC/+|应收账款|SR/-|应收账款|ZC/+|预收账款|SR/-|预收账款|ZC')`
];
