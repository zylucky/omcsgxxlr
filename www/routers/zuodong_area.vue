<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";

</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix pr">
          <span class="ys_tit w224">建筑面积：</span>
          <div class="ys_item_con fl" v-if="!jzmjqx">
            <input type="number" value="" v-model="jzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="jzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">业主面积：</span>
          <div class="ys_item_con fl" v-if="!yzmjqx">
            <input type="number" value="" v-model="yzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="yzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">开发商自持面积：</span>
          <div class="ys_item_con fl" v-if="!kfszcmjqx">
            <input type="number" value="" v-model="kfszcmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="kfszcmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">单层面积：</span>
          <div class="ys_item_con fl" v-if="!dcmjqx">
            <input type="number" value="" v-model="dcmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="dcmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空置面积：</span>
          <div class="ys_item_con fl" v-if="!kzmjqx">
            <input type="number" value="" v-model="kzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="kzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn ys_default1_btn mb80" v-if="saveqx"  @click="saveAreaMsg">保存</a>
      <a href="javascript:;" class="ys_default_btn ys_default2_btn mb80" v-else @click="fhAreaMsg">返回</a>
    </div>
  </div>
</template>
<script>

    import { Toast } from 'mint-ui'; //toast
    import { Indicator } from 'mint-ui';

    import { MessageBox } from 'mint-ui'; //弹窗

    export default {
        data () {
            return {
                lpid: "",
                zdid: '', //座栋id
                jzmj: '', //建筑面积
                yzmj: '', //业主面积
                kfszcmj: '', //开发商自持面积
                dcmj: '', //单层面积
                kzmj: '', //空置面积
                jzmjqx:0,
                yzmjqx:0,
                kfszcmjqx:0,
                dcmjqx:0,
                kzmjqx:0,
                saveqx:true,
            }
        },
        methods: {

            getInitData(){
                const zdid = this.$route.params.zdid;
                this.zdid = zdid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/lpzdxx/getLpzdMj.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":zdid},"foreEndType":2,"code":"300000075"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.jzmj = data.jzmj;
                    that.lpid = data.lpid;
                    that.yzmj = data.yzmj;
                    that.kfszcmj = data.kfszcmj;
                    that.kzmj = data.kzmj;
                    that.dcmj = data.dcmj;
                    $('title').html(data.topic + '一' +  data.zdh);
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.jzmjqx = true;
                        this.saveqx = false;
                        if(this.jzmj == ""){
                            this.jzmjqx = false;
                            this.saveqx = true;
                        }
                        this.yzmjqx = true;
                        if(this.yzmj == ""){
                            this.yzmjqx = false;
                            this.saveqx = true;
                        }
                        this.kfszcmjqx = true;
                        if(this.kfszcmj == ""){
                            this.kfszcmjqx = false;
                            this.saveqx = true;
                        }
                        this.dcmjqx = true;
                        if(this.dcmj == ""){
                            this.dcmjqx = false;
                            this.saveqx = true;
                        }
                        this.kzmjqx = true;
                        if(this.kzmj == ""){
                            this.kzmjqx = false;
                            this.saveqx = true;
                        }
                    }

                }, (res)=>{
                    Indicator.close()
                });
            },
            //权限判断
             tebqqxpd(){
                let user22 = JSON.parse(localStorage.getItem('cook'));
                const url = this.$api + "/yhcms/web/wxqx/getLpzdqx.do";
                this.$http.post(url, {"cookie":user22.sjs,"zdid":this.$route.params.zdid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    console.log("ryzt : "+data.ryzt+", qxzt :"+data.qxzt);
                    //data.qxzt = 20;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        this.$router.push({path:'/zuodong_list/'+this.lpid});
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.jzmjqx = false;
                        this.yzmjqx = false;
                        this.kfszcmjqx = false;
                        this.dcmjqx = false;
                        this.kzmjqx = false;
                        this.saveqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"系统中无此用户或此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    if(data.qxzt == 11){
                        this.jzmjqx = true;
                        this.yzmjqx = true;
                        this.kfszcmjqx = true;
                        this.dcmjqx = true;
                        this.kzmjqx = true;
                        this.saveqx = false;
                        $("input").attr('placeholder',"");
                       /* $(".ys_default1_btn").css("display","none");
                        $(".ys_default2_btn").css("display","block");*/
                    }

                    if(data.qxzt == 46){
                        MessageBox('提示',"此用户不属于收购部人员！");
                        this.$router.push({path: '/login'});
                    }
                    this.getInitData();
                }, (res)=>{
                    Indicator.close()
                });
            },
            //返回
            fhAreaMsg(){
            this.$router.push({path:'/zuodong_list/'+this.lpid});
            },
            //保存面积信息
            saveAreaMsg(){
                var _this = this;
                /*
                if(this.jzmj == ''){
                    MessageBox('提示', '请输入建筑面积');
                    return;
                }
                */

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                const that = this;

                this.$http.post(
                    this.$api + "/yhcms/web/lpzdxx/saveLpzdMj.do",
                    {
                        "parameters": {
                            "id": this.zdid, //座栋id
                            "jzmj":this.jzmj,//建筑面积
                            "yzmj":this.yzmj,//业主面积
                            "kfszcmj":this.kfszcmj,//开发商自持面积
                            "dcmj":this.dcmj,//单层面积
                            "kzmj":this.kzmj,//空置面积
                        },
                        "foreEndType": 2,
                        "code": "300000074"
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
                            _this.$router.push({path:'/zuodong_list/'+_this.lpid});
                        },1000);

                    } else {
                        Toast({
                            message: '保存失败: ' + result.message,
                            position: 'bottom'
                        });
                    }
                }, function (res) {
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
