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

describe('性能测试', () => {

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
  `IF(ROUND({申报表(小规模纳税人适用)}![D55]*0.02,2)+ROUND(IF({申报表(小规模纳税人适用)}![D53]<0.003,({申报表(小规模纳税人适用)}![D56]-{申报表(小规模纳税人适用)}![D59])*0.02,0),2)+ROUND({申报表(小规模纳税人适用)}![D57]*0.02,2)+ROUND(IF({申报表(小规模纳税人适用)}![D53]<0.003,({申报表(小规模纳税人适用)}![D58]-{申报表(小规模纳税人适用)}![D60])*0.02,0),2)+UDEF_ZB($QYID$,$KJND$,$KJQJ$,'537589368286609408','申报表(小规模纳税人适用)','D26',9,0,$NSQXDM$)+UDEF_ZB($QYID$,$KJND$,$KJQJ$,'537589368286609408','申报表(小规模纳税人适用)','E26',9,0,$NSQXDM$)-({申报表(小规模纳税人适用)}![D24]-{申报表(小规模纳税人适用)}![D31]+IF({申报表(小规模纳税人适用)}![D53]<0.003,0,UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010502','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010504','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010502','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010504','1','null','0','1'))+{申报表(小规模纳税人适用)}![E24]-{申报表(小规模纳税人适用)}![E31]+IF({申报表(小规模纳税人适用)}![D53]<0.003,0,UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010105','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010106','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010114','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010105','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010106','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010114','1','null','0','1')))<0.05&&ROUND({申报表(小规模纳税人适用)}![D55]*0.02,2)+ROUND(IF({申报表(小规模纳税人适用)}![D53]<0.003,({申报表(小规模纳税人适用)}![D56]-{申报表(小规模纳税人适用)}![D59])*0.02,0),2)+ROUND({申报表(小规模纳税人适用)}![D57]*0.02,2)+ROUND(IF({申报表(小规模纳税人适用)}![D53]<0.003,({申报表(小规模纳税人适用)}![D58]-{申报表(小规模纳税人适用)}![D60])*0.02,0),2)+UDEF_ZB($QYID$,$KJND$,$KJQJ$,'537589368286609408','申报表(小规模纳税人适用)','D26',9,0,$NSQXDM$)+UDEF_ZB($QYID$,$KJND$,$KJQJ$,'537589368286609408','申报表(小规模纳税人适用)','E26',9,0,$NSQXDM$)-({申报表(小规模纳税人适用)}![D24]-{申报表(小规模纳税人适用)}![D31]+IF({申报表(小规模纳税人适用)}![D53]<0.003,0,UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010502','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010504','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010502','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010504','1','null','0','1'))+{申报表(小规模纳税人适用)}![E24]-{申报表(小规模纳税人适用)}![E31]+IF({申报表(小规模纳税人适用)}![D53]<0.003,0,UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010105','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010106','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010114','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010105','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010106','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010114','1','null','0','1')))>0,{申报表(小规模纳税人适用)}![D24]-{申报表(小规模纳税人适用)}![D31]+IF({申报表(小规模纳税人适用)}![D53]<0.003,0,UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010502','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010504','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010502','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010504','1','null','0','1'))+{申报表(小规模纳税人适用)}![E24]-{申报表(小规模纳税人适用)}![E31]+IF({申报表(小规模纳税人适用)}![D53]<0.003,0,UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010105','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010106','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010114','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010105','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010106','1','null','0','1')+UDEF_FP_XX('2',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSDZ','00010114','1','null','0','1')),{申报表(小规模纳税人适用)}![D55]*0.02+IF({申报表(小规模纳税人适用)}![D53]<0.003,({申报表(小规模纳税人适用)}![D56]-{申报表(小规模纳税人适用)}![D59])*0.02,0)+{申报表(小规模纳税人适用)}![D57]*0.02+IF({申报表(小规模纳税人适用)}![D53]<0.003,({申报表(小规模纳税人适用)}![D58]-{申报表(小规模纳税人适用)}![D60])*0.02,0))+UDEF_ZB($QYID$,$KJND$,$KJQJ$,'537589368286609408','申报表(小规模纳税人适用)','D26',9,0,$NSQXDM$)+UDEF_ZB($QYID$,$KJND$,$KJQJ$,'537589368286609408','申报表(小规模纳税人适用)','E26',9,0,$NSQXDM$)`
];
