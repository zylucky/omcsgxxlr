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
            <input type="text" value="" v-model="topic" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">房间号：</span>
          <div class="ys_item_con fl">
            <input type="text" class="inp_sm" value="" v-model="fybh" readonly>
            <span class="hor_line">-</span>
            <input type="text" class="inp_sm" value="" v-model="fh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">租赁面积：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" v-model="zlmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">现租户租金：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" v-model="xzhzj" placeholder="请输入">
            <i class="right_unitnumber" style="    position: absolute;right: .3rem;top: .2rem;">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr mb20" style="margin-bottom: 0px !important;">
          <span class="ys_tit">起租时间：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" readonly v="zq1" placeholder="请选择日期"  v-model.trim="zq1" @click="openPicker($event)">
            <i class="calendar_icon"  v="zq1" @click="openPicker($event)"></i>
          </div>
        </li>
        <li class="clearfix pr mb20" style="margin-bottom: 0px !important;">
          <span class="ys_tit">到期时间：</span>
          <div class="ys_item_con fl">
            <input type="text" readonly value="" v="zq2" placeholder="请选择日期"  v-model.trim="zq2" @click="openPicker($event)">
            <i class="calendar_icon" v="zq2" @click="openPicker($event)"></i>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">付款方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="fkfs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">联系方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lxfs" placeholder="请输入">
          </div>
        </li>
        <div >
          <li class="clearfix">
            <span class="ys_tit">所属行业：</span>
            <div class="ys_item_con fl">
              <input type="text" value="" v-model="sshy" placeholder="请输入">
            </div>
          </li>
          <li class="clearfix">
            <span class="ys_tit">公司人数：</span>
            <div class="ys_item_con fl">
              <input type="number" value="" v-model="gsrs" placeholder="请输入">
            </div>
          </li>
          <li class="clearfix">
            <span class="ys_tit">经营环境：</span>
            <div class="ys_item_con fl">
              <input type="text" value="" v-model="jyhj" placeholder="请输入">
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
                "id": "",
                "fyid": "",
                "topic": "",
                "fybh":"",
                "wdfh":"",
                "fh": "",
                "zlmj": "",
                "xzhzj": "",
                "zq1": "",
                "zq2": "",
                "fkfs": "",
                "lxfs": "",
                "gsrs": "",
                "jyzk": "",
                "jyhj": "",
                "sshy": "",
                target: "",
                pickerValue: '',
                startDate: new Date()
            }
        },
        methods: {
            getInitData(){
                const   fyid = this.$route.params.fyid;
                console.log(fyid);
                this.fyid = fyid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/zdfyxx/getZdfyZhxx.do";
                let that = this;
                this.$http.post(url, {"parameters":{"fyid":fyid, "id": ""},"foreEndType":2,"code":"300000020"}).then((res)=>{
                    Indicator.close()
                    const data12 = JSON.parse(res.bodyText).data;
                    const data1=data12.fyxx;
                    var b1=data1.fybh;
                    that.fybh=b1;
                    if(data1.chqxz=='公寓'){
                        $(".hy_class").css("display","none");
                    }


                }, (res)=>{
                    Indicator.close()
                });
            },
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
            //补零
            addZero(n){
                return n = n < 10 ? '0' + n : '' + n;
            },

            saveRentData(){
                var _this = this;
                if(this.topic == "" && this.fh == "" && this.zlmj == "" && this.xzhzj == "" && this.zq1 == "" && this.zq2 == "" && this.fkfs == "" && this.lxfs == "" && this.sshy == "" && this.gsrs == "" && this.jyhj == ""){
                    MessageBox('提示', '租户信息全部为空，不予保存！');
                    history.go(-1);
                    return;
                }
               /*
               
                 if(!this.topic){
                    MessageBox('提示', '请输入租户名称');
                    return;
                }
                */
                this.wdfh=this.fybh+"-"+this.fh;

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/zdfyxx/saveZhxx.do",
                    {
                        "parameters": {
                            "id":this.id,
                            "fyid": this.fyid,
                            "topic": this.topic,
                            "sshy": this.sshy,
                            "gsrs": this.gsrs,
                            "xzhzj": this.xzhzj,
                            "zq1": this.zq1,
                            "zq2": this.zq2,
                            "fkfs": this.fkfs,
                            "lxfs": this.lxfs,
                            "jyhj": this.jyhj,
                            "zlmj": this.zlmj,
                            "wdfh": this.wdfh
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
                            //_this.$router.push({path:'/index'});
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
            this.getInitData();
        },
    }
</script>
