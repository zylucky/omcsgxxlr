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
    .hxffdjzh{color: rgb(254,122,14);}
    .qv{width: 1.6rem;text-align: center;}
    .qvdjzq{color: rgb(166,166,166);}
    .qvdjzh{color: rgb(254,122,14);}
    .pfmdjzq{color: rgb(166,166,166);}
    .pfmdjzh{color: rgb(254,122,14);}
    .fyfxhxdjzh{background-color: rgb(255,214,170) !important;}
    .fyfxhxdjzq{background-color: rgb(242,242,242) !important;}
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
        <div style="background-color: white !important;height: 10.3rem;margin-top: 0.2rem;border:1px solid red;">
            <div class="cwkz" style="width: 5.3rem !important;"><span  v-text="topic"></span>与周边项目空置竞争房源对比</div>
            <div class="sssj" style="width: 2rem !important;">实时数据</div>
            <div style="height:0.4rem;border-bottom:1px solid #999999;"></div>
            <ul class="ys_item_ul mb60" style="margin-top: 0.4rem;border: 1px solid #dbdadf;border-bottom: 0px solid #dbdadf;">
                <li class="clearfix fyfxhx fyfxhxdjzq" @click="fyfxhxsj($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型1 </div>
                        <span class="qv qvdjzq">0-100</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq" @click="fyfxhxsj($event)">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型2 </div>
                        <span class="qv qvdjzq">101-200</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型3 </div>
                        <span class="qv qvdjzq">201-300</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型4 </div>
                        <span class="qv qvdjzq">301-400</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型5 </div>
                        <span class="qv qvdjzq">401-500</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型6 </div>
                        <span class="qv qvdjzq">501-600</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型7 </div>
                        <span class="qv qvdjzq">601-1000</span><span class="pfmdjzq">㎡</span>
                    </a>
                </li>
                <li class="clearfix fyfxhx fyfxhxdjzq">
                    <a href="javascript:;">
                        <div class="ys_item_con fl hxff" style="margin-left: -0.25rem;text-align: center;">户型8 </div>
                        <span class="qv qvdjzq">1000</span><span class="pfmdjzq">㎡以上</span>
                    </a>
                </li>
            </ul>
            
            <div id="main2" style="width:100%;height:8rem;"></div>
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
                tpdata:[],
                tpdata1:[],
                yrzdata:[],
                scjjdata:[],

            }
        },
        methods: {
            //获取后台的数据
            getInitData(){
                const lpid = this.$route.params.lpid;
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
                    that.lpid = lpid;
                    that.topic = result.topic;//楼盘名称
                    that.wdqfy = data.w4;//未到期房源
                    that.swdqfy = data.w2;//45天内到期房源
                    that.qsdqfy = data.w3;//90天内到期房源
                    that.xxbq = data.w1;//信息不全
                    that.kzfy = data.kzcount;//可出租房源(空置房源)
                    that.wzfy = data.wzcount;//未知房源
                    that.yzfy = data.yzcount;//已租房源
                    this.tpdata.push({value:this.kzfy,name:'可出租房源'});
                    this.tpdata.push({value:this.wdqfy,name:'未到期房源'});
                    this.tpdata.push({value:this.qsdqfy,name:'90天内到期房源'});
                    this.tpdata.push({value:this.swdqfy,name:'45天内到期房源'});
                    this.tpdata.push({value:this.xxbq,name:'信息不全'});
                    this.tpdata1.push({value:this.kzfy,name:'空置房源'});
                    this.tpdata1.push({value:this.wzfy,name:'未知房源'});
                    this.tpdata1.push({value:this.yzfy,name:'已租房源'});
                    $('title').html(that.topic);
                    this.pic();
                }, (res)=>{
                    Indicator.close()
                });
                const url1 = this.$api + "/yhcms/web/jcsj/wxCompanyFy.do";
                this.$http.post(url1,{"lpid":lpid}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    this.yrzdata.push({value:data.jr,name:'金融'});
                    this.yrzdata.push({value:data.jy,name:'教育'});
                    this.yrzdata.push({value:data.it,name:'互联网'});
                    this.yrzdata.push({value:data.xx,name:'休闲'});
                    this.yrzdata.push({value:data.wh,name:'文化'});
                    this.yrzdata.push({value:data.fdc,name:'房地产'});
                    this.yrzdata.push({value:data.qt,name:'其它'});
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
                    }
                    if(count >= 2){
                        this.scjjdata.push({value:data[1].zxjnjg});
                    }
                    if(count >= 3){
                        this.scjjdata.push({value:data[2].zxjnjg});
                    }
                    if(count >= 4){
                        this.scjjdata.push({value:data[3].zxjnjg});
                    }
                    if(count >= 5){
                        this.scjjdata.push({value:data[4].zxjnjg});
                    }
                    if(count >= 6){
                        this.scjjdata.push({value:data[5].zxjnjg});
                    }
                    if(count >= 7){
                        this.scjjdata.push({value:data[6].zxjnjg});
                    }
                    if(count >= 8){
                        this.scjjdata.push({value:data[7].zxjnjg});
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
                    series: [
                        {
                            name:'',
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '30%'],
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
                    ]
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
                            saveAsImage: {}
                        }
                    },
                    xAxis: [{
                        axisLabel: {
                            rotate: 30,
                            interval: 0
                        },
                        type: 'category',
                        boundaryGap: false,
                        data:['第一周','第二周','第三周','第四周','第五周','第六周','第七周','第八周']
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
            fyfxhxsj(e){
                //获取HTML超链接页面上的文字内容
                const li = $(e.target).closest("li"), txt = $(li).find(".qv").text();
                //加一个class样式
                if(li.hasClass("fyfxhxdjzh")){
                    li.removeClass("fyfxhxdjzh");
                    li.addClass("fyfxhxdjzq");
                }else{
                    li.addClass("fyfxhxdjzh");
                    li.removeClass("fyfxhxdjzq");
                }
                li.siblings().removeClass("fyfxhxdjzh");
                /*li.addClass("hxffdjzh").siblings().removeClass("hxff");
                li.addClass("qvdjzh").siblings().removeClass("qvdjzq");
                li.addClass("pfmdjzh").siblings().removeClass("pfmdjzq");*/
                alert(txt);
                var qvjian = new Array();
                var qqj = "";
                var hqj = "";
                qvjian = txt.split("-");
                console.log(qvjian);
                if(qvjian.length == 1){
                    qqj = qvjian[0];
                    hqj = 9999;
                }else{
                    qqj = qvjian[0];
                    hqj = qvjian[1];
                }
                const url2 = this.$api + "/yhcms/web/jcsj/wxFxxx.do";
                this.$http.post(url2,{"lpid":this.lpid,"m1":qqj,"m2":hqj}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    console.log(data);
                    const count = data.length;

                }, (res)=>{
                    Indicator.close()
                });

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
        }
    }
</script>
