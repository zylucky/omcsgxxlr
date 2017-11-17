<style>
    body {
        margin: 0 !important;
        padding: 0 !important;
    }
    .cwkz{font-size: 0.38rem !important;font-weight: 900;margin-top: 0.5rem !important;margin: auto;width: 5rem;}
    .sssj{color: #999999;border: 1px solid red;margin-top: 0.2rem !important;margin: auto;width: 1.5rem;}
</style>
<template>
    <div style="background-color: white !important;border: 1px solid red;">
        <div class="cwkz"><span  v-text="xmname"></span>空置房源数据展示</div>
        <div class="sssj">实时数据</div>
        <div id="main" style="width:100%;height:400px;"></div>
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
                xmname:"朝外MEN",

            }
        },
        methods: {





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



            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
                var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
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
                        data:[
                            {value:335, name:'空置房源', selected:true},
                            {value:679, name:'未知房源'},
                            {value:1548, name:'已租房源'}
                        ]
                    },
                    {
                        name:'',
                        type:'pie',
                        radius: ['40%', '55%'],
                        label: {
                            normal: {
                                formatter: '{b|{b}:\n}{c}\n{per|{d}%}',
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
                        data:[
                            {value:310, name:'可出租房源'},
                            {value:135, name:'未到期房源'},
                            {value:1048, name:'90天内到期房源'},
                            {value:251, name:'45天内到期房源'},
                            {value:102, name:'信息不全'}
                        ]
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);


        }
    }
</script>
