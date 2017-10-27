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
        <li class="clearfix pr bg_gray">
          <span class="ys_tit w224">市场近期成交价</span>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">单价：</span>
          <div class="ys_item_con fl" v-if="!scjqjdjqx">
            <input type="number" value="" v-model="scjqjdj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="scjqjdj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">月租金：</span>
          <div class="ys_item_con fl" v-if="!scjqjyzjqx">
            <input type="number" value="" v-model="scjqjyzj" placeholder="请输入">
            <i class="right_unit">元/月</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="scjqjyzj" placeholder="请输入">
            <i class="right_unit">元/月</i>
          </div>
        </li>


        <li class="clearfix pr bg_gray">
          <span class="ys_tit w224">历史三年成交价</span>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">单价：</span>
          <div class="ys_item_con fl" v-if="!lssnjdjqx">
            <input type="number" value="" v-model="lssnjdj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="lssnjdj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>

        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">月租金：</span>
          <div class="ys_item_con fl" v-if="!lssnjyzjqx">
            <input type="number" value="" v-model="lssnjyzj" placeholder="请输入">
            <i class="right_unit">元/月</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="lssnjyzj" placeholder="请输入">
            <i class="right_unit">元/月</i>
          </div>
        </li>

      </ul>
      <a href="javascript:;" class="ys_default_btn ys_default1_btn mb80" v-if="saveqx" @click="savePrice">保存</a>
       <a href="javascript:;" class="ys_default_btn ys_default2_btn mb80" v-else  @click="fhPrice">返回</a>
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
                zdid: '',
                lpid: "",
                zdgzid: '',
                scjqjdj: '', //市场近期成交价 单价
                lssnjdj: '', //历史三年成交价 单价
                scjqjyzj: '', //市场近期成交价 月租金
                lssnjyzj: '', //历史三年成交价 月租金
                scjqjdjqx:0,
                lssnjdjqx:0,
                scjqjyzjqx:0,
                lssnjyzjqx:0,
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
                const url = this.$api + "/yhcms/web/lpzdxx/getLpzdJg.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":zdid},"foreEndType":2,"code":"300000071"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.lpid = data.lpid;
                    that.zdgzid = data.zdgzid;
                    that.scjqjdj = data.scjqjdj;
                    that.lssnjdj = data.lssnjdj;
                    that.scjqjyzj = data.scjqjyzj;
                    that.lssnjyzj = data.lssnjyzj;
                    $('title').html(data.topic + '一' +  data.zdh);
                    //判断权限
                      //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.scjqjdjqx = true;
                        this.saveqx = false;
                        if(this.scjqjdj == ""){
                            this.scjqjdjqx = false;
                            this.saveqx = true;
                        }
                        this.lssnjdjqx = true;
                        if(this.lssnjdj == ""){
                            this.lssnjdjqx = false;
                            this.saveqx = true;
                        }
                        this.scjqjyzjqx = true;
                        if(this.scjqjyzj == ""){
                            this.scjqjyzjqx = false;
                            this.saveqx = true;
                        }
                        this.lssnjyzjqx = true;
                        if(this.lssnjyzj == ""){
                            this.lssnjyzjqx = false;
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
                    console.log(data.qxzt);
                    //data.qxzt = 20;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.scjqjdjqx = false;
                        this.lssnjdjqx = false;
                        this.scjqjyzjqx = false;
                        this.lssnjyzjqx = false;
                        this.saveqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"系统中无此用户或此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    if(data.qxzt == 11){
                        this.scjqjdjqx = true;
                        this.lssnjdjqx = true;
                        this.scjqjyzjqx = true;
                        this.lssnjyzjqx = true;
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
            fhPrice(){
            window.history.go(-1);
            },
            savePrice(){
                var _this = this;
/*
                if(!this.scjqjdj){
                    MessageBox('提示', '请输入近期成交价');
                    return;
                }

                if(!this.lssnjdj){
                    MessageBox('提示', '请输入历史三年成交价单价');
                    return;
                }

                if(!this.scjqjyzj){
                    MessageBox('提示', '请输入市场近期成交价月租金');
                    return;
                }

                if(!this.lssnjyzj){
                    MessageBox('提示', '请输入历史三年成交价月租金');
                    return;
                }
*/

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/lpzdxx/saveLpzdJg.do",
                    {
                        "parameters": {
                            "id": this.zdid,
                            "scjqjdj": this.scjqjdj,
                            "lssnjdj": this.lssnjdj,
                            "scjqjyzj": this.scjqjyzj,
                            "lssnjyzj": this.lssnjyzj,
                        },
                        "foreEndType": 2,
                        "code": "300000070"
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
