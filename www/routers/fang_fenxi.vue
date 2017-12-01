<style>
    body {
        margin: 0 !important;
        padding: 0 !important;
    }
    .cwkz{font-size: 0.38rem !important;font-weight: 900;padding-top: 0.5rem !important;margin: auto;text-align:center;}
    .sssj{color: #999999;margin-top: 0.2rem !important;margin: auto;width: 1.5rem;}
    .fyfxhx{width: 1.6rem;float: left;margin-left: 0.2rem;margin-top: 0.4rem;font-size:0.24rem;border-radius:5px;border: 1px solid rgb(137,217,226);line-height: .4rem !important;border-bottom: 1px solid rgb(137,217,226) !important;}
    .ys_item_con{width: 1.6rem;}
    /*.hxff{color: rgb(166,166,166);}*/
    .hxff{color: rgb(69,110,114);}
    .qv{width: 1.6rem;text-align: center;}
    /*.qvdjzq{color: rgb(166,166,166);}
    .pfmdjzq{color: rgb(166,166,166);}*/
    .qvdjzq{color: rgb(69,110,114);}
    .pfmdjzq{color: rgb(69,110,114);}
    /*.pfmdjzh{color: rgb(254,122,14);}*/
    .pfmdjzh{color: rgb(255,255,255);}
    /*.fyfxhxdjzh{background-color: rgb(255,214,170) !important;}*/
    .fyfxhxdjzh{background-color: rgb(69,110,114) !important;}
    .fyfxhxdjzq{background-color: rgb(255,255,255) !important;}
    /*.fyfxhxdjzq{background-color: rgb(242,242,242) !important;}*/
    /*.kztske{background-color:rgb(255,214,170);color:rgb(254,122,14);}*/
    .kztske{background-color:rgb(69,110,114);color:rgb(255,255,255);}
    /*.kztszdcss{text-align: center;border: 1.5px solid rgb(254,122,14);line-height: 0.7rem;}*/
    .kztszdcss{text-align: center;border: 1px solid rgb(69,110,114);line-height: 0.6rem;}
    .danwei{clear: both;margin-top: 0.2rem;font-size: 0.32rem;width: 1.6rem;float: right;color:rgb(130,130,130);}
    .jindtname{height:1rem !important;line-height:1rem;width:2.8rem !important;}
    .jindt{height:0.7rem !important;border: 1px solid black;line-height:0.7rem;margin-right:0rem !important;width:3.8rem !important;margin-top: 0.15rem;}
    .jindtpfb{border: 1px solid red;line-height: 0.5rem;height: 0.5rem;margin-top: 0.08rem;width: 50%;}
    .mysjimg{width:1.5rem;margin-top: 1rem;margin-left: 3rem;}
    .meiyshjzit{margin-top: 0.5rem;margin-left: 2rem;color: rgb(254,122,14);height: 3rem;   }
    .fyfexiimg{line-height: .4rem !important;}
    .fyfxxzl{width: 1.6rem;float: left;margin-left: 0.2rem;margin-top: 0.4rem;font-size:0.24rem;border-radius:5px;border: 0px solid rgb(137,217,226);border-bottom: 0px solid rgb(137,217,226) !important;}
</style>
<template>
    <div>
        <div style="background-color: white !important;">
            <div class="cwkz"><span></span>空置房源数据展示</div>
            <div class="sssj">实时数据</div>
            <div v-if="manxsh">
                <div><img class="mysjimg" src="../resources/images/icons/fangzi.png"></div>
                <div class="meiyshjzit">
                    <div>抱歉！没有找到符合条件的</div>
                    <div>相关数据，换个条件试试吧~</div>
                </div>
            </div>
            <div v-else id="main" style="width:100%;height:8.5rem;"></div>
        </div>
        <div style="background-color: white !important;margin-top: 0.2rem;">
            <div class="cwkz" style="width: 5.3rem !important;"><span></span>已入住企业类型占比</div>
            <div class="sssj">实时数据</div>
            <div v-if="manxsh1">
                <div><img class="mysjimg" src="../resources/images/icons/fangzi.png"></div>
                <div class="meiyshjzit">
                    <div>抱歉！没有找到符合条件的</div>
                    <div>相关数据，换个条件试试吧~</div>
                </div>
            </div>
            <div v-else id="main1" style="width:100%;height:7rem;"></div>
        </div>
        <div style="background-color: white !important;margin-top: 0.2rem;">
            <div class="cwkz" style="width: 5.3rem !important;"><span></span>八周市场均价走势</div>
            <div class="sssj" style="width: 2rem !important;">单位：元/㎡/天</div>
            <div v-if="manxsh2">
                <div><img class="mysjimg" src="../resources/images/icons/fangzi.png"></div>
                <div class="meiyshjzit">
                    <div>抱歉！没有找到符合条件的</div>
                    <div>相关数据，换个条件试试吧~</div>
                </div>
            </div>
            <div v-else id="main2" style="width:100%;height:8rem;"></div>
        </div>
        <div style="background-color: white !important;margin-top: 0.2rem;">
            <div class="cwkz" style="width: 5.3rem !important;"><span></span>周边项目空置竞争房源对比</div>
            <div class="sssj" style="width: 2rem !important;">实时数据</div>
            <div style="height:0.4rem;border-bottom:1px solid #dbdadf;"></div>
            <div style="font-size: 0.32rem;font-weight: 600;margin-top: 0.3rem;margin-left: 0.24rem;">性质</div>
            <ul class="ys_item_ul mb60" style="margin-top: 0rem;clear: both;">
                <!--<li class="clearfix fyfxhx fyfxhxdjzh" @click="fyfxchqxz1($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl pfmdjzh" style="margin-left: -0.25rem;text-align: center;"><img class="fyfexiimg" src="../resources/images/fangyfx/1.png"> </div>
                        <span class="chqxz" style="display: none;">1</span>
                    </a>
                </li>-->
                <li class="clearfix fyfxxzl" @click="fyfxchqxz1($event)">
                    <a href="javascript:;">
                        <div v-if="fyfxxzlpd">
                            <div style="margin-left: -0.25rem;text-align: center;"><img class="fyfexiimg" style="width: 0.6rem;" src="../resources/images/fangyfx/2-3.png"></div>
                            <div class="ys_item_con fl hxff " style="margin-left: -0.25rem;text-align: center;line-height: .6rem;color:rgb(137,217,226);">写字楼 </div>
                        </div>
                        <div v-else>
                            <div style="margin-left: -0.25rem;text-align: center;"><img class="fyfexiimg" style="width: 0.6rem;" src="../resources/images/fangyfx/1.png"></div>
                            <div class="ys_item_con fl hxff " style="margin-left: -0.25rem;text-align: center;line-height: .6rem;color:rgb(69,110,114); ">写字楼 </div>
                        </div>
                        <span class="chqxz" style="display: none;">1</span>
                    </a>
                </li>
                <li class="clearfix fyfxxzl fyfxhxdjzq" @click="fyfxchqxz1($event)">
                    <a href="javascript:;">
                        <div v-if="fyfxgypd">
                            <div style="margin-left: -0.2rem;text-align: center;"><img class="fyfexiimg" style="width: 0.53rem;" src="../resources/images/fangyfx/2.png"></div>
                            <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;line-height: .6rem;color:rgb(137,217,226);">公寓 </div>
                        </div>
                        <div v-else>
                            <div style="margin-left: -0.2rem;text-align: center;"><img class="fyfexiimg" style="width: 0.53rem;" src="../resources/images/fangyfx/1-1.png"></div>
                            <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;line-height: .6rem;color:rgb(69,110,114);">公寓 </div>
                        </div>
                        <span class="chqxz" style="display: none;">2</span>
                    </a>
                </li>
                <li class="clearfix fyfxxzl fyfxhxdjzq" @click="fyfxchqxz1($event)">
                    <a href="javascript:;">
                        <div v-if="fyfxswlpd">
                            <div style="margin-left: -0.25rem;text-align: center;"><img class="fyfexiimg" style="width: 0.45rem;" src="../resources/images/fangyfx/2-1.png"></div>
                            <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;line-height: .6rem;color:rgb(137,217,226);">商务楼 </div>
                        </div>
                        <div v-else>
                            <div style="margin-left: -0.25rem;text-align: center;"><img class="fyfexiimg" style="width: 0.48rem;" src="../resources/images/fangyfx/1-2.png"></div>
                            <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;line-height: .6rem;color:rgb(69,110,114);">商务楼 </div>
                        </div>
                        <span class="chqxz" style="display: none;">3</span>
                    </a>
                </li>
                <li class="clearfix fyfxxzl fyfxhxdjzq" @click="fyfxchqxz1($event)">
                    <a href="javascript:;">
                        <div v-if="fyfxsypd">
                            <div style="margin-left: -0.25rem;text-align: center;"><img class="fyfexiimg" style="width: 0.55rem;" src="../resources/images/fangyfx/2-2.png"></div>
                            <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;line-height: .6rem;color:rgb(137,217,226);">商业 </div>
                        </div>
                        <div v-else>
                            <div style="margin-left: -0.25rem;text-align: center;"><img class="fyfexiimg" style="width: 0.52rem;" src="../resources/images/fangyfx/1-3.png"></div>
                            <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;line-height: .6rem;color:rgb(69,110,114);">商业 </div>
                        </div>
                        <span class="chqxz" style="display: none;">5</span>
                    </a>
                </li>
            </ul>
            <div style="clear: both;font-size: 0.32rem;font-weight: 600;margin-top: 2.2rem;margin-left: 0.24rem;">面积</div>
            <ul class="ys_item_ul mb60" style="margin-top: -0.2rem;clear: both;">
                <li class="clearfix fyfxhx fyfxhxdjzh" @click="fyfxhxsj($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl pfmdjzh" style="margin-left: -0.25rem;text-align: center;">户型1 </div>
                        <span class="qv pfmdjzh">0-100</span><span class="pfmdjzh">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq" @click="fyfxhxsj($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型2 </div>
                        <span class="qv qvdjzq">101-200</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq" @click="fyfxhxsj($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型3 </div>
                        <span class="qv qvdjzq">201-300</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq" @click="fyfxhxsj($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型4 </div>
                        <span class="qv qvdjzq">301-400</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq" @click="fyfxhxsj($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型5 </div>
                        <span class="qv qvdjzq">401-500</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq" @click="fyfxhxsj($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型6 </div>
                        <span class="qv qvdjzq">501-600</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq" @click="fyfxhxsj($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型7 </div>
                        <span class="qv qvdjzq">601-1000</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq" @click="fyfxhxsj($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型8 </div>
                        <span class="qv qvdjzq">1000</span><span class="pfmdjzq">㎡以上</span>
                    </a>
                </li>
            </ul>
            <ul style="clear: both;font-size: 0.36rem;margin-top: 3.5rem;">
                <li>
                    <a href="javascript:;">
                        <div @click="kztske($event)" class="ys_item_con fl kztszdcss kztske" style="width: 2.3rem;margin-left: 0.2rem;border-right:0px;border-bottom-left-radius:5px;border-top-left-radius:5px;font-size:0.32rem;">可租套数</div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div @click="kztssc($event)" class="ys_item_con fl kztszdcss" style="width: 2.3rem;border-right:0px;font-size:0.32rem;">市场均价</div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div @click="kztszq($event)" class="ys_item_con fl kztszdcss" style="width: 2.4rem;border-bottom-right-radius:5px;border-top-right-radius:5px;font-size:0.32rem;">平均销售周期</div>
                    </a>
                </li>
            </ul>
            <div v-if="sctype == 1" class="danwei">单位：套</div>
            <div v-if="sctype == 2" style="width: 2.6rem;" class="danwei">单位：元/㎡/天</div>
            <div v-if="sctype == 3" class="danwei">单位：天</div>
            <div v-if="manxsh3">
                <div><img class="mysjimg" src="../resources/images/icons/fangzi.png"></div>
                <div class="meiyshjzit">
                    <div>抱歉！没有找到符合条件的</div>
                    <div>相关数据，换个条件试试吧~</div>
                </div>
            </div>
            <div v-else id="main3" style="width:100%;height:10rem;background-color: white;clear: both;"></div>
        </div>
    </div>
</template>

<script>
    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
    import {Indicator} from 'mint-ui';
    import {InfiniteScroll} from 'mint-ui';
    import echarts from  'echarts';


    export default {
        components: {
            header1,
            footer1,

        },
        data () {
            return {
                lpid:'',
                topic:'',//楼盘名称
                kczfy:'',//可出租房源
                wdqfy:'',//未到期房源
                swdqfy:'',//45天内到期房源
                qsdqfy:'',//90天内到期房源
                xxbq:'',//信息不全
                kzfy:'',//空置房源
                wzfy:'',//未知房源
                yzfy:'',//已租房源
                fyfxxzlpd:false,
                fyfxgypd:true,
                fyfxswlpd:true,
                fyfxsypd:true,
                chqnxz:1,//产权性质的数字
                qqj:0,
                hqj:100,
                sctype:1,
                tpdata:[],
                tpdata1:[],
                yrzdata:[],
                scjjdata:[],
                resuldata:{},
                zhouqidata:[],
                hxys:[],
                sxys:[],
                hxzxtys:[],
                manxsh3:false,
                manxsh2:false,
                manxsh1:false,
                manxsh:false,
            }
        },
        methods: {
            //获取后台的数据
            getInitData(){
                const lpid = this.$route.params.lpid;
                this.lpid = lpid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/jcsj/wxCompeteFy.do";
                let that = this;
                this.$http.post(url,{"lpid":lpid}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    if(data.total != 0){
                        this.manxsh = false;
                        const result = JSON.parse(res.bodyText);
                        that.topic = result.topic;//楼盘名称
                        that.wdqfy = data.w4;//未到期房源
                        that.swdqfy = data.w2;//45天内到期房源
                        that.qsdqfy = data.w3;//90天内到期房源
                        that.xxbq = data.w1;//信息不全
                        that.kzfy = data.kzcount;//可出租房源(空置房源)
                        that.wzfy = data.wzcount;//未知房源
                        that.yzfy = data.yzcount;//已租房源
                        if(this.kzfy != 0){
                            this.tpdata1.push({value:this.kzfy,name:'空置房源'});
                            this.hxys.push('rgb(195,52,48)');//咖啡色
                        }
                        if(this.yzfy != 0){
                            this.tpdata1.push({value:this.yzfy,name:'已租房源'});
                            this.hxys.push('rgb(48,68,84)');//橘红色（未知房源）
                        }
                        if(this.wzfy != 0){
                            this.tpdata1.push({value:this.wzfy,name:'未知房源'});
                            this.hxys.push('rgb(96,161,169)');//红色（已租房源）
                        }
                        if(this.kzfy != 0){
                            this.tpdata.push({value:this.kzfy,name:'可出租房源'});
                            this.hxys.push('rgb(213,131,101)');//蓝色
                        }
                        if(this.wdqfy != 0){
                            this.tpdata.push({value:this.wdqfy,name:'未到期房源'});
                            this.hxys.push('rgb(146,199,176)');//深绿色
                        }
                        if(this.qsdqfy != 0){
                            this.tpdata.push({value:this.qsdqfy,name:'90天内到\n期房源'});
                            this.hxys.push('rgb(116,159,131)');
                        }//橙色
                        if(this.swdqfy != 0){
                            this.tpdata.push({value:this.swdqfy,name:'45天内到\n期房源'});
                            this.hxys.push('rgb(203,136,35)');//黄色
                        }
                        if(this.xxbq != 0){
                            this.tpdata.push({value:this.xxbq,name:'信息不全'});
                            this.hxys.push('rgb(189,163,155)');//草绿色
                        }
                        this.pic();
                    }else{
                        this.manxsh = true;
                    }
                    /*this.tpdata.push({value:this.kzfy,name:'可出租房源'});
                    this.tpdata1.push({value:this.kzfy,name:'空置房源'});
                    this.tpdata.push({value:this.wdqfy,name:'未到期房源'});
                    this.tpdata.push({value:this.qsdqfy,name:'90天内到\n期房源'});
                    this.tpdata.push({value:this.swdqfy,name:'45天内到\n期房源'});
                    this.tpdata.push({value:this.xxbq,name:'信息不全'});
                    this.tpdata1.push({value:this.wzfy,name:'未知房源'});
                    this.tpdata1.push({value:this.yzfy,name:'已租房源'});*/
                    $('title').html(that.topic);
                }, (res)=>{
                    Indicator.close()
                });
                const url1 = this.$api + "/yhcms/web/jcsj/wxCompanyFy.do";
                this.$http.post(url1,{"lpid":lpid}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    if(data.total != 0){
                        this.manxsh1 = false;
                        if(data.jr != 0){
                            this.yrzdata.push({value:data.jr,name:'金融'});
                            this.sxys.push('rgb(194,53,49)');//
                        }
                        if(data.jy != 0){
                            this.yrzdata.push({value:data.jy,name:'教育'});
                            this.sxys.push('rgb(47,69,84)');
                        }
                        if(data.it != 0){
                            this.yrzdata.push({value:data.it,name:'互联网'});
                            this.sxys.push('rgb(97,160,168)');
                        }
                        if(data.xx != 0){
                            this.yrzdata.push({value:data.xx,name:'休闲'});
                            this.sxys.push('rgb(212,130,101)');
                        }
                        if(data.wh != 0){
                            this.yrzdata.push({value:data.wh,name:'文化'});
                            this.sxys.push('rgb(145,199,174)');
                        }
                        if(data.fdc != 0){
                            this.yrzdata.push({value:data.fdc,name:'房地产'});
                            this.sxys.push('rgb(116,159,131)');
                        }
                        if(data.qt != 0){
                            this.yrzdata.push({value:data.qt,name:'其它'});
                            this.sxys.push('rgb(202,134,34)');
                        }
                        this.shanx();
                    }else{
                        this.manxsh1 = true;
                    }
                }, (res)=>{
                    Indicator.close()
                });
                const url2 = this.$api + "/yhcms/web/jcsj/wxFjxx.do";
                this.$http.post(url2,{"lpid":lpid}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    if(data){
                        this.manxsh2 = false;
                        var count = data.length;
                        if(count >= 1){
                            this.scjjdata.push({value:data[0].zxjnjg});
                            this.zhouqidata.push({value:data[0].time1});
                        }
                        if(count >= 2){
                            this.scjjdata.push({value:data[1].zxjnjg});
                            this.zhouqidata.push({value:data[1].time1});
                        }
                        if(count >= 3){
                            this.scjjdata.push({value:data[2].zxjnjg});
                            this.zhouqidata.push({value:data[2].time1});
                        }
                        if(count >= 4){
                            this.scjjdata.push({value:data[3].zxjnjg});
                            this.zhouqidata.push({value:data[3].time1});
                        }
                        if(count >= 5){
                            this.scjjdata.push({value:data[4].zxjnjg});
                            this.zhouqidata.push({value:data[4].time1});
                        }
                        if(count >= 6){
                            this.scjjdata.push({value:data[5].zxjnjg});
                            this.zhouqidata.push({value:data[5].time1});
                        }
                        if(count >= 7){
                            this.scjjdata.push({value:data[6].zxjnjg});
                            this.zhouqidata.push({value:data[6].time1});
                        }
                        if(count >= 8){
                            this.scjjdata.push({value:data[7].zxjnjg});
                            this.zhouqidata.push({value:data[7].time1});
                        }
                        this.zhex();
                    }else{
                        this.manxsh2 = true;
                    }
                }, (res)=>{
                    Indicator.close()
                });
            },
            fyfxchqxz1(e){
                //获取HTML超链接页面上的文字内容
                const li = $(e.target).closest("li"), txt = $(li).find(".chqxz").text();
                this.chqnxz = txt;
                //加一个class样式
                if(txt == 1){
                    this.fyfxxzlpd = false;
                    this.fyfxgypd = true;
                    this.fyfxswlpd = true;
                    this.fyfxsypd = true;
                }
                if(txt == 2){
                    this.fyfxxzlpd = true;
                    this.fyfxgypd = false;
                    this.fyfxswlpd = true;
                    this.fyfxsypd = true;
                }
                if(txt == 3){
                    this.fyfxxzlpd = true;
                    this.fyfxgypd = true;
                    this.fyfxswlpd = false;
                    this.fyfxsypd = true;
                }
                if(txt == 5){
                    this.fyfxxzlpd = true;
                    this.fyfxgypd = true;
                    this.fyfxswlpd = true;
                    this.fyfxsypd = false;
                }
                this.manxsh3 = false;
                if(this.sctype == 2){
                    const url2 = this.$api + "/yhcms/web/jcsj/wxJnjxx.do";
                    this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj,"chqxz":this.chqnxz}).then((res)=>{
                        Indicator.close();
                        const data = JSON.parse(res.bodyText).data;
                        const code = JSON.parse(res.bodyText).count;
                        if(code == 1){
                            this.manxsh3 = false;
                            this.resuldata = data;
                            //this.hxzxtys = data;
                            this.zhuxing();
                        }else{
                            this.manxsh3 = true;
                        }
                        /*for(var i=0;i<data.length;i++){
                         if(data[i].jnjg){
                         var dgdata = data[i].jnjg;
                         dgdata = parseInt(dgdata);
                         dgdata = dgdata/(15);
                         data[i].jnjg = dgdata*100;
                         data[i].jnjg = data[i].jnjg + "%";
                         }
                         }*/
                    }, (res)=>{
                        Indicator.close()
                    });
                }else if(this.sctype == 3){
                    const url2 = this.$api + "/yhcms/web/jcsj/wxXszq.do";
                    this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj,"chqxz":this.chqnxz}).then((res)=>{
                        Indicator.close();
                        const data = JSON.parse(res.bodyText).data;
                        const code = JSON.parse(res.bodyText).count;
                        if(code == 1){
                            this.manxsh3 = false;
                            this.resuldata = data;
                            this.zhuxing();
                        }else{
                            this.manxsh3 = true;
                        }
                        /*for(var i=0;i<data.length;i++){
                         if(data[i].xszq){
                         var dgdata = data[i].xszq;
                         dgdata = parseInt(dgdata);
                         dgdata = dgdata/(30);
                         data[i].xszq = dgdata*100;
                         data[i].xszq = data[i].xszq + "%";
                         }
                         }*/
                    }, (res)=>{
                        Indicator.close()
                    });
                }else{
                    const url2 = this.$api + "/yhcms/web/jcsj/wxFxxx.do";
                    this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj,"chqxz":this.chqnxz}).then((res)=>{
                        Indicator.close();
                        const code = JSON.parse(res.bodyText).count;
                        if(code == 1){
                            this.manxsh3 = false;
                            const data = JSON.parse(res.bodyText).data;
                            this.resuldata = data;
                            this.zhuxing();
                        }else{
                            this.manxsh3 = true;
                        }
                        /*for(var i=0;i<data.length;i++){
                         if(data[i].kzcount){
                         var dgdata = data[i].kzcount;
                         dgdata = parseInt(dgdata);
                         dgdata = dgdata/(20);
                         data[i].kzcount = dgdata*100;
                         data[i].kzcount = data[i].kzcount + "%";
                         }
                         }*/
                    }, (res)=>{
                        Indicator.close()
                    });
                }
            },
            //环形图
            pic(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main'));
                // 指定图表的配置项和数据
                var option = {
                    tooltip: {
                        trigger: 'item',
                        /*formatter: "{b}: {c} ({d}%)"*/
                    },
                    legend: {
                        bottom: 120,
                        //x : 10,//控制标签种类的左右位置
                        y : '80%',//控制标签种类的上下位置
                        data:['可出租房源','未到期房源','90天内到\n期房源','45天内到\n期房源','信息不全']
                    },
                    color:this.hxys,//设置扇形图固定的颜色
                    series: [{
                            name:'',
                            type:'pie',
                            radius: ['35%', '50%'],
                            center:['50%','40%'],//环形图位置的参数
                            //radius: ['30%', '45%'],
                            label: {
                                normal: {
                                    /*formatter: '{b|{b}:\n}{c}\n{per|{d}%}\n',*/
                                    formatter: '\n{b|{b}:\n}{c}\n{per|{d}%}\n',
                                    /*backgroundColor: '#eee',//图上大的背景色
                                     borderColor: '#aaa',*/
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    rich: {
                                        /*a: {
                                         color: '#999',
                                         lineHeight: 22,
                                         align: 'center'
                                         },*/
                                        /* hr: {
                                         borderColor: '#aaa',
                                         width: '100%',
                                         borderWidth: 0.5,
                                         height: 0
                                         },*/
                                        b: {
                                            fontSize: 10,
                                            lineHeight: 24,
                                            width:5,
                                        },
                                        per: {
                                            color: '#eee',
                                            backgroundColor: '#334455',
                                            padding: [2, 2],
                                            borderRadius: 2
                                        }
                                    }
                                }
                            },
                            data:this.tpdata,
                        }
                    ],

                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            //扇形图
            shanx(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main1'));
                // 指定图表的配置项和数据
                var option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        bottom: 10,
                        y:'80%',
                        data: ['金融', '教育','互联网','休闲','文化','房地产','其它']
                    },
                    color:this.sxys,//设置扇形图固定的颜色
                    series : [
                        {
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '35%'],
                            label: {
                                normal: {
                                    /*formatter: '{b|{b}:\n}{c}\n{per|{d}%}\n',*/
                                    formatter: '\n{b}:\n{c}\n{d}%\n',
                                }
                            },
                            data:this.yrzdata,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            //折线图
            zhex(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main2'));
                // 指定图表的配置项和数据
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    toolbox: {
                        show: true,
                        /*feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            //saveAsImage: {}//控制保存按钮
                        }*/
                    },
                    xAxis: [{
                        axisLabel: {
                            rotate: 0,
                            interval: 0
                        },
                        type: 'category',
                        boundaryGap: false,
                        //data:['第一周','第二周','第三周','第四周','第五周','第六周','第七周','第八周']
                        data:this.zhouqidata
                    }],
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    series: [
                        {
                            name:'市场均价',
                            type:'line',
                            data:this.scjjdata,
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            //选择户型
            fyfxhxsj(e){
                //获取HTML超链接页面上的文字内容
                const li = $(e.target).closest("li"), txt = $(li).find(".qv").text();
                //加一个class样式
                if(li.hasClass("fyfxhxdjzh")){

                }else{
                    li.addClass("fyfxhxdjzh");
                    li.removeClass("fyfxhxdjzq").siblings().addClass("fyfxhxdjzq");
                    li.children().children().addClass("pfmdjzh");
                    li.siblings().children().children().removeClass("pfmdjzh").addClass("pfmdjzq");
                }
                li.siblings().removeClass("fyfxhxdjzh");
                var qvjian = new Array();
                qvjian = txt.split("-");
                console.log(qvjian);
                if(qvjian.length == 1){
                    this.qqj = qvjian[0];
                    this.hqj = 9999;
                }else{
                    this.qqj = qvjian[0];
                    this.hqj = qvjian[1];
                }
                this.manxsh3 = false;
                if(this.sctype == 2){
                    const url2 = this.$api + "/yhcms/web/jcsj/wxJnjxx.do";
                    this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj,"chqxz":this.chqnxz}).then((res)=>{
                        Indicator.close();
                        const data = JSON.parse(res.bodyText).data;
                        const code = JSON.parse(res.bodyText).count;
                        if(code == 1){
                            this.manxsh3 = false;
                            this.resuldata = data;
                            //this.hxzxtys = data;
                            this.zhuxing();
                        }else{
                            this.manxsh3 = true;
                        }
                        /*for(var i=0;i<data.length;i++){
                            if(data[i].jnjg){
                                var dgdata = data[i].jnjg;
                                dgdata = parseInt(dgdata);
                                dgdata = dgdata/(15);
                                data[i].jnjg = dgdata*100;
                                data[i].jnjg = data[i].jnjg + "%";
                            }
                        }*/
                    }, (res)=>{
                        Indicator.close()
                    });
                }else if(this.sctype == 3){
                    const url2 = this.$api + "/yhcms/web/jcsj/wxXszq.do";
                    this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj,"chqxz":this.chqnxz}).then((res)=>{
                        Indicator.close();
                        const data = JSON.parse(res.bodyText).data;
                        const code = JSON.parse(res.bodyText).count;
                        if(code == 1){
                            this.manxsh3 = false;
                            this.resuldata = data;
                            this.zhuxing();
                        }else{
                            this.manxsh3 = true;
                        }
                        /*for(var i=0;i<data.length;i++){
                            if(data[i].xszq){
                                var dgdata = data[i].xszq;
                                dgdata = parseInt(dgdata);
                                dgdata = dgdata/(30);
                                data[i].xszq = dgdata*100;
                                data[i].xszq = data[i].xszq + "%";
                            }
                        }*/
                    }, (res)=>{
                        Indicator.close()
                    });
                }else{
                    const url2 = this.$api + "/yhcms/web/jcsj/wxFxxx.do";
                    this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj,"chqxz":this.chqnxz}).then((res)=>{
                        Indicator.close();
                        const code = JSON.parse(res.bodyText).count;
                        if(code == 1){
                            this.manxsh3 = false;
                            const data = JSON.parse(res.bodyText).data;
                            this.resuldata = data;
                            this.zhuxing();
                        }else{
                            this.manxsh3 = true;
                        }
                        /*for(var i=0;i<data.length;i++){
                            if(data[i].kzcount){
                                var dgdata = data[i].kzcount;
                                dgdata = parseInt(dgdata);
                                dgdata = dgdata/(20);
                                data[i].kzcount = dgdata*100;
                                data[i].kzcount = data[i].kzcount + "%";
                            }
                        }*/
                    }, (res)=>{
                        Indicator.close()
                    });
                }

            },
            //可租套数
            kztske(e){
                this.manxsh3 = false;
                this.sctype = 1;
                //获取HTML超链接页面上的文字内容
                const li = $(e.target).closest("div");
                //加一个class样式
                li.addClass("kztske").parent().parent().siblings().children().children().removeClass("kztske");
                const url2 = this.$api + "/yhcms/web/jcsj/wxFxxx.do";
                this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj,"chqxz":this.chqnxz}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const code = JSON.parse(res.bodyText).count;
                    if(code == 1){
                        this.manxsh3 = false;
                        this.resuldata = data;
                        this.zhuxing();
                    }else{
                        this.manxsh3 = true;
                    }
                    //计算百分比
                   /* for(var i=0;i<data.length;i++){
                        if(data[i].kzcount){
                            var dgdata = data[i].kzcount;
                            dgdata = parseInt(dgdata);
                            dgdata = dgdata/(20);
                            data[i].kzcount = dgdata*100;
                            data[i].kzcount = data[i].kzcount + "%";
                        }
                    }*/
                }, (res)=>{
                    Indicator.close()
                });

            },
            //市场均价
            kztssc(e){
                this.manxsh3 = false;
                this.sctype = 2;
                //获取HTML超链接页面上的文字内容
                const li = $(e.target).closest("div");
                //加一个class样式
                li.addClass("kztske").parent().parent().siblings().children().children().removeClass("kztske");
                const url2 = this.$api + "/yhcms/web/jcsj/wxJnjxx.do";
                this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj,"chqxz":this.chqnxz}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const code = JSON.parse(res.bodyText).count;
                    if(code == 1){
                        this.manxsh3 = false;
                        this.resuldata = data;
                        this.zhuxing();
                    }else{
                        this.manxsh3 = true;
                    }
                    //计算百分比
                   /* for(var i=0;i<data.length;i++){
                        if(data[i].jnjg){
                            var dgdata = data[i].jnjg;
                            dgdata = parseInt(dgdata);
                            dgdata = dgdata/(15);
                            data[i].jnjg = dgdata*100;
                            data[i].jnjg = data[i].jnjg + "%";
                        }
                    }*/
                }, (res)=>{
                    Indicator.close()
                });
            },
            //平均销售周期
            kztszq(e){
                this.manxsh3 = false;
                this.sctype = 3;
                //获取HTML超链接页面上的文字内容
                const li = $(e.target).closest("div");
                //加一个class样式
                li.addClass("kztske").parent().parent().siblings().children().children().removeClass("kztske");
                const url2 = this.$api + "/yhcms/web/jcsj/wxXszq.do";
                this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj,"chqxz":this.chqnxz}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const code = JSON.parse(res.bodyText).count;
                    if(code == 1){
                        this.manxsh3 = false;
                        this.resuldata = data;
                        this.zhuxing();
                    }else{
                        this.manxsh3 = true;
                    }
                    //计算百分比
                    /*for(var i=0;i<data.length;i++){
                        if(data[i].xszq){
                            var dgdata = data[i].xszq;
                            dgdata = parseInt(dgdata);
                            dgdata = dgdata/(30);
                            data[i].xszq = dgdata*100;
                            data[i].xszq = data[i].xszq + "%";
                        }
                    }*/
                }, (res)=>{
                    Indicator.close()
                });
            },
            //柱形图
            zhuxing(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main3'));
                // 指定图表的配置项和数据
                var builderJson = {
                    "charts":this.resuldata,
                };

                var waterMarkText = 'ECHARTS';

                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = canvas.height = 100;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.globalAlpha = 0.08;
                ctx.font = '20px Microsoft Yahei';
                ctx.translate(50, 50);
                ctx.rotate(-Math.PI / 4);
                ctx.fillText(waterMarkText, 0, 0);

                var option = {
                    backgroundColor: {
                        type: 'pattern',
                        backgroundColor: '#FFFFFF',
                        borderColor: '#FFFFFF',
                        repeat: 'repeat'
                    },
                    grid: [{
                        top: 50,
                        width: '80%',
                        height: '80%',
                        bottom: '25%',
                        left: 10,
                        containLabel: true
                    }, {
                        top: '55%',
                        width: '50%',
                        bottom: 0,
                        left: 10,
                        containLabel: true
                    }],
                    xAxis: {
                        type: 'value',
                        max: builderJson.all,
                        //show: false,//false是不显示x轴
                        axisTick: {width:10},//length后面这个数字用来设置坐标轴刻度的长度
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis:{
                        type: 'category',
                        data: Object.keys(builderJson.charts),
                        /*axisLine: {
                            lineStyle: {
                                color:'white',//坐标轴的颜色
                            }
                        },*/
                        /*axisLine: {
                            lineStyle: {
                                type: 'solid',
                                color:'#fff',
                                width:'2'
                            }
                        },*/
                        /*//去掉坐标轴刻度线
                        axisTick: {
                            show: false
                        },*/
                        axisLabel: {
                            interval: 0,
                            maxInterval:2,
                            minInterval:1,
                            rotate: 0,
                            color: '#000000',//坐标值得具体的颜色
                        },
                        splitLine:{ show:false},  //设置不显示坐标区域内的y轴分割线
                    },

                    color:['red', 'green','yellow','blueviolet'],
                    series: [{
                        type: 'bar',
                        stack: 'chart',
                        barMaxWidth: '30',//柱子的宽度
                        z: 3,
                        label: {
                            normal: {
                                position: 'right',
                                show: true,

                            }
                        },
                        itemStyle: {
                            //通常情况下：
                            normal:{
                                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                color: function (params){
                                    var colorList = ['rgb(203,136,35)','rgb(96,161,169)','rgb(195,52,48)','rgb(97,188,148)','rgb(146,199,176)','rgb(213,131,101)','rgb(68,111,114)'];
                                    return colorList[params.dataIndex];
                                },
                            },
                            //鼠标悬停时：
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        data: Object.keys(builderJson.charts).map(function (key) {
                            return builderJson.charts[key];
                        }),
                    }/*, {
                        type: 'bar',
                        stack: 'chart',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: '#eee',
                            }
                        },
                        data: Object.keys(builderJson.charts).map(function (key) {
                            return builderJson.all - builderJson.charts[key];
                        })
                    }*/],
                    //控制边距　
                    /*grid: {
                        left: '0%',
                        right:'10%',
                        containLabel: true,
                    },*/
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
        },
        mounted(){
            this.manxsh3 = false;
           /* $("#tjts").live("click",function(){
                var myChart = echarts.init(document.getElementById("main1"));
                var url='${contextPath}/fyfjxx/getByZdid.do?vurlcode=${sessionScope.sUrlCode}&zdid='+zdfyid;
                $.post(url,function(data){
                    $(".cash").css("display","block");
                    var mycars=new Array(data.a1,data.a2,data.a3,data.a4,data.a5,data.a6,data.a7,data.a8,data.a9,data.a10,data.a11,data.a12);
                    var mycars1=new Array(data.b1,data.b2,data.b3,data.b4,data.b5,data.b6,data.b7,data.b8,data.b9,data.b10,data.b11,data.b12);
                    //column(myChart,mycars,mycars1);
                    piechart(myChart);

                },"json")
            });*/
            this.getInitData();
            const url2 = this.$api + "/yhcms/web/jcsj/wxFxxx.do";
            this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj,"chqxz":this.chqnxz}).then((res)=>{
                Indicator.close();
                const data = JSON.parse(res.bodyText).data;
                const code = JSON.parse(res.bodyText).count;
                if(code == 1){
                    this.manxsh3 = false;
                    this.resuldata = data;
                    this.zhuxing();
                }else{
                    this.manxsh3 = true;
                }
                /*for(var i=0;i<data.length;i++){
                    if(data[i].kzcount){
                        var dgdata = data[i].kzcount;
                        dgdata = parseInt(dgdata);
                        dgdata = dgdata/(20);
                        data[i].kzcount = dgdata*100;
                        data[i].kzcount = data[i].kzcount + "%";
                    }
                }*/
            }, (res)=>{
                Indicator.close()
            });
        }
    }
</script>
