<style scoped lang="less">
    @import "../resources/css/reset.css";
    @import "../resources/css/base.less";
    .tsbq{width:100% !important}

</style>
<template>
    <div class="all_elements">
        <div class="build_top">
            <ul class="ys_item_ul mb60">
                <li class="clearfix">
                    <span class="ys_tit">对接人：</span>
                    <div class="ys_item_con fl" v-if="duijie" @click="duijiere($event)" rel="1"><a href="javascript:;">业主</a></div>
                    <div class="ys_item_con fl" v-else @click="duijiere($event)" rel="2"><a href="javascript:;">代理人</a></div>
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit">对接人姓名：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lppz" readonly placeholder="请选择对接人" @click="openQuality">
                        <i class="right_arrow" @click="openQuality">&gt;</i>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">对接人电话：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lpsjgs" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit">对接人性别：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lppz" readonly placeholder="请选择对接人性别" @click="openQuality2">
                        <i class="right_arrow" @click="openQuality2">&gt;</i>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">对接居住地：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lpsjgs" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">性格特征：</span>
                    <div class="ys_item_con fl"><a href="javascript:;">{{tsbq_t}}</a></div>
                </li>
                <li class="clearfix bg_gray">
                    <div class="xgbq ys_item_con fl" @click="selectTag($event)">
                        <span v-for="xg in tsbq_all" class="ys_tag" :class="{'active': xgbq.indexOf(xg.id) > -1}" :value="xg.id" >{{xg.topic}}</span>
                    </div>
                </li>
               <!-- <li class="clearfix pr" v-if=kprqqx>
                    <span class="ys_tit">开盘日期：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value=""
                               readonly
                               placeholder="请选择日期"
                               v-model="kprq"
                               @click="openPicker()">
                        <i class="calendar_icon" @click="openPicker()"></i>
                    </div>
                </li>
                <li class="clearfix pr" v-else>
                    <span class="ys_tit zyzd">开盘日期：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value=""
                               readonly
                               onfocus="this.blur()"
                               placeholder="请选择日期"
                               v-model="kprq"
                        >
                        <i class="calendar_icon"></i>
                    </div>
                </li>-->
                <li class="clearfix pr">
                    <span class="ys_tit">对接人年龄：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lpsjgs" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">从事行业：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lpsjgs" placeholder="请输入">
                    </div>
                </li>
                <div class="ys_tit">业主签约谈判的条件</div>
                <li class="clearfix pr">
                    <span class="ys_tit">委托方式：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lppz" readonly placeholder="请选择委托方式" @click="openQuality3">
                        <i class="right_arrow" @click="openQuality3">&gt;</i>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">免租期：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lpsjgs" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">价格：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lpsjgs" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">签约年限：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lpsjgs" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">递增方式：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lpsjgs" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">接受转租形式：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="lpsjgs" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="lpsjgs" name="company">否</label>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">配合工商注册：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="lpsjgs" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="lpsjgs" name="company">否</label>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">配合开具发票：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="lpsjgs" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="lpsjgs" name="company">否</label>
                    </div>
                </li>
                <div class="ys_tit">产权情况</div>
                <li class="clearfix pr">
                    <span class="ys_tit">产权归属：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lppz" readonly placeholder="请选择产权归属" @click="openQuality4">
                        <i class="right_arrow" @click="openQuality4">&gt;</i>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">是否已做抵押：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="lpsjgs" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="lpsjgs" name="company">否</label>
                    </div>
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit">产权证：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lppz" readonly placeholder="请选择产权证类别" @click="openQuality5">
                        <i class="right_arrow" @click="openQuality5">&gt;</i>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">产权证原件：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="lpsjgs" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="lpsjgs" name="company">否</label>
                    </div>
                </li>
                <div class="ys_tit">房间注册情况</div>
                <li class="clearfix">
                    <span class="ys_tit w224">是否有公司注册：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="lpsjgs" name="company">有</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="lpsjgs" name="company">无</label>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">是否备案：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="lpsjgs" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="lpsjgs" name="company">否</label>
                    </div>
                </li>

                <!--<li class="clearfix" style="font-size: 0.32rem;border-bottom-left-radius:5px;border-bottom-right-radius:5px;box-shadow: 1px 1px 3px rgb(196,195,200);line-height: 1rem !important;">
                    <span class="ys_tit w170" style="width: 2rem !important;padding-left: 0.2rem;">合作意向：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model.trim="lpsjgs" onfocus="this.blur()" placeholder="请选择" style="padding-left:34%;font-size: 0.32rem;width: 80%;" @click="openQuality6">
                        <i class="right_arrow" @click="openQuality6">&gt;</i>
                    </div>
                </li>-->
                <li class="clearfix pr">
                    <span class="ys_tit">合作意向：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="lppz" readonly onfocus="this.blur()" placeholder="请选择" @click="openQuality6">
                        <i class="right_arrow" @click="openQuality6">&gt;</i>
                    </div>
                </li>
            </ul>
            <div>
                <a href="javascript:;" style="width: 50%;margin: 0;float: left;" class="ys_default_btn" @click="saveBuildMsg">保存</a>
                <a href="javascript:;" style="width: 50%;margin: 0;float: right;" class="ys_default_btn" @click="saveBuildMsg2">保存并填写跟进</a>
            </div>
            <!--<a href="javascript:;" class="ys_default_btn mb80" v-if="saveqx" @click="saveBuildMsg">保存</a>-->
            <!--<a href="javascript:;" class="ys_default_btn mb80" v-else @click="fanhui">返回</a>-->
        </div>

        <!--日期选择-->
        <mt-datetime-picker
                ref="picker"
                v-model="pickerValue"
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                :startDate="startDate"
                @confirm="handleConfirm">
        </mt-datetime-picker>

        <!--楼盘级别-->
        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureLevel">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureLevel">确定</span>
            </div>
            <mt-picker :slots="slots" @change="selectLevel"></mt-picker>
        </mt-popup>

        <!--楼盘品质-->
        <mt-popup v-model="popQuality" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality">确定</span>
            </div>
            <mt-picker :slots="slots_quality" @change="selectQuality"></mt-picker>
        </mt-popup>
        <!--楼盘品质-->
        <mt-popup v-model="popQuality2" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality2">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality2">确定</span>
            </div>
            <mt-picker :slots="slots_quality2" @change="selectQuality2"></mt-picker>
        </mt-popup>
        <!--楼盘品质-->
        <mt-popup v-model="popQuality3" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality3">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality3">确定</span>
            </div>
            <mt-picker :slots="slots_quality3" @change="selectQuality3"></mt-picker>
        </mt-popup>
        <!--楼盘品质-->
        <mt-popup v-model="popQuality4" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality4">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality4">确定</span>
            </div>
            <mt-picker :slots="slots_quality4" @change="selectQuality4"></mt-picker>
        </mt-popup>
        <!--楼盘品质-->
        <mt-popup v-model="popQuality5" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality5">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality5">确定</span>
            </div>
            <mt-picker :slots="slots_quality5" @change="selectQuality5"></mt-picker>
        </mt-popup>
        <!--合作意向-->
        <mt-popup v-model.trim="popQuality6" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality6">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality6">确定</span>
            </div>
            <mt-picker :slots="slots_quality6" @change="selectQuality6"></mt-picker>
        </mt-popup>


    </div>
</template>
<script>

    const lang = {
        '优': 1,
        '良': 2,
        '差': 3,
    };

    const level = {
        "5A":"1","甲":"2","乙":"3","公寓":"4","商务":"5","综合":"6"
    };

    import { Toast } from 'mint-ui'; //toast
    import { Indicator } from 'mint-ui'; //toast

    import { MessageBox } from 'mint-ui'; //弹窗

    import {DatetimePicker} from 'mint-ui';  //日期选择

    import {Popup} from 'mint-ui'; //弹窗

    export default {
        components: {
            DatetimePicker,
            Popup
        },

        data () {
            return {
                duijie:true,
                "lpid": "", //楼盘id
                "topic": "", //楼盘名称
                "address": "", //地址
                "tsbq": [], //特色标签
                "kfsh": "", //开发商名称
                "kprq": "", //开盘日期(必选)
                "lpjb": "", //楼盘级别(必选)
                "chqxz": [], //产权性质
                "lppz": "", //楼盘品质 1优 2良 3差
                "zxjnjg": "", //均价
                "shyl": "",  //使用率
                "hshkzbl": "", //户数空置比例
                "zxptmx": "",  //装修设施配套明细
                "lpsjgs": "", //楼盘设计公司
                "lpsjs": "", //楼盘设计师
                "lpsjfg": "", //楼盘设计风格
                "tsbq_all":[],
                "ryzt":"",//人员状态的权限
                "qxzt":"",//权限状态码

                //特色标签权限的判断
                /*teqx:true,
                 kfsqx:false,
                 cqxzqx:true,
                 lpjjqx:false,
                 zxptqx:false,
                 lpsjqx:false,
                 plsjsqx:false,
                 lpsjsfgqx:false,
                 kprqqx:true,
                 lpjbqx:true,
                 lppzqx:true,
                 saveqx:true,*/
                teqx:0,
                kfsqx:0,
                cqxzqx:0,
                lpjjqx:0,
                zxptqx:0,
                lpsjqx:0,
                plsjsqx:0,
                lpsjsfgqx:0,
                kprqqx:0,
                lpjbqx:0,
                lppzqx:0,
                saveqx:0,


                //日期
                pickerValue: '',
                startDate: new Date("1990-01-01"),

                //楼盘级别
                lpjb: '',
                slots: [
                    {
                        values: ['5A', '甲', '乙', '公寓', '商务', '综合'],
                    }
                ],

                //对接人姓名
                slots_quality: [
                    {
                        values: ["","业主1", "业主2", "业主3"],
                    }
                ],
                //对接人性别
                slots_quality2: [
                    {
                        values: ["","男", "女"],
                    }
                ],
                //委托方式
                slots_quality3: [
                    {
                        values: ["","出资", "代理"],
                    }
                ],
                //委托方式
                slots_quality4: [
                    {
                        values: ["","公司产权", "个人产权"],
                    }
                ],
                //委托方式
                slots_quality5: [
                    {
                        values: ["","共有产权证", "个人产权证"],
                    }
                ],
                //合作意向
                slots_quality6: [
                    {
                        values: ['','A(可约业主可收购)', 'B(深度议价中)', 'C(初步审核)'],
                    }
                ],



                //合作意向弹窗显示隐藏
                popupVisible: false,

                //合作意向弹窗隐藏
                popQuality: false,
                popQuality2: false,
                popQuality3: false,
                popQuality4: false,
                popQuality5: false,
                popQuality6: false,
                //yt_all: [{"name":"金融投资","id":"153"},{"name":"文化传媒","id":"161"},{"name":"教育培训","id":"152"},{"name":"休闲娱乐","id":"4"},{"name":"IT互联网","id":"5"},{"name":"机构组织","id":"6"},{"name":"专业服务","id":"7"},{"name":"贸易","id":"8"},{"name":"医药医疗","id":"9"},{"name":"多元化集团","id":"10"},{"name":"综合","id":"11"},{"name":"其它","id":"12"}]


            }
        },
        computed:{
            chqxz_c(){
                if(this.chqxz.length < 1){
                    return "请选择标签";
                }
                const map = {"1":"写字楼", "2":"公寓","3":"商务楼","5":"商业"};
                let tip = this.chqxz.map((item,idx)=>{return map[item.toString()]});
                return tip.join(",");
            },
            tsbq_t(){
                if(this.tsbq.length < 1){
                    return "请选择标签";
                }
                let tags = this.tsbq.map((t)=>{
                    for(let i = 0; i < this.tsbq_all.length; ++i){
                        if(this.tsbq_all[i].id == t){
                            return this.tsbq_all[i].topic;
                        }
                    }
                });

                return tags.join(",");
            }
        },
        methods: {
            duijiere(e){
                const target = $(e.target), val = target.attr("rel");
                if(this.duijie){
                    this.duijie = false;
                }else{
                    this.duijie = true;
                }
            },






            sfygsclass(){
                let that = this;

                setTimeout(function (){
                    console.log(that.sfygs );
                    if(that.sfygs == 1){
                        $(".gsdivclass").removeClass('showClass');

                    }else if(that.sfygs == 0){
                        $(".gsdivclass").addClass('showClass');

                    }
                }, 1);

            },
            //日期panel展示
            openPicker() {
                this.$refs.picker.open();
            },

            //日期确定
            handleConfirm(value){
                this.kprq = this.transformDate(value);
            },

            //楼盘类型panel展示
            openLevel() {
                //this.lpjb = '乙';
                this.popupVisible = true;
            },


            //选择类型
            selectLevel(picker, values) {
                this.lpjb = values[0];
            },

            //类型确定
            sureLevel(){
                this.popupVisible = false;
            },


            //打开对接人姓名
            openQuality(){
                //this.lppz = '差';
                this.popQuality = true;
            },
            openQuality2(){
                //this.lppz = '差';
                this.popQuality2 = true;
            },
            //委托方式
            openQuality3(){
                //this.lppz = '差';
                this.popQuality3 = true;
            },
            openQuality4(){
                //this.lppz = '差';
                this.popQuality4 = true;
            },
            openQuality5(){
                //this.lppz = '差';
                this.popQuality5 = true;
            },
            //合作意向
            openQuality6(){
                //this.lppz = '差';
                this.popQuality6 = true;
            },

            //选择品质
            selectQuality(picker, values){
                this.lppz = values[0];
            },
            selectQuality2(picker, values){
                this.lppz = values[0];
            },
            //委托方式
            selectQuality3(picker, values){
                this.lppz = values[0];
            },
            //委托方式
            selectQuality4(picker, values){
                this.lppz = values[0];
            },
            //委托方式
            selectQuality5(picker, values){
                this.lppz = values[0];
            },
            selectQuality6(picker, values){
                this.lppz = values[0];
            },

            //品质确定
            sureQuality(){
                this.popQuality = false;
            },
            sureQuality2(){
                this.popQuality2 = false;
            },
            //委托方式
            sureQuality3(){
                this.popQuality3 = false;
            },
            //委托方式
            sureQuality4(){
                this.popQuality4 = false;
            },
            sureQuality5(){
                this.popQuality5 = false;
            },
            //合作意向
            sureQuality6(){
                this.popQuality6 = false;
            },


            //打开品质
            openUse(){
                this.shyl = '非常';
                this.popUse = true;
            },

            //选择品质
            selectUse(picker, values){
                this.shyl = values[0];
            },

            //品质确定
            sureUse(){
                this.popUse = false;
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

            //补零
            addZero(n){
                return n = n < 10 ? '0' + n : '' + n;
            },

            //选择tag
            selectTag(e){
                const target = $(e.target), val = target.attr("value");
                if(!val){return;}
                if ($(e.target).hasClass('active')) {
                    let tsbq_t = new Set(this.tsbq);
                    tsbq_t.delete(val);
                    this.tsbq = [...tsbq_t];
                    $(e.target).removeClass('active');
                } else {
                    let tsbq_t = new Set(this.tsbq);
                    tsbq_t.add(val);
                    this.tsbq = [...tsbq_t];
                    $(e.target).addClass('active');
                }
            },

            //获取后台的数据
            getInitData(){
                const lpid = this.$route.params.lpid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/lpjbxx/getLpjbxx.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    that.lpid = lpid;
                    that.topic = data.topic;
                    that.address = data.address;
                    that.tsbq = data.tsbq.map((t)=>{return t.id});
                    //that.tsbq = yt_all;
                    /*let shyt = data.shyt ? data.shyt.split(";"):[];
                     that.shyt = shyt;*/
                    /*that.tsbq = data.tsbq ? data.tsbq.split(","):[];*/
                    that.kfsh = data.kfsh;
                    $('title').html(that.topic);
                    if(data.kprq!=''){
                        //将时间戳转化为标准的格式
                        /*  var date =  new Date(data.kprq);
                         var y = 1900+date.getYear();
                         var m = "0"+(date.getMonth()+1);
                         var d = "0"+date.getDate();
                         var   tt11= y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);*/
                        that.kprq = data.kprq.substring(0,10);
                    }
                    if(data.lpjb==1){
                        that.lpjb ="5A" ;
                    }
                    if(data.lpjb==2){
                        that.lpjb ="甲" ;
                    }
                    if(data.lpjb==3){
                        that.lpjb ="乙" ;
                    }

                    if(data.lpjb==4){
                        that.lpjb ="公寓" ;
                    }
                    if(data.lpjb==5){
                        that.lpjb ="商务" ;
                    }
                    if(data.lpjb==6){
                        that.lpjb ="综合" ;
                    }
                    var array=new Array();
                    var k=0;
                    that.chqxz = data.chqxz.split("、");
                    for(var i=0;i<that.chqxz.length;i++){
                        if(that.chqxz[i] == 1 || that.chqxz[i] == 2 || that.chqxz[i] == 3 || that.chqxz[i] == 5){
                            array[k] = that.chqxz[i];
                            k++;
                        }
                    }
                    that.chqxz = array;
                    if(data.lppz==1){
                        that.lppz ="优" ;
                    }else  if(data.lppz==2){
                        that.lppz ="良" ;
                    }else  if(data.lppz==3){
                        that.lppz ="差" ;
                    }

                    that.zxjnjg = data.zxjnjg;
                    that.shyl = data.shyl;
                    that.hshkzbl = data.kzbl;
                    that.zxptmx = data.zxptmx;
                    that.lpsjgs = data.lpsjgs;
                    that.lpsjs = data.lpsjs;
                    that.lpsjfg = data.lpsjfg;
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.saveqx = false;
                        this.teqx = false;
                        if(this.tsbq.length == 0){
                            this.teqx = true;
                            this.saveqx = true;
                        }
                        this.kfsqx = true;
                        if(this.kfsh == ""){
                            this.kfsqx = false;
                            this.saveqx = true;
                        }
                        this.cqxzqx = false;
                        // if(this.chqxz.length == 0){
                        if(data.chqxz==''){
                            this.cqxzqx = true;
                            this.saveqx = true;
                        }
                        this.lpjjqx = true;
                        if(this.zxjnjg == ""){
                            this.lpjjqx = false;
                            this.saveqx = true;
                        }
                        this.zxptqx = true;
                        if(this.zxptmx == ""){
                            this.zxptqx = false;
                            this.saveqx = true;
                        }
                        this.lpsjqx = true;
                        if(this.lpsjgs == ""){
                            this.lpsjqx = false;
                            this.saveqx = true;
                        }
                        this.plsjsqx = true;
                        if(this.lpsjs == ""){
                            this.plsjsqx = false;
                            this.saveqx = true;
                        }
                        this.lpsjsfgqx = true;
                        if(this.lpsjfg == ""){
                            this.lpsjsfgqx = false;
                            this.saveqx = true;
                        }
                        this.kprqqx = false;
                        if(data.kprq == ""){
                            this.kprqqx = true;
                            this.saveqx = true;
                        }
                        this.lpjbqx = false;
                        if(data.lpjb == ""){
                            this.lpjbqx = true;
                            this.saveqx = true;
                        }
                        this.lppzqx = false;
                        if(data.lppz == ""){
                            this.lppzqx = true;
                            this.saveqx = true;
                        }

                    }

                    //this.tebqqxpd();
                }, (res)=>{
                    Indicator.close()
                });
            },

            getTsbq(){
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/lpjbxx/getTsbq.do";
                let that = this;
                this.$http.post(url).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.tsbq_all = data;
                }, (res)=>{
                    Indicator.close(that.tsbq_all);
                });
            },

            //特色标签权限的判断
            tebqqxpd(){
                let user22 = JSON.parse(localStorage.getItem('cook'));
                const url = this.$api + "/yhcms/web/wxqx/getLpqx.do";
                this.$http.post(url, {"cookie":user22.sjs,"lpid":this.$route.params.lpid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    console.log("ryzt:"+data.ryzt+",  qxzt: "+data.qxzt);
                    //data.qxzt = 11;
                    if(data.qxzt == 0){
                        this.teqx = false;
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.teqx = true;
                        this.kfsqx = false;
                        this.cqxzqx = true;
                        this.lpjjqx = false;
                        this.zxptqx = false;
                        this.lpsjqx = false;
                        this.plsjsqx = false;
                        this.lpsjsfgqx = false;
                        this.kprqqx = true;
                        this.lpjbqx = true;
                        this.lppzqx = true;
                        this.saveqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    if(data.qxzt == 3){
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    if(data.qxzt == 11){
                        this.teqx = false;
                        this.kfsqx = true;
                        this.cqxzqx = false;
                        this.lpjjqx = true;
                        this.zxptqx = true;
                        this.lpsjqx = true;
                        this.plsjsqx = true;
                        this.lpsjsfgqx = true;
                        this.kprqqx = false;
                        this.lpjbqx = false;
                        this.lppzqx = false;
                        this.saveqx = false;
                        $("input").attr('placeholder',"");
                    }

                    if(data.qxzt == 46){
                        MessageBox('提示',"此用户不属于收购部人员！");
                        this.$router.push({path: '/login'});
                    }
                    this.getInitData();
                    this.getTsbq();

                }, (res)=>{
                    Indicator.close()
                });
            },
            fanhui(){
                window.history.go(-1);
            },
            saveBuildMsg2(){
                this.$router.push({path: '/tianxiefenjin/'+this.fyid});
            },
            saveBuildMsg(){
                this.$router.push({path: '/yixing_genjin/'+this.$route.params.lpid+'/'+this.$route.params.fyid});
                var _this = this;
                if(this.topic==''){
                    MessageBox('提示', '请填写楼盘名称');
                    return;
                }

                var tt= this.chqxz.join("、");
                if(tt==''){
                    MessageBox('提示', '请选择产权性质');
                    return;
                }



                /*if(!this.kfsh){
                 MessageBox('提示', '请填写开发商');
                 return;
                 }

                 if(this.kprq == ''){
                 MessageBox('提示', '请选择开盘日期');
                 return;
                 }

                 if(this.lpjb == ''){
                 MessageBox('提示', '请选择楼盘级别');
                 return;
                 }

                 if(!this.lppz){
                 MessageBox('提示', '请选择楼盘品质');
                 return;
                 }*/

                /*
                 Toast({
                 message: '保存成功',
                 position: 'bottom'
                 });
                 */
                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                /*
                 setTimeout(function(){
                 _this.$router.push({path:'/list2'});
                 },1000);
                 */
                if(this.tsbq == ""){
                    this.tsbq = "";
                }else{
                    this.tsbq = "、" + this.tsbq.join("、") + "、";
                }
                this.$http.post(
                    this.$api + "/yhcms/web/lpjbxx/saveLp.do",
                    {
                        "parameters": {
                            "lpid": this.lpid, //楼盘id
                            "topic": this.topic, //楼盘名称
                            "address": this.address, //地址
                            "tsbq": this.tsbq, //特色标签
                            "kfsh": this.kfsh, //开发商名称
                            "kprq": this.kprq, //开盘日期(必选)
                            "lpjb": level[this.lpjb], //楼盘级别(必选)
                            "chqxz": this.chqxz.join("、"), //产权性质
                            "lppz": lang[this.lppz], //楼盘品质 1优 2良 3差
                            "zxjnjg": this.zxjnjg, //均价
                            "shyl": this.shyl,  //使用率
                            "hshkzbl": this.hshkzbl, //户数空置比例
                            "zxptmx": this.zxptmx,  //装修设施配套明细
                            "lpsjgs": this.lpsjgs, //楼盘设计公司
                            "lpsjs": this.lpsjs, //楼盘设计师
                            "lpsjfg": this.lpsjfg //楼盘设计风格
                        },
                        "foreEndType": 2,
                        "code": "300000041"
                    }
                ).then(function (res) {
                    Indicator.close();
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        Toast({
                            message: '保存成功',
                            position: 'bottom',
                            duration: 1000
                        });

                        setTimeout(function(){
                            history.go(-1);
                            // _this.$router.push({path:'/index'});
                        },1000);
                    } else {
                        //this.$Message.error(res.message);
                        Toast({
                            message: '保存失败: ' + result.message,
                            position: 'bottom'
                        });
                    }
                }, function (res) {
                    //this.$Message.error('保存失败');
                    Toast({
                        message: '保存失败! 请稍候再试',
                        position: 'bottom'
                    });
                });
            }

        },
        mounted(){
            //this.tebqqxpd();

        },
    }
</script>
