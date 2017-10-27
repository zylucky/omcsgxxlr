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
          <span class="ys_tit w224">地上车位数：</span>
          <div class="ys_item_con fl" v-if="!dshslqx">
            <input type="number"  value="" v-model="dshsl" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="dshsl" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">地上车位租金：</span>
          <div class="ys_item_con fl" v-if="!dshxsqx">
            <input type="number" value="" v-model="dshxs" placeholder="请输入">元/小时
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="dshxs" placeholder="请输入">元/小时
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">地上车位月租金：</span>
          <div class="ys_item_con fl" v-if="!dshyueqx">
            <input type="number" value="" v-model="dshyue" placeholder="请输入">元/月
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="dshyue" placeholder="请输入">元/月
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">地下车位：</span>
          <div class="ys_item_con fl" v-if="!dxaslqx">
            <input type="number" value="" v-model="dxasl" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="dxasl" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">地下车位租金：</span>
          <div class="ys_item_con fl" v-if="!dxaxsqx">
            <input type="number" value="" v-model="dxaxs" placeholder="请输入">元/小时
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="dxaxs" placeholder="请输入">元/小时
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">地下车位月租金：</span>
          <div class="ys_item_con fl" v-if="!dxayueqx">
            <input type="number" value="" v-model="dxayue" placeholder="请输入">元/月
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="dxayue" placeholder="请输入">元/月
          </div>
        </li>
      </ul>
      <a href="javascript:;" @click="saveParking" v-if="saveqx" class="ys_default_btn mb80">保存</a>
      <a href="javascript:;" @click="fanhui" v-else class="ys_default_btn mb80">返回</a>
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
                "id":"",
                "lpid": "",
                "dshsl": "",
                "dshxs": "",
                "dshyue": "",
                "dxasl": "",
                "dxaxs": "",
                "dxayue": "",
                dshslqx:0,
                dshxsqx:0,
                dshyueqx:0,
                dxaslqx:0,
                dxaxsqx:0,
                dxayueqx:0,
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
                const url = this.$api + "/yhcms/web/lpjbxx/getLpChw.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"300000046"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.id=data.id;
                    that.dshsl=data.dshsl;
                    that.dshxs = data.dshxs;
                    that.dshyue = data.dshyue;
                    that.dxasl = data.dxasl;
                    that.dxaxs = data.dxaxs;
                    that.dxayue = data.dxayue;
                    $('title').html(data.topic);

                     //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.dshslqx = true;
                        this.saveqx = false;
                        if(this.dshsl == ""){
                            this.dshslqx = false;
                            this.saveqx = true;
                        }
                        this.dshxsqx = true;
                        if(this.dshxs == ""){
                            this.dshxsqx = false;
                            this.saveqx = true;
                        }
                        this.dshyueqx = true;
                        if(this.dshyue == ""){
                            this.dshyueqx = false;
                            this.saveqx = true;
                        }
                        this.dxaslqx = true;
                        if(this.dxasl == ""){
                            this.dxaslqx = false;
                            this.saveqx = true;
                        }
                        this.dxaxsqx = true;
                        if(this.dxaxs == ""){
                            this.dxaxsqx = false;
                            this.saveqx = true;
                        }
                        this.dxayueqx = true;
                        if(this.dxayue == ""){
                            this.dxayueqx = false;
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
                        this.dshslqx = false;
                        this.dshxsqx = false;
                        this.dshyueqx = false;
                        this.dxaslqx = false;
                        this.dxaxsqx = false;
                        this.dxayueqx = false;
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
                        this.dshslqx = true;
                        this.dshxsqx = true;
                        this.dshyueqx = true;
                        this.dxaslqx = true;
                        this.dxaxsqx = true;
                        this.dxayueqx = true;
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
            saveParking(){
                var _this = this;

               /* if(!this.dshsl){
                    MessageBox('提示', '请输入地上车位数量');
                    return;
                }*/

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/lpjbxx/saveLpChw.do",
                    {
                        "parameters": {
                            "id":this.id,
                            "lpid":this.lpid,
                            "dshsl":this.dshsl,
                            "dshxs": this.dshxs,
                            "dshyue": this.dshyue,
                            "dxasl": this.dxasl,
                            "dxaxs": this.dxaxs,
                            "dxayue": this.dxayue,
                        },
                        "foreEndType": 2,
                        "code": "300000047"
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
                            window.history.go(-1);
                            // _this.$router.push({path:'/index'});
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
