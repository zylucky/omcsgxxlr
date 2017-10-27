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
        <li class="clearfix pr">
          <span class="ys_tit w224">房间面积：</span>
          <div class="ys_item_con fl" v-if="!fjmjqx">
            <input type="number" value="" v-model="fjmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="fjmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">房间结构：</span>
          <div class="ys_item_con fl" v-if="!fjjgqx">
            <input type="text" value="" v-model="fjjg" placeholder="请输入">
            <i class="right_unit"></i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly onfocus="this.blur()" v-model="fjjg" placeholder="请输入">
            <i class="right_unit"></i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">房间层高：</span>
          <div class="ys_item_con fl" v-if="!fjcgqx">
            <input type="number" value="" v-model="fjcg" placeholder="请输入">
            <i class="right_unit">m</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="fjcg" placeholder="请输入">
            <i class="right_unit">m</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">房间面宽：</span>
          <div class="ys_item_con fl" v-if="!fjmkqx">
            <input type="number" value="" v-model="fjmk" placeholder="请输入">
            <i class="right_unit">m</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="fjmk" placeholder="请输入">
            <i class="right_unit">m</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">房间纵深：</span>
          <div class="ys_item_con fl" v-if="!fjzsqx">
            <input type="number" value="" v-model="fjzs" placeholder="请输入">
            <i class="right_unit">m</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="fjzs" placeholder="请输入">
            <i class="right_unit">m</i>
          </div>
        </li>
      </ul>
      <a href="javascript:;" v-if="saveqx" @click="saveStructData" class="ys_default_btn mb80">保存</a>
      <a href="javascript:;" v-else @click="fanhui" class="ys_default_btn mb80">返回</a>
    </div>
  </div>
</template>
<script>
    import {Indicator} from 'mint-ui';
    import {Toast} from 'mint-ui';
    import {MessageBox} from 'mint-ui';

    export default {
        data () {
            return {
                "fyid1":"",
                "fyid": "",
                "lpid":"",
                "zdid":"",
                "fjmj": "",
                "fjjg": "",
                "fjcg": "",
                "fjmk": "",
                "fjzs": "",
                fjmjqx:0,
                fjjgqx:0,
                fjcgqx:0,
                fjmkqx:0,
                fjzsqx:0,
                saveqx:0,

            }
        },
        methods: {
            getInitData(){
                const fyid = this.$route.params.fyid;
                this.fyid = fyid;
                const lpid = this.$route.params.lpid;
                this.lpid = lpid;
                const zdid = this.$route.params.zdid;
                this.zdid= zdid;

                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/zdfyxx/getZdfygzxx.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":fyid},"foreEndType":2,"code":"300000035"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.lpid=data.lpid;
                    that.fjmj = data.fjmj;
                    that.fjjg = data.fjjg;
                    that.fjcg = data.fjcg;
                    that.fjmk = data.fjmk;
                    that.fjzs = data.fjzs;
                    $('title').html(data.topic + '一' + data.zdh + '一' + data.fybh);

                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 46){
                        this.fjmjqx = true;
                        this.saveqx = false;
                        if(this.fjmj == ""){
                            this.fjmjqx = false;
                            this.saveqx = true;
                        }
                        this.fjjgqx = true;
                        if(this.fjjg == ""){
                            this.fjjgqx = false;
                            this.saveqx = true;
                        }
                        this.fjcgqx = true;
                        if(this.fjcg == ""){
                            this.fjcgqx = false;
                            this.saveqx = true;
                        }
                        this.fjmkqx = true;
                        if(this.fjmk == ""){
                            this.fjmkqx = false;
                            this.saveqx = true;
                        }
                        this.fjzsqx = true;
                        if(this.fjzs == ""){
                            this.fjzsqx = false;
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
                this.$http.post(url, {"cookie":user22.sjs,"fyid":this.$route.params.fyid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    console.log(data.qxzt);
                    //data.qxzt = 1;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 22 || data.qxzt == 32 || data.qxzt == 45 || data.qxzt == 47){
                        this.fjmjqx = false;
                        this.fjjgqx = false;
                        this.fjcgqx = false;
                        this.fjmkqx = false;
                        this.fjzsqx = false;
                        this.saveqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    if(data.qxzt == 3 || data.qxzt == 11 || data.qxzt == 21 || data.qxzt == 23 || data.qxzt == 31 || data.qxzt == 33 || data.qxzt == 41 || data.qxzt == 42 || data.qxzt == 43){
                        this.fjmjqx = true;
                        this.fjjgqx = true;
                        this.fjcgqx = true;
                        this.fjmkqx = true;
                        this.fjzsqx = true;
                        this.saveqx = false;
                        $("input").attr('placeholder',"");
                    }

                    if(data.qxzt == 45 && data.ryzt == 5){
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
            saveStructData(){
                var that = this;
                /*
                if(!this.fjmj){
                    MessageBox('提示', '请输入房间面积');
                    return;
                }
                */

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/zdfyxx/saveZdgzxx.do", {
                        "parameters": {
                            "id": this.fyid,
                            "fjmj": this.fjmj,
                            "fjjg": this.fjjg,
                            "fjcg": this.fjcg,
                            "fjmk": this.fjmk,
                            "fjzs": this.fjzs
                        },
                        "foreEndType": 2,
                        "code": "300000034"
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
                            //保存时返回列表页
                            history.go(-1);
                            // that.$router.push({path:'/index'});
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
