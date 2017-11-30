<style>
    body {
        margin: 0 !important;
        padding: 0 !important;
    }
    .cwkz{font-size: 0.38rem !important;font-weight: 900;padding-top: 0.5rem !important;margin: auto;text-align:center;}
    .mysjimg{width:1.5rem;margin-top: 1rem;margin-left: 3rem;}
    .meiyshjzit{margin-top: 0.5rem;margin-left: 2rem;color: rgb(254,122,14);height: 2rem;   }
    .znfyys{line-height: 0.6rem;border:0px solid red;margin-left: 0.4rem;font-size: 0.32rem;}
    .pjjdt{width: 15%;margin-left: 0.2rem;}
    .pjjdthmd{border:1px solid #dddce1;width: 75%;margin-left: 20%;line-height: 0.8rem;position: relative;top:0.23rem;background-color:#dddce1;}
    .lijj{line-height: 1rem !important;border-bottom: 0px solid #dbdadf !important;}
    .pjjdtnr{height: 0.6rem;}
    .imgdz{width: 0.5rem;display: block;margin: 0px auto;line-height: 0.6rem;position: relative;top: 0.05rem;}
</style>
<template>
    <div>
        <div style="background-color: white !important;">
            <div class="cwkz" style="width: 5.3rem !important;"><span v-text="topic"></span></div>
            <!--<div class="sssj">实时数据</div>-->
            <div class="znfyys" style="margin-top: 0.3rem;">自您的房源委托到我们平台已被<span style="color:rgb(255,0,0);font-weight: 600;" v-text="shoucnu">20</span>人收藏</div>
            <div class="znfyys">我们已经帮您带了<span style="color:rgb(255,0,0);font-weight: 600;" v-text="kanfnu">20</span>位客户看房</div>
            <div class="znfyys">看房客户所属行业如下：</div>
            <div v-if="manxsh1">
                <div><img class="mysjimg" src="../resources/images/icons/fangzi.png"></div>
                <div class="meiyshjzit">
                    <div>抱歉！没有找到符合条件的</div>
                    <div>相关数据，换个条件试试吧~</div>
                </div>
            </div>
            <div v-else id="main1" style="width:100%;height:7rem;"></div>
            <div class="znfyys">他们对您的房源做出了如下评价：</div>
            <div>
                <ul class="ys_item_ul mb60" style="margin-top: 0.1rem;font-size: 0.32rem;color: black;margin-bottom: 0.7rem !important;">
                    <li class="clearfix lijj">
                        <div class="ys_item_con fl pjjdt">采光 </div>
                        <div class="pjjdthmd">
                            <div class="pjjdtnr" id="cg"><img v-show="shcg" class="imgdz" src="../resources/images/icons/dz.png"></div>
                        </div>
                    </li>
                    <li class="clearfix lijj">
                        <div class="ys_item_con fl pjjdt">户型 </div>
                        <div class="pjjdthmd">
                            <div class="pjjdtnr" id="hx"><img v-show="shhx" class="imgdz" src="../resources/images/icons/dz.png"></div>
                        </div>
                    </li>
                    <li class="clearfix lijj">
                        <div class="ys_item_con fl pjjdt">装修 </div>
                        <div class="pjjdthmd">
                            <div class="pjjdtnr" id="zx"><img v-show="shzx" class="imgdz" src="../resources/images/icons/dz.png"></div>
                        </div>
                    </li>
                    <li class="clearfix lijj">
                        <div class="ys_item_con fl pjjdt">家具 </div>
                        <div class="pjjdthmd">
                            <div class="pjjdtnr" id="jj"><img  v-show="shjj" class="imgdz" src="../resources/images/icons/dz.png"></div>
                        </div>
                    </li>
                    <li class="clearfix lijj">
                        <div class="ys_item_con fl pjjdt">楼层 </div>
                        <div class="pjjdthmd">
                            <div class="pjjdtnr" id="lc"><img v-show="shlc" class="imgdz" src="../resources/images/icons/dz.png"></div>
                        </div>
                    </li>
                    <li class="clearfix lijj">
                        <div class="ys_item_con fl pjjdt">价格 </div>
                        <div class="pjjdthmd">
                            <div class="pjjdtnr" id="jg"><img v-show="shjg" class="imgdz" src="../resources/images/icons/dz.png"></div>
                        </div>
                    </li>
                    <li class="clearfix lijj">
                        <div class="ys_item_con fl pjjdt">格局 </div>
                        <div class="pjjdthmd">
                            <div class="pjjdtnr" id="mzq"><img v-show="shmzq" class="imgdz" src="../resources/images/icons/dz.png"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="znfyys">其中，有<span style="color:rgb(255,0,0);font-weight: 600;" v-text="bsmynu">20</span>位客户对您的房源表示满意</div>
            <div class="znfyys" style="padding-bottom:0.8rem;">我们将为您持续跟进</div>
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
                fyid:'',
                topic:'',
                cg:'',
                hx:'',
                gx:'',//装修
                jj:'',//家具
                lc:'',
                jjxx:'',//价格
                mzq:'',//格局
                shcg:false,
                shhx:false,
                shzx:false,
                shjj:false,
                shlc:false,
                shjg:false,
                shmzq:false,
                bsmynu:'',
                kanfnu:'',
                shoucnu:'',
                hydata:[],
                scjjdata:[],
                resuldata:{},
                zhouqidata:[],
                hxys:[],
                sxys:[],
                hxzxtys:[],
                manxsh1:false,
            }
        },
        methods: {
            //获取后台的数据
            getInitData(){
                const id = this.$route.params.fyid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url1 = this.$api + "/yhcms/web/jcsj/wxDkFx.do";
                this.$http.post(url1,{"id":id}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText);
                    $('title').html(data.title);
                    this.topic = data.title;
                    this.bsmynu = data.mycount;
                    this.kanfnu = data.khcount;
                    this.shoucnu = data.sccount;
                    console.log(data.khcount);
                    if(data.khcount != 0){
                        this.manxsh1 = false;
                        if(data.ytdata.jr != 0){
                            this.hydata.push({value:data.ytdata.jr,name:'金融'});
                            this.sxys.push('rgb(194,53,49)');//
                        }
                        if(data.ytdata.jy != 0){
                            this.hydata.push({value:data.ytdata.jy,name:'教育'});
                            this.sxys.push('rgb(47,69,84)');
                        }
                        if(data.ytdata.it != 0){
                            this.hydata.push({value:data.ytdata.it,name:'互联网'});
                            this.sxys.push('rgb(97,160,168)');
                        }
                        if(data.ytdata.xx != 0){
                            this.hydata.push({value:data.ytdata.xx,name:'休闲'});
                            this.sxys.push('rgb(212,130,101)');
                        }
                        if(data.ytdata.wh != 0){
                            this.hydata.push({value:data.ytdata.wh,name:'文化'});
                            this.sxys.push('rgb(145,199,174)');
                        }
                        if(data.ytdata.fdc != 0){
                            this.hydata.push({value:data.ytdata.fdc,name:'房地产'});
                            this.sxys.push('rgb(116,159,131)');
                        }
                        if(data.ytdata.qt != 0){
                            this.hydata.push({value:data.ytdata.qt,name:'其它'});
                            this.sxys.push('rgb(202,134,34)');
                        }
                        this.shanx();
                        //给页面加背景色和宽度
                        if(data.pjdata.cg2){
                            this.cg = data.pjdata.cg2 + "%";
                            $("#cg").css("width",this.cg);
                            $("#cg").css("background-color",'rgb(194,53,49)');
                            this.shcg = true;
                        }
                        if(data.pjdata.hx2){
                            this.hx = data.pjdata.hx2 + "%";
                            $("#hx").css("width",this.hx);
                            $("#hx").css("background-color",'rgb(47,69,84)');
                            this.shhx = true;

                        }
                        if(data.pjdata.zx2){
                            this.gx = data.pjdata.zx2 + "%";
                            $("#zx").css("width",this.gx);
                            $("#zx").css("background-color",'rgb(97,160,168)');
                            this.shzx = false;

                        }
                        if(data.pjdata.jj2){
                            this.jj = data.pjdata.jj2 + "%";
                            $("#jj").css("width",this.jj);
                            $("#jj").css("background-color",'rgb(212,130,101)');
                            this.shjj = true;
                        }
                        if(data.pjdata.lc2){
                            this.lc = data.pjdata.lc2 + "%";
                            $("#lc").css("width",this.lc);
                            $("#lc").css("background-color",'rgb(145,199,174)');
                            this.shlc = true;
                        }
                        if(data.pjdata.jg2){
                            this.jjxx = data.pjdata.jg2 + "%";
                            $("#jg").css("width",this.jjxx);
                            $("#jg").css("background-color",'rgb(84,101,112)');
                            this.shjg = true;
                        }
                        if(data.pjdata.mzq2){
                            this.mzq = data.pjdata.mzq2 + "%";
                            $("#mzq").css("width",this.mzq);
                            $("#mzq").css("background-color",'rgb(196,174,166)');
                            this.shmzq = true;
                        }
                    }else{
                        this.manxsh1 = true;
                    }
                }, (res)=>{
                    Indicator.close()
                });
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
                        y:'75%',
                        data: ['金融', '教育','互联网','休闲','文化','房地产','其它']
                    },
                    color:this.sxys,//设置扇形图固定的颜色
                    series : [
                        {
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '40%'],
                            data:this.hydata,
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
            this.getInitData();
        }
    }
</script>
