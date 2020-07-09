import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.RuleContext;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.TerminalNodeImpl;

import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Formula {


    private static final Gson PRETTY_PRINT_GSON = new GsonBuilder().setPrettyPrinting().create();
    private static final Gson GSON = new Gson();

    public static String toJson(ParseTree tree) {
        return toJson(tree, true);
    }

    public static String toJson(ParseTree tree, boolean prettyPrint) {
        return prettyPrint ? PRETTY_PRINT_GSON.toJson(toMap(tree)) : GSON.toJson(toMap(tree));
    }


    public static Map<String, Object> toMap(ParseTree tree) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        traverse(tree, map);
        return map;
    }

    public static void traverse(ParseTree tree, Map<String, Object> map) {

        if (tree instanceof TerminalNodeImpl) {
            Token token = ((TerminalNodeImpl) tree).getSymbol();
            map.put("type", token.getType());
            map.put("text", Formula.unicodeStr2String(token.getText()));

            Map<String,Number> range =new HashMap<String, Number>();
            range.put("line",token.getLine());
            range.put("startIndex",token.getStartIndex());
            range.put("stopIndex",token.getStopIndex());
            range.put("column",token.getCharPositionInLine());
            range.put("type",token.getType());
            map.put("range", range);
        }else {
            List<Map<String, Object>> children = new ArrayList<Map<String, Object>>();
            String name = tree.getClass().getSimpleName().replaceAll("Context$", "");
            map.put(Character.toLowerCase(name.charAt(0)) + name.substring(1), children);

            for (int i = 0; i < tree.getChildCount(); i++) {
                Map<String, Object> nested = new LinkedHashMap<String, Object>();
                children.add(nested);
                traverse(tree.getChild(i), nested);
            }
        }
    }

    /**
     * unicode 转字符串
     * @param unicode 全为 Unicode 的字符串
     * @return
     */
    public static String unicode2String(String unicode) {
        StringBuffer string = new StringBuffer();
        String[] hex = unicode.split("\\\\u");

        for (int i = 1; i < hex.length; i++) {
            // 转换出每一个代码点
            int data = Integer.parseInt(hex[i], 16);
            // 追加成string
            string.append((char) data);
        }

        return string.toString();
    }


    /**
     * 含有unicode 的字符串转一般字符串
     * @param unicodeStr 混有 Unicode 的字符串
     * @return
     */
    public static String unicodeStr2String(String unicodeStr) {
        int length = unicodeStr.length();
        int count = 0;
        //正则匹配条件，可匹配“\\u”1到4位，一般是4位可直接使用 String regex = "\\\\u[a-f0-9A-F]{4}";
        String regex = "\\\\u[a-f0-9A-F]{1,4}";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(unicodeStr);
        StringBuffer sb = new StringBuffer();

        while(matcher.find()) {
            String oldChar = matcher.group();//原本的Unicode字符
            String newChar = unicode2String(oldChar);//转换为普通字符
            // int index = unicodeStr.indexOf(oldChar);
            // 在遇见重复出现的unicode代码的时候会造成从源字符串获取非unicode编码字符的时候截取索引越界等
            int index = matcher.start();

            sb.append(unicodeStr.substring(count, index));//添加前面不是unicode的字符
            sb.append(newChar);//添加转换后的字符
            count = index+oldChar.length();//统计下标移动的位置
        }
        sb.append(unicodeStr.substring(count, length));//添加末尾不是Unicode的字符
        return sb.toString();
    }


    private static  List<String> testFormulas = Arrays.asList(
            "ROUND()"
            ,"ROUND(0)"
            ,"IF($KJQJ$==3,0,$KJND$)"
            ,"ROUND(4.5,4,$QYID$)"
            ,"QUERY_SZJDXX($QYID$,$KJND$,$KJQJ$,'9','00090201','NULL','2',$SBSZID$,'2')"
            ,"IF([D10]>0,0,IF([E10]>0,UDEF_FPMX_XX_FWLX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'9','null','null','null','null','9','9','0','0','加工承揽'),0))"
            ,"IF({主表}![Q33]>=[F9],[F9],IF({主表}![Q33]>0,{主表}![Q33],0))"
            ,"IF($KJQJ$==3,ROUND((UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1001')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1002')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1012')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1101')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1121')+IF(QUERY_ZTXX_SFCFL($ZTDM$)=='0',UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1122'),KMYE_DEBIT($ZTDM$,$KJND$,0,'1122')+KMYE_CREDIT($ZTDM$,$KJND$,0,'2203'))+IF(QUERY_ZTXX_SFCFL($ZTDM$)=='0',UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1123'),KMYE_DEBIT($ZTDM$,$KJND$,0,'1123')+KMYE_CREDIT($ZTDM$,$KJND$,0,'2202'))+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1131')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1132')+IF(QUERY_ZTXX_SFCFL($ZTDM$)=='1',KMYE_DEBIT($ZTDM$,$KJND$,0,'1221')+KMYE_CREDIT($ZTDM$,$KJND$,0,'2241'),UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1221'))+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1401')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1402')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1403')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1404')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1405')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1407')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1408')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1411')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1412')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1413')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1421')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'4001')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'4002')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'4401')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'4101')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'4402')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1901')-UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'19010002') +UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1501')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1511')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1601')-UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1602')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1604')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1605')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1606')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1621')-UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1622')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1701')-UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1702')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'4301')-IF(QUERY_KJZZ($ZTDM$)==1,UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'43010002'),UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'43010001'))+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1801')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'19010002')+UDEF_KM('JF',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1506')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1704')-UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'14310001')-UDEF_KM('YE',$ZTDM$,0,$KJQJ_B$,$KJND_E$,0,'1102')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'4302')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1321')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'4403')+UDEF_KM('YE',$ZTDM$,$KJND_B$,0,$KJND_E$,0,'1406'))/10000,2),IF($SFCJ$==1,UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'21001008','A200000企业所得税月(季)度预缴纳税(A类)','季末资产总额(万元)@@本年累计金额',-1,0),UDEF_ZB($ZTDM$,$KJND$,$KJQJ$,'21001015','A200000企业所得税月(季)度预缴纳税(A类)','季末资产总额(万元)@@本年累计金额',-1,0)))"
            ,"UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010201','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010201','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010201','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010201','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010201','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010206','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010206','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010206','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010206','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010206','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010205','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010205','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010205','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010205','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010202','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010202','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010202','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010202','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010207','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010207','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010207','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010207','1','null','9','0')     +UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010212','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010212','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010212','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010212','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010212','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010213','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010213','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010213','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010213','1','null','9','0')"
            ,"UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010201','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010201','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010201','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010201','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010201','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010206','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010206','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010206','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010206','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010206','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010205','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010205','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010205','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010205','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010202','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010202','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010202','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010202','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010207','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010207','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010207','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010207','1','null','9','0')     +UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010212','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010212','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010212','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010212','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010212','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010213','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010213','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010213','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010213','1','null','9','0')"
            ,"UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010301','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010301','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010301','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010301','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010302','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010302','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010302','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010302','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010303','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010303','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010303','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010303','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010304','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010304','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010304','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010304','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010312','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010312','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010312','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010312','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010313','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010313','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010313','1','null','0','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010313','1','null','0','0')"
            ,"{附表一}![L8]+{附表一}![L9]+{附表一}![L10]+{附表一}![L11]+{附表一}![L12]"
            ,"{附表一}![N15]+{附表一}![N16]+{附表一}![N17]+{附表一}![N18]+{附表一}![N19]+{附表一}![N20]+{附表一}![N21]+{附表一}![N22]-{附表一}![N24]-{附表一}![N25]"
            ,"UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010211','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010210','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010211','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010210','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010210','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010211','1','null','9','0')"
            ,"{附表二}![H20]-UDEF_FP_JX('2','1','1','1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'null','ZZSZY','null','null','null')-UDEF_FP_JX('2','1','1','1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'null','JDCXS','null','null','null')"
            ,"IF(CJ_SFCJ($QYID$, $KJND$, $KJQJ$, $SBSZID$, $NSQXDM$)==0,UDEF_ZB($QYID$,$KJND$,$KJQJ$,'613392304798957568','主表','Q29',-1,0,$NSQXDM$),UDEF_ZB($QYID$,$KJND$,$KJQJ$,'559786832728948736','主表','Q29',-1,0,$NSQXDM$)) "
            ,"IF(0==0,0,0)"
            ,"[Q21]+[Q22]-[Q23]-[Q24]+[Q25]"
            ,"IF([Q34]+[Q35]-[Q36]>0,[Q34]+[Q35]-[Q36],0)"
            ,"IF(CJ_SFCJ($QYID$, $KJND$, $KJQJ$, $SBSZID$, $NSQXDM$)==0,UDEF_ZB($QYID$,$KJND$,$KJQJ$,'613392304798957568','主表','Q45',-1,0,$NSQXDM$),UDEF_ZB($QYID$,$KJND$,$KJQJ$,'559786832728948736','主表','Q45',-1,0,$NSQXDM$)) "
            ,"[Q46]+IF(CJ_SFCJ($QYID$, $KJND$, $KJQJ$, $SBSZID$, $NSQXDM$)==0,UDEF_ZB($QYID$,$KJND$,$KJQJ$,'613392304798957568','主表','W46',-1,0,$NSQXDM$),UDEF_ZB($QYID$,$KJND$,$KJQJ$,'559786832728948736','主表','W46',-1,0,$NSQXDM$)) "
            ,"IF(CJ_SFCJ($QYID$, $KJND$, $KJQJ$, $SBSZID$, $NSQXDM$)==0,UDEF_ZB($QYID$,$KJND$,$KJQJ$,'613392304798957568','主表','Q45',-1,0,$NSQXDM$),UDEF_ZB($QYID$,$KJND$,$KJQJ$,'559786832728948736','主表','Q45',-1,0,$NSQXDM$)) "
            ,"{附表二}![H20]-UDEF_FP_JX('2','1','1','1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'null','ZZSZY','null','null','null')-UDEF_FP_JX('2','1','1','1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'null','JDCXS','null','null','null')"
            ,"UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010306','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010305','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010306','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010305','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010305','1','null','9','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','WPSR','00010306','1','null','9','0')"
            ,"[Q12]+IF(CJ_SFCJ($QYID$, $KJND$, $KJQJ$, $SBSZID$, $NSQXDM$)==0,UDEF_ZB($QYID$,$KJND$,$KJQJ$,'613392304798957568','主表','W12',-1,0,$NSQXDM$),UDEF_ZB($QYID$,$KJND$,$KJQJ$,'559786832728948736','主表','W12',-1,0,$NSQXDM$))"
            ,"UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010201','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010201','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010201','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010201','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010205','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010205','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010205','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010206','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010206','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010206','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010206','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010207','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010207','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010207','1','null','1','0')  +UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010212','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010212','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','JDCXS','00010212','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010212','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSZY','00010213','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','ZZSPT','00010213','1','null','1','0')+UDEF_FP_XX('1',$QYID$,$KJND_B$,$KJQJ_B$,$KJND_E$,$KJQJ_E$,'1','GSTYJD','00010213','1','null','1','0')"
            ,"IF(CJ_SFCJ($QYID$, $KJND$, $KJQJ$, $SBSZID$, $NSQXDM$)==0,UDEF_ZB($QYID$,$KJND$,$KJQJ$,'613392304798957568','主表','AE41',-1,0,$NSQXDM$),UDEF_ZB($QYID$,$KJND$,$KJQJ$,'559786832728948736','主表','AE41',-1,0,$NSQXDM$))"

    );

    public static void main(String[] args) throws Exception {

        for (int i = 0; i < Formula.testFormulas.size(); i++) {
            FormulaLexer lexer = new FormulaLexer(CharStreams.fromString(Formula.testFormulas.get(i)));

            long startTime = System.currentTimeMillis(); //程序开始记录时间
            CommonTokenStream tokens = new CommonTokenStream(lexer);
//
            FileOutputStream outStream = new FileOutputStream("/Users/dong/yzfworkbench/formula-compile/java/snapshot/"+i+".json");
            OutputStreamWriter writer = new OutputStreamWriter(outStream, "UTF-8");
             String result  =Formula.toJson(new FormulaParser(tokens).formulaUnit());
            long endTime   = System.currentTimeMillis(); //程序结束记录时间
            System.out.println("公式 "+i+"用时"+(endTime - startTime)+"ms");
            writer.append(result);
            writer.close();
            outStream.close();
//            FormulaParser parser = new FormulaParser(tokens);
//            RuleContext tree = parser.formulaUnit();
//            parser.setBuildParseTree(true);
////            System.out.println("Vocabulary:"+parser.getVocabulary());
////            System.out.println("token :"+parser.getCurrentToken());
//            System.out.println("["+i+"]\\T:"+tree.toStringTree(parser));
        }
    }

}
