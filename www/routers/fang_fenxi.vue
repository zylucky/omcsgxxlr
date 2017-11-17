<style>
    body {
        margin: 0 !important;
        padding: 0 !important;
    }
    .cwkz{font-size: 0.38rem !important;font-weight: 900;padding-top: 0.5rem !important;margin: auto;text-align:center;}
    .sssj{color: #999999;margin-top: 0.2rem !important;margin: auto;width: 1.5rem;}
</style>
<template>
    <div>
        <div style="background-color: white !important;height: 11.3rem;">
            <div class="cwkz"><span  v-text="topic"></span>空置房源数据展示</div>
            <div class="sssj">实时数据</div>
            <div id="main" style="width:100%;height:9rem;"></div>
        </div>
        <div style="background-color: white !important;height: 10.3rem;border: 1px solid red;margin-top: 0.2rem;">
            <div class="cwkz" style="width: 5.3rem !important;"><span  v-text="topic"></span>已入住企业类型占比</div>
            <div class="sssj">实时数据</div>
            <div id="main1" style="width:100%;height:8rem;"></div>
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
                yrzdata1:[],

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
                    const result = JSON.parse(res.bodyText);
                    this.yrzdata.push({value:data.kzfy,name:'可出租房源'});
                    this.yrzdata.push({value:data.wdqfy,name:'未到期房源'});
                    this.yrzdata.push({value:data.qsdqfy,name:'90天内到期房源'});
                    this.yrzdata.push({value:data.swdqfy,name:'45天内到期房源'});
                    this.yrzdata.push({value:data.xxbq,name:'信息不全'});
                    this.yrzdata.push({value:data.kzfy,name:'空置房源'});
                    this.yrzdata.push({value:data.wzfy,name:'未知房源'});
                    this.yrzdata.push({value:data.yzfy,name:'已租房源'});
                    this.shanx();
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
                        // orient: 'vertical',
                        // top: 'middle',
                        bottom: 10,
                        left: 'center',
                        data: ['金融', '教育','互联网','科技','文化','传媒','其他']
                    },
                    series : [
                        {
                            type: 'pie',
                            radius : '65%',
                            center: ['50%', '50%'],
                            selectedMode: 'single',
                            data:[
                                {value:1548,name: '金融'},
                                {value:535, name: '教育'},
                                {value:510, name: '互联网'},
                                {value:634, name: '科技'},
                                {value:735, name: '文化'},
                            ],
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
