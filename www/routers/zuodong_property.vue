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
          <span class="ys_tit w224">物业费：</span>
          <div class="ys_item_con fl" v-if="!wyfqx">
            <input type="number" value="" v-model="wyf" placeholder="请输入物业费">
            <i class="right_unit">元/㎡/月</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="wyf" placeholder="请输入物业费">
            <i class="right_unit">元/㎡/月</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">电费：</span>
          <div class="ys_item_con fl" v-if="!dfqx">
            <input type="number" value="" v-model="df" placeholder="请输入电费">
            <i class="right_unit">元/度</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="df" placeholder="请输入电费">
            <i class="right_unit">元/度</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">水费：</span>
          <div class="ys_item_con fl" v-if="!shfqx">
            <input type="number" value="" v-model="shf" placeholder="请输入水费">
            <i class="right_unit">元/吨</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="shf" placeholder="请输入水费">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">热水费：</span>
          <div class="ys_item_con fl" v-if="!rshfqx">
            <input type="number" value="" v-model="rshf" placeholder="请输入热水费">
            <i class="right_unit">元/吨</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="rshf" placeholder="请输入热水费">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">供暖方式：</span>
          <div class="ys_item_con fl" v-if="!gnfsqx">
            <input type="text" value="" v-model="gnfs" placeholder="请输入供暖方式">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly onfocus="this.blur()" v-model="gnfs" placeholder="请输入供暖方式">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">供暖费：</span>
          <div class="ys_item_con fl" v-if="!gnfqx">
            <input type="number" value="" v-model="gnf" placeholder="请输入供暖费">
            <i class="right_unit">元/㎡/季度</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="gnf" placeholder="请输入供暖费">
            <i class="right_unit">元/㎡/季度</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空调类型：</span>
          <div class="ys_item_con fl" v-if="!ktlxqx">
            <input type="text" value="" v-model="ktlx" placeholder="请输入空调类型">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly onfocus="this.blur()" v-model="ktlx" placeholder="请输入空调类型">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空调品牌：</span>
          <div class="ys_item_con fl" v-if="!ktppqx">
            <input type="text" value="" v-model="ktpp" placeholder="请输入空调品牌">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly onfocus="this.blur()" v-model="ktpp" placeholder="请输入空调品牌">
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">制冷费：</span>
          <div class="ys_item_con fl" v-if="!zlfqx">
            <input type="number" value="" v-model="zlf" placeholder="请输入制冷费">
            <i class="right_unit">元/㎡/月</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="zlf" placeholder="请输入制冷费">
            <i class="right_unit">元/㎡/月</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空调加时费：</span>
          <div class="ys_item_con fl" v-if="!ktjsfqx">
            <input type="number" value=""  v-model="ktjsf" placeholder="请输入空调加时费">
            <i class="right_unit">元/㎡/月</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="ktjsf" placeholder="请输入空调加时费">
            <i class="right_unit">元/㎡/月</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业物业费：</span>
          <div class="ys_item_con fl" v-if="!shywyfqx">
            <input type="number" value="" v-model="shywyf" placeholder="请输入商业物业费">
            <i class="right_unit">元/㎡/天</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="shywyf" placeholder="请输入商业物业费">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">商业电费：</span>
          <div class="ys_item_con fl" v-if="!shydfqx">
            <input type="number" value="" v-model="shydf" placeholder="请输入商业电费">
            <i class="right_unit">元/度</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value=""  readonly onfocus="this.blur()" v-model="shydf" placeholder="请输入商业电费">
            <i class="right_unit">元/度</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业水费：</span>
          <div class="ys_item_con fl" v-if="!shysfqx">
            <input type="number" value=""  v-model="shysf" placeholder="请输入商业电费">
            <i class="right_unit">元/吨</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly="shysfqx" onfocus="this.blur()" v-model="shysf" placeholder="请输入商业电费">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业热水费：</span>
          <div class="ys_item_con fl" v-if="!shyrshfqx">
            <input type="number" value=""  v-model="shyrshf" placeholder="请输入商业热水费">
            <i class="right_unit">元/吨</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="shyrshf" placeholder="请输入商业热水费">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业制冷费：</span>
          <div class="ys_item_con fl" v-if="!shyzlfqx">
            <input type="number" value="" v-model="shyzlf" placeholder="请输入商业制冷费">
            <i class="right_unit">元/㎡/月</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="shyzlf" placeholder="请输入商业制冷费">
            <i class="right_unit">元/㎡/月</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业供暖费：</span>
          <div class="ys_item_con fl" v-if="!shygnfqx">
            <input type="number" value="" v-model="shygnf" placeholder="请输入商业供暖费">
            <i class="right_unit">元/月</i>
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value=""  readonly onfocus="this.blur()" v-model="shygnf" placeholder="请输入商业供暖费">
            <i class="right_unit">元/月</i>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn ys_default1_btn mb80" v-if="saveqx" @click="saveProperty">保存</a>
       <a href="javascript:;" class="ys_default_btn ys_default2_btn mb80" v-else  @click="fhProperty">返回</a>
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
                "lpid": "",
                "zdid": "",
                "wyf": "",
                "df": "",
                "shf": "",
                "rshf": "",
                "gnfs": "",
                "gnf": "",
                "ktlx": "",
                "ktpp": "",
                "zlf": "",
                "ktjsf": "",
                "shywyf": "",
                "shydf": "",
                "shysf": "",
                "shyrshf": "",
                "shyzlf": "",
                "shygnf": "",
                wyfqx:0,
                dfqx:0,
                shfqx:0,
                rshfqx:0,
                gnfsqx:0,
                gnfqx:0,
                ktlxqx:0,
                ktppqx:0,
                zlfqx:0,
                ktjsfqx:0,
                shywyfqx:0,
                shydfqx:0,
                shysfqx:0,
                shyrshfqx:0,
                shyzlfqx:0,
                shygnfqx:0,
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
                const url = this.$api + "/yhcms/web/lpzdxx/getLpzdWyf.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":zdid},"foreEndType":2,"code":"300000067"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;;
                    that.id = data.id;
                    that.lpid = data.lpid;
                    that.zdid = data.zdid;
                    that.wyf = data.wyf;
                    that.df = data.df;
                    that.shf = data.shf;
                    that.rshf = data.rshf;
                    that.gnfs = data.gnfs;
                    that.gnf = data.gnf;
                    that.ktlx = data.ktlx;
                    that.ktpp = data.ktpp;
                    that.zlf = data.zlf;
                    that.ktjsf = data.ktjsf;
                    that.shywyf = data.shywyf;
                    that.shydf = data.shydf;
                    that.shysf = data.shysf;
                    that.shyrshf = data.shyrshf;
                    that.shyzlf = data.shyzlf;
                    that.shygnf = data.shygnf;
                    $('title').html(data.topic + '一' +  data.zdh);
                    //权限判断
                     //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.wyfqx = true;
                        this.saveqx = false;
                        if(this.wyf == ""){
                            this.wyfqx = false;
                            this.saveqx = true;
                        }
                        this.dfqx = true;
                        if(this.df == ""){
                            this.dfqx = false;
                            this.saveqx = true;
                        }
                        this.shfqx = true;
                        if(this.shf== ""){
                            this.shfqx = false;
                            this.saveqx = true;
                        }
                        this.rshfqx = true;
                        if(this.rshf == ""){
                            this.rshfqx = false;
                            this.saveqx = true;
                        }

                         this.gnfsqx = true;
                        if(this.gnfs == ""){
                            this.gnfsqx = false;
                            this.saveqx = true;
                        }
                         this.gnfqx = true;
                        if(this.gnf == ""){
                            this.gnfqx = false;
                            this.saveqx = true;
                        }
                         this.ktlxqx = true;
                        if(this.ktlx == ""){
                            this.ktlxqx = false;
                            this.saveqx = true;
                        }
                         this.ktppqx = true;
                        if(this.ktpp == ""){
                            this.ktppqx = false;
                            this.saveqx = true;
                        }
                         this.zlfqx = true;
                        if(this.zlf == ""){
                            this.zlfqx = false;
                            this.saveqx = true;
                        }
                         this.ktjsfqx = true;
                        if(this.ktjsf == ""){
                            this.ktjsfqx = false;
                            this.saveqx = true;
                        }
                         this.shywyfqx = true;
                        if(this.shywyf== ""){
                            this.shywyfqx = false;
                            this.saveqx = true;
                        }
                         this.shydfqx = true;
                        if(this.shydf == ""){
                            this.shydfqx = false;
                            this.saveqx = true;
                        }
                         this.shysfqx = true;
                        if(this.shysf == ""){
                            this.shysfqx = false;
                            this.saveqx = true;
                        }
                         this.shyrshfqx = true;
                        if(this.shyrshf == ""){
                            this.shyrshfqx = false;
                            this.saveqx = true;
                        }
                         this.shyzlfqx = true;
                        if(this.shyzlf == ""){
                            this.shyzlfqx = false;
                            this.saveqx = true;
                        }
                         this.shygnfqx = true;
                        if(this.shygnf == ""){
                            this.shygnfqx = false;
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
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.wyfqx = false;
                        this.dfqx = false;
                        this.shfqx = false;
                        this.rshfqx = false;
                        this.gnfsqx = false;
                        this.gnfqx = false;
                        this.ktlxqx = false;
                        this.ktppqx = false;
                        this.zlfqx = false;
                        this.ktjsfqx = false;
                        this.shywyfqx = false;
                        this.shydfqx = false;
                        this.shysfqx = false;
                        this.shyrshfqx = false;
                        this.shyzlfqx = false;
                        this.shygnfqx = false;
                        this.saveqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"系统中无此用户或此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    if(data.qxzt == 11){
                        this.wyfqx = true;
                        this.dfqx = true;
                        this.shfqx = true;
                        this.rshfqx = true;
                        this.gnfsqx = true;
                        this.gnfqx = true;
                        this.ktlxqx = true;
                        this.ktppqx = true;
                        this.zlfqx = true;
                        this.ktjsfqx = true;
                        this.shywyfqx = true;
                        this.shydfqx = true;
                        this.shysfqx = true;
                        this.shyrshfqx = true;
                        this.shyzlfqx = true;
                        this.shygnfqx = true;
                        this.saveqx = false;
                        $("input").attr('placeholder',"");
                        /*$(".ys_default1_btn").css("display","none");
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
            fhProperty(){
            window.history.go(-1);
            },
            saveProperty(){
                var _this = this;
                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });
                this.$http.post(
                    this.$api + "/yhcms/web/lpzdxx/saveLpzdWyf.do",
                    {
                        "parameters": {
                            "id": this.id,
                            "zdid": this.zdid,
                            "wyf": this.wyf,
                            "df": this.df,
                            "shf": this.shf,
                            "rshf": this.rshf,
                            "gnfs": this.gnfs,
                            "gnf": this.gnf,
                            "ktlx": this.ktlx,
                            "ktpp": this.ktpp,
                            "zlf": this.zlf,
                            "ktjsf": this.ktjsf,
                            "shywyf": this.shywyf,
                            "shydf": this.shydf,
                            "shysf": this.shysf,
                            "shyrshf": this.shyrshf,
                            "shyzlf": this.shyzlf,
                            "shygnf": this.shygnf,
                        },
                        "foreEndType": 2,
                        "code": "300000067"
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
