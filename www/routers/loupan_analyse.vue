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
          <span class="analy_tit db mb10">区域亮点</span>
          <div class="analy_content" v-if="!qwldqx">
            <textarea name="" cols="30" rows="10" v-model="qwld" placeholder="请输入"></textarea>
          </div>
          <div class="analy_content" v-else>
            <textarea name="" cols="30" rows="10" readonly onfocus="this.blur()" v-model="qwld" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">未来发展潜力</span>
          <div class="analy_content" v-if="!wlfzqlqx">
            <textarea name="" cols="30" rows="10"  v-model="wlfzql" placeholder="请输入"></textarea>
          </div>
          <div class="analy_content" v-else>
            <textarea name="" cols="30" rows="10" readonly onfocus="this.blur()" v-model="wlfzql" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">优势分析结果</span>
          <div class="analy_content" v-if="!ysjgqx">
            <textarea name="" cols="30" rows="10" v-model="ysjg" placeholder="请输入"></textarea>
          </div>
          <div class="analy_content" v-else>
            <textarea name="" cols="30" rows="10" readonly onfocus="this.blur()" v-model="ysjg" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">劣势分析结果</span>
          <div class="analy_content" v-if="!lsjgqx">
            <textarea name="" cols="30" rows="10"  v-model="lsjg" placeholder="请输入"></textarea>
          </div>
          <div class="analy_content" v-else>
            <textarea name="" cols="30" rows="10" readonly onfocus="this.blur()" v-model="lsjg" placeholder="请输入"></textarea>
          </div>
        </div>

      </div>
      <a href="javascript:;" class="ys_default_btn mb80" v-if="saveqx" @click="saveAnalyse">保存</a>
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
                lpid: "",
                qwld: "",
                wlfzql: "",
                ysjg: "",
                lsjg: "",
                qwldqx:0,
                wlfzqlqx:0,
                ysjgqx:0,
                lsjgqx:0,
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
                const url = this.$api + "/yhcms/web/lpjbxx/getLpFx.do";
                let that = this;
                this.$http.post(url, {"parameters":{"lpid":lpid},"foreEndType":2,"code":"300000048"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.qwld = data.qwld;
                    that.wlfzql = data.wlfzql == null ? "请输入" : data.wlfzql;
                    that.ysjg = data.ysjg;
                    that.lsjg = data.lsjg;
                    $('title').html(data.topic);
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.qwldqx = true;
                        this.saveqx = false;
                        if(this.qwld == ""){
                            this.qwldqx = false;
                            this.saveqx = true;
                        }
                        this.wlfzqlqx = true;
                        if(this.wlfzql == ""){
                            this.wlfzqlqx = false;
                            this.saveqx = true;
                        }
                        this.ysjgqx = true;
                        if(this.ysjg == ""){
                            this.ysjgqx = false;
                            this.saveqx = true;
                        }
                        this.lsjgqx = true;
                        if(this.lsjg == ""){
                            this.lsjgqx = false;
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
                    //data.qxzt = 20;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.qwldqx = false;
                        this.wlfzqlqx = false;
                        this.ysjgqx = false;
                        this.lsjgqx = false;
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
                        this.qwldqx = true;
                        this.wlfzqlqx = true;
                        this.ysjgqx = true;
                        this.lsjgqx = true;
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
            saveAnalyse(){
                var _this = this;
                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });
                this.$http.post(
                    this.$api + "/yhcms/web/lpjbxx/saveLpFx.do",
                    {
                        "parameters": {
                            "lpid":this.lpid,
                            "qwld": this.qwld,
                            "wlfzql": this.wlfzql,
                            "ysjg": this.ysjg,
                            "lsjg": this.lsjg
                        },
                        "foreEndType": 2,
                        "code": "300000049"
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

        created(){
            document.body.style.backgroundColor = "#fff";
        },
        beforeDestroy(){
            document.body.style.backgroundColor = "#f0eff5";
        }
    }
</script>
