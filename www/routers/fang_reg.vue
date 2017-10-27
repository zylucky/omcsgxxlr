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
          <span class="ys_tit">有无房本：</span>
          <div class="ys_item_con fl" v-if="fbqx">
            <label class="mr20"><input type="radio" value="1" name="certificate" v-model="fb" :checked="fb==1">有</label>
            <label ><input type="radio" name="certificate" value="0" v-model="fb" :checked="fb==0">无</label>
          </div>
          <div class="ys_item_con fl" v-else>
            <label class="mr20"><input type="radio" value="1" disabled name="certificate" v-model="fb" :checked="fb==1">有</label>
            <label ><input type="radio" name="certificate" value="0" disabled v-model="fb" :checked="fb==0">无</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">可否注册：</span>
          <div class="ys_item_con fl" v-if="zcqx">
            <label class="mr20"><input type="radio" name="register" value="1" v-model="zc" :checked="zc==1">是</label>
            <label ><input type="radio" name="register" value="0" v-model="zc" :checked="zc==0">否</label>
          </div>
          <div class="ys_item_con fl" v-else>
            <label class="mr20"><input type="radio" name="register" disabled value="1" v-model="zc" :checked="zc==1">是</label>
            <label ><input type="radio" name="register" value="0" disabled v-model="zc" :checked="zc==0">否</label>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" v-if="saveqx" @click="saveRegData">保存</a>
      <a href="javascript:;" class="ys_default_btn mb80" v-else @click="fanhui">返回</a>
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
                "id": "",
                "fb": "",
                "zc": "",
                "ba": "",
                fbqx:0,
                zcqx:0,
                saveqx:0,
            }
        },
        methods: {
            getInitData(){
                const fyid = this.$route.params.fyid;
                this.id = fyid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/zdfyxx/getZdfyZcxx.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":fyid},"foreEndType":2,"code":"300000023"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.fb = data.fb;
                    that.zc = data.zc;
                    that.ba = data.ba;
                    $('title').html(data.topic + '一' + data.zdh +'一'+ data.fybh);
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 46){
                        this.fbqx = false;
                        this.saveqx = false;
                        if(this.fb == ""){
                            this.fbqx = true;
                            this.saveqx = true;
                        }
                        this.zcqx = false;
                        if(this.zc == ""){
                            this.zcqx = true;
                            this.saveqx = true;
                        }
                        $("input").attr('placeholder',"");
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
                    //data.qxzt = 1;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 22 || data.qxzt == 32 || data.qxzt == 45 || data.qxzt == 47){
                        this.fbqx = true;
                        this.zcqx = true;
                        this.saveqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    if(data.qxzt == 3 || data.qxzt == 11 || data.qxzt == 21 || data.qxzt == 23 || data.qxzt == 31 || data.qxzt == 33 || data.qxzt == 41 || data.qxzt == 42 || data.qxzt == 43){
                        this.fbqx = false;
                        this.zcqx = false;
                        this.saveqx = false;
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
            //保存面积信息
            saveRegData(){
                var _this = this;
                /*
                if(this.fb === ''){
                    MessageBox('提示', '请选择房本情况');
                    return;
                }
                */

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/zdfyxx/saveZc.do",
                    {
                        "parameters": {
                            "id": this.id,
                            "fb": this.fb,
                            "zc": this.zc,
                            "ba": this.ba,
                        },
                        "foreEndType": 2,
                        "code": "300000022"
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
                            //保存注册信息 返回列表
                            history.go(-1);

                            //    _this.$router.push({path:'/index'});
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
