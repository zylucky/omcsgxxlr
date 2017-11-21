<style scoped lang="less">
    @import "../resources/css/reset.css";
    @import "../resources/css/base.less";
    @import "../resources/css/website/elevator_msg.less";

    .page-infinite-loading {
        text-align: center;
        background-color: #FFF;
        & > span {
            display: inline-block;
        }
    }
    .ys_item_ul li{
        position: relative;
    }
    .shyt{width:100% !important}

</style>
<template>
    <div class="all_elements">
        <div class="build_top ele_wrap">
            <ul class="ys_item_ul mb60">
                <li class="clearfix">
                    <span class="ys_tit w170" style="width: 2rem !important;">房源租售情况：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20"><input type="radio"  value="1" v-model="fyzsqk" name="fang_sale">出租</label>
                        <label class="mr20"><input type="radio" value="2" v-model="fyzsqk"  name="fang_sale">出售</label>
                        <label class="mr20"><input type="radio" value="3" v-model="fyzsqk"  name="fang_sale">可租可售</label>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w170" style="width: 2rem !important;">是否精耕：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20"><input type="radio"  value="1" v-model="sfjg" name="shifu_jing">是</label>
                        <label class="mr20" style="margin-left: .25rem;"><input type="radio" value="2" v-model="sfjg"  name="shifu_jing">否</label>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w170" style="width: 2rem !important;">房源跟进状态：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfspAction($event)"><input type="radio"  value="1" v-model="fygjzt" name="fangyuan_stat">有效</label>
                        <label class="mr20" @click="sfspAction($event)"><input type="radio" value="2" v-model="fygjzt"  name="fangyuan_stat">暂缓</label>
                        <label class="mr20" @click="sfspAction($event)"><input type="radio" value="3" v-model="fygjzt"  name="fangyuan_stat">无效</label>
                    </div>
                </li>
                <li class="clearfix pr" v-show="fygjlxsfxs">
                    <span class="ys_tit" style="width: 2rem !important;">房源跟进状态：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model.trim="fygjlx"  onfocus="this.blur()" placeholder="请选择" @click="openBtype">
                        <i class="right_arrow" @click="openBtype">&gt;</i>
                    </div>
                </li>
                <div class="analy_item">
                    <span class="analy_tit db mb10">备注</span>
                    <div class="analy_content">
                        <textarea name="" cols="30" rows="10" v-model="bezhu" placeholder="请输入"></textarea>
                    </div>
                </div>
            </ul>
            <a href="javascript:;" class="ys_default_btn mb80" @click="saveInfo">保存</a>
        </div>

        <!--商铺类型-->
        <mt-popup v-model.trim="popupVisible" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureBtype">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureBtype">确定</span>
            </div>
            <mt-picker :slots="slots_bType" v-if="fygjztxl == 1" @change="selectLevel"></mt-picker>
            <mt-picker :slots="slots_bType1" v-if="fygjztxl == 2" @change="selectLevel"></mt-picker>
            <mt-picker :slots="slots_bType2" v-if="fygjztxl == 3" @change="selectLevel"></mt-picker>
        </mt-popup>
    </div>
</template>
<script>
    const level1 = {
        "45天内到期":"1","90天内到期":"2","当前空置":"3","当前不可租":"4","他租":"5","非正常到期":"6","无效房源":"7","不确定":"8"
    };
    import { Toast } from 'mint-ui'; //toast
    import { Indicator} from 'mint-ui'; //toast
    import { MessageBox } from 'mint-ui'; //弹窗
    import {DatetimePicker} from 'mint-ui';  //日期选择
    import {Popup} from 'mint-ui'; //弹窗
    export default {
        components: {
            Toast,
            MessageBox,
            DatetimePicker,
            Popup
        },

        data () {
            return {
                "id": "",
                "fyid": "",//房源id
                bezhu:'',//备注
                fyzsqk:'',//房源租售情况
                sfjg:'',//是否精耕
                fygjzt:'',//房源跟进状态
                fygjlx:'',//房源跟进类型
                fygjztxl:'',//跟进状态类型的选择的判断
                fygjlxsfxs:'',//根据跟进状态来判断是否显示跟进状态类型
                statuess:'',
                popupVisible:false,
                popupVisible2:false,
                slots_bType: [
                    {
                        values: ['45天内到期','90天内到期', '当前空置'],
                    }
                ],
                slots_bType1: [
                    {
                        values: ['非正常到期','当前不可租', '他租'],
                    }
                ],
                slots_bType2: [
                    {
                        values: ['无效房源','不确定'],
                    }
                ],
            }
        },
        methods: {
            openPicker() {
                this.$refs.picker.open();
            },
            handleConfirm(value){
                if(this.sfzh==0){
                    this.kzsj = this.transformDate(value);
                }else if(this.sfzh==1){
                    this.qzsj = this.transformDate(value);
                }
            },

            openBtype() {
                //this.shplx = "商场内铺";
                this.popupVisible = true;
            },
            //关闭底部
            sureBtype(){
                this.popupVisible = false;
            },
            //选择赋值
            selectLevel(picker, values) {
                if(this.statuess == 1){
                    this.statuess = 2;
                }else{
                    this.fygjlx = values[0];
                }

            },

            //打开底部2
            openDecorationType() {
                //this.zxsp = "精装交付";
                this.popupVisible2 = true;
            },
            //关闭底部2
            sureBtype2(){
                this.popupVisible2 = false;
            },
            //选择赋值2
            selectLevel2(picker, values) {
                this.zxsp = values[0];
            },

            //日期转换
            transformDate: function (date) {
                var str = '';
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                str = year + '-' + this.addZero(month) + '-' + this.addZero(day);
                return str;
            },
            checkSplx(value){
                if(value=='内铺'){
                    return "1";
                }else if(value=='临街内铺'){
                    return "2";
                }else if(value=='商场内铺'){
                    return "3";
                }else if(value=='小区内铺'){
                    return "4";
                }

            },

            //补零
            addZero(n){
                return n = n < 10 ? '0' + n : '' + n;
            },

            selectTag(e){
                const target = $(e.target), val = target.attr("value");
                if(!val){return;}

                if ($(e.target).hasClass('active')) {
                    let shyt_t = new Set(this.shyt);
                    shyt_t.delete(val);
                    this.shyt = [...shyt_t];

                    $(e.target).removeClass('active');
                } else {
                    let shyt_t = new Set(this.shyt);
                    shyt_t.add(val);
                    this.shyt = [...shyt_t];

                    $(e.target).addClass('active');
                }
            },
            chooseMedicine(){
                if(this.zdid!=0){
                    for(var i=0;i<this.zds.length;i++){
                        if(this.zds[i].id==this.zdid){
                            this.gzys=this.zds[i].gzys;
                            console.log(this.zds[i].gzys);
                        }
                    }
                }
            },
            hyAction(){
                var _this=this;
                setTimeout(function(){
                    if(_this.hystate==1){
                        $(".hy2Class").css("display","block");
                        $(".hy1Class").css("display","none");
                        _this.ckzljg="";
                    } if(_this.hystate==0){
                        $(".hy1Class").css("display","block");
                        $(".hy2Class").css("display","none");
                        _this.ckzljg="";
                    }
                },1);
            },
            getInitData(){
                const fyid = this.$route.params.fyid;
                this.fyid = fyid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/zdfyxx/getGjzt.do";
                let that = this;
                this.$http.post(url, {"fyid":fyid}).then((res)=>{
                    Indicator.close();
                    const data=JSON.parse(res.bodyText).data;
                    if(data){
                        this.bezhu = data.bzh;
                        this.fygjzt = data.gjzt1;
                        this.fygjlx = data.gjzt2;
                        this.sfjg = data.jgzt;
                        this.fyzsqk = data.zszt;
                        this.id = data.id;
                        if(data.gjzt1){
                            this.fygjlxsfxs = true;
                            if(data.gjzt1 == 1){
                                this.fygjztxl = 1;
                                if(this.fygjlx == 1){
                                    this.fygjlx = "45天内到期";
                                }
                                if(this.fygjlx == 2){
                                    this.fygjlx = "90天内到期";
                                }
                                if(this.fygjlx == 3){
                                    this.fygjlx = "当前空置";
                                }
                            }
                            if(data.gjzt1 == 2){
                                this.fygjztxl = 2;
                                if(this.fygjlx == 4){
                                    this.fygjlx = "当前不可租";
                                }
                                if(this.fygjlx == 5){
                                    this.fygjlx = "他租";
                                }
                                if(this.fygjlx == 6){
                                    this.fygjlx = "非正常到期";
                                }
                            }
                            if(data.gjzt1 == 3){
                                this.fygjztxl = 3;
                                if(this.fygjlx == 7){
                                    this.fygjlx = "无效房源";
                                }
                                if(this.fygjlx == 8){
                                    this.fygjlx = "不确定";
                                }
                            }
                            this.statuess = 1;
                        }else{
                            this.fygjlxsfxs = false;
                        }
                    }else{
                        this.fygjlxsfxs = false;
                    }
                }, (res)=>{
                    Indicator.close()
                });
            },
            sfspAction(e){
                this.fygjlxsfxs = true;
                const target = $(e.target), val = target.attr("value");
                if(val == 1){
                    this.fygjztxl = 1;
                }
                if(val == 2){
                    this.fygjztxl = 2;
                }
                if(val == 3){
                    this.fygjztxl = 3;
                }
                /*setTimeout(function(){
                    if(_this.sfshp==1){
                        $(".splxDiv").css("display","block");
                    }else if(_this.sfshp==0){
                        $(".splxDiv").css("display","none");

                    }
                },1);*/
            },
            zhAction(){
                console.log("aaa "+this.sfzh);
                var _this=this;
                setTimeout(function(){
                    console.log("bbb "+_this.sfzh);
                    if(_this.sfzh==1){
                        $(".qzClass").css("display","block");
                        $(".kzClass").css("display","none");
                        _this.qzsj = "";
                        _this.kzsj="";
                    }else if(_this.sfzh==0){
                        $(".qzClass").css("display","none");
                        $(".kzClass").css("display","block");
                        _this.qzsj = "";
                        _this.kzsj="";
                    }
                },1);

            },
            checknumber(String){
                var Letters = "1234567890";
                var i;
                var c;
                for( i = 0; i < String.length; i ++ )   {   //Letters.length() ->>>>取字符长度
                    c = String.charAt( i );
                    if (Letters.indexOf( c ) ==-1)   { //在"Letters"中找不到"c"   见下面的此函数的返回值
                        return true;
                    }
                }
                return false;
            } ,
            checkString(String){
                var Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                var i;
                var c;
                for( i = 0; i < String.length; i ++ )   {   //Letters.length() ->>>>取字符长度
                    c = String.charAt( i );
                    if (Letters.indexOf( c ) ==-1)   { //在"Letters"中找不到"c"   见下面的此函数的返回值
                        return true;
                    }
                }
                return false;
            } ,
            fanhui(){
                window.history.go(-1);
            },
            saveInfo(){
                if(this.fygjzt != "" && !this.fygjlx){
                    Toast({
                        message: '房源跟进状态不能为空！',
                        duration: 1000
                    });
                    return false;
                }else{
                    if(this.bezhu == "" && this.fyzsqk == "" && this.sfjg == "" && this.fygjzt == ""){
                        Toast({
                            message: '所有信息为空，不予保存',
                            duration: 1000
                        });
                        setTimeout(function () {
                            history.go(-1);
                            //_this.$router.push({path: '/index'})
                        }, 1000);
                    }else{
                        Indicator.open({
                            text: '保存中...',
                            spinnerType: 'fading-circle'
                        });
                        this.$http.post(
                            this.$api + "/yhcms/web/zdfyxx/saveFyzt.do",
                            {"parameters":{"bzh":this.bezhu,"fyid":this.fyid,"gjzt1":this.fygjzt,"gjzt2":level1[this.fygjlx],"id":this.id,"jgzt":this.sfjg,"zszt":this.fyzsqk}}
                        ).then(function (res) {
                            Indicator.close();
                            var result = JSON.parse(res.bodyText);
                            if (result.success) {
                                Toast({
                                    message: '保存成功',
                                    duration: 1000
                                });
                                setTimeout(function () {
                                    history.go(-1);
                                    //_this.$router.push({path: '/index'})
                                }, 1000);
                            } else {
                                Toast({
                                    message: '保存失败: ' + result.message,
                                    position: 'bottom'
                                });
                            }
                        }, function (res) {
                            Toast({
                                message: '保存失败',
                                position: 'bottom'
                            });
                        });

                    }
                }
            }
        },
        computed:{
            yt_t(){
                if(this.shyt.length < 1){
                    return "请选择适合业态";
                }
                let tags = this.shyt.map((t)=>{
                    for(let i = 0; i < this.yt_all.length; ++i){
                        if(this.yt_all[i].id === t){
                            return this.yt_all[i].name;
                        }
                    }
                });
                return tags.join(";");
            }
        },
        mounted(){
            this.getInitData();
            $('title').html("房源状态");

        },
    }
</script>
