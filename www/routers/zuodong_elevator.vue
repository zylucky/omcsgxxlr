<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  @import "../resources/css/website/elevator_msg.less";

</style>
<template>
  <div class="all_elements">
    <div class="build_top ele_wrap">
      <ul class="ys_item_ul mb60">
        <li class="clearfix">
          <span class="ys_tit w224">电梯品牌：</span>
          <div class="ys_item_con fl" v-if="!dtppqx">
            <input type="text" value="" v-model="dtpp" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" value="" readonly onfocus="this.blur()" v-model="dtpp" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">客梯数量：</span>
          <div class="ys_item_con fl" v-if="!ktslqx">
            <input type="number" value="" v-model="ktsl" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number" value="" readonly onfocus="this.blur()" v-model="ktsl" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">客梯层级区分：</span>
          <div class="ys_item_con fl"  v-if="ktcjqfqx">
            <label for="ele_yes" class="mr20"  @click="ktqfclass"><input type="radio" v-model="ktcjqf" value="1" name="ele_type" id="ele_yes">是</label>
            <label for="ele_no" id="ele_no"  @click="ktqfclass"><input type="radio"  v-model="ktcjqf" value="0" name="ele_type">否</label>
          </div>
           <div class="ys_item_con fl"  v-else>
            <label for="ele_yes" class="mr20"  ><input type="radio" disabled v-model="ktcjqf" value="1" name="ele_type" id="ele_yes">是</label>
            <label for="ele_no" id="ele_no"  ><input type="radio" disabled v-model="ktcjqf" value="0" name="ele_type">否</label>
          </div>


        </li>
        <li class="clearfix mb20">
          <span class="ys_tit w224">所到楼层：</span>
          <div class="ys_item_con fl kt1_class" style="display:none">
            <input v-if="!ktd1qx" type="text" class="inp_sm" value="" v-model="ktd1" placeholder="请输入">
            <input v-else type="text" class="inp_sm" value="" readonly onfocus="this.blur()" v-model="ktd1" placeholder="请输入">
            <span class="hor_line"></span>
            <input v-if="!ktd2qx" type="text" class="inp_sm" value="" v-model="ktd2" placeholder="请输入">
            <input v-else type="text" class="inp_sm" value="" readonly onfocus="this.blur()" v-model="ktd2" placeholder="请输入">
          </div>
          <div class="ys_item_con fl kt2_class" style="display:none;margin-left: 2.3rem;">
            <input v-if="!ktz1qx" type="text" class="inp_sm" value="" v-model="ktz1" placeholder="请输入">
            <input v-else type="text" class="inp_sm" value="" readonly onfocus="this.blur()" v-model="ktz1" placeholder="请输入">
            <span class="hor_line"></span>
            <input v-if="!ktz2qx" type="text" class="inp_sm" value="" v-model="ktz2" placeholder="请输入">
            <input v-else type="text" class="inp_sm" value="" readonly onfocus="this.blur()" v-model="ktz2" placeholder="请输入">
          </div>
          <div class="ys_item_con fl kt2_class" style="display:none;margin-left: 2.3rem;">
            <input v-if="!ktg1qx" type="text" class="inp_sm" value="" v-model="ktg1" placeholder="请输入">
            <input v-else type="text" class="inp_sm" value="" readonly onfocus="this.blur()" v-model="ktg1" placeholder="请输入">
            <span class="hor_line"></span>
            <input v-if="!ktg2qx" type="text" class="inp_sm" value="" v-model="ktg2" placeholder="请输入">
            <input v-else type="text" class="inp_sm" value="" readonly onfocus="this.blur()" v-model="ktg2" placeholder="请输入">
          </div>

        </li>

        <li class="clearfix">
          <span class="ys_tit w224">货梯数量：</span>
          <div class="ys_item_con fl" v-if="!htslqx">
            <input type="number inp_sm" value="" v-model="htsl" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="number inp_sm" value="" readonly onfocus="this.blur()" v-model="htsl" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">货梯层级区分：</span>
          <div class="ys_item_con fl"  v-if="htcjqfqx">
            <label for="ele_yes" class="mr20"  @click="htqfclass"><input type="radio"   v-model = "htcjqf" value="1" name="ele_type_t" id="frei_ele_yes">是</label>
            <label for="ele_no" id="frei_ele_no" @click="htqfclass"><input type="radio"    v-model = "htcjqf" value="0" name="ele_type_t">否</label>
          </div>

            <div class="ys_item_con fl"  v-else>
            <label for="ele_yes" class="mr20" ><input type="radio"  disabled v-model = "htcjqf" value="1" name="ele_type_t" id="frei_ele_yes">是</label>
            <label for="ele_no" id="frei_ele_no"><input type="radio" disabled   v-model = "htcjqf" value="0" name="ele_type_t">否</label>
          </div>


        </li>

        <li class="clearfix mb20">
          <span class="ys_tit w224">所到楼层：</span>
          <div class="ys_item_con fl ht1_class" style="display:none">
            <input v-if="!htd1qx" type="text" class="inp_sm" v-model="htd1" value="" placeholder="请输入">
            <input v-else type="text" class="inp_sm" readonly onfocus="this.blur()" v-model="htd1" value="" placeholder="请输入">
            <span class="hor_line"></span>
            <input v-if="!htd2qx" type="text" class="inp_sm" value="" v-model="htd2" placeholder="请输入">
            <input v-else type="text" class="inp_sm" value="" readonly onfocus="this.blur()" v-model="htd2" placeholder="请输入">
          </div>
          <div class="ys_item_con fl ht2_class" style="display:none;margin-left: 2.3rem;">
            <input v-if="!htz1qx" type="text" class="inp_sm" v-model="htz1" value="" placeholder="请输入">
            <input v-else type="text" class="inp_sm" v-model="htz1" value="" readonly onfocus="this.blur()" placeholder="请输入">
            <span class="hor_line"></span>
            <input v-if="!htz2qx" type="text" class="inp_sm" value="" v-model="htz2" placeholder="请输入">
            <input v-else type="text" class="inp_sm" value="" readonly onfocus="this.blur()" v-model="htz2" placeholder="请输入">
          </div>
          <div class="ys_item_con fl ht2_class" style="display:none;margin-left: 2.3rem;">
            <input v-if="!htg1qx" type="text" class="inp_sm" v-model="htg1" value="" placeholder="请输入">
            <input v-else type="text" class="inp_sm" v-model="htg1" readonly onfocus="this.blur()" value="" placeholder="请输入">
            <span class="hor_line"></span>
            <input v-if="!htg2qx" type="text" class="inp_sm" value="" v-model="htg2" placeholder="请输入">
            <input v-else type="text" class="inp_sm" value="" readonly onfocus="this.blur()" v-model="htg2" placeholder="请输入">
          </div>
        </li>

      </ul>
      <a href="javascript:;" class="ys_default_btn ys_default1_btn mb80" v-if="saveqx" @click="saveElevatorMsg">保存</a>
        <a href="javascript:;" class="ys_default_btn ys_default2_btn mb80" v-else  @click="fhElevatorMsg">返回</a>
    </div>
  </div>
</template>
<script>
    import { Toast } from 'mint-ui'; //toast
    import { Indicator } from 'mint-ui';
    import { MessageBox } from 'mint-ui'; //弹窗

    export default {
        components: {
        },

        data () {
            return {
                //电梯信息
                zdid: '', //座栋id
                lpid:'',//楼盘ID
                dtpp: '', //电梯品牌
                ktcjqf: '', //客梯层级区分 1是 0否
                ktsl: '', //客梯数量
                ktd: '', //客梯低层 如：1、10
                ktd1:'',
                ktd2:'',
                ktz: '', //客梯中 如2、10
                ktz1:'',
                ktz2:'',
                ktg: '', //客梯高 如：12、20
                ktg1:'',
                ktg2:'',
                htcjqf: '', //货梯层级区分 1 是 0 否
                htsl: '', //货梯数量
                htd: '', //货梯低 如： 1、10
                htd1:'',
                htd2:'',
                htz: '', //货梯中 如： 1、10
                htz1:'',
                htz2:'',
                htg: '', //货梯高 如：1、20
                htg1:'',
                htg2:'',
                dtppqx:0,
                ktslqx:0,
                ktd1qx:0,
                ktd2qx:0,
                ktz1qx:0,
                ktz2qx:0,
                ktg1qx:0,
                ktg2qx:0,
                htslqx:0,
                htd1qx:0,
                htd2qx:0,
                htz1qx:0,
                htz2qx:0,
                htg1qx:0,
                htg2qx:0,
                ktcjqfqx:0,
                htcjqfqx:0,
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
                const url = this.$api + "/yhcms/web/lpzdxx/getLpzdDt.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":zdid},"foreEndType":2,"code":"300000077"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    //电梯低中高   用"、"链接
                    that.dtpp = data.dtpp;
                    that.lpid=data.lpid;
                    that.ktcjqf = data.ktcjqf;
                    if(data.ktcjqf==1){

                        $(".kt1_class").css("display","block");
                        $(".kt2_class").css("display","block");
                        that.ktd = data.ktd;
                        that.ktz = data.ktz;
                        that.ktg = data.ktg;
                        if(this.ktd!=''){
                            var kt=this.ktd.split('、');
                            that.ktd1=kt[0];
                            that.ktd2=kt[1];
                        }
                        if(this.ktz!=''){
                            var kz=this.ktz.split("、");
                            that.ktz1=kz[0];
                            that.ktz2=kz[1];
                        }
                        if(this.ktg!=''){
                            var kg= this.ktg.split("、");
                            that.ktg1=kg[0];
                            that.ktg2=kg[1];
                        }
                    }else if(data.ktcjqf==0){
                        $(".kt1_class").css("display","block");
                        that.ktd = data.ktd;
                        if(this.ktd!=''){
                            var kt=this.ktd.split('、');
                            that.ktd1=kt[0];
                            that.ktd2=kt[1];
                        }

                    }
                    that.ktsl = data.ktsl;

                    that.htcjqf = data.htcjqf;
                    if(data.htcjqf==1){
                        $(".ht1_class").css("display","block");
                        $(".ht2_class").css("display","block");
                        that.htd = data.htd;
                        that.htz = data.htz;
                        that.htg = data.htg;
                        if(this.htd!=''){
                            var hd=this.htd.split("、");
                            that.htd1=hd[0];
                            that.htd2=hd[1];
                        }
                        if(this.htz!=''){
                            var hz=this.htz.split("、");
                            that.htz1=hz[0];
                            that.htz2=hz[1];
                        }
                        if(this.htg!=''){
                            var hg=this.htg.split("、");
                            that.htg1=hg[0];
                            that.htg2=hg[1];
                        }
                    }else if(data.htcjqf==0){
                        $(".ht1_class").css("display","block");
                        that.htd = data.htd;
                        if(this.htd!=''){
                            var hd=this.htd.split("、");
                            that.htd1=hd[0];
                            that.htd2=hd[1];
                        }
                    }
                    that.htsl = data.htsl;
                    $('title').html(data.topic + '一' +  data.zdh);
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.dtppqx = true;
                        this.saveqx = false;

                        if(this.dtpp==''){
                            this.dtppqx = false;
                            this.saveqx = true;
                        }
                         this.ktslqx = true;
                        if(this.ktsl==''){
                            this.ktslqx = false;
                            this.saveqx = true;
                        }

                        if(this.ktcjqf==''){
                            this.ktcjqfqx=true;
                            this.saveqx = true;
                        }else if(this.ktcjqf!=''){
                            this.ktcjqfqx=false;
                        this.ktd1qx = true;
                        if(this.ktd1 == ""){
                            this.ktd1qx = false;
                            this.saveqx = true;
                        }

                        this.ktd2qx = true;
                        if(this.ktd2 == ""){
                            this.ktd2qx = false;
                            this.saveqx = true;
                        }
                        if(this.ktcjqf == 0){

                        }else{
                            this.ktz1qx = true;
                            if(this.ktz1 == ""){
                                this.ktz1qx = false;
                                this.saveqx = true;
                            }

                            this.ktz2qx = true;
                            if(this.ktz2 == ""){
                                this.ktz2qx = false;
                                this.saveqx = true;
                            }

                            this.ktg1qx = true;
                            if(this.ktg1 == ""){
                                this.ktg1qx = false;
                                this.saveqx = true;
                            }

                            this.ktg2qx = true;
                            if(this.ktg2 == ""){
                                this.ktg2qx = false;
                                this.saveqx = true;
                            }
                        }
                        }
                        this.htslqx = true;
                        if(this.htsl==''){
                            this.htslqx = false;
                            this.saveqx = true;
                        }

                         if(this.htcjqf==''){
                             this.htcjqfqx=true;
                             this.saveqx = true;
                        }else if(this.htcjqf!=''){
                            this.htcjqfqx=false;
                            

                        this.htd1qx = true;
                        if(this.htd1 == ""){
                            this.htd1qx = false;
                            this.saveqx = true;
                        }

                        this.htd2qx = true;
                        if(this.htd2 == ""){
                            this.htd2qx = false;
                            this.saveqx = true;
                        }

                        this.htz1qx = true;
                        if(this.htcjqf == 0){

                        }else{
                            if(this.htz1 == ""){
                                this.htz1qx = false;
                                this.saveqx = true;
                            }
                            this.htz2qx = true;
                            if(this.htz2 == ""){
                                this.htz2qx = false;
                                this.saveqx = true;
                            }
                            this.htg1qx = true;
                            if(this.htg1 == ""){
                                this.htg1qx = false;
                                this.saveqx = true;
                            }
                            this.htg2qx = true;
                            if(this.htg2 == ""){
                                this.htg2qx = false;
                                this.saveqx = true;
                            }
                        }
                        }
                    }
                    //权限判断
                   //  this.tebqqxpd();

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
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.dtppqx = false;
                        this.ktslqx = false;
                        this.ktd1qx = false;
                        this.ktd2qx = false;
                        this.ktz1qx = false;
                        this.ktz2qx = false;
                        this.ktg1qx = false;
                        this.ktg2qx = false;
                        this.htslqx = false;
                        this.htd1qx = false;
                        this.htd2qx = false;
                        this.htz1qx = false;
                        this.htz2qx = false;
                        this.htg1qx = false;
                        this.htg2qx = false;
                        this.ktcjqfqx = true;
                        this.htcjqfqx = true;
                        this.saveqx = true;
                        console.log(this.ktd1qx+"bbb");
                        console.log(this.ktz1qx);
                    }
                    //只有查看权限
                    if(data.qxzt == 11){
                        this.ktcjqfqx=false;
                        this.htcjqfqx=false;
                        this.dtppqx = true;
                        this.ktslqx = true;
                        this.ktd1qx = true;
                        this.ktd2qx = true;
                        this.ktz1qx = true;
                        this.ktz2qx = true;
                        this.ktg1qx = true;
                        this.ktg2qx = true;
                        this.htslqx = true;
                        this.htd1qx = true;
                        this.htd2qx = true;
                        this.htz1qx = true;
                        this.htz2qx = true;
                        this.htg1qx = true;
                        this.htg2qx = true;
                        this.saveqx = false;
                        $("input").attr('placeholder',"");
                       /* $(".ys_default1_btn").css("display","none");
                        $(".ys_default2_btn").css("display","block");*/
                    }
                    //data.qxzt = 11;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
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
            fhElevatorMsg(){
            window.history.go(-1);
            },
            //保存电梯信息
            saveElevatorMsg(){
                var _this = this;
                var that = this;
                that.ktd='';
                that.ktz='';
                that.ktg='';
                if(this.ktcjqf==1){
                    if(this.ktd1!=''&&this.ktd2!=''){
                        if(Number(this.ktd1)>Number(this.ktd2)){
                            MessageBox('提示', '请正确填写客梯信息');
                            return;
                        }
                        that.ktd=this.ktd1+"、"+this.ktd2;
                    }

                    if(this.ktz1!=''&&this.ktz2!=''){
                        if(Number(this.ktz1)>Number(this.ktz2)){
                            MessageBox('提示', '请正确填写客梯信息');
                            return;
                        }
                        that.ktz=this.ktz1+"、"+this.ktz2;
                    }

                    if(this.ktg1!=''&&this.ktg2!=''){
                        if(Number(this.ktg1)>Number(this.ktg2)){
                            MessageBox('提示', '请正确填写客梯信息');
                            return;
                        }
                        that.ktg=this.ktg1+"、"+this.ktg2;
                    }

                }else if(this.ktcjqf==0){

                    if(this.ktd1!=''&&this.ktd2!=''){
                        if(Number(this.ktd1)>Number(this.ktd2)){
                            MessageBox('提示', '请正确填写客梯信息');
                            return;
                        }
                        that.ktd=this.ktd1+"、"+this.ktd2;
                    }

                }
                 that.htd='';
                 that.htz='';
                 that.htg='';

                if(this.htcjqf==1){
                    if(this.htd1!=''&&this.htd2!=''){
                        if(Number(this.htd1)>Number(this.htd2)){
                            MessageBox('提示', '请正确填写货梯信息');
                            return;
                        }
                        that.htd=this.htd1+"、"+this.htd2;
                    }

                    if(this.htz1!=''&&this.htz2!=''){
                        if(Number(this.htz1)>Number(this.htz2)){
                            MessageBox('提示', '请正确填写货梯信息');
                            return;
                        }
                        that.htz=this.htz1+"、"+this.htz2;
                    }

                    if(this.htg1!=''&&this.htg2!=''){
                        if(Number(this.htg1)>Number(this.htg2)){
                            MessageBox('提示', '请正确填写货梯信息');
                            return;
                        }
                        that.htg=this.htg1+"、"+this.htg2;
                    }

                }else if(this.htcjqf==0){
                    if(this.htd1!=''&&this.htd2!=''){
                        if(Number(this.htd1)>Number(this.htd2)){
                            MessageBox('提示', '请正确填写货梯信息');
                            return;
                        }
                        that.htd=this.htd1+"、"+this.htd2;
                    }

                }


                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/lpzdxx/saveLpzdDt.do",
                    {
                        "parameters": {
                            "id": this.zdid, //座栋id
                            "dtpp": this.dtpp, //电梯品牌
                            "ktcjqf": this.ktcjqf, //客梯层级区分 1是 0否
                            "ktsl": this.ktsl, //客梯数量
                            "ktd": this.ktd, //客梯低层 如：1、10
                            "ktz": this.ktz, //客梯中 如2、10
                            "ktg": this.ktg, //客梯高 如：12、20
                            "htcjqf": this.htcjqf, //货梯层级区分 1 是 0 否
                            "htsl": this.htsl, //货梯数量
                            "htd": this.htd, //货梯低 如： 1、10
                            "htz": this.htz, //货梯中 如： 1、10
                            "htg": this.htg, //货梯高 如：1、20
                        },
                        "foreEndType": 2,
                        "code": "300000076"
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
                        },300);
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
            //点击事件
            ktqfclass(){
                let that=this;
                setTimeout(function (){
                    if(that.ktcjqf == 1){
                        $(".kt1_class").css("display","block");
                        $(".kt2_class").css("display","block");
                        that.ktd1='';
                        that.ktd2='';
                        that.ktz1='';
                        that.ktz2='';
                        that.ktg1='';
                        that.ktg2='';
                        that.ktd='';
                        that.ktz='';
                        that.ktg='';

                    }else if(that.ktcjqf == 0){
                        $(".kt1_class").css("display","block");
                        $(".kt2_class").css("display","none");
                        that.ktd1='';
                        that.ktd2='';
                        that.ktz1='';
                        that.ktz2='';
                        that.ktg1='';
                        that.ktg2='';
                        that.ktd='';
                        that.ktz='';
                        that.ktg='';
                    }
                    console.log(this.ktd1);
                   

                }, 0.5);
            },
            htqfclass(){
                let that=this;
                setTimeout(function (){
                    if(that.htcjqf == 1){

                        $(".ht1_class").css("display","block");
                        $(".ht2_class").css("display","block");
                        that.htd1='';
                        that.htd2='';
                        that.htz1='';
                        that.htz2='';
                        that.htg1='';
                        that.htg2='';
                        that.htd='';
                        that.htz='';
                        that.htg='';
                    }else if(that.htcjqf == 0){
                        $(".ht1_class").css("display","block");
                        $(".ht2_class").css("display","none");
                        that.htd1='';
                        that.htd2='';
                        that.htz1='';
                        that.htz2='';
                        that.htg1='';
                        that.htg2='';
                        that.htd='';
                        that.htz='';
                        that.htg='';
                    }
                    
                }, 0.5);
            }


        },
        mounted(){
           // this.getInitData();
           this.tebqqxpd();
        },

    }

</script>
