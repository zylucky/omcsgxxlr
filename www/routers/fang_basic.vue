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
          <span class="ys_tit">座栋号：</span>
          <select v-model='zdid'  @change="chooseMedicine()" placeholder="请选择" v-if="zdhqx">
            <option value="0"> 请选择</option>
            <option v-for="option in zds" v-bind:value="option.id" :deuer="option.gzys">
              {{ option.zdh }}
            </option>
          </select>
          <input v-else type="text" value="" :readonly="true" onfocus="this.blur()" v-model.trim="zdh" placeholder="请输入">
        </li>
        <li class="clearfix">
          <span class="ys_tit">房号：</span>
          <div class="ys_item_con fl" v-if="!fybhqx">
            <input type="text" value="" v-model.trim="fybh" placeholder="请输入">
            <input type="hidden" value="" v-model.trim="gzys" placeholder="">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly onfocus="this.blur()" v-model.trim="fybh" placeholder="请输入">
            <input type="hidden" value="" v-model.trim="gzys" placeholder="">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">房源别名：</span>
          <div class="ys_item_con fl" v-if="!fynameqx">
            <input type="text" value="" v-model.trim="fyname" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly onfocus="this.blur()" v-model.trim="fyname" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">楼层：</span>
          <div class="ys_item_con fl" v-if="!lcqx">
            <input type="number" value="" v-model.trim="lc" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model.trim="lc" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w170">是否为商铺：</span>
          <div class="ys_item_con fl" v-if="sfshpqx">
            <label class="mr20" @click="sfspAction"><input type="radio"  value="1" v-model="sfshp" name="shop_type">是</label>
            <label @click="sfspAction"><input type="radio" value="0" v-model="sfshp"  name="shop_type">否</label>
          </div>
          <div class="ys_item_con fl" v-else>
            <label class="mr20"><input type="radio"  value="1" disabled v-model="sfshp" name="shop_type">是</label>
            <label><input type="radio" value="0" v-model="sfshp" disabled name="shop_type">否</label>
          </div>
        </li>
        <div class="splxDiv" style="display:none">
          <li class="clearfix pr">
            <span class="ys_tit">商铺类型：</span>
            <div class="ys_item_con fl" v-if="shplxqx">
              <input type="text" value="" v-model.trim="shplx" readonly="readonly" onfocus="this.blur()" placeholder="请选择" @click="openBtype">
              <i class="right_arrow" @click="openBtype">&gt;</i>
            </div>
            <div class="ys_item_con fl" v-else>
              <input type="text" value="" v-model.trim="shplx" readonly="readonly" onfocus="this.blur()" placeholder="请选择">
            </div>
          </li>
        </div>
        <li class="clearfix">
          <span class="ys_tit">产权年限：</span>
          <div class="ys_item_con fl" v-if="chqnxqx">
            <label class="mr20"><input type="radio" v-model.trim="chqnx" value="1" name="rights_year">40</label>
            <label class="mr20"><input type="radio" v-model.trim="chqnx" value="2" name="rights_year">50</label>
            <label ><input type="radio" v-model.trim="chqnx" value="70" name="rights_year">70</label>
          </div>
          <div class="ys_item_con fl" v-else>
            <label class="mr20"><input type="radio" disabled v-model.trim="chqnx" value="1" name="rights_year">40</label>
            <label class="mr20"><input type="radio" disabled v-model.trim="chqnx" value="2" name="rights_year">50</label>
            <label ><input type="radio" disabled v-model.trim="chqnx" value="70" name="rights_year">70</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">朝向：</span>
          <div class="ys_item_con fl" v-if="!chxqx">
            <input type="text" value="" v-model.trim="chx" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly onfocus="this.blur()" v-model.trim="chx" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">装修水平：</span>
          <div class="ys_item_con fl" v-if="zxspqx">
            <input type="text" value="" readonly="readonly" onfocus="this.blur()" v-model.trim="zxsp" placeholder="请选择" @click="openDecorationType">
            <i class="right_arrow" @click="openDecorationType">&gt;</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly="readonly" onfocus="this.blur()" v-model.trim="zxsp" placeholder="请选择">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">抵押状态：</span>
          <div class="ys_item_con fl" v-if="!dyztqx">
            <input type="text" value="" v-model.trim="dyzt" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly onfocus="this.blur()" v-model.trim="dyzt" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">业主属性：</span>
          <div class="ys_item_con fl" v-if="yzsxqx">
            <label class="mr20"><input type="radio" v-model.trim="yzsx" value="1" name="owner_type">小业主</label>
            <label ><input type="radio" v-model.trim="yzsx" value="2" name="owner_type">开发商</label>
          </div>
          <div class="ys_item_con fl" v-else>
            <label class="mr20"><input type="radio" v-model.trim="yzsx" disabled value="1" name="owner_type">小业主</label>
            <label ><input type="radio" v-model.trim="yzsx" disabled value="2" name="owner_type">开发商</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">航远房源：</span>
          <div class="ys_item_con fl" v-if="hystateqx">
            <label class="mr20" @click="hyAction"><input type="radio" v-model.trim="hystate" value="1" name="hy_type">是</label>
            <label @click="hyAction"><input type="radio"  v-model.trim="hystate" value="0" name="hy_type">否</label>
          </div>
          <div class="ys_item_con fl" v-else>
            <label class="mr20"><input type="radio" disabled v-model.trim="hystate" value="1" name="hy_type">是</label>
            <label><input type="radio" disabled  v-model.trim="hystate" value="0" name="hy_type">否</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">是否有租户：</span>
          <div class="ys_item_con fl" v-if="sfzhqx">
            <label class="mr20" @click="zhAction"><input type="radio" v-model="sfzh" value="1" name="rent_num">是</label>
            <label @click="zhAction"><input type="radio" v-model="sfzh" value="0"  name="rent_num">否</label>
          </div>
          <div class="ys_item_con fl" v-else>
            <label class="mr20"><input type="radio" v-model="sfzh" disabled value="1" name="rent_num">是</label>
            <label><input type="radio" v-model="sfzh" disabled value="0"  name="rent_num">否</label>
          </div>
        </li>
        <div class="kzClass" style="display:none">
          <li class="clearfix pr mb20">
            <span class="ys_tit">空置时间：</span>
            <div class="ys_item_con fl" v-if="kzsjqx">
              <input type="text" value="" readonly placeholder="请选择日期"  v-model.trim="kzsj" @click="openPicker()">
              <i class="calendar_icon"  @click="openPicker()"></i>
            </div>
            <div class="ys_item_con fl" v-else>
              <input type="text" value="" readonly onfocus="this.blur()" placeholder="请选择日期"  v-model.trim="kzsj">
              <i class="calendar_icon"></i>
            </div>
          </li>
        </div>
        <div class="qzClass" style="display:none">
          <li class="clearfix pr mb20">
            <span class="ys_tit">起租时间：</span>
            <div class="ys_item_con fl" v-if="qzsjqx">
              <input type="text" value="" readonly placeholder="请选择日期"  v-model.trim="qzsj" @click="openPicker()">
              <i class="calendar_icon"  @click="openPicker()"></i>
            </div>
            <div class="ys_item_con fl" v-else>
              <input type="text" value="" readonly onfocus="this.blur()" placeholder="请选择日期"  v-model.trim="qzsj">
              <i class="calendar_icon"></i>
            </div>
          </li>
        </div>

        <li class="clearfix pr border_top">
          <span class="ys_tit w224 hy1Class">参考租赁价格：</span>
          <span class="ys_tit w224 hy2Class" style="display:none">对外价格：</span>

          <div class="ys_item_con fl" v-if="!ckzljgqx">
            <input type="number" value="" placeholder="请输入" v-model.trim="ckzljg">
            <i class="right_unit">元/㎡/天</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" placeholder="请输入" v-model.trim="ckzljg">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr border_top hy2Class" style="display:none">


          <span class="ys_tit w224 hy2Class">销售底价：</span>

          <div class="ys_item_con fl" v-if="!xsdjqx">
            <input type="number" value="" placeholder="请输入" v-model.trim="xsdj">
            <i class="right_unit">元/㎡/天</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" placeholder="请输入" v-model.trim="xsdj">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">业主期望租金：</span>
          <div class="ys_item_con fl" v-if="!qwzjqx">
            <input type="number" value="" placeholder="请输入" v-model.trim="qwzj">
            <i class="right_unit">元/㎡/天</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" placeholder="请输入" v-model.trim="qwzj">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">业主租金底价：</span>
          <div class="ys_item_con fl" v-if="!zjdjqx">
            <input type="number" value="" placeholder="请输入" v-model.trim="zjdj">
            <i class="right_unit">元/㎡/天</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" placeholder="请输入" v-model.trim="zjdj">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">适合业态：</span>
          <div class="ys_item_con fl"><a href="javascript:;">{{yt_t}}</a></div>
        </li>
        <li class="clearfix bg_gray" v-show="shytqx">
          <div class="shyt ys_item_con fl" @click="selectTag($event)">
            <span v-for="yt in yt_all" class="ys_tag" :class="{'active': shyt.indexOf(yt.id) > -1}" :value="yt.id" >{{yt.name}}</span>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">车位：</span>
          <div class="ys_item_con fl" v-if="chwlxqx">
            <label class="mr20"><input type="radio" v-model.trim="chwlx" value="1"  name="parking_type">车库</label>
            <label class="mr20"><input type="radio" v-model.trim="chwlx" value="2" name="parking_type">地面</label>
            <label ><input type="radio" v-model.trim="chwlx" value="3" name="parking_type">无</label>
          </div>
          <div class="ys_item_con fl" v-else>
            <label class="mr20"><input type="radio" disabled v-model.trim="chwlx" value="1"  name="parking_type">车库</label>
            <label class="mr20"><input type="radio" disabled v-model.trim="chwlx" value="2" name="parking_type">地面</label>
            <label ><input type="radio" disabled v-model.trim="chwlx" value="3" name="parking_type">无</label>
          </div>
        </li>

      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" v-if="saveqx" @click="saveInfo">保存</a>
      <a href="javascript:;" class="ys_default_btn mb80" v-else @click="fanhui">返回</a>
    </div>

    <!--商铺类型-->
    <mt-popup v-model.trim="popupVisible" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureBtype">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureBtype">确定</span>
      </div>
      <mt-picker :slots="slots_bType" @change="selectLevel"></mt-picker>
    </mt-popup>

    <!--装修水平-->
    <mt-popup v-model.trim="popupVisible2" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureBtype2">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureBtype2">确定</span>
      </div>
      <mt-picker :slots="slots_bType2" @change="selectLevel2"></mt-picker>
    </mt-popup>

    <!--日期选择-->
    <mt-datetime-picker
            ref="picker"
            v-model.trim="pickerValue"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="startDate"
            @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>
<script>

    const level = {
        "精装交付":"1","精装升级中A级":"2","精装升级中B级":"3","可租待升级不可看房":"4","可租待升级可看房(提前电话联系)":"5","预租不可看房":"6","预租可看房":"7"
    };
    const level1 = {
        "内铺":"1","临街内铺":"2","商场内铺":"3","小区内铺":"4"
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
                xsdj:'',
                "id": "",
                "lpid": "",
                "zdid": "0",
                "zdh": "",
                "zds":[],
                "gzys": "",
                "fybh": "",
                "fyname": "",
                "lc": "",
                "zglc": "",
                "gzys":"",
                "sfshp": "",
                "shplx": "",
                "chqnx": "",
                "chx": "",
                "zxsp": "",
                "dyzt": "",
                "yzsx": "",
                "hystate": "",
                "sfzh": "",
                "kzsj": "",
                "qzsj": "",
                "qwzj": "",
                "ckzljg": "",
                "zjdj": "",
                "shyt": [],
                "chwlx": "",

                zdhqx:true,
                saveqx:0,
                fybhqx:0,
                fynameqx:0,
                lcqx:0,
                sfshpqx:0,
                shplxqx:true,
                chqnxqx:0,
                chxqx:0,
                zxspqx:true,
                dyztqx:0,
                yzsxqx:0,
                hystateqx:0,
                sfzhqx:0,
                kzsjqx:0,
                qzsjqx:0,
                ckzljgqx:0,
                xsdjqx:0,
                qwzjqx:0,
                zjdjqx:0,
                shytqx:0,
                chwlxqx:0,



                //日期
                pickerValue: '',
                startDate: new Date("2000-01-01"),

                popupVisible:false,
                popupVisible2:false,
                popupx:false,
                slots_bType: [
                    {
                        values: ['内铺','临街内铺', '商场内铺', '小区内铺'],
                    }
                ],
                slots_bType2: [
                    {
                        values: ['精装交付','装修升级中A级', '装修升级中B级', '可租待升级不可看房','可租待升级可看房(提前电话联系)','预租不可看房','预租可看房'],
                    }
                ],
                yt_all: [{"name":"金融投资","id":"1"},{"name":"文化传媒","id":"2"},{"name":"教育培训","id":"3"},{"name":"休闲娱乐","id":"4"},{"name":"IT互联网","id":"5"},{"name":"机构组织","id":"6"},{"name":"专业服务","id":"7"},{"name":"贸易","id":"8"},{"name":"医药医疗","id":"9"},{"name":"多元化集团","id":"10"},{"name":"综合","id":"11"},{"name":"其它","id":"12"}]
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
                this.shplx = values[0];
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
                this.xsdj = '';
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
                const fyid = this.$route.params.fyid, lpid = this.$route.params.lpid;
                var zdid = this.$route.params.zdid;
                //console.log(this.zdid);
                if(fyid=='0'){
                    this.id="";
                }else if(fyid!='0'){
                    this.id = fyid;
                }
                this.lpid = lpid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/zdfyxx/getZdfyxx.do";
                let that = this;
                this.$http.post(url, {"parameters":{"id":this.id, "lpid": lpid},"foreEndType":2,"code":"300000064"}).then((res)=>{
                    Indicator.close();
                    const zdData=JSON.parse(res.bodyText).data.lpzds;
                    const topic=JSON.parse(res.bodyText).topic;
                    const topic1=JSON.parse(res.bodyText).data.jbxx;
                    this.zds=zdData;
                    console.log(this.zds);
                    $('title').html(topic);
                    if(!zdid||zdid=='undefined'){
                        this.zdid="0";

                    }else if(zdid&&zdid!='undefined'){
                        this.zdid = zdid;
                        if(this.zdid!=0){
                            for(var i=0;i<this.zds.length;i++){
                                if(this.zds[i].id==this.zdid){
                                    this.gzys=this.zds[i].gzys;
                                    console.log(this.zds[i].gzys);
                                }
                            }
                        }
                    }
                    console.log(this.zdid+"座栋");
                    const data = JSON.parse(res.bodyText).data.jbxx;
                    if(data.zdid){
                        that.xsdj = data.xsdj;
                        that.zdid = data.zdid;
                        that.zdh = data.zdh;
                        //console.log(that.zdh);
                        that.gzys = data.gzys;
                        that.fybh = data.fybh;
                        that.fyname = data.fyname;
                        that.lc = data.lc;
                        that.zglc = data.zglc;
                        that.sfshp = data.sfshp;
                        if(data.sfshp==1){
                            $(".splxDiv").css("display","block");
                            if(data.shplx==1){
                                that.shplx ="内铺" ;
                            }
                            if(data.shplx==2){
                                that.shplx ="临街内铺" ;
                            }
                            if(data.shplx==3){
                                that.shplx ="商场内铺" ;
                            }
                            if(data.shplx==4){
                                that.shplx ="小区内铺" ;
                            }
                        }

                        that.chqnx = data.chqnx;
                        that.chx = data.chx;

                        if(data.zxsp==1){
                            that.zxsp = "精装交付";
                        }
                        if(data.zxsp==2){
                            that.zxsp = "装修升级中A级";
                        }
                        if(data.zxsp==3){
                            that.zxsp = "装修升级中B级";
                        }
                        if(data.zxsp==4){
                            that.zxsp = "可租待升级不可看房";
                        }
                        if(data.zxsp==5){
                            that.zxsp = "可租待升级可看房(提前电话联系)";
                        }
                        if(data.zxsp==6){
                            that.zxsp = "预租不可看房";
                        }
                        if(data.zxsp==7){
                            that.zxsp = "预租可看房";
                        }


                        that.dyzt = data.dyzt;
                        that.yzsx = data.yzsx;
                        console.log("data.yzsx"+data.yzsx);
                        that.hystate = data.hystate;
                        if(data.hystate==1){
                            $(".hy2Class").css("display","block");
                            $(".hy1Class").css("display","none");
                        }else if(data.hystate==0){
                            $(".hy1Class").css("display","block");
                            $(".hy2Class").css("display","none");
                        }
                        that.sfzh = data.sfzh;

                        if(data.sfzh==1){
                            $(".qzClass").css("display","block");
                            $(".kzClass").css("display","none");
                            if(data.qzsj!=''){
                                that.qzsj = data.qzsj.substring(0,10);
                            }
                        }else if(data.sfzh==0&&data.sfzh!=''){
                            $(".kzClass").css("display","block");
                            $(".qzClass").css("display","none");
                            if(data.kzsj!=''){
                                that.kzsj = data.kzsj.substring(0,10);
                            }
                        }
                        that.qwzj = data.qwzj;
                        that.ckzljg = data.ckzljg;
                        that.zjdj = data.zjdj;
                        let shyt = data.shyt ? data.shyt.split(";"):[];
                        that.shyt = shyt;
                        that.chwlx = data.chwlx;
                        console.log(this.sfshp);
                        console.log(this.shplx);
                        console.log(this.qxzt);
                        //this.qxzt = 20;


                        //对商铺类型是根据是否为商铺来判断
                        if(this.sfshp == 1){
                            $(".splxDiv").css("display","block");
                            console.log("data.shplx"+data.shplx);
                            if(data.shplx == ""){
                                if(this.qxzt == 3 || this.qxzt == 11 || this.qxzt == 21 || this.qxzt == 23 || this.qxzt == 31 || this.qxzt == 33 || this.qxzt == 41 || this.qxzt == 42 || this.qxzt == 43){
                                    this.shplxqx=false;
                                }else{
                                    this.shplxqx = true;
                                }
                            }else{
                            console.log("this.qxzt"+this.qxzt);
                                if(this.qxzt == 1 || this.qxzt == 22 || this.qxzt == 32 || this.qxzt == 45 || this.qxzt == 47){
                                    this.shplxqx = true;
                                }else{
                                    this.shplxqx = false;

                                }
                            }
                        }else{
                            $(".splxDiv").css("display","none");
                        }
                        //判断是否为航远房源
                        if(this.hystate == 1){
                            $(".hy2Class").css("display","block");
                            $(".hy1Class").css("display","none");
                            if(this.ckzljg == ""){
                                if(this.qxzt == 3 || this.qxzt == 11 || this.qxzt == 21 || this.qxzt == 23 || this.qxzt == 31 || this.qxzt == 33 || this.qxzt == 41 || this.qxzt == 42 || this.qxzt == 43){
                                    this.ckzljgqx = true;
                                }else{
                                    this.ckzljgqx = false;
                                }
                            }else{
                                if(this.qxzt == 1 || this.qxzt == 22 || this.qxzt == 32 || this.qxzt == 45 || this.qxzt == 47){
                                    this.ckzljgqx = false;
                                }else{
                                    this.ckzljgqx = true;
                                }
                            }
                            if(this.xsdj == ""){
                                if(this.qxzt == 3 || this.qxzt == 11 || this.qxzt == 21 || this.qxzt == 23 || this.qxzt == 31 || this.qxzt == 33 || this.qxzt == 41 || this.qxzt == 42 || this.qxzt == 43){
                                    this.xsdjqx = true;
                                }else{

                                    this.xsdjqx = false;
                                }
                            }else if(this.qxzt == 1 || this.qxzt == 22 || this.qxzt == 32 || this.qxzt == 45 || this.qxzt == 47){
                                    this.xsdjqx = false;
                                }else{
                                    this.xsdjqx = true;
                                }
                            }
                        }else{
                            $(".hy2Class").css("display","none");
                            $(".hy1Class").css("display","block");
                            if(this.ckzljg == ""){
                                if(this.qxzt == 3 || this.qxzt == 11 || this.qxzt == 21 || this.qxzt == 23 || this.qxzt == 31 || this.qxzt == 33 || this.qxzt == 41 || this.qxzt == 42 || this.qxzt == 43){
                                    this.ckzljgqx = true;
                                }else{
                                    this.ckzljgqx = false;
                                }
                            }else{
                                if(this.qxzt == 1 || this.qxzt == 22 || this.qxzt == 32 || this.qxzt == 45 || this.qxzt == 47){
                                    this.ckzljgqx = false;
                                }else{
                                    this.ckzljgqx = true;
                                }
                            }
                        }
                        //判断是否为有租户
                        if(this.sfzh == 1){
                            $(".qzClass").css("display","block");
                            $(".kzClass").css("display","none");
                            if(this.qzsj == ""){
                                this.qzsjqx = true;
                                if(this.qxzt == 1 || this.qxzt == 22 || this.qxzt == 32 || this.qxzt == 45 || this.qxzt == 47){
                                   
                                }else if(this.qxzt == 3 || this.qxzt == 11 || this.qxzt == 21 || this.qxzt == 23 || this.qxzt == 31 || this.qxzt == 33 || this.qxzt == 41 || this.qxzt == 42 || this.qxzt == 43){
                                //查看
                                this.qzsjqx = false;

                                }else{
                                   
                                }
                            }else{
                                this.qzsjqx = false;
                                if(this.qxzt == 1 || this.qxzt == 22 || this.qxzt == 32 || this.qxzt == 45 || this.qxzt == 47){
                                    this.qzsjqx = true;
                                }else{
                                    this.qzsjqx = false;
                                }
                            }
                        }else{
                            $(".kzClass").css("display","block");
                            $(".qzClass").css("display","none");
                            if(this.kzsj == ""){
                                this.kzsjqx = true;
                                if(this.qxzt == 3 || this.qxzt == 11 || this.qxzt == 21 || this.qxzt == 23 || this.qxzt == 31 || this.qxzt == 33 || this.qxzt == 41 || this.qxzt == 42 || this.qxzt == 43){
                                    this.kzsjqx = false;
                                }else if(this.qxzt == 1 || this.qxzt == 22 || this.qxzt == 32 || this.qxzt == 45 || this.qxzt == 47){
                                    this.kzsjqx = true;
                                }else{
                                    this.kzsjqx = true;
                                }
                            }else{
                                if(this.qxzt == 1 || this.qxzt == 22 || this.qxzt == 32 || this.qxzt == 45 || this.qxzt == 47){
                                    this.kzsjqx = true;
                                }else if(this.qxzt == 3 || this.qxzt == 11 || this.qxzt == 21 || this.qxzt == 23 || this.qxzt == 31 || this.qxzt == 33 || this.qxzt == 41 || this.qxzt == 42 || this.qxzt == 43){
                                    this.kzsjqx = false;
                                }else{
                                    this.kzsjqx = false;
                                }
                            }
                        }

                        //只有查看和空白字段添加的权限
                        if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 46){
                            this.zdhqx = false;
                            this.saveqx = false;
                            if(this.zds.length == 0){
                                this.zdhqx = true;
                                this.saveqx = true;
                            }
                            this.fybhqx = true;
                            if(this.fybh == ""){
                                this.fybhqx = false;
                                this.saveqx = true;
                            }
                            this.fynameqx = true;
                            if(this.fyname == ""){
                                this.fynameqx = false;
                                this.saveqx = true;
                            }
                            this.lcqx = true;
                            if(this.lc == ""){
                                this.lcqx = false;
                                this.saveqx = true;
                            }
                            this.sfshpqx = false;
                            if(this.sfshp == ""){
                                this.sfshpqx = true;
                                this.saveqx = true;
                            }

                            this.chqnxqx = false;
                            if(this.chqnx == ""){
                                this.chqnxqx = true;
                                this.saveqx = true;
                            }

                            this.chxqx = true;
                            if(this.chx == ""){
                                this.chxqx = false;
                                this.saveqx = true;
                            }

                            this.zxspqx = false;
                            if(data.zxsp == ""){
                                this.zxspqx = true;
                                this.saveqx = true;
                            }
                            this.dyztqx = true;
                            if(this.dyzt == ""){
                                this.dyztqx = false;
                                this.saveqx = true;
                            }
                            this.yzsxqx = false;
                            if(this.yzsx == ""||this.yzsx==0){
                                this.yzsxqx = true;
                                this.saveqx = true;
                            }

                            this.hystateqx = false;
                            if(this.hystate == ""){
                                this.hystateqx = true;
                                this.saveqx = true;
                            }

                            this.sfzhqx = false;
                            if(this.sfzh == ""){
                                this.sfzhqx = true;
                                this.saveqx = true;
                            }
                            console.log(this.saveqx);
                            if(data.sfzh == 0){
                                this.kzsjqx = false;
                                if(this.kzsj == ""){
                                    this.kzsjqx = true;
                                    this.saveqx = true;
                                }
                            }else if (data.sfzh==1){
                                this.qzsjqx = false;
                                if(this.qzsj == ""){
                                    this.qzsjqx = true;
                                    this.saveqx = true;
                                }
                            }
                            this.ckzljgqx = true;
                            if(this.ckzljg == ""){
                                this.ckzljgqx = false;
                                this.saveqx = true;
                            }
                            if(this.hystate == 1){
                                this.xsdjqx = true;
                                if(this.xsdj == ""){
                                    this.xsdjqx = false;
                                    this.saveqx = true;
                                }
                            }else if(this.hystate == ""){
                                this.saveqx = true;
                            }
                            this.qwzjqx = true;
                            if(this.qwzj == ""){
                                this.qwzjqx = false;
                                this.saveqx = true;
                            }

                            if(this.sfshp == 1){
                                this.shplxqx = false;
                                if(data.shplx == ""){
                                    this.shplxqx = true;
                                    this.saveqx = true;
                                }
                            }

                            this.zjdjqx = true;
                            if(this.zjdj == ""){
                                this.zjdjqx = false;
                                this.saveqx = true;
                            }
                            this.shytqx = false;
                            if(this.shyt.length == 0){
                                this.shytqx = true;
                                this.saveqx = true;
                            }
                            this.chwlxqx = false;
                            if(this.chwlx == ""){
                                this.chwlxqx = true;
                                this.saveqx = true;
                            }
                        }

                    

                }, (res)=>{
                    Indicator.close()
                });
            },
            tebqqxpd(){
                let user22 = JSON.parse(localStorage.getItem('cook'));
                const url = this.$api + "/yhcms/web/wxqx/getFyxxqx.do";
                var dd=this.$route.params.fyid;
                if(dd!=0){
                this.$http.post(url, {"cookie":user22.sjs,"fyid":this.$route.params.fyid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    //data.qxzt = 1;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 22 || data.qxzt == 32 || data.qxzt == 45 || data.qxzt == 47){
                        this.zdhqx = true;
                        this.saveqx = true;
                        this.fybhqx = false;
                        this.fynameqx = false;
                        this.lcqx = false;
                        this.sfshpqx = true;
                        this.shplxqx = true;
                        this.chqnxqx = true;
                        this.chxqx = false;
                        this.zxspqx = true;
                        this.dyztqx = false;
                        this.yzsxqx = true;
                        this.hystateqx = true;
                        this.sfzhqx = true;
                        this.kzsjqx = true;
                        this.qzsjqx = true;
                        this.ckzljgqx = false;
                        this.xsdjqx = false;
                        this.qwzjqx = false;
                        this.zjdjqx = false;
                        this.shytqx = true;
                        this.chwlxqx = true;
                    }
                    console.log(this.qxzt+"sss");
                    if(data.qxzt == 2){
                        MessageBox('提示',"此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    console.log(data.qxzt+"222");
                    if(data.qxzt == 3 || data.qxzt == 11 || data.qxzt == 21 || data.qxzt == 23 || data.qxzt == 31 || data.qxzt == 33 || data.qxzt == 41 || data.qxzt == 42 || data.qxzt == 43){
                        this.zdhqx = false;
                        this.fybhqx = true;
                        this.fynameqx = true;
                        this.lcqx = true;
                        this.sfshpqx = false;
                        this.shplxqx = false;
                        this.chqnxqx = false;
                        this.chxqx = true;
                        this.zxspqx = false;
                        this.dyztqx = true;
                        this.yzsxqx = false;
                        this.hystateqx = false;
                        this.sfzhqx = false;
                        this.kzsjqx = false;
                        this.qzsjqx = false;
                        this.ckzljgqx = true;
                        this.xsdjqx = true;
                        this.qwzjqx = true;
                        this.zjdjqx = true;
                        this.shytqx = false;
                        this.chwlxqx = false;
                        this.saveqx = false;
                        $("input").attr('placeholder',"");
                    }

                    if(data.qxzt == 45 && data.ryzt == 5){
                        console.log(data.qxzt);
                        console.log(data.ryzt);
                        console.log(data.fyzt);
                        MessageBox('提示',"此用户不属于收购部人员！");
                        this.$router.push({path: '/login'});
                    }
                    this.getInitData();

                }, (res)=>{
                    Indicator.close()
                });
                }else{
                    this.zdhqx = true;
                    this.saveqx = true;
                    this.fybhqx = false;
                    this.fynameqx = false;
                    this.lcqx = false;
                    this.sfshpqx = true;
                    this.shplxqx = true;
                    this.chqnxqx = true;
                    this.chxqx = false;
                    this.zxspqx = true;
                    this.dyztqx = false;
                    this.yzsxqx = true;
                    this.hystateqx = true;
                    this.sfzhqx = true;
                    this.kzsjqx = true;
                    this.qzsjqx = true;
                    this.ckzljgqx = false;
                    this.xsdjqx = false;
                    this.qwzjqx = false;
                    this.zjdjqx = false;
                    this.shytqx = true;
                    this.chwlxqx = true;
                    this.getInitData();
                }
            },
            sfspAction(){
                console.log("aaa "+this.sfshp);
                var _this=this;
                setTimeout(function(){
                    if(_this.sfshp==1){
                        $(".splxDiv").css("display","block");
                    }else if(_this.sfshp==0){
                        $(".splxDiv").css("display","none");

                    }
                },1);
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
                var _this = this;
                if(!this.fybh){
                    MessageBox('提示', '请输入房号!');
                    return;
                }else if(this.zdid=="0"||this.zdid==""){
                    MessageBox('提示', '请选择座栋号!');
                    return;
                }
                //判断房号  规则样式是否正确
                var bh1=this.fybh;
                var yss=this.gzys;


                var flag=0;
                if(bh1==''){
                    alertMsg.info("房号不能为空！");
                    return false;
                }
                if(yss!=''){
                    var ysd=yss.split(";");
                    for(var i=0;i<ysd.length;i++){
                        var sd1=ysd[i];
                        if(sd1.length!=bh1.length){
                            continue;
                        }
                        var g2=0;
                        for(var j=0;j<sd1.length;j++){
                            var  sd2=sd1.charAt(j);
                            var  sd3=bh1.charAt(j);
                            if(sd2=='A'){
                                if(this.checkString(sd3)){
                                    g2=1;
                                }

                            }else if(sd2=='-'){
                                if(sd3!='-'){
                                    g2=1;
                                }

                            }else if(sd2=='0'){
                                if(this.checknumber(sd3)){
                                    g2=1;
                                }

                            }else if(sd2=='/'){
                                if(sd3!='/'){
                                    g2=1;
                                }

                            }
                        }
                        if(g2==0){
                            flag=1;
                            break;
                        }

                    }
                }
                console.log(this.gzys);
                if(flag==0){
                    MessageBox('提示', '房号格式错误!格式应为'+this.gzys);
                    return;
                }

                //商铺类型

                console.log("shplx1 is :"+this.shplx);
                console.log("shplx2 is :", level1);


                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/zdfyxx/saveZdfyxx.do",
                    {
                        "parameters": {
                            id: this.id,
                            xsdj:this.xsdj,
                            lpid: this.lpid,
                            zdid: this.zdid,
                            gzys: this.gzys,
                            fybh: this.fybh,
                            fyname: this.fyname,
                            lc: this.lc,
                            zglc: this.zglc,
                            sfsp: this.sfshp,
                            splx:level1[this.shplx],
                            chqnx: this.chqnx,
                            chx: this.chx,
                            zxsp: level[this.zxsp],
                            dyzt: this.dyzt,
                            zlqx: this.yzsx,
                            hystate: this.hystate,
                            sfzh: this.sfzh,
                            kzsj: this.kzsj,
                            qzsj: this.qzsj,
                            qwzj: this.qwzj,
                            ckzljg: this.ckzljg,
                            zjdj: this.zjdj,
                            shyt: this.shyt.join(";"),
                            chwlx: this.chwlx,
                        },
                        "foreEndType": 2,
                        "code": "300000061"
                    }
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
            this.tebqqxpd();

        },
    }
</script>
