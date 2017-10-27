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
  .hs{
    border: 0px solid red;
    line-height: .72rem;
    text-align: center;
    background-color: #3a94f8;
    color: 	#FFFFFF;
    font-size: .32rem;
  }
  .kbcss{
    height: 3px;
    background-color: #ffffff;
  }
  .dckg{
    border:0px solid red;
    background-color: rgb(206, 206, 206);
    height: 13px;
  }

</style>
<template>
  <div class="all_elements">
    <div class="kbcss"></div>
    <div class="hs">
      户数信息
    </div>
    <div class="dckg"></div>
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix pr" style="background-color:#f0eff5;">
          <span class="ys_tit w224">总户数：</span>
          <div class="ys_item_con fl" style="background-color:#f0eff5 !important;">
            <input type="number" value="" style="background-color: #f0eff5;" v-model="zhsh" placeholder="自动生成" readonly="readonly" onfocus="this.blur()">
          </div>
        </li>
        <li class="clearfix pr" style="background-color:#f0eff5;">
          <span class="ys_tit w224">空置总户数：</span>
          <div class="ys_item_con fl" style="background-color:#f0eff5 !important;">
            <input type="number" value="" style="background-color: #f0eff5;" v-model="kzzhsh" placeholder="自动生成" readonly="readonly" onfocus="this.blur()">
          </div>
        </li>

        <li class="clearfix pr" style="background-color:#f0eff5;">
          <span class="ys_tit w224">空置比例：</span>
          <div class="ys_item_con fl" style="background-color:#f0eff5 !important;">
            <input type="number" value="" style="background-color: #f0eff5;" v-model="hshkzbl" placeholder="自动生成" readonly="readonly" onfocus="this.blur()">%
          </div>
        </li>
        <!--<li class="clearfix pr">
          <span class="ys_tit">空置比例：</span>
          <input type="text" value="" v-model="hshkzbl"  readonly="readonly" placeholder="自动生成" >
          <i class="right_arrow">%</i>

        </li>-->
        <!--<li class="clearfix pr">
          <span class="ys_tit">使用率：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shyl"  placeholder="请输入" >
            <i class="right_arrow">%</i>
          </div>
        </li>-->
        <li class="clearfix pr">
          <span class="ys_tit w224">使用率：</span>
          <div class="ys_item_con fl" v-if="!shylqx">
            <input type="number" value="" v-model="shyl" placeholder="请输入">%
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="shyl" placeholder="请输入">%
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">开发商总数：</span>
          <div class="ys_item_con fl" v-if="!kfszhqx">
            <input type="number" value="" v-model="kfszhs" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="kfszhs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">业主总户数：</span>
          <div class="ys_item_con fl" v-if="!yzzhsqx">
            <input type="number" value="" v-model="yzzhs" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly  onfocus="this.blur()" v-model="yzzhs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业总户数：</span>
          <div class="ys_item_con fl" v-if="!shyzhsqx">
            <input type="number" value="" v-model="shyzhs" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="shyzhs" placeholder="请输入">
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" v-if="saveqx" @click="saveHouse">保存</a>
      <a href="javascript:;" class="ys_default_btn mb80" v-else @click="fanhui">返回</a>
    </div>
  </div>
</template>
<script>
    import { Toast } from 'mint-ui'; //toast
    import { Indicator } from 'mint-ui';

    import { MessageBox } from 'mint-ui'; //弹窗

    export default {
        components: {},

        data () {
            return {
                lpid: '',
                zhsh: '',
                kfszhs: '',
                hshkzbl:'',
                shyl:'',
                yzzhs: '',
                shyzhs: '',
                kzzhsh:'',

                //权限判断的变量
                shylqx:0,
                kfszhqx:0,
                yzzhsqx:0,
                shyzhsqx:0,
                saveqx:0,
                msg:"",


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
                const url = this.$api + "/yhcms/web/lpjbxx/getLpHs.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"300000042"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.zhsh = data.zhsh;
                    that.kfszhs = data.kfszhs;
                    that.hshkzbl = data.kzbl;
                    that.shyl = data.shyl;
                    that.yzzhs = data.yzzhs;
                    that.shyzhs = data.shyzhs;
                    that.kzzhsh=data.kzzhsh;
                    $('title').html(data.topic);                  
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.shylqx = true;
                        this.saveqx = false;
                        if(this.shyl == ""){
                            this.shylqx = false;
                            this.saveqx = true;
                        }
                        this.kfszhqx = true;
                        if(this.kfszhs == ""){
                            this.kfszhqx = false;
                            this.saveqx = true;
                        }
                        this.yzzhsqx = true;
                        if(this.yzzhs == ""){
                            this.yzzhsqx = false;
                            this.saveqx = true;
                        }
                        this.shyzhsqx = true;
                        if(this.shyzhs == ""){
                            this.shyzhsqx = false;
                            this.saveqx = true;
                        }
                    }                   
                }, (res)=>{
                    Indicator.close()
                });
            },
            //此页面的权限的判断
            tebqqxpd(){
                let user22 = JSON.parse(localStorage.getItem('cook'));
                const url = this.$api + "/yhcms/web/wxqx/getLpqx.do";
                this.$http.post(url, {"cookie":user22.sjs,"lpid":this.$route.params.lpid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    this.msg=meg;
                     
                       //只有查看权限
                    if(this.qxzt == 11){
                        $("input").attr('placeholder',"");
                        this.shylqx = true;
                        this.kfszhqx = true;
                        this.yzzhsqx = true;
                        this.shyzhsqx = true;
                        this.saveqx = false;
                        $("input").attr('placeholder',"");
                    }
                    //此用户有所有权限
                    if(this.qxzt == 1 || this.qxzt == 21 || this.qxzt == 31 || this.qxzt == 41 || this.qxzt == 43){
                        this.shylqx = false;
                        this.kfszhqx = false;
                        this.yzzhsqx = false;
                        this.shyzhsqx = false;
                        this.saveqx = true;
                    }
                    if(this.qxzt == 0){
                        MessageBox('提示',this.msg);
                        window.history.go(-1);
                        return;
                    }
                    if(this.qxzt == 2){
                        MessageBox('提示',"此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    if(this.qxzt == 3){
                        this.$router.push({path: '/login'});
                    }
                 
                    if(this.qxzt == 46){
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
            //保存户数信息
            saveHouse(){
                var _this = this;
                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/lpjbxx/saveLpHs.do",
                    {
                        "parameters": {
                            "lpid": this.lpid,
                            "zhsh": this.zhsh,
                            "kfszhs": this.kfszhs,
                            "hshkzbl": this.hshkzbl,
                            "shyl": this.shyl,
                            "yzzhs": this.yzzhs,
                            "shyzhs": this.shyzhs,
                            "kzzhsh":this.kzzhsh
                        },
                        "foreEndType": 2,
                        "code": "300000044"
                    }
                ).then(function (res) {
                    var result = JSON.parse(res.bodyText);
                    Indicator.close();
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
           // this.getInitData();
           this.tebqqxpd();
        },
    }
</script>
