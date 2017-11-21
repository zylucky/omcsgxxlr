<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";

  .page-infinite-loading {
    text-align: center;
    background-color: #FFF;
    & > span {
      display: inline-block;
    }
  }

</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix">
          <span class="ys_tit">租户名称：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" :readonly="topicqx" v-model="topic" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">房间号：</span>
          <div class="ys_item_con fl">
            <input type="text" class="inp_sm" value="2301" v-model="fybh" readonly>
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" :readonly="fhqx" v-model="fh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">租赁面积：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" :readonly="zlmjqx" v-model="zlmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">现租户租金：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" :readonly="xzhzjqx" v-model="xzhzj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr mb20" style="margin-bottom: 0px !important;">
          <span class="ys_tit zyzd">起租时间：</span>
          <div class="ys_item_con fl" v-if="zq1qx">
            <input type="text" value="" readonly v="zq1" placeholder="请选择日期"  v-model.trim="zq1" @click="openPicker($event)">
            <i class="calendar_icon"  v="zq1" @click="openPicker($event)"></i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly v="zq1" placeholder="请选择日期"  v-model.trim="zq1">
            <i class="calendar_icon"  v="zq1"></i>
          </div>
        </li>
        <li class="clearfix pr mb20" style="margin-bottom: 0px !important;">
          <span class="ys_tit zyzd">到期时间：</span>
          <div class="ys_item_con fl" v-if="zq2qx">
            <input type="text" value="" readonly v="zq2" placeholder="请选择日期"  v-model.trim="zq2" @click="openPicker($event)">
            <i class="calendar_icon" v="zq2" @click="openPicker($event)"></i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly v="zq2" placeholder="请选择日期"  v-model.trim="zq2">
            <i class="calendar_icon" v="zq2"></i>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">付款方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" :readonly="fkfsqx" v-model="fkfs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">联系方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" :readonly="lxfsqx" v-model="lxfs" placeholder="请输入">
          </div>
        </li>
        <div class="hy_class" >
          <li class="clearfix">
            <span class="ys_tit">所属行业：</span>
            <div class="ys_item_con fl">
              <input type="text" value="" :readonly="sshyqx" v-model="sshy" placeholder="请输入">
            </div>
          </li>
          <li class="clearfix">
            <span class="ys_tit">公司人数：</span>
            <div class="ys_item_con fl">
              <input type="number" value="" :readonly="gsrsqx" v-model="gsrs" placeholder="请输入">
            </div>
          </li>

          <li class="clearfix">
            <span class="ys_tit">经营环境：</span>
            <div class="ys_item_con fl">
              <input type="text" value="" :readonly="jyhjqx" v-model="jyhj" placeholder="请输入">
            </div>
          </li>
        </div>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveRentData">保存</a>
    </div>

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
    import {Indicator} from 'mint-ui';
    import {Toast} from 'mint-ui';
    import {MessageBox} from 'mint-ui';

    export default {
        data () {
            return {
                "fyid":"",
                "fybh":"",
                "zhid":"",
                "id": "",
                "topic": "",
                "fh": "",
                "wdfh":"",
                "zlmj": "",
                "xzhzj": "",
                "zq1": "",
                "zq2": "",
                "fkfs": "",
                "lxfs": "",
                "gsrs": "",
                "jyhj": "",
                "sshy": "",
                target: "",
                pickerValue: '',
                startDate: new Date(),
                topicqx:false,
                fhqx:false,
                zlmjqx:false,
                xzhzjqx:false,
                zq1qx:true,
                zq2qx:true,
                fkfsqx:false,
                lxfsqx:false,
                sshyqx:false,
                gsrsqx:false,
                jyhjqx:false,


            }
        },
        methods: {
            openPicker(e) {
                const target = $(e.target), val = target.attr("v");
                this.target = val;
                this.$refs.picker.open();
            },
            handleConfirm(value){
                this[this.target || "zq1"] = this.transformDate(value);
            },
            transformDate: function (date) {
                var str = '';
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                str = year + '-' + this.addZero(month) + '-' + this.addZero(day);
                return str;
            },
            addZero(n){
                return n = n < 10 ? '0' + n : '' + n;
            },
            getInitData(){
                const zhid = this.$route.params.zhid, fyid = this.$route.params.fyid;
                this.zhid = zhid;
                this.fyid = fyid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/zdfyxx/getZdfyZhxx.do";
                let that = this;
                this.$http.post(url, {"parameters":{"fyid":fyid, "id": zhid},"foreEndType":2,"code":"300000020"}).then((res)=>{
                    Indicator.close()
                    const data12 = JSON.parse(res.bodyText).data;
                    const data1=data12.fyxx;
                    const data=data12.zhxx;
                    that.fybh=data1.fybh;
                    var chqxz=data1.chqxz;
                    if(chqxz=='公寓'){
                        $(".hy_class").css("display","none");
                    }
                    if(data!=''){
                        that.id=data.id;
                        that.topic = data.topic;
                        var f1=data.fh;
                        console.log(f1)
                        if(f1!=''){
                            var f2=f1.split("-");
                            var f3=f2[1];
                            console.log(f3)
                            if(f3!=""){
                                that.fh = f3;
                            }
                        }

                        that.zlmj = data.zlmj;
                        that.xzhzj = data.xzhzj;
                        if(data.zq1!=''){
                            that.zq1 = data.zq1.substring(0,10);
                        }
                        if(data.zq2!=''){
                            that.zq2 = data.zq2.substring(0,10);
                        }
                        that.fkfs = data.fkfs;
                        that.lxfs = data.lxfs;
                        if(chqxz!='公寓'){
                            that.gsrs = data.gsrs;
                            that.jyhj = data.jyhj;
                            that.sshy = data.sshy;
                        }
                        //只有查看和空白字段添加的权限
                        if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 46){
                            this.topicqx = true;
                            if(this.topic == ""){
                                this.topicqx = false;
                            }
                            this.fhqx = true;
                            if(this.fh == ""){
                                this.fhqx = false;
                            }
                            this.zlmjqx = true;
                            if(this.zlmj == ""){
                                this.zlmjqx = false;
                            }
                            this.xzhzjqx = true;
                            if(this.xzhzj == ""){
                                this.xzhzjqx = false;
                            }
                            this.zq1qx = false;
                            if(data.zq1 == ""){
                                this.zq1qx = true;
                            }
                            this.zq2qx = false;
                            if(data.zq2 == ""){
                                this.zq2qx = true;
                            }
                            this.fkfsqx = true;
                            if(this.fkfs == ""){
                                this.fkfsqx = false;
                            }
                            this.lxfsqx = true;
                            if(this.lxfs == ""){
                                this.lxfsqx = false;
                            }
                            this.sshyqx = true;
                            if(data.sshy == ""){
                                this.sshyqx = false;
                            }
                            this.gsrsqx = true;
                            if(data.gsrs == ""){
                                this.gsrsqx = false;
                            }
                            this.jyhjqx = true;
                            if(data.jyhj == ""){
                                this.jyhjqx = false;
                            }


                        }
                    }
                }, (res)=>{
                    Indicator.close()
                });
            },
            tebqqxpd(){
                let user22 = JSON.parse(localStorage.getItem('cook'));
                const url = this.$api + "/yhcms/web/wxqx/getFyxxqx.do";
                this.$http.post(url, {"cookie":user22.sjs,"fyid":this.$route.params.fyid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    console.log(data.qxzt);
                    //data.qxzt = 3;
                    if(data.qxzt == 45 && data.ryzt == 5){
                        MessageBox('提示',"此用户不属于收购部人员！");
                        this.$router.push({path: '/login'});
                    }
                    this.getInitData();

                }, (res)=>{
                    Indicator.close()
                });
            },
            saveRentData(){
                var _this = this;
                var that= this;
                /*
                if(!this.topic){
                    MessageBox('提示', '请输入租户名称');
                    return;
                }
                */
                that.wdfh=this.fybh+"-"+this.fh;
                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/zdfyxx/saveZhxx.do",
                    {
                        "parameters": {
                            id: this.id,
                            fyid: this.fyid,
                            topic: this.topic,
                            sshy: this.sshy,
                            gsrs: this.gsrs,
                            xzhzj:this. xzhzj,
                            zq1: this.zq1,
                            zq2: this.zq2,
                            fkfs: this.fkfs,
                            lxfs: this.lxfs,
                            jyhj: this.jyhj,
                            zlmj: this.zlmj,
                            wdfh: this.wdfh
                        },
                        "foreEndType": 2,
                        "code": "300000019"
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
                            //  _this.$router.push({path:'/index'});
                            _this.$router.push({path:'/fang_renter/'+_this.fyid});
                        },1000);

                    } else {
                        Toast({
                            message: '保存失败: ' + result.message,
                            position: 'bottom'
                        });
                    }
                }, function (res) {
                    Indicator.close();
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
