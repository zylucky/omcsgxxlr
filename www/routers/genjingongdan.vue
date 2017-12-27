<style scoped lang="less">
    @import "../resources/css/reset.css";
    @import "../resources/css/base.less";
    .tsbq{width:100% !important}

</style>
<template>
    <div class="all_elements">
        <div class="build_top">
            <ul class="ys_item_ul mb60">
                <div class="analy_item" style="padding: 0;line-height: 0.8rem;float: left;width: 77.3%;">
                    <div class="analy_content" style="margin-top: 0.4rem;">
                        <span v-text="lpname" style="color: black;font-weight: 500;font-size: 0.36rem;"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span v-text="zdhname" style="color: black;font-weight: 500;font-size: 0.36rem;"></span>
                    </div>
                </div>
                <div class="analy_item" style="padding: 0;line-height: 0.8rem;float: right;height: 1.22rem;">
                    <div class="" style="width: 1.5rem;margin-right: 0.2rem;margin-top: 0.3rem;padding-left: 0.4rem;background-color: #007aff;">
                        <a href="javascript:;" style="color: white;">编辑</a>
                    </div>
                </div>
                <li class="clearfix" style="clear: both;">
                    <span class="ys_tit">对接人：</span>
                    <div class="ys_item_con fl" v-if="duijie" @click="duijiere($event)" v-text="duijierid" rel="1"></div>
                    <div class="ys_item_con fl" v-else @click="duijiere($event)" v-text="duijierid" rel="2"></div>
                    <!--<div v-if="duijierenif">
                        <div class="ys_item_con fl" v-if="duijie" @click="duijiere($event)" rel="1"><a href="javascript:;">业主</a></div>
                        <div class="ys_item_con fl" v-else @click="duijiere($event)" rel="2"><a href="javascript:;">代理人</a></div>
                    </div>
                    <div v-if="duijierenif">
                        <div class="ys_item_con fl" v-if="duijie" rel="1"><a href="javascript:;">业主</a></div>
                        <div class="ys_item_con fl" v-else rel="2"><a href="javascript:;">代理人</a></div>
                    </div>-->
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit">对接人姓名：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="djrid" readonly placeholder="请选择对接人" @click="openQuality">
                        <i class="right_arrow" @click="openQuality">&gt;</i>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">对接人电话：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="phone" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit">对接人性别：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="xb" readonly placeholder="请选择对接人性别" @click="openQuality2">
                        <i class="right_arrow" @click="openQuality2">&gt;</i>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">对接人居住地：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="xaddress" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">性格特征：</span>
                    <div class="ys_item_con fl"><a href="javascript:;">{{xgbq}}</a></div>
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
                        <input type="text" value="" v-model="year" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">从事行业：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="cshy" placeholder="请输入">
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
                        <input type="text" value="" v-model="mzq" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">价格：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="Price" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">签约年限：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="qynx" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit">递增方式：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="dzsort" placeholder="请输入">
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">接受转租形式：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="zzsort" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="zzsort" name="company">否</label>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">配合工商注册：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="gszc" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="gszc" name="company">否</label>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">配合开具发票：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="kjfp" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="kjfp" name="company">否</label>
                    </div>
                </li>
                <div class="ys_tit">产权情况</div>
                <li class="clearfix pr">
                    <span class="ys_tit">产权归属：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="chqattach" readonly placeholder="请选择产权归属" @click="openQuality4">
                        <i class="right_arrow" @click="openQuality4">&gt;</i>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">是否已做抵押：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="Sfdy" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="Sfdy" name="company">否</label>
                    </div>
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit">产权证：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="chqsort" readonly placeholder="请选择产权证类别" @click="openQuality5">
                        <i class="right_arrow" @click="openQuality5">&gt;</i>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">产权证原件：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="sfyj" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="sfyj" name="company">否</label>
                    </div>
                </li>
                <div class="ys_tit">房间注册情况</div>
                <li class="clearfix">
                    <span class="ys_tit w224">是否有公司注册：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="sfgszc" name="company">有</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="sfgszc" name="company">无</label>
                    </div>
                </li>
                <!--<li class="clearfix">
                    <span class="ys_tit w224">迁出时间：</span>
                    &lt;!&ndash;<div class="ys_item_con fl">
                        <input type="text" value="" v-model="qctime" placeholder="请输入">
                    </div>&ndash;&gt;
                    <div class="ys_item_con fl">
                        <input type="text" value="" readonly placeholder="请选择迁出时间"  v-model.trim="qctime" @click="openPicker()">
                        &lt;!&ndash;<i class="calendar_icon"  @click="openPicker()"></i>&ndash;&gt;
                        <i class="right_arrow" style="position: absolute;top:0;right: 0;" @click="openPicker">&gt;</i>
                    </div>
                    &lt;!&ndash;<div class="ys_item_con fl">
                        <input type="text" value="" v-model="chqattach" readonly placeholder="请选择产权归属" @click="openQuality4">
                        <i class="right_arrow" @click="openQuality4">&gt;</i>
                    </div>&ndash;&gt;
                </li>-->
                <li class="clearfix pr">
                    <span class="ys_tit">迁出时间：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="qctime" readonly placeholder="请选择迁出时间" @click="openPicker()">
                        <i class="calendar_icon" @click="openPicker()"></i>
                    </div>
                </li>
                <li class="clearfix">
                    <span class="ys_tit w224">是否备案：</span>
                    <div class="ys_item_con fl">
                        <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="sfba" name="company">是</label>
                        <label @click="sfygsclass"><input type="radio" value="2" v-model="sfba" name="company">否</label>
                    </div>
                </li>
                <!--<li class="clearfix">
                    <span class="ys_tit w224">配合备案时间：</span>
                    &lt;!&ndash;<div class="ys_item_con fl">
                        <input type="text" value="" v-model="batime" placeholder="请输入">
                    </div>&ndash;&gt;
                    <div class="ys_item_con fl">
                        <input type="text" value="" readonly placeholder="请选择配合备案时间"  v-model.trim="batime" @click="openPicker()">
                       &lt;!&ndash; <i class="calendar_icon"  @click="openPicker()"></i>&ndash;&gt;
                    </div>
                </li>-->
                <li class="clearfix pr">
                    <span class="ys_tit">配合备案时间：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" v-model="qctime" readonly placeholder="请选择配合备案时间" @click="openPicker()">
                        <i class="calendar_icon" @click="openPicker()"></i>
                    </div>
                </li>
              <!--  <li class="clearfix pr mb20">
                    <span class="ys_tit zyzd">空置时间：</span>
                    <div class="ys_item_con fl">
                        <input type="text" value="" readonly placeholder="请选择日期"  v-model.trim="kzsj" @click="openPicker()">
                        <i class="calendar_icon"  @click="openPicker()"></i>
                    </div>
                    <div class="ys_item_con fl" v-else>
                        <input type="text" value="" readonly onfocus="this.blur()" placeholder="请选择日期"  v-model.trim="kzsj">
                        <i class="calendar_icon"></i>
                    </div>
                </li>-->





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
                        <input type="text" value="" v-model="hzyx" readonly onfocus="this.blur()" placeholder="请选择" @click="openQuality6">
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

        <!--对接人姓名-->
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
                fyid:'',
                lpname:'建外sojourn',
                zdhname:'建外sojourn',
                duijierenif:false,
                duijie:true,
                hzyxid:'',//合作意向id
                hzyx:'',//合作意向
                duijierid:'业主',//对接人
                djrid:'',//对接人id
                cshy:'',//从事行业
                mzq:'',//免租期
                Price:'',//价格
                qynx:'',//签约年限
                dzsort:'',//递增方式
                zzsort:'',//接受转租形式
                gszc:'',//配合工商注册
                kjfp:'',//配合开具发票
                chqattach:'',//产权归属
                Sfdy:'',//是否已做抵押
                chqsort:'',//产权证类别
                sfyj:'',//产权证是否原件
                sfgszc:'',//是否有公司注册
                qctime:'',//迁出时间
                sfba:'',//是否备案
                batime:'',//配合备案时间
                year:'',//对接人年龄
                phone:'',//对接人电话
                xb:'',//对接人性别
                xgbq:'',//性格特征
                xaddress:'',//对接人现住址
                yezhuzshuj:[],
                yezhu:[],








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
                        values: [],
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
            //特色标签权限的判断
            tebqqxpd(){
                let user22 = JSON.parse(localStorage.getItem('cook'));
                this.Fyyxid = this.$route.params.fyyzid;
                this.fyid = this.$route.params.fyid;
                const url = this.$api + "/yhcms/web/wxqx/getGdxx.do";
                this.$http.post(url, {"fyyxid":this.$route.params.fyyzid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const data1 = JSON.parse(res.bodyText).data1;
                    if(data != ""){
                        this.hzyx = data1.hzyx;
                        this.hzyxid = data1.id;
                        if(data.djrstate == 1){
                            this.duijierid = '业主';
                            this.duijie = true;
                            this.yezhuid();
                        }else if(data.djrstate == 2){
                            this.duijierid = '代理人';
                            this.duijie = false;
                            this.dailirenid();
                        }
                        this.djrid = data.djrid;
                        this.cshy = data.cshy;
                        this.mzq = data.mzq;
                        this.Price = data.Price;
                        this.qynx = data.qynx;
                        this.dzsort = data.dzsort;
                        this.zzsort = data.zzsort;
                        this.gszc = data.gszc;
                        this.kjfp = data.kjfp;
                        this.chqattach = data.chqattach;
                        this.Sfdy = data.Sfdy;
                        this.chqsort = data.chqsort;
                        this.sfyj = data.sfyj;
                        this.sfgszc = data.sfgszc;
                        this.qctime = data.qctime;
                        this.sfba = data.sfba;
                        this.batime = data.batime;
                        this.year = data.year;
                    }else{

                    }



                    /*this.getInitData();
                     this.getTsbq();*/



                    /* const url1 = this.$api + "/yhcms/web/wxqx/getGdxx.do";
                     this.$http.post(url1, {"fyyxid":this.$route.params.fyyzid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                     Indicator.close();
                     const data = JSON.parse(res.bodyText).data1;
                     this.hzyxid = data.hzyx;
                     this.duijierid = data.id;
                     /!*this.getInitData();
                     this.getTsbq();*!/


                     }, (res)=>{
                     Indicator.close()
                     });*/





                }, (res)=>{
                    Indicator.close()
                });
            },
            duijiere(e){
                const target = $(e.target), val = target.attr("rel");
                if(this.duijie){
                    this.duijie = false;
                }else{
                    this.duijie = true;
                }
                if(val == 1){
                    this.duijierid = '代理人';
                }else{
                    this.duijierid = '业主';
                }
            },

            //获取业主id
            yezhuid(){
                const url = this.$api + "/yhcms/web/wxqx/getLpZdYzxx.do";
                this.$http.post(url, {"parameters":{"fyid":this.fyid},"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    /*this.phone = data[0].phone;
                    this.xb = data[0].xb;
                    this.xgbq = data[0].tsbq;
                    this.xaddress = data[0].address;*/
                    for(var i=0;i<data.length;i++){
                        this.yezhuzshuj[i] = data[i];
                        this.yezhu[i] = data[i].topic;
                    }
                    this.slots_quality[0].values = this.yezhu;


                }, (res)=>{
                    Indicator.close()
                });
            },
            //获取业主的基本信息
            yezhubas(){
                const url = this.$api + "/yhcms/web/wxqx/getZdfyYzxx.do";
                this.$http.post(url, {"parameters":{"id":this.id},"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    this.phone = data.phone;
                    this.xb = data.xb;
                    this.xgbq = data.xgbq;
                    this.xaddress = data.czaddress;
                }, (res)=>{
                    Indicator.close()
                });
            },
            //获取代理人的id
            dailirenid(){
                const url = this.$api + "/yhcms/web/wxqx/getLpZdDlrxx.do";
                this.$http.post(url, {"parameters":{"fyid":this.fyid},"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    this.slots_quality = data;
                }, (res)=>{
                    Indicator.close();
                });
            },
            //获取代理人的基本信息
            dalirenbas(){
                const url = this.$api + "/yhcms/web/wxqx/getZdfyDlrxx.do";
                this.$http.post(url, {"parameters":{"id":this.id},"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    this.phone = data.phone;
                    this.xb = data.xb;
                    this.xgbq = data.bqid;
                    this.xaddress = data.address;
                }, (res)=>{
                    Indicator.close()
                });
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
                this.djrid = values[0];
                for(var i=0;i<this.yezhu.length;i++){
                    if(this.djrid == this.yezhu[i]){
                        this.phone = this.yezhuzshuj[i].phone;
                        this.xb = this.yezhuzshuj[i].xb;
                        this.xgbq = this.yezhuzshuj[i].tsbq;
                        this.xaddress = this.yezhuzshuj[i].address;
                    }
                }

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
            this.tebqqxpd();

        },
    }
</script>
