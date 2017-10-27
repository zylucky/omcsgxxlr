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
          <span class="ys_tit w224">总户数：</span>
          <div class="ys_item_con fl" v-if="!zhshqx">
            <input type="number" value="" v-model="zhsh" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="zhsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空置户数：</span>
          <div class="ys_item_con fl" v-if="!kzhshqx">
            <input type="number" value="" v-model="kzhsh" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="kzhsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业户数：</span>
          <div class="ys_item_con fl" v-if="!shyhshqx">
            <input type="number" value="" v-model="shyhsh" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="shyhsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空置比例：</span>
          <div class="ys_item_con fl">
            <span class="cl_999">{{kzhbl_t}}</span>
            <i class="right_unit">%</i>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn ys_default1_btn mb80" v-if="saveqx" @click="saveLpzdHsh">保存</a>
       <a href="javascript:;" class="ys_default_btn ys_default2_btn mb80" v-else  @click="fhLpzdHsh">返回</a>
    </div>
  </div>
</template>
<script>
    import {Indicator} from 'mint-ui';
    import { Toast } from 'mint-ui'; //toast
    import { MessageBox } from 'mint-ui'; //弹窗

    export default {
        data () {
            return {
                zdid: "",
                lpid: "",
                zdgzid: "",
                zhsh: "",
                kzhsh: "",
                shyhsh: "",
                kzhbl: "",
                zhshqx:0,
                kzhshqx:0,
                shyhshqx:0,
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
                const url = this.$api + "/yhcms/web/lpzdxx/getLpzdHsh.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":zdid},"foreEndType":2,"code":"300000073"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.lpid = data.lpid;
                    that.zdgzid = data.zdgzid;
                    that.zhsh = data.zhsh;
                    that.kzhsh = data.kzhsh;
                    that.shyhsh = data.shyhsh;
                    that.kzhbl = data.kzhbl;
                    $('title').html(data.topic + '一' +  data.zdh);
                    //判断权限
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.zhshqx = true;
                        this.saveqx = false;
                        if(this.zhsh == ""){
                            this.zhshqx = false;
                            this.saveqx = true;
                        }
                        this.kzhshqx = true;
                        if(this.kzhsh == ""){
                            this.kzhshqx = false;
                            this.saveqx = true;
                        }
                        this.shyhshqx = true;
                        if(this.shyhsh == ""){
                            this.shyhshqx = false;
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
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                     //只有查看权限
                    if(data.qxzt == 11){
                        this.zhshqx = true;
                        this.kzhshqx = true;
                        this.shyhshqx = true;
                        this.saveqx = false;
                        $("input").attr('placeholder',"");
                        /*$(".ys_default1_btn").css("display","none");
                        $(".ys_default2_btn").css("display","block");*/
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.zhshqx = false;
                        this.kzhshqx = false;
                        this.shyhshqx = false;
                        this.saveqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"系统中无此用户或此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
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
            fhLpzdHsh(){
            window.history.go(-1);
            },
            //保存数据
            saveLpzdHsh(){
                var _this = this;
               /*
                if(!this.zhsh){
                    MessageBox('提示', '请填写总户数');
                    return;
                }

                if(!this.kzhsh){
                    MessageBox('提示', '请填写空置户数');
                    return;
                }

                if(!this.shyhsh){
                    MessageBox('提示', '请填写商业户数');
                    return;
                }
                */

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/lpzdxx/saveLpzdHsh.do",
                    {
                        "parameters": {
                            "id": this.zdid,
                            "zhsh": this.zhsh,
                            "kzhsh": this.kzhsh,
                            "kzhbl": this.kzhbl,
                            "shyhsh": this.shyhsh,
                        },
                        "foreEndType": 2,
                        "code": "300000072"
                    }
                ).then(function (res) {
                    var result = JSON.parse(res.bodyText);
                    Indicator.close();
                    if (result.success) {
                        Toast({
                            message: '保存成功',
                            position: 'bottom',
                            duration: 5000
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
        computed:{
            kzhbl_t(){
                const bl = (parseInt(this.kzhsh) / parseInt(this.zhsh) * 100).toFixed(2);
                this.kzhbl = bl;
                return isNaN(bl) ? "" : bl;
            }
        },
        mounted(){
            
             this.tebqqxpd();
        },
    }
</script>
