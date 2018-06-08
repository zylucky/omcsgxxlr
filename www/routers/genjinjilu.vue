<style scoped lang="less">
    @import "../resources/css/reset.css";
    @import "../resources/css/base.less";
    @import "../resources/css/website/list.less";

    .page-infinite-loading {
        text-align: center;
        background-color: #FFF;
        & > span {
            display: inline-block;
        }
    }

    .filt-open .warpper2{height:100%;overflow-y: scroll !important}
    .highlight a{color:#476CBA !important}
    .cell > dd {float:left;margin-right:.2rem}
    .supply_msg_box dd.supply_house{margin-top:.1rem !important}
    dd.supply_msg_box > dl > dd{padding-bottom:.13rem !important}
    .bulid_msg_last {
        display: block;
        width: 1.2rem;
        text-align: center;
        margin: 0 auto;
        i {
            width: .65rem;
            height: .55rem;
            display: block;
            margin: .5rem auto .2rem;
            background: url("../resources/images/icons/basic_icon/basic09.png") no-repeat;
            background-size: .65rem .55rem;
        }
    }

    .msg_progress_bar {
        position: relative;
        margin-top: .5rem;
        height: .34rem;
        line-height: .34rem;
        background-color: @bg_btn_gray;
        text-align: center;
        .finish_bar {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 50%;
            background-color: @bg_mid_blue;
        }
        .progress_text {
            position: absolute;
            right: .25rem;
            top: 0;

        }
    }

    .close {
        font-size: @font54;
        width: .54rem;
        display: block;
        margin: .1rem auto;
    }

    /*//遮罩*/
    .shadow {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: @cl_000;
        opacity: .7;
        z-index: 999;
        display: none;
    }

    #filter-area ul, #filter-price ul{
        height: 200px;
        overflow-y: scroll;
    }

    li.ys_listcon:not(:last-child){border-bottom: 1px solid rgb(229, 229, 230) !important}
    li.ys_listcon > a{float:left;border-bottom:none}
    li.ys_listcon > a:first-child{width:84%}
    li.ys_listcon > a:last-child{width:16%}
    li.ys_listcon > a:last-child{
        background:url(../resources/images/icons/right-arrow.jpg) no-repeat;
        background-size: 20px 20px;
        padding: 12% 5%;background-origin: content-box;}
    .analy_content{
    	height: 1.6rem;
    	line-height: 1.6rem;
    	font-size: 0.36rem;
    	color: #fff;
    	font-weight: bold;
    	padding-left: 0.25rem;
    }
    .analy_item{
    	position: relative;
    	width: 100%;
    	height: 2.43rem;
    	padding: 0;
    	background: url(../resources/images/fangyfx/genjinlist/bg.png) no-repeat center;
    	background-size: cover;
    	border-radius:0!important;
    }
    .an_bottom{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 0.85rem;
		line-height: 0.85rem;
		background: rgba(0,0,0,0.3);
		padding-left: 0.25rem;
		font-size: 0.24rem;
		color: #fff;
    }
    .add{
    	position: absolute;
    	bottom: -0.4725rem;
    	right: 0.45rem;
    	width: 0.95rem;
    	height: 0.95rem;
    	background: url(../resources/images/fangyfx/genjinlist/add.png) no-repeat center;
    	background-size: cover;
    }
    .list_box{
    	margin-top: 0.55rem;
    }
    .start{
    	position: relative;
    	height: 1rem;
    	padding-left: 0.25rem;
    	span{
    		position: absolute;
    		top: -0.2rem;
    		display: inline-block;
    		width: 1.2rem;
    		height: 0.5rem;
    		line-height: 0.5rem;
    		background: #3586f2;
    		font-size: 0.22rem;
    		text-align: center;
    		color: #fff;
    		border-radius: 0.5rem;
    		i{
    			position: absolute;
    			bottom: -0.65rem;
    			left: 0.6rem;
    			display: inline-block;
    			width: 0.02rem;
    			height: 0.65rem;
    			border-left: 1px dashed #838383;
    		}
    	}
    }
    .ys_listcon{
    	position: relative;
    	width: 7rem;
    	margin: 0 auto 0.3rem;
    	border-radius: 0.08rem;
    	-webkit-box-shadow:0px 0px 0.04rem #E2E1E7; 
    	box-shadow:0px 0px 0.04rem #E2E1E7;
    	padding: 0.24rem;
    	i{
			position: absolute;
			bottom: -0.65rem;
			left: 0.6rem;
			display: inline-block;
			width: 0.02rem;
			height: 0.65rem;
			border-left: 1px dashed #838383;
		}
		p:first-child{margin-bottom: 0.3rem;font-size: 0.28rem;}
    }
    .ys_listcon:last-child{
    	i{display: none;}
    }
</style>




<template>
    <div>
        <div class="option">
            <div class="analy_item" style="box-shadow: 1px 1px 3px rgb(196,195,200);border-radius:5px;">
                <div class="analy_content">
                    <span v-text="lpname">建外soho</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span v-text="zdname">建外soho</span>
                </div>
                <p class="an_bottom">开始跟进时间2017-12-21   跟进记录（2）</p>
                <p class="add"></p>
            </div>
            <!--筛选结果start-->
            <ul
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="20"
                    infinite-scroll-immediate-check="checked" class="list_box">
                <div class="start">
                	<span>跟进记录<i class="dash"></i></span>
                	
                </div>
                <li class="ys_listcon pv15 clearfix" v-for="item in resultData">
                    <!--<dl class="supply">
                        <!--<dt style="width: 0.9rem;height: 1.9rem;padding-top: 0.2rem;">
                            <dd style="border:1px solid #8B8989;width: 0.3rem;height: 0.3rem;border-radius:50%;"></dd>
                            <hr style="border:0.1px dashed #8B8989;width: 0.5rem;margin-top: -0.15rem;margin-left: 0.37rem;" />
                            <hr style="border:0.1px dashed #8B8989;width: 1.5rem;transform:rotate(90deg);margin-top:0.93rem;margin-left: -0.6rem;" />
                        </dt>-->
                        <!--<dd style="margin-left: 0.85rem;height: 1.5rem;padding-top: 0.2rem;">
                            <dl style="height: 0.6rem;">
                                <dd style="float: left;">{{item.depart}}</dd>
                                <dd style="float: left;">{{item.gjname}}</dd>
                                <dd style="float: right;margin-right: 0.3rem;">{{item.gtime}}</dd>
                            </dl>
                            <dl>{{item.information}}</dl>
                        </dd>-->

                    <!--</dl>-->
                    <p>{{item.information}}</p>
                    <p style="display: flex;justify-content: flex-end;color: #969696;font-size: 0.24rem;">
                    	<span>{{item.depart}}-</span>
                    	<span>{{item.gjname}}</span>
                    	<span style="margin-left: 0.3rem;">{{item.gtime}}</span>
                    </p>
                    <i class="dash"></i>
                </li>
            </ul>
            <p v-if="loading" class="page-infinite-loading">
                <mt-spinner type="fading-circle"></mt-spinner>
            </p>
        </div>
        <div class="mask" id="maskEl" @click="closeFilter"
             :class="{show:this.currentFilterTab=='district'||this.currentFilterTab=='price'||this.currentFilterTab=='area'||this.currentFilterTab=='features'}">
        </div>
        <div style="position: fixed;bottom: -0.7rem;left:0rem;width: 100%;background-color: white;">
            <a href="javascript:;" class="ys_default_btn mb80" style="" @click="saveOwnerData">++</a>
        </div>
    </div>
</template>
<script>
    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
    import {Indicator} from 'mint-ui';
    import {InfiniteScroll} from 'mint-ui';
    import {Toast} from 'mint-ui';
    import {Actionsheet} from 'mint-ui';
    import {Search} from 'mint-ui';
    import axios from 'axios';
    import qs from 'qs';
    export default {
        components: {
            header1,
            footer1,
            InfiniteScroll,
            Toast,
            Actionsheet,
            Search
        },

        data () {
            return {
                fyid:'',
                fyyzid:'',
                lpid:"",
                lpname:'',
                zdname:'',
                districtArray: [],
                priceArray: [],
                sizeArray: [],
                subBusiness: [],

                currentFilterTab: 'nth',
                curTab: 'nth',
                priceFilterTab: 'p',
                loading: false,
                noMore: false,
                checked: false,
                price1: '',
                price2: '',
                size1: '',
                size2: '',
                para: {
                    "search_keywork": "",
                    "district": "",
                    "business": "",
                    "line_id": "",
                    "station_id": "",
                    "area": "",
                    "price_dj": "",
                    "price_zj": "",
                    "label": "",
                    "orderby": "D",
                    "curr_page": 1,
                    "items_perpage": 10,
                },
                resultData: [],
                progress: "0%",
                where:'',
            }
        },
        mounted(){
            $('title').html('楼盘列表');
            this.getData();
        },
        created: function () {

        },
        computed: {
            unitword(){
                if (this.priceFilterTab === 'p') {
                    return "元/天";
                } else {
                    return "万元/月";
                }
            }
        },
        methods: {
            getData(){
                this.fyyzid = this.$route.params.fyyzid;
                this.fyid = this.$route.params.fyid;
                const url1 = this.$api + "/yhcms/web/wxqx/getFyBt.do";
                this.$http.post(url1, {"fyid":this.fyid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    this.lpname = data.topic;
                    this.zdname = data.zdh +'-'+ + data.fybh;
                }, (res)=>{
                    Indicator.close()
                });
                const url = this.$api + "/yhcms/web/wxqx/getInforLb.do";
                this.$http.post(url, { "fyyxid":this.fyyzid}).then((res)=>{
                    Indicator.close();
                    this.resultData = JSON.parse(res.bodyText).data;
                    for(var i=0;i<this.resultData.length;i++){
                        if(this.resultData[i].gtime != ''){
                             var date =  new Date(this.resultData[i].gtime);
                             var y = 1900+date.getYear();
                             var m = "0"+(date.getMonth()+1);
                             var d = "0"+date.getDate();
                             this.resultData[i].gtime= y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
                        }
                    }
                }, (res)=>{
                    Indicator.close()
                });

            },
            saveOwnerData(){
                this.$router.push({path: '/tianxiefenjin/'+this.fyyzid+'/'+this.fyid});
            },
            toDetail(){
                const _this = this;
                /*const location = "http://omc.urskongjian.com/nx/#/detail?building_id=" + this.lpid;*/
                setTimeout(function(){
                    /*window.location = location;*/
                    _this.$router.push({path: '/detail?building_id=' + _this.lpid});
                }, 200);
            },
            getProgress(){
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/zdfyxx/getLpwcblxx.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":this.lpid},"foreEndType":2,"code":"300000086"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.progress = data.wcbl + "%";
                    $('.finish_bar').css("width",this.progress);
                }, (res)=>{
                    Indicator.close()
                    that.progress = "10%";
                });
            },
            searchSubDistrict:function(code,e){
                this.curTab = "d";
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                /* const li = $(e.target).parent("li"), txt = $(li).find("a").text();
                 li.addClass("highlight").siblings().removeClass("highlight");*/
                const li = $(e.target).closest("li"), txt = $(li).find("a").text();
                li.addClass("highlight").siblings().removeClass("highlight");
                this.where = txt;

                var paraObj = {"parameters":{"district":code},"foreEndType":2,"code":"300000012"}, this_ = this;
                axios.post('/yhcms/web/lpjbxx/getLpYwqyFq.do', paraObj)
                    .then(function (response) {
                        Indicator.close();
                        this_.subBusiness = [{"id":code,"fdname":"不限"}].concat(response.data.data.ywfq);
                    }).catch(function (error) {
                    Indicator.close();
                });
            },
            closeFilter: function () {
                this.currentFilterTab = 'nth';
            },
            changeRou: function () {
                this.$router.push({path: '/search?rt=index'})
            },
            searchChoose: function (code, val, value, e) {
                switch ($(e.target).closest('li').attr('data-type')) {
                    case 'district':
                        $('h2.district-h').html(value);
                        if(value==='不限'){
                            this.para.district = code;
                            this.para.business = "";
                            $('h2.district-h').html(this.where || value);
                        }
                        else{
                            this.para.district = "";
                            this.para.business = code;
                        }
                        break;
                    case 'size':
                        $('h2.area-h').html(value);
                        if(value === '不限'){
                            this.para.area = "";
                        }
                        else{
                            this.para.area = JSON.stringify([parseFloat(val.split('-')[0]), parseFloat(val.split('-')[1])]);
                        }
                        break;
                    case 'price':
                        $('h2.price-h').html(value);
                        if(value === '不限'){
                            this.para.price_dj = "";
                        }
                        else{
                            this.para.price_dj = JSON.stringify([parseFloat(val.split('-')[0]), parseFloat(val.split('-')[1])]);
                        }
                        break;
                    default:
                }
                /* const li = $(e.target).parent("li");
                 li.addClass("highlight").siblings().removeClass("highlight");*/
                const li = $(e.target).closest("li");
                li.addClass("highlight").siblings().removeClass("highlight");
                this.currentFilterTab = 'nth';
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                this.resultData = [];
                this.para.curr_page = 1;
                this.getData();
            },
            getFilters: function () {
                const that = this;
                const url = this.$api + "/yhcms/web/jcsj/getTj.do";
                axios.post(url, {})
                    .then(function (response) {
                        that.districtArray = response.data.data.business;
                        that.sizeArray = response.data.data.range_areas;
                        that.priceArray = response.data.data.range_unit_prices;
                    }).catch(function (error) {

                });
            },
            chooseFilter: function (e) {
                var e = e || window.event;
                this.currentFilterTab = $(e.target).closest('li').attr('data-type')
            },
            resetGetData: function () {
                var paraObj = {
                    "parameters": {
                        "search_keywork": this.para.search_keywork,
                        "district": this.para.district,
                        "business": this.para.business,
                        "area": this.para.area,
                        "price_dj": this.para.price_dj,
                        "curr_page": this.para.curr_page,
                        "items_perpage": 10
                    },
                    "foreEndType": 2,
                    "code": "30000001"
                }, this_ = this;
                let successCb = function (result) {
                    Indicator.close();
                    if (result.data.data.length < this_.para.items_perpage) {
                        this_.noMore = true;
                    }
                    this_.resultData = this_.resultData.concat(result.data.data)
                    if (this_.resultData.length == 0) {
                        Toast({
                            message: '抱歉,暂无符合条件的楼盘!',
                            position: 'middle',
                            duration: 3000
                        });
                    }
                };
                let errorCb = function (result) {
                    Indicator.close();
                    Toast({
                        message: '抱歉,暂无符合条件的楼盘!',
                        position: 'middle',
                        duration: 3000
                    });
                };
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                this.resultData = [];
                this.para.curr_page = 1;
                this.gRemoteData(paraObj, successCb, errorCb);
            },
            selfInputPrice: function () {
                if (parseInt(parseFloat(this.price1)*100) < parseInt(parseFloat(this.price2) * 100)) {
                    this.para.price_dj = JSON.stringify([parseFloat(this.price1), parseFloat(this.price2)]);
                    this.para.curr_page = 1;
                    this.resultData = [];
                    this.getData();
                }
                else {
                    Toast({
                        message: '请输入合理价格',
                        position: 'middle',
                        duration: 2000
                    });
                }
            },
            selfInputSize: function () {
                if (parseInt(parseFloat(this.size1)*100) < parseInt(parseFloat(this.size2) * 100)) {
                    this.para.area = JSON.stringify([parseFloat(this.size1), parseFloat(this.size2)]);
                    this.para.curr_page = 1;
                    this.resultData = [];
                    this.getData();
                } else {
                    Toast({
                        message: '请输入合理面积数字',
                        position: 'middle',
                        duration: 2000
                    });
                }
            },


            gRemoteData(paraobj, successcb, errorcb){
                const url = this.$api + "/yhcms/web/lpjbxx/getLplb.do";
                axios.post(url, paraobj)
                    .then(function (response) {
                        if (typeof successcb === "function") {
                            successcb(response)
                        }
                    }).catch(function (error) {
                    if (typeof errorcb === "function") {
                        errorcb(error)
                    }
                });
            },
            loadMore(){
                if (!this.loading && !this.noMore) {
                    this.loading = true;
                    this.para.curr_page += 1;
                    this.getData();
                }
            },

            shadowShow(event){
                $('.shadow').show();
                const evt = (event || window.event), target = (evt.target || evt.srcElement), href = $(target).parents("a"), lpid=$(href).attr("lpid");
                this.lpid = lpid;
                console.log(this.lpid);
                this.getProgress();
                $('#msg_super_wrap').animate({
                    bottom: 0
                });

            }
        },
        watch: {
            '$route' (to, from) {
                if (to['query']['keyword']) {
                    this.para.search_keywork = to['query']['keyword'];
                    this.resetGetData();
                }
            },
        }
    }
</script>
