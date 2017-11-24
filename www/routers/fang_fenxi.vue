<style>
    body {
        margin: 0 !important;
        padding: 0 !important;
    }
    .cwkz{font-size: 0.38rem !important;font-weight: 900;padding-top: 0.5rem !important;margin: auto;text-align:center;}
    .sssj{color: #999999;margin-top: 0.2rem !important;margin: auto;width: 1.5rem;}
    .fyfxhx{width: 1.6rem;float: left;margin-left: 0.2rem;margin-top: 0.4rem;font-size:0.24rem;border-radius:5px;}
    .ys_item_ul li{border: 1px solid #dbdadf;line-height: .4rem;}
    .ys_item_con{width: 1.6rem;}
    .hxff{color: rgb(166,166,166);}
    .qv{width: 1.6rem;text-align: center;}
    .qvdjzq{color: rgb(166,166,166);}
    .pfmdjzq{color: rgb(166,166,166);}
    .pfmdjzh{color: rgb(254,122,14);}
    .fyfxhxdjzh{background-color: rgb(255,214,170) !important;}
    .fyfxhxdjzq{background-color: rgb(242,242,242) !important;}
    .kztske{background-color:rgb(255,214,170);color:rgb(254,122,14);}
    .kztszdcss{text-align: center;border: 1.5px solid rgb(254,122,14);line-height: 0.7rem;}
    .danwei{clear: both;margin-top: 0.2rem;font-size: 0.32rem;width: 1.6rem;float: right;color:rgb(130,130,130);}
    .jindtname{height:1rem !important;line-height:1rem;width:2.8rem !important;}
    .jindt{height:0.7rem !important;border: 1px solid black;line-height:0.7rem;margin-right:0rem !important;width:3.8rem !important;margin-top: 0.15rem;}
    .jindtpfb{border: 1px solid red;line-height: 0.5rem;height: 0.5rem;margin-top: 0.08rem;width: 50%;}
</style>
<template>
    <div>
        <div style="background-color: white !important;height: 11.3rem;">
            <div class="cwkz"><span  v-text="topic"></span>空置房源数据展示</div>
            <div class="sssj">实时数据</div>
            <div id="main" style="width:100%;height:9rem;"></div>
        </div>
        <div style="background-color: white !important;height: 10.3rem;margin-top: 0.2rem;">
            <div class="cwkz" style="width: 5.3rem !important;"><span  v-text="topic"></span>已入住企业类型占比</div>
            <div class="sssj">实时数据</div>
            <div id="main1" style="width:100%;height:8rem;"></div>
        </div>
        <div style="background-color: white !important;height: 10.3rem;margin-top: 0.2rem;">
            <div class="cwkz" style="width: 5.3rem !important;"><span  v-text="topic"></span>八周市场均价走势</div>
            <div class="sssj" style="width: 2rem !important;">单位：元/㎡/天</div>
            <div id="main2" style="width:100%;height:8rem;"></div>
        </div>
        <div style="background-color: white !important;margin-top: 0.2rem;">
            <div class="cwkz" style="width: 5.3rem !important;"><span  v-text="topic"></span>与周边项目空置竞争房源对比</div>
            <div class="sssj" style="width: 2rem !important;">实时数据</div>
            <div style="height:0.4rem;border-bottom:1px solid #dbdadf;"></div>
            <ul class="ys_item_ul mb60" style="margin-top: 0.4rem;">
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
                        <div @click="kztske($event)" class="ys_item_con fl kztszdcss kztske" style="width: 2.3rem;margin-left: 0.2rem;border-right:0px;border-bottom-left-radius:5px;border-top-left-radius:5px;">可租套数</div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div @click="kztssc($event)" class="ys_item_con fl kztszdcss" style="width: 2.3rem;border-right:0px;">市场均价</div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div @click="kztszq($event)" class="ys_item_con fl kztszdcss" style="width: 2.4rem;border-bottom-right-radius:5px;border-top-right-radius:5px;">平均销售周期</div>
                    </a>
                </li>
            </ul>
            <div class="danwei">单位：套</div>
            <div id="main3" style="width:100%;height:10rem;background-color: white;clear: both;"></div>
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
                qqj:0,
                hqj:100,
                sctype:1,
                tpdata:[],
                tpdata1:[],
                yrzdata:[],
                scjjdata:[],
                resuldata:{},
                zhouqidata:[],

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
                        this.tpdata.push({value:this.kzfy,name:'可出租房源'});
                        this.tpdata1.push({value:this.kzfy,name:'空置房源'});
                    }
                    if(this.wdqfy != 0){
                        this.tpdata.push({value:this.wdqfy,name:'未到期房源'});
                    }
                    if(this.qsdqfy != 0){
                        this.tpdata.push({value:this.qsdqfy,name:'90天内到期房源'});
                    }
                    if(this.swdqfy != 0){
                        this.tpdata.push({value:this.swdqfy,name:'45天内到期房源'});
                    }
                    if(this.xxbq != 0){
                        this.tpdata.push({value:this.xxbq,name:'信息不全'});
                    }
                    if(this.wzfy != 0){
                        this.tpdata1.push({value:this.wzfy,name:'未知房源'});
                    }
                    if(this.yzfy != 0){
                        this.tpdata1.push({value:this.yzfy,name:'已租房源'});
                    }
                    $('title').html(that.topic);
                    this.pic();
                }, (res)=>{
                    Indicator.close()
                });
                const url1 = this.$api + "/yhcms/web/jcsj/wxCompanyFy.do";
                this.$http.post(url1,{"lpid":lpid}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    if(data.jr != 0){
                        this.yrzdata.push({value:data.jr,name:'金融'});
                    }
                    if(data.jy != 0){
                        this.yrzdata.push({value:data.jy,name:'教育'});
                    }
                    if(data.it != 0){
                        this.yrzdata.push({value:data.it,name:'互联网'});
                    }
                    if(data.xx != 0){
                        this.yrzdata.push({value:data.xx,name:'休闲'});
                    }
                    if(data.wh != 0){
                        this.yrzdata.push({value:data.wh,name:'文化'});
                    }
                    if(data.fdc != 0){
                        this.yrzdata.push({value:data.fdc,name:'房地产'});
                    }
                    if(data.qt != 0){
                        this.yrzdata.push({value:data.qt,name:'其它'});
                    }
                    this.shanx();
                }, (res)=>{
                    Indicator.close()
                });
                const url2 = this.$api + "/yhcms/web/jcsj/wxFjxx.do";
                this.$http.post(url2,{"lpid":lpid}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const count = data.length;
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
                }, (res)=>{
                    Indicator.close()
                });
            },
            //环形图
            pic(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main'));
                // 指定图表的配置项和数据
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}: {c} ({d}%)"
                    },
                    legend: {
                        bottom: 1,
                        left: 'center',
                        data:['可出租房源','未到期房源','90天内到期房源','45天内到期房源','信息不全']
                    },
                    grid: {
                        left: '10%',
                        containLabel: false,
                    },
                    //color:['red', 'green','yellow','blueviolet'],//设置扇形图固定的颜色
                    series: [
                        {
                            name:'',
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '30%'],
                            //radius: [0, '25%'],
                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:this.tpdata1,
                        },
                        {
                            name:'',
                            type:'pie',
                            radius: ['40%', '55%'],
                            //radius: ['30%', '45%'],
                            label: {
                                normal: {
                                    formatter: '{b|{b}:\n}{c}\n{per|{d}%}\n',
                                    /*backgroundColor: '#eee',
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
                        left: 'center',
                        data: ['金融', '教育','互联网','休闲','文化','房地产','其它']
                    },
                    //color:['red', 'green','yellow','blueviolet'],//设置扇形图固定的颜色
                    series : [
                        {
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '50%'],
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
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            //saveAsImage: {}//控制保存按钮
                        }
                    },
                    xAxis: [{
                        axisLabel: {
                            rotate: 30,
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
                if(this.sctype == 2){
                    const url2 = this.$api + "/yhcms/web/jcsj/wxJnjxx.do";
                    this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj}).then((res)=>{
                        Indicator.close();
                        const data = JSON.parse(res.bodyText).data;
                        /*for(var i=0;i<data.length;i++){
                            if(data[i].jnjg){
                                var dgdata = data[i].jnjg;
                                dgdata = parseInt(dgdata);
                                dgdata = dgdata/(15);
                                data[i].jnjg = dgdata*100;
                                data[i].jnjg = data[i].jnjg + "%";
                            }
                        }*/
                        this.resuldata = data;
                        this.zhuxing();
                    }, (res)=>{
                        Indicator.close()
                    });
                }else if(this.sctype == 3){
                    const url2 = this.$api + "/yhcms/web/jcsj/wxXszq.do";
                    this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj}).then((res)=>{
                        Indicator.close();
                        const data = JSON.parse(res.bodyText).data;
                        /*for(var i=0;i<data.length;i++){
                            if(data[i].xszq){
                                var dgdata = data[i].xszq;
                                dgdata = parseInt(dgdata);
                                dgdata = dgdata/(30);
                                data[i].xszq = dgdata*100;
                                data[i].xszq = data[i].xszq + "%";
                            }
                        }*/
                        this.resuldata = data;
                        this.zhuxing();
                    }, (res)=>{
                        Indicator.close()
                    });
                }else{
                    const url2 = this.$api + "/yhcms/web/jcsj/wxFxxx.do";
                    this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj}).then((res)=>{
                        Indicator.close();
                        const data = JSON.parse(res.bodyText).data;
                        /*for(var i=0;i<data.length;i++){
                            if(data[i].kzcount){
                                var dgdata = data[i].kzcount;
                                dgdata = parseInt(dgdata);
                                dgdata = dgdata/(20);
                                data[i].kzcount = dgdata*100;
                                data[i].kzcount = data[i].kzcount + "%";
                            }
                        }*/
                        this.resuldata = data;
                        this.zhuxing();
                    }, (res)=>{
                        Indicator.close()
                    });
                }

            },
            //可租套数
            kztske(e){
                this.sctype = 1;
                //获取HTML超链接页面上的文字内容
                const li = $(e.target).closest("div");
                //加一个class样式
                li.addClass("kztske").parent().parent().siblings().children().children().removeClass("kztske");
                const url2 = this.$api + "/yhcms/web/jcsj/wxFxxx.do";
                this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
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
                    this.resuldata = data;
                    this.zhuxing();
                }, (res)=>{
                    Indicator.close()
                });

            },
            //市场均价
            kztssc(e){
                this.sctype = 2;
                //获取HTML超链接页面上的文字内容
                const li = $(e.target).closest("div");
                //加一个class样式
                li.addClass("kztske").parent().parent().siblings().children().children().removeClass("kztske");
                const url2 = this.$api + "/yhcms/web/jcsj/wxJnjxx.do";
                this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    //计算百分比
                    for(var i=0;i<data.length;i++){
                        if(data[i].jnjg){
                            var dgdata = data[i].jnjg;
                            dgdata = parseInt(dgdata);
                            dgdata = dgdata/(15);
                            data[i].jnjg = dgdata*100;
                            data[i].jnjg = data[i].jnjg + "%";
                        }
                    }
                    this.resuldata = data;
                    this.zhuxing();
                }, (res)=>{
                    Indicator.close()
                });
            },
            //平均销售周期
            kztszq(e){
                this.sctype = 3;
                //获取HTML超链接页面上的文字内容
                const li = $(e.target).closest("div");
                //加一个class样式
                li.addClass("kztske").parent().parent().siblings().children().children().removeClass("kztske");
                const url2 = this.$api + "/yhcms/web/jcsj/wxXszq.do";
                this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
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
                    this.resuldata = data;
                    this.zhuxing();
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
                        barMaxWidth: '20%',//柱子的宽度
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
                                    var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)'];
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
                        barGap:'-100%',
                        barCategoryGap:'40%',
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
            this.$http.post(url2,{"lpid":this.lpid,"m1":this.qqj,"m2":this.hqj}).then((res)=>{
                Indicator.close();
                const data = JSON.parse(res.bodyText).data;
                /*for(var i=0;i<data.length;i++){
                    if(data[i].kzcount){
                        var dgdata = data[i].kzcount;
                        dgdata = parseInt(dgdata);
                        dgdata = dgdata/(20);
                        data[i].kzcount = dgdata*100;
                        data[i].kzcount = data[i].kzcount + "%";
                    }
                }*/
                this.resuldata = data;
                this.zhuxing();
            }, (res)=>{
                Indicator.close()
            });
        }
    }
</script>
