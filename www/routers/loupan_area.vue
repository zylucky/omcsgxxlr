<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";

</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix pr">
          <span class="ys_tit w224">总建筑面积：</span>
          <div class="ys_item_con fl" v-if="!zjzmjqx">
            <input type="number" value="" v-model="zjzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="zjzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">开发商总面积：</span>
          <div class="ys_item_con fl" v-if="!kfszmjqx">
            <input type="number" value="" v-model="kfszmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="kfszmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">业主总面积：</span>
          <div class="ys_item_con fl" v-if="!yzzmjqx">
            <input type="number" value="" v-model="yzzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="yzzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业总面积：</span>
          <div class="ys_item_con fl" v-if="!shyzmjqx">
            <input type="number" value="" v-model="shyzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="shyzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" v-if="saveqx" @click="saveAreaMsg">保存</a>
      <a href="javascript:;" class="ys_default_btn mb80" v-else @click="fanhui">返回</a>
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
                lpid: '',
                zjzmj: '',
                kfszmj: '',
                yzzmj: '',
                shyzmj: '',
                zjzmjqx:0,
                kfszmjqx:0,
                yzzmjqx:0,
                shyzmjqx:0,
                saveqx:0,
            }
        },
        methods: {
            getInitData(){
                const lpid = this.$route.params.lpid;
                this.lpid = lpid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/lpjbxx/getLpMj.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"300000043"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.zjzmj = data.zjzmj;
                    that.kfszmj = data.kfszmj;
                    that.yzzmj = data.yzzmj;
                    that.shyzmj = data.shyzmj;
                    $('title').html(data.topic);
                     //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.zjzmjqx = true;
                        this.saveqx = false;
                        if(this.zjzmj == ""){
                            this.zjzmjqx = false;
                            this.saveqx = true;
                        }
                        this.kfszmjqx = true;
                        if(this.kfszmj == ""){
                            this.kfszmjqx = false;
                            this.saveqx = true;
                        }
                        this.yzzmjqx = true;
                        if(this.yzzmj == ""){
                            this.yzzmjqx = false;
                            this.saveqx = true;
                        }
                        this.shyzmjqx = true;
                        if(this.shyzmj == ""){
                            this.shyzmjqx = false;
                            this.saveqx = true;
                        }

                    }
                    
                }, (res)=>{
                    Indicator.close()
                });
            },
            tebqqxpd(){
                let user22 = JSON.parse(localStorage.getItem('cook'));
                const url = this.$api + "/yhcms/web/wxqx/getLpqx.do";
                this.$http.post(url, {"cookie":user22.sjs,"lpid":this.$route.params.lpid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.zjzmjqx = false;
                        this.kfszmjqx = false;
                        this.yzzmjqx = false;
                        this.shyzmjqx = false;
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
                        this.zjzmjqx = true;
                        this.kfszmjqx = true;
                        this.yzzmjqx = true;
                        this.shyzmjqx = true;
                        this.saveqx = false;
                         $("input").attr('placeholder',"");
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
            fanhui(){
            window.history.go(-1);
            },
            //保存面积信息
            saveAreaMsg(){
                var _this = this;

              /*  if(!this.zjzmj){
                    MessageBox('提示', '请输入建筑总面积');
                    return;
                }
                */

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/lpjbxx/saveLpMj.do",
                    {
                        "parameters": {
                            "lpid": this.lpid,
                            "jzzmj": this.zjzmj,
                            "kfszmj": this.kfszmj,
                            "yzzmj": this.yzzmj,
                            "shyzmj": this.shyzmj
                        },
                        "foreEndType": 2,
                        "code": "300000045"
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
                            _this.$router.push({path:'/index'});
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
