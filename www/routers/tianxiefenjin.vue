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
    .clearfix{line-height: 0.8rem !important;}
</style>
<template>
    <div class="all_elements">
        <div class="build_top ele_wrap">
            <ul class="ys_item_ul mb60" style="margin:0.4rem 0.2rem;">
                <div class="analy_item" style="padding: 0;line-height: 0.8rem;padding-left: 0.4rem;box-shadow: 1px 1px 3px rgb(196,195,200);border-radius:5px;">
                    <div class="analy_content">
                        <span v-text="lpname" style="color: black;font-weight: 500;font-size: 0.36rem;"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span v-text="zdhname" style="color: black;font-weight: 500;font-size: 0.36rem;"></span>
                    </div>
                </div>
                <div class="analy_item" style="font-size: 0.32rem;padding: 0;margin-top: 0.4rem;box-shadow: 1px 1px 3px rgb(196,195,200);border-radius:5px;">
                    <div class="analy_content" style="width: 7.1rem;height: 2rem;background-color: rgb(241,241,241);">
                        <textarea name="" cols="30" rows="10" v-model="bezhu" placeholder="请输入跟进记录..." style="padding-left: 0.4rem;font-size: 0.32rem;background-color: rgb(241,241,241);height: 2.6rem;"></textarea>
                    </div>
                </div>
            </ul>
            <a href="javascript:;" class="ys_default_btn mb80" style="margin-top: 50%;" @click="saveInfo">添加</a>
        </div>

        <!--商铺类型-->
        <mt-popup v-model.trim="popupVisible" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureBtype">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureBtype">确定</span>
            </div>
            <!--<mt-picker :slots="slots_bType" @change="selectLevel"></mt-picker>-->
            <mt-picker :slots="slots" @change="selectLevel"></mt-picker>
        </mt-popup>
        <!--商铺类型-->
        <mt-popup v-model.trim="popupVisible2" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureBtype2">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureBtype2">确定</span>
            </div>
            <mt-picker :slots="slots_quality" @change="selectLevel2"></mt-picker>
        </mt-popup>
        <!--合作意向-->
        <mt-popup v-model.trim="popupVisible3" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureBtype3">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureBtype3">确定</span>
            </div>
            <mt-picker :slots="slots_quality3" @change="selectLevel3"></mt-picker>
        </mt-popup>
    </div>
</template>
<script>
    const level1 = {
        "45天内到期":"1","90天内到期":"2","当前空置":"3","业主直租":"4","资产公司压房或转租":"5","纠纷中":"6","意向不明确":"7","无业主电话":"8","业主电话无效":"9"
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
                lpid:'',
                lpname:'',
                zdhname:'',
                bezhu:'',//备注
                fyzsqk:'',//房源租售情况
                sfjg:'',//是否精耕
                hzyx:'',//合作意向
                fygjzt:'',//房源跟进状态
                fygjlx:'',//房源跟进类型
                fygjlx1:'',
                fygjztxl:'',//跟进状态类型的选择的判断
                fygjlxsfxs:'',//根据跟进状态来判断是否显示跟进状态类型
                statuess:'',
                popupVisible:false,
                popupVisible2:false,
                popupVisible3:false,
                slots1:['45天内到期','90天内到期', '当前空置'],
                slots2:['业主直租','资产公司压房或转租','纠纷中','意向不明确'],
                slots3:['无业主电话','业主电话无效'],
                slots: [
                    {
                        flex: 1,
                        values: ['','有效','暂缓','无效'],
                        className: 'slot1',
                        textAlign: 'right'
                    },{
                        flex: 1,
                        values: [''],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ],
                slots_quality: [
                    {
                        values: ['','是', '否'],
                    }
                ],
                slots_quality3: [
                    {
                        values: ['','A(可约业主可收购)', 'B(深度议价中)', 'C(初步审核)'],
                    }
                ],
            }
        },
        methods: {
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
            },
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
                if(values[0] == ""){
                    this.slots[1].values = [''];
                    this.fygjzt = "";
                }
                if(values[0] == "有效"){
                    this.slots[1].values = this.slots1;
                    this.fygjzt = values[0];
                }
                if(values[0] == "暂缓"){
                    this.slots[1].values = this.slots2;
                    this.fygjzt = values[0];
                }
                if(values[0] == "无效"){
                    this.slots[1].values = this.slots3;
                    this.fygjzt = values[0];
                }

                this.fygjlx = values[1];

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
                this.sfjg = values[0];
            },

            //打开底部3
            openDecorationTypeHzyx() {
                //this.zxsp = "精装交付";
                this.popupVisible3 = true;
            },
            //关闭底部3
            sureBtype3(){
                this.popupVisible3 = false;
            },
            //选择赋值3
            selectLevel3(picker, values) {
                this.hzyx = values[0];
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
                const lpid = this.$route.params.lpid;
                this.lpid = lpid;
                this.fyid = fyid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url1 = this.$api + "/yhcms/web/zdfyxx/getZdfyxx.do";
                let that = this;
                this.$http.post(url1, {"parameters":{"id":this.fyid, "lpid": lpid},"foreEndType":2,"code":"300000064"}).then((res)=>{
                    Indicator.close();
                    const topic=JSON.parse(res.bodyText).topic;
                    const topic1=JSON.parse(res.bodyText).data.jbxx;
                    this.lpname = topic;
                    this.zdhname = topic1.zdh + '-' + topic1.fybh;
                    console.log(this.lpname);
                }, (res)=>{
                    Indicator.close()
                });
                const url = this.$api + "/yhcms/web/zdfyxx/getGjzt.do";
                this.$http.post(url, {"fyid":fyid}).then((res)=>{
                    Indicator.close();
                    const data=JSON.parse(res.bodyText).data;
                    if(data){
                        this.bezhu = data.bzh;
                        if(data.gjzt1 == 1){
                            this.fygjzt = "有效";
                        }else if(data.gjzt1 == 2){
                            this.fygjzt = "暂缓";
                        }else if(data.gjzt1 == 3){
                            this.fygjzt = "无效";
                        }else{
                            this.fygjzt = "请选择";
                        }
                        this.fygjlx = data.gjzt2;
                        if(data.jgzt == 1){
                            data.jgzt = "是";
                        }else if(data.jgzt == 2){
                            data.jgzt = "否";
                        }else{
                            data.jgzt = "请选择";
                        }
                        this.sfjg = data.jgzt;
                        this.fyzsqk = data.zszt;
                        this.id = data.id;
                        if(data.gjzt1){
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
                                    this.fygjlx = "业主直租";
                                }
                                if(this.fygjlx == 5){
                                    this.fygjlx = "资产公司压房或转租";
                                }
                                if(this.fygjlx == 6){
                                    this.fygjlx = "纠纷中";
                                }
                                if(this.fygjlx == 7){
                                    this.fygjlx = "意向不明确";
                                }
                            }
                            if(data.gjzt1 == 3){
                                this.fygjztxl = 3;
                                if(this.fygjlx == 8){
                                    this.fygjlx = "无业主电话";
                                }
                                if(this.fygjlx == 9){
                                    this.fygjlx = "业主电话无效";
                                }
                            }
                        }
                    }
                }, (res)=>{
                    Indicator.close()
                });
            },
            sfspAction(e){
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
                const _this = this;
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
                        if(this.sfjg == "是"){
                            var sfjg = 1;
                        }else if(this.sfjg == "否"){
                            var sfjg = 2;
                        }else{
                            var sfjg = '';
                        }
                        if(this.fygjzt == "有效"){
                            var fygjzt = 1;
                        }else if(this.fygjzt == "暂缓"){
                            var fygjzt = 2;
                        }else if(this.fygjzt == "无效"){
                            var fygjzt = 3;
                        }else{
                            var fygjzt = '';
                        }
                        //this.fygjlx = 1;
                        Indicator.open({
                            text: '保存中...',
                            spinnerType: 'fading-circle'
                        });
                        this.$http.post(
                            this.$api + "/yhcms/web/zdfyxx/saveFyzt.do",
                            {"parameters":{"bzh":this.bezhu,"fyid":this.fyid,"gjzt1":fygjzt,"gjzt2":level1[this.fygjlx],"id":this.id,"jgzt":sfjg,"zszt":this.fyzsqk}}
                        ).then(function (res) {
                            Indicator.close();
                            var result = JSON.parse(res.bodyText);
                            if (result.success) {
                                Toast({
                                    message: '保存成功',
                                    duration: 1000
                                });
                                setTimeout(function () {
                                    //history.go(-1);
                                    _this.$router.push({path: '/genjingongdan'})
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
