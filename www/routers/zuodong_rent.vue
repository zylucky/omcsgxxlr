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
          <span class="ys_tit w224">是否有租赁部：</span>
          <div class="ys_item_con ys_item1_con fl" v-if="sfzlbqx">
            <label for="ele_yes" class="mr20 " @click="sfzlbclass"><input type="radio"   v-model="sfzlb" value="1" name="ele_type" id="ele_yes">是</label>
            <label for="ele_no" id="ele_no" @click="sfzlbclass"><input type="radio"    v-model="sfzlb" value="0" name="ele_type">否</label>
          </div>
          <div class="ys_item_con ys_item1_con fl" v-else>
            <label for="ele_yes" class="mr20 " ><input type="radio"  disabled v-model="sfzlb" value="1" name="ele_type" id="ele_yes">是</label>
            <label for="ele_no" id="ele_no" ><input type="radio" disabled   v-model="sfzlb" value="0" name="ele_type">否</label>
          </div>

        </li>
        <div class="div_class" style="display:none">

          <li class="clearfix pr">
            <span class="ys_tit w224">租赁部合作方式：</span>
            <div class="ys_item_con fl" v-if="!zlbhzfsqx">
              <input type="text" value="" v-model="zlbhzfs" placeholder="请输入">
            </div>
            <div class="ys_item_con fl" v-else>
              <input type="text" value="" readonly onfocus="this.blur()" v-model="zlbhzfs" placeholder="请输入">
            </div>
          </li>
          <li class="clearfix pr">
            <span class="ys_tit w224">租赁返佣比例：</span>
            <div class="ys_item_con fl" v-if="!zlfyblqx">
              <input type="text" value="" v-model="zlfybl" placeholder="请输入">
            </div>
            <div class="ys_item_con fl" v-else>
              <input type="text" value="" readonly onfocus="this.blur()" v-model="zlfybl" placeholder="请输入">
            </div>
          </li>
          <li class="clearfix pr">
            <span class="ys_tit w224">租赁返佣周期：</span>
            <div class="ys_item_con fl" v-if="!zlfyzqqx">
              <input type="text" value="" v-model="zlfyzq" placeholder="请输入">
            </div>
            <div class="ys_item_con fl" v-else>
              <input type="text" value="" readonly onfocus="this.blur()" v-model="zlfyzq" placeholder="请输入">
            </div>
          </li>
          <li class="clearfix pr">
            <span class="ys_tit w224">租赁部地址：</span>
            <div class="ys_item_con fl" v-if="!zlbaddressqx">
              <input type="text" value="" v-model="zlbaddress" placeholder="请输入">
            </div>
            <div class="ys_item_con fl" v-else>
              <input type="text" value="" readonly onfocus="this.blur()" v-model="zlbaddress" placeholder="请输入">
            </div>
          </li>
          <li class="clearfix pr">
            <span class="ys_tit w224">租赁部电话：</span>
            <div class="ys_item_con fl" v-if="!zlbphoneqx">
              <input type="tel" value="" v-model="zlbphone" placeholder="请输入">
            </div>
            <div class="ys_item_con fl" v-else>
              <input type="tel" value="" readonly onfocus="this.blur()" v-model="zlbphone" placeholder="请输入">
            </div>
          </li>
        </div>
      </ul>
      <a href="javascript:;" class="ys_default_btn ys_default1_btn mb80" v-if="saveqx" @click="saveRentMsg">保存</a>
       <a href="javascript:;" class="ys_default_btn ys_default2_btn mb80" v-else @click="fhRentMsg">返回</a>
    </div>
  </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    import {Indicator } from 'mint-ui';
    import { MessageBox } from 'mint-ui'; //弹窗
    export default {
        components: {
            Toast,
            MessageBox
        },
        data () {
            return {
                "lpid": "",
                "zdid": "",
                "zdgzid": "",
                "sfzlb": "",
                "zlbhzfs": "",
                "zlfybl": "",
                "zlbaddress": "",
                "zlbphone": "",
                "zlfyzq": "",
                zlbhzfsqx:0,
                zlfyblqx:0,
                zlbaddressqx:0,
                zlbphoneqx:0,
                zlfyzqqx:0,
                sfzlbqx:0,
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
                const url = this.$api + "/yhcms/web/lpzdxx/getLpzdZlb.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":zdid},"foreEndType":2,"code":"300000069"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.zdgzid = data.zdgzid;
                    that.lpid = data.lpid;
                    that.sfzlb = data.sfzlb;
                    $('title').html(data.topic + '一' +  data.zdh);
                    if(data.sfzlb==0||data.sfzlb==''){
                        $(".div_class").css("display","none");
                        that.zlbhzfs = "";
                        that.zlfybl = "";
                        that.zlbaddress ="";
                        that.zlbphone = "";
                        that.zlfyzq = "";
                    }else if(data.sfzlb==1){
                        $(".div_class").css("display","block");
                        that.zlbhzfs = data.zlbhzfs;
                        that.zlfybl = data.zlfybl;
                        that.zlbaddress = data.zlbaddress;
                        that.zlbphone = data.zlbphone;
                        that.zlfyzq = data.zlfyzq;
                    }




                    //权限判断

                      //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        console.log(this.sfzlb);
                        this.saveqx = false;
                        if(this.sfzlb==''){
                            this.saveqx = true;
                            this.sfzlbqx=true;
                        }else if(this.sfzlb==1){
                        this.sfzlbqx=false;

                        this.zlbhzfsqx = true;
                        if(data.zlbhzfs == ""){
                            this.zlbhzfsqx = false;
                            this.saveqx = true;
                        }
                        this.zlfyblqx = true;
                        if(data.zlfybl == ""){
                            this.zlfyblqx = false;
                            this.saveqx = true;
                        }
                        this.zlbaddressqx = true;
                        if(data.zlbaddress == ""){
                            this.zlbaddressqx = false;
                            this.saveqx = true;
                        }
                        this.zlbphoneqx = true;
                        if(data.zlbphone == ""){
                            this.zlbphoneqx = false;
                            this.saveqx = true;
                        }
                         this.zlfyzqqx = true;
                        if(data.zlfyzq == ""){
                            this.zlfyzqqx = false;
                            this.saveqx = true;
                        }
                        }else if(this.sfzlb==0){
                        this.saveqx = false;

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
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.zlbhzfsqx = false;
                        this.zlfyblqx = false;
                        this.zlbaddressqx = false;
                        this.zlbphoneqx = false;
                        this.zlfyzqqx = false;
                        this.sfzlbqx = true;
                        this.saveqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"系统中无此用户或此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    if(data.qxzt == 11){
                        this.sfzlbqx=false;
                        this.zlbhzfsqx = true;
                        this.zlfyblqx = true;
                        this.zlbaddressqx = true;
                        this.zlbphoneqx = true;
                        this.zlfyzqqx = true;
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
            fhRentMsg(){
            window.history.go(-1);
            },
            saveRentMsg(){
             /*$("input").removeAttr('disabled'); */
                var _this = this;
                /*if(_this.sfzlb == 1){
                    if(!this.zlbhzfs){
                        MessageBox('提示', '请输入租赁部合作方式!');
                        return;
                    }else if(!this.zlfybl){
                        MessageBox('提示', '请输入租赁返佣比例!');
                        return;
                    }else if(!this.zlfyzq){
                        MessageBox('提示', '请输入租赁返佣周期!');
                        return;
                    }else if(!this.zlbaddress){
                        MessageBox('提示', '请输入租赁部地址!');
                        return;
                    }else if(!this.zlbphone){
                        MessageBox('提示', '请输入租赁部电话!');
                        return;
                    }
                }*/

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/lpzdxx/saveLpzdZlb.do",
                    {
                        "parameters": {
                            "id": this.zdid,//座栋ID
                            "sfzlb": this.sfzlb,
                            "zlbhzfs": this.zlbhzfs,
                            "zlfybl": this.zlfybl,
                            "zlbaddress": this.zlbaddress,
                            "zlbphone": this.zlbphone,
                            "zlfyzq": this.zlfyzq,
                        },
                        "foreEndType": 2,
                        "code": "300000068"
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
            },
            sfzlbclass(){
                let that = this;

                setTimeout(function (){
                    if(that.sfzlb == 1){

                        $(".div_class").css("display","block");
                        that.zlbhzfs = "";
                        that.zlfybl = "";
                        that.zlbaddress ="";
                        that.zlbphone = "";
                        that.zlfyzq = "";
                    }else if(that.sfzlb == 0){

                        $(".div_class").css("display","none");
                        that.zlbhzfs = "";
                        that.zlfybl = "";
                        that.zlbaddress ="";
                        that.zlbphone = "";
                        that.zlfyzq = "";

                    }
                    console.log(that.sfzlb );
                   

                }, 1);


            }

        },
        mounted(){
            
            this.tebqqxpd();
        },

    }
    $(".sfzlb_class").click(function(){
        var zlbd=$(this).val();
        if(zlbd==1){
            that.sfzlb = 1;
            $(".div_class").css("display","block");
            that.zlbhzfs = "";
            that.zlfybl = "";
            that.zlbaddress ="";
            that.zlbphone = "";
            that.zlfyzq = "";

        }else if(zlbd==0){
            that.sfzlb = 0;
            $(".div_class").css("display","none");
            that.zlbhzfs = "";
            that.zlfybl = "";
            that.zlbaddress ="";
            that.zlbphone = "";
            that.zlfyzq = "";

        }
    })
</script>
