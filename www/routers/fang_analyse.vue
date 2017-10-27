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
      <div class="analyse_wrap mb60">

        <div class="analy_item">
          <span class="analy_tit db mb10">房间优势</span>
          <div class="analy_content" v-if="fjysqx">
            <textarea name="" cols="30" rows="10" :readonly="fjysqx" onfocus="this.blur()"  v-model="fjys" placeholder="请输入"></textarea>
          </div>
          <div class="analy_content" v-else>
            <textarea name="" cols="30" rows="10" v-model="fjys" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">房间劣势</span>
          <div class="analy_content" v-if="fjlsqx"">
            <textarea name="" cols="30" rows="10" :readonly="fjlsqx" onfocus="this.blur()"  v-model="fjls" placeholder="请输入"></textarea>
          </div>
          <div class="analy_content" v-else>
            <textarea name="" cols="30" rows="10" v-model="fjls" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">房间硬伤</span>
          <div class="analy_content" v-if="fhqx">
            <textarea name="" cols="30" rows="10" :readonly="fhqx" onfocus="this.blur()"  v-model="fh" placeholder="请输入"></textarea>
          </div>
          <div class="analy_content" v-else>
            <textarea name="" cols="30" rows="10" v-model="fh" placeholder="请输入"></textarea>
          </div>
        </div>
      </div>
      <a href="javascript:;" class="ys_default_btn mb80" v-if="saveqx" @click="saveAnalyseData">保存</a>
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
                "fjys": "",
                "fjls": "",
                "fh": "",
                fjysqx:0,
                fjlsqx:0,
                fhqx:0,
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
                const url = this.$api + "/yhcms/web/zdfyxx/getZdfyfxxx.do";
                let that = this;
                this.$http.post(url, {"parameters":{"id":fyid},"foreEndType":2,"code":"300000037"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.fjys = data.fjys;
                    that.fjls = data.fjls;
                    that.fh = data.fh;
                    $('title').html(data.topic + "一" + data.zdh + "一" + data.fybh);
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 46){
                        this.fjysqx = true;
                        this.saveqx = false;
                        if(this.fjys == ""){
                            this.fjysqx = false;
                            this.saveqx = true;
                        }
                        this.fjlsqx = true;
                        if(this.fjls == ""){
                            this.fjlsqx = false;
                            this.saveqx = true;
                        }
                        this.fhqx = true;
                        if(this.fh == ""){
                            this.fhqx = false;
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
                    //data.qxzt = 3;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 22 || data.qxzt == 32 || data.qxzt == 45 || data.qxzt == 47){
                        this.fjysqx = false;
                        this.fjlsqx = false;
                        this.fhqx = false;
                        this.saveqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    if(data.qxzt == 3 || data.qxzt == 11 || data.qxzt == 21 || data.qxzt == 23 || data.qxzt == 31 || data.qxzt == 33 || data.qxzt == 41 || data.qxzt == 42 || data.qxzt == 43){
                        this.fjysqx = true;
                        this.fjlsqx = true;
                        this.fhqx = true;
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
            saveAnalyseData(){
                var _this = this;
                /*
                if(!this.fjys){
                    MessageBox('提示', '请输入房间优势');
                    return;
                }
                */

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/zdfyxx/saveZdfx.do",
                    {
                        "parameters": {
                            id: this.id,
                            fjys: this.fjys,
                            fjls: this.fjls,
                            fh: this.fh
                        },
                        "foreEndType": 2,
                        "code": "300000036"
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

        created(){
            document.body.style.backgroundColor = "#fff";
        },
        beforeDestroy(){
            document.body.style.backgroundColor = "#f0eff5";
        },

    }
</script>
