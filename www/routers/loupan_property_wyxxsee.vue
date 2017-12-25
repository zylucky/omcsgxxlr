<style scoped lang="less">
    @import "../resources/css/website/detail.less";
    @import "../resources/css/reset.css";
    @import "../resources/css/base.less";
    .show{
        display: block;
    }
    .hide{
        display: none;
    }
    .act{
        color: #FFFFFF!important;
    }
    .page-infinite-loading {
        text-align: center;
        background-color: #FFF;
        & > span {
            display: inline-block;
        }
    }
    .ys_column3{
        font-size: .3rem;
    }
    .shadow-p{
        position: fixed;
        left: 0;
        top:.72rem;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.6);
        .info-tab{
            position: absolute;
            padding: .30rem 0;
            width: 5.34rem;
            font-size: .26rem;
            border-radius: .6em;
            left:50%;
            top:1.92rem;
            margin-left: -2.67rem;
            background: #fff;
            z-index: 333;
            p{
                height: .72rem;
                line-height: .72rem;
                padding-left: .24rem;
                label{
                    float: left;
                }
                input{
                    float: left;
                    margin-left: .24rem;
                    height: .72rem;
                    line-height: .72rem;
                    border-bottom:1px solid #dbdadf;
                }
                #wname{
                    width: 2.88rem;
                }
                #wname2, #wname3{
                    width: 2.58rem;
                }
                #waddress{
                    width: 3.9rem;
                }
                #wtel{
                    width: 3.4rem;
                }
                #wtel2, #wtel3{
                    width: 3.4rem;
                }

            }
            button{
                display: block;
                margin: .44rem auto 0;
                width: 4.44rem;
                height: .74rem;
                color: #fff;
                border: 0;
                background-color:#16abdc;
                border-radius: .4em;
            }
        }
    }
    .bjt{
        background-image: url('../resources/images/1.png') !important;

    }





.wac{
    background: url("../resources/images/loupan/wuyegongsi.png") no-repeat;
    background-size: 100% 100%;
    height: 5rem;
}
.kefu{
    background: url("../resources/images/loupan/wuyegongsi.png") no-repeat;
    background-size: 100% 100%;
    height: 1.1rem;
    width: 1.2rem;
}
.meidian{
    background-color: rgb(161,185,245);
    height: 1.1rem;
    width: 1.2rem;
}
.wyegongsi{margin-left: 0.5rem;}
.zhouqi{width: 87%;margin-top: 0.3rem;background-color: white;opacity:0.9;padding-top: 0.3rem;border-radius:5px;}
.gunglizd{color:rgb(150,150,150);font-size: 0.3rem !important;}
.gungil2{height: 0.6rem;}
.jianzzq{margin-left:0rem !important;}
</style>
<template>
    <div class="all_elements">
        <div class="alla_elements"">
            <div class="build_top wac">
                <div class="item clearfix">
                    <div class="wyegongsi" style="color: white;padding-top: 0.5rem;">
                        <div style="font-size: 0.4rem;">{{wname3}}</div>
                        <div style="font-size: 0.36rem;margin-top: 0.2rem;">联系电话:{{wname5}}</div>
                    </div>
                    <div class="house_msg_content wyegongsi zhouqi">
                        <!--<span class="gunglizd gungil2" style="">简装周期：<i class="jianzzq" v-text="jzzhouq" style="color:#5b5b5b;"></i></span>
                        <span class="gunglizd gungil2">中装周期：<i class="jianzzq" v-text="zzzhouq" style="color:#5b5b5b;"></i></span>
                        <span class="gunglizd gungil2">大装周期：<i class="jianzzq" v-text="dzzhouq" style="color:#5b5b5b;"></i></span>
                        <span class="gunglizd gungil2">物业分级：<i class="jianzzq" v-text="wysort" style="color:#5b5b5b;"></i></span>-->
                        <div class="gunglizd" style="clear: both;">
                            <span class="gunglizd" style="width: 28%;color:#5b5b5b;">管理座栋：</span>
                            <span class="" style="width: 75%;float: right;"><i class="jianzzq" v-text="glzdh" style="color: black;"></i></span>
                        </div>
                        <div class="gunglizd" style="clear: both;margin-top: 0.3rem;min-height:3.7rem;">
                            <span class="gunglizd" style="width: 28%;color:#5b5b5b;">物业地址：</span>
                            <span class="" style="width: 75%;float: right;"><i class="jianzzq" v-text="addresswy" style="color:black;"></i></span>
                        </div>
                        <!--<div class="gunglizd" style="min-height:1.7rem;clear: both;margin-top: 0.3rem;">
                            <span class="gunglizd" style="width: 28%;color:#5b5b5b;">备注信息：</span>
                            <span style="width: 75%;float: right;margin-bottom:0.3rem;"><i class="jianzzq" v-text="beizhu" style="color:#5b5b5b;"></i></span>
                        </div>-->
                        <div style="clear: both;"></div>
                    </div>
                    <!--<div class="zhouqi house_msg_content" style="height: 4.45rem;margin-top: 0.2rem;margin-left: 0.5rem;">
                        <span class="gunglizd gungil2" style="width: 80%;">姓名：<i class="jianzzq" v-text="name" style="color:#5b5b5b;"></i></span>
                        <span class="gunglizd gungil2" style="width: 80%;">电话：<i class="jianzzq" v-text="phone" style="color:#5b5b5b;"></i></span>
                        <span class="gunglizd gungil2" style="width: 80%;">微信：<i class="jianzzq" v-text="wexin" style="color:#5b5b5b;"></i></span>
                        <span class="gunglizd gungil2" style="width: 80%;">提供人：<i class="jianzzq" v-text="tigr" style="color:#5b5b5b;"></i></span>
                        <span class="gunglizd gungil2" style="width: 80%;">备注：<i class="jianzzq" v-text="beizhukefu" style="color:#5b5b5b;"></i></span>
                        <div class="kefu" style="position:relative;top:-4.02rem;left:5.1rem;clear: both;border-top-right-radius:5px;" rel="客服" @click="kefu($event)" v-if="kefuif1">
                            <a href="javascript:;" rel="客服" >
                                <img src="../resources/images/loupan/1.png" rel="客服"  style="width: 0.5rem;margin-left: 0.35rem;margin-top: 0.1rem;">
                                <div style="display: flex;align-items: center;justify-content: center;color: white;margin-top: 0.05rem;font-size: 0.32rem;" rel="客服" >客服</div>
                            </a>
                        </div>
                        <div class="meidian" style="position:relative;top:-4.02rem;left:5.1rem;clear: both;border-top-right-radius:5px;" rel="客服" @click="kefu($event)" v-else>
                            <a href="javascript:;" rel="客服">
                                <img src="../resources/images/loupan/1-1.png" rel="客服" style="width: 0.5rem;margin-left: 0.35rem;margin-top: 0.1rem;">
                                <div style="display: flex;align-items: center;justify-content: center;color: white;margin-top: 0.05rem;font-size: 0.32rem;" rel="客服">客服</div>
                            </a>
                        </div>
                        <div class="kefu" style="position:relative;top:-4.02rem;left:5.1rem;margin-top: 1px;" rel="二装" @click="kefu($event)" v-if="kefuif2">
                            <a href="javascript:;" rel="二装">
                                <img src="../resources/images/loupan/2.png" style="width: 0.5rem;margin-left: 0.35rem;margin-top: 0.1rem;" rel="二装">
                                <div style="display: flex;align-items: center;justify-content: center;color: white;margin-top: 0.05rem;font-size: 0.32rem;" rel="二装">二装</div>
                            </a>
                        </div>
                        <div class="meidian" style="position:relative;top:-4.02rem;left:5.1rem;margin-top: 1px;" rel="二装" @click="kefu($event)" v-else>
                            <a href="javascript:;" rel="二装">
                                <img src="../resources/images/loupan/2-2.png" style="width: 0.55rem;margin-left: 0.35rem;margin-top: 0.1rem;" rel="二装">
                                <div style="display: flex;align-items: center;justify-content: center;color: white;margin-top: 0.05rem;font-size: 0.32rem;" rel="二装">二装</div>
                            </a>
                        </div>
                        <div class="kefu" style="position:relative;top:-4.02rem;left:5.1rem;margin-top: 1px;" rel="安保" @click="kefu($event)" v-if="kefuif3">
                            <a href="javascript:;" rel="安保">
                                <img src="../resources/images/loupan/3.png" style="width: 0.5rem;margin-left: 0.35rem;margin-top: 0.1rem;" rel="安保">
                                <div style="display: flex;align-items: center;justify-content: center;color: white;margin-top: 0.05rem;font-size: 0.32rem;" rel="安保">安保</div>
                            </a>
                        </div>
                        <div class="meidian" style="position:relative;top:-4.02rem;left:5.1rem;margin-top: 1px;" rel="安保" @click="kefu($event)" v-else>
                            <a href="javascript:;" rel="安保">
                                <img src="../resources/images/loupan/3-3.png" style="width: 0.45rem;margin-left: 0.4rem;margin-top: 0.1rem;" rel="安保">
                                <div style="display: flex;align-items: center;justify-content: center;color: white;margin-top: 0.05rem;font-size: 0.32rem;" rel="安保">安保</div>
                            </a>
                        </div>
                        <div class="kefu" style="position:relative;top:-4.02rem;left:5.1rem;border-bottom-right-radius:5px;margin-top: 1px;" rel="楼管" @click="kefu($event)" v-if="kefuif4">
                            <a href="javascript:;" rel="楼管">
                                <img src="../resources/images/loupan/4.png" style="width: 0.5rem;margin-left: 0.35rem;margin-top: 0.1rem;" rel="楼管">
                                <div style="display: flex;align-items: center;justify-content: center;color: white;margin-top: 0.05rem;font-size: 0.32rem;" rel="楼管">楼管</div>
                            </a>
                        </div>
                        <div class="meidian" style="position:relative;top:-4.02rem;left:5.1rem;border-bottom-right-radius:5px;margin-top: 1px;" rel="楼管" @click="kefu($event)" v-else>
                            <a href="javascript:;" rel="楼管">
                                <img src="../resources/images/loupan/4-4.png" style="width: 0.5rem;margin-left: 0.35rem;margin-top: 0.1rem;" rel="楼管">
                                <div style="display: flex;align-items: center;justify-content: center;color: white;margin-top: 0.05rem;font-size: 0.32rem;" rel="楼管">楼管</div>
                            </a>
                        </div>
                    </div>
-->
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import {Indicator} from 'mint-ui';
    import { Toast } from 'mint-ui'; //toast
    import { MessageBox } from 'mint-ui'; //弹窗
    import {DatetimePicker} from 'mint-ui';  //日期选择
    import {Popup} from 'mint-ui'; //弹窗
    export default {
        components: {
            Toast,
            MessageBox,
            DatetimePicker,
            Popup
        },

        data () {
            return {
                lpid:"",
                id:"",
                jzzhouq:'',
                zzzhouq:'',
                dzzhouq:'',
                wysort:'',
                beizhu:'',
                addresswy:'',
                glzdh:'',
                name:'',
                phone:'',
                wexin:'',
                tigr:'',
                beizhukefu:'',
                kefuif1:true,
                kefuif2:false,
                kefuif3:false,
                kefuif4:false,



                vid:"",
                kprq:"",
                zc:"",
                wyf:"",
                gnf:"",
                tcwsl:"",






                tcf:"",
                wlgs:"",
                showTab:2,
                showShadow:0,
                wname:"",
                wname3:"",
                wname5:"",
                wtel3:"",
                wtel6:"",
                glzd:"",
                data:[],
                optionsgssx:[],

                xgsqqx:0,
                tjwygsqx:null,
                wnameqx1:0,
                wnameqx2:0,
                wnameqx3:0,
                glzdqx:0,
                wyqdqx:0,

            }
        },
        methods: {
            kefu(e){
                const target = $(e.target), txt = target.attr("rel");
                if(txt == "客服"){
                    this.kefuif1 = true;
                    this.kefuif2 = false;
                    this.kefuif3 = false;
                    this.kefuif4 = false;
                }
                if(txt == "二装"){
                    this.kefuif1 = false;
                    this.kefuif2 = true;
                    this.kefuif3 = false;
                    this.kefuif4 = false;
                }
                if(txt == "安保"){
                    this.kefuif1 = false;
                    this.kefuif2 = false;
                    this.kefuif3 = true;
                    this.kefuif4 = false;
                }
                if(txt == "楼管"){
                    this.kefuif1 = false;
                    this.kefuif2 = false;
                    this.kefuif3 = false;
                    this.kefuif4 = true;
                }

            },
            getInitData(){
                console.log(this.tjwygsqx+"getInitData");
                //   管理座栋    和pc 端作比较      这个比较麻烦
                // 添加物业公司的时候要把 楼盘下的所有的座栋查询出来  getLpdetWy   glzd存放的是座栋的ID,如： ";1;2;"
                this.lpid = this.$route.params.lpid;
                this.vid = this.$route.params.val;
                const url = this.$api + "/yhcms/web/lpjbxx/getLpdetWy.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":this.vid,"lpid":this.lpid},"foreEndType":2,"code":"300000033"}).then((res)=>{
                    Indicator.close()
                    const data1 = JSON.parse(res.bodyText).data;
                    $("input").attr('placeholder',"");
                    const data = data1.wyxx;
                    that.optionsgssx = data1.zdhs;
                    //this.showShadow=1;
                    this.id=data.id;
                    this.wname3=data.wygs;
                    this.wname5=data.wyphone;
                    this.jzzhouq = data.jztime == '' ? '暂无数据' : data.jztime+"天";
                    this.zzzhouq = data.zztime == '' ? '暂无数据' : data.zztime+"天";
                    this.dzzhouq = data.dztime == '' ? '暂无数据' : data.dztime+"天";
                    this.wysort = data.wysort == '' ? '暂无数据' : data.wysort;
                    this.beizhu = data.bzh == '' ? '暂无数据' : data.bzh;
                    this.addresswy = data.wyaddress == '' ? '暂无数据' : data.wyaddress;
                    this.name = data1.wy1.name;
                    this.phone = data1.wy1.phone;
                    this.wexin = data1.wy1.wxcard;
                    this.tigr = data1.wy1.depart+"-"+data1.wy1.person;
                    this.beizhukefu = data1.wy1.bzh;






                    this.wtel3=data.wyaddress;
                    this.glzd=data.glzd;
                    //console.log(data.glzd);
                    setTimeout(function(){
                        var zds=data.glzd.substring(1,(data.glzd.length)-1);
                        var arraycheckdel1="";
                        var del="";
                        var checkdel = document.getElementsByName("xzzdh");//获取所有名为‘checkdel’的值
                        //循环checkdel
                        for ( var i = 0; i < checkdel.length; i++) {
                            del= checkdel[i].id;
                            var zd1="";
                            var zdss= zds.split(";");
                            var io=0;
                            for( var t = 0; t < zdss.length; t++) {
                                zd1= zdss[t];
                                if(zd1==del){
                                    io=1;
                                }
                            }
                            if(io==1){
                                checkdel[i].checked = true;
                                arraycheckdel1+= checkdel[i].getAttribute('value') + ";";
                            }
                        }

                        console.log(arraycheckdel1.substring(0,(arraycheckdel1.length-1))+"fff");
                        $("#wtel6").removeAttr("readonly");
                        //赋值产权性质
                        var wt=arraycheckdel1.substring(0,(arraycheckdel1.length-1));
                        that.wtel6=wt;
                        $("#wtel6").attr("readonly","readonly");
                    }, 100);

                }, (res)=>{
                    Indicator.close()
                });






                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url1 = this.$api + "/yhcms/web/lpjbxx/getLpWy.do";
                this.$http.post(url1, {"parameters":{ "lpid":this.lpid},"foreEndType":2,"code":"300000033"}).then((res)=>{
                    Indicator.close();
                    const data2 = JSON.parse(res.bodyText).data;
                    const topic = JSON.parse(res.bodyText).topic;
                    for(var i=0;i<data2.length;i++){
                        if(data2[i].id == this.vid){
                            this.glzdh = data2[i].zdh == '' ? '暂无数据' : data2[i].zdh.replace(/;/g,"、");//此处replace的第一个参数为正则表达式，/g是全文匹配标识。
                        }
                    }
                    $('title').html(topic);
                }, (res)=>{
                    Indicator.close()
                });

            },
            tebqqxpd(){
                console.log(this.tjwygsqx+"tebqqxpd");
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                let user22 = JSON.parse(localStorage.getItem('cook'));
                const url = this.$api + "/yhcms/web/wxqx/getLpqx.do";
                this.$http.post(url, {"cookie":user22.sjs,"lpid":this.$route.params.lpid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    console.log(data.qxzt+"权限");
                    console.log(this.qxzt+"23");
                    //data.qxzt = 1;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.xgsqqx = 2;
                        this.tjwygsqx = true;
                        this.wnameqx1 = false;
                        this.wnameqx2 = false;
                        this.wnameqx3 = false;
                        this.glzdqx = true;
                        this.wyqdqx = true;
                    }
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.xgsqqx = 1;
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
                        this.xgsqqx = false;
                        this.wnameqx1 = true;
                        this.wnameqx2 = true;
                        this.wnameqx3 = true;
                        this.glzdqx = false;
                        this.wyqdqx = false;

                        $("input").attr('placeholder',"");
                    }
                    if(data.qxzt == 46){
                        MessageBox('提示',"此用户不属于收购部人员！");
                        this.$router.push({path: '/login'});
                    }
                    if(data.ryzt == 1){
                        this.tjwygsqx = false;
                        this.wyqdqx = false;
                    }else{
                        this.tjwygsqx = true;
                        this.glzdqx = true;
                        this.wyqdqx = true;
                    }
                    this.getInitData();
                    //this.getInitDatanei();
                }, (res)=>{
                    Indicator.close()
                });
            },
            showShadow1(){
                this.showShadow=1;
                var _this=this;
                const url = this.$api + "/yhcms/web/lpjbxx/getLpdetWy.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "lpid":this.lpid,"id":""},"foreEndType":2,"code":"300000033"}).then((res)=>{
                    Indicator.close()
                    const optionsgssx = JSON.parse(res.bodyText).data;
                    that.optionsgssx = optionsgssx.zdhs;
                }, (res)=>{
                    Indicator.close()
                });

            },
            checkTj(){
                //提交选择的管理座栋

                //被选中的产权性质
                var arraycheckdel = "";//定义一个变量用于存放选中状态的复选框的值(id)
                var arraycheckdel1 = ";";//定义一个变量用于存放选中状态的复选框的值(id)
                var checkdel = document.getElementsByName("xzzdh");//获取所有名为‘checkdel’的值
                //循环checkdel
                for ( var i = 0; i < checkdel.length; i++) {
                    //如果第i个复选框为选中状态，就把值存进事先定义的arraycheckdel之中(这里进行了拼接，在没个id后面加一个',',方便后台对字符串进行拆分)
                    if (checkdel[i].checked) {
                        arraycheckdel += checkdel[i].value + ";";
                        arraycheckdel1 += checkdel[i].getAttribute('id') + ";";
                    }
                }
                //如果当前没有任何产权性质被选中，则提示用户至少需要选中一条记录才可以添加
                if (arraycheckdel == "") {
                    Toast({
                        message: '没有选择任何座栋 ' ,
                        position: 'bottom'
                    });
                } else{
                    $("#wtel6").removeAttr("readonly");
                    //赋值产权性质
                    this.wtel6=arraycheckdel.substring(0,(arraycheckdel.length-1));
                    this.glzd=arraycheckdel1;
                    //$("#glzd").attr('value',arraycheckdel1);

                    $("#wtel6").attr("readonly","readonly");
                    $(".glzdClass").css("display","none");
                }
            },
            showTab2(){
                var _this=this;
                _this.$router.push({path:'/loupan_property_dhyyxx/'+_this.lpid});
            },
            glzdAction(){

                //选择管理座栋
                $(".glzdClass").css("display","block");

            },
            showTab1(){
                var _this=this;
                _this.$router.push({path:'/loupan_property_wlyyxx/'+_this.lpid});
            },
            modifyDhyyxx(e){
                this.wnameqx1 = false;
                this.wnameqx2 = false;
                this.wnameqx3 = false;
                this.wnameqx = true;
                this.glzdqx = true;
                const target = $(e.target), val = target.attr("owner");
                const url = this.$api + "/yhcms/web/lpjbxx/getLpdetWy.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":val,"lpid":this.lpid},"foreEndType":2,"code":"300000033"}).then((res)=>{
                    Indicator.close()
                    const data1 = JSON.parse(res.bodyText).data;
                    const data = data1.wyxx;
                    that.optionsgssx = data1.zdhs;
                    this.showShadow=1;
                    this.id=data.id;
                    this.wname3=data.wygs;
                    this.wname5=data.wyphone;
                    this.wtel3=data.wyaddress;
                    this.glzd=data.glzd;
                    //console.log(data.glzd);
                    setTimeout(function(){
                        var zds=data.glzd.substring(1,(data.glzd.length)-1);
                        var arraycheckdel1="";
                        var del="";
                        var checkdel = document.getElementsByName("xzzdh");//获取所有名为‘checkdel’的值
                        //循环checkdel
                        for ( var i = 0; i < checkdel.length; i++) {
                            del= checkdel[i].id;
                            var zd1="";
                            var zdss= zds.split(";");
                            var io=0;
                            for( var t = 0; t < zdss.length; t++) {
                                zd1= zdss[t];
                                if(zd1==del){
                                    io=1;
                                }
                            }
                            if(io==1){
                                checkdel[i].checked = true;
                                arraycheckdel1+= checkdel[i].getAttribute('value') + ";";
                            }
                        }
                        console.log(arraycheckdel1.substring(0,(arraycheckdel1.length-1))+"qqq");
                        $("#wtel6").removeAttr("readonly");
                        //赋值产权性质
                        var wt=arraycheckdel1.substring(0,(arraycheckdel1.length-1));
                        that.wtel6=wt;
                        $("#wtel6").attr("readonly","readonly");
                    }, 100);
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){

                        if(this.wname3 != "" && this.wname5 != "" && this.wtel3 != "" && this.optionsgssx.length != 0){
                            this.wyqdqx = false;
                        }else{
                            this.wyqdqx = true;
                        }
                        this.wnameqx1 = true;
                        if(this.wname3 == ""){
                            this.wnameqx1 = false;
                        }
                        this.wnameqx2 = true;
                        if(this.wname5 == ""){
                            this.wnameqx2 = false;
                        }
                        this.wnameqx3 = true;
                        if(this.wtel3 == ""){
                            this.wnameqx3 = false;
                        }
                        this.glzdqx = false;
                        if(this.optionsgssx.length == 0){
                            this.glzdqx = true;
                        }
                    }

                }, (res)=>{
                    Indicator.close()
                });
            },
            modifyDhyyxxck(e){
                this.$router.push({path: '/loupan_property_wyxxsee/'+ this.lpid});
                //_this.$router.push({path:'/loupan_property_wlyyxx/'+_this.lpid});
                this.wnameqx1 = true;
                this.wnameqx2 = true;
                this.wnameqx3 = true;
                this.glzdqx = false;
                this.wyqdqx = false;
                const target = $(e.target), val = target.attr("owner");
                const url = this.$api + "/yhcms/web/lpjbxx/getLpdetWy.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":val,"lpid":this.lpid},"foreEndType":2,"code":"300000033"}).then((res)=>{
                    Indicator.close()
                    const data1 = JSON.parse(res.bodyText).data;
                    $("input").attr('placeholder',"");
                    const data = data1.wyxx;
                    that.optionsgssx = data1.zdhs;
                    this.showShadow=1;
                    this.id=data.id;
                    this.wname3=data.wygs;
                    this.wname5=data.wyphone;
                    this.wtel3=data.wyaddress;
                    this.glzd=data.glzd;
                    //console.log(data.glzd);
                    setTimeout(function(){
                        var zds=data.glzd.substring(1,(data.glzd.length)-1);
                        var arraycheckdel1="";
                        var del="";
                        var checkdel = document.getElementsByName("xzzdh");//获取所有名为‘checkdel’的值
                        //循环checkdel
                        for ( var i = 0; i < checkdel.length; i++) {
                            del= checkdel[i].id;
                            var zd1="";
                            var zdss= zds.split(";");
                            var io=0;
                            for( var t = 0; t < zdss.length; t++) {
                                zd1= zdss[t];
                                if(zd1==del){
                                    io=1;
                                }
                            }
                            if(io==1){
                                checkdel[i].checked = true;
                                arraycheckdel1+= checkdel[i].getAttribute('value') + ";";
                            }
                        }
                        console.log(arraycheckdel1.substring(0,(arraycheckdel1.length-1))+"eee");
                        $("#wtel6").removeAttr("readonly");
                        //赋值产权性质
                        var wt=arraycheckdel1.substring(0,(arraycheckdel1.length-1));
                        that.wtel6=wt;
                        $("#wtel6").attr("readonly","readonly");
                    }, 100);

                }, (res)=>{
                    Indicator.close()
                });
            },
            delDhyyxx(e){
                const target = $(e.target), val = target.attr("owner");
                let  _this=this;
                MessageBox.confirm('确定删除此物业公司吗?').then(action => {
                    this.$http.post(
                        this.$api + "/yhcms/web/lpjbxx/delWyxx.do",
                        {
                            "parameters": {
                                "id": val
                            },
                            "foreEndType": 2,
                            "code": "300000031"
                        }
                    ).then(function (res) {
                        Indicator.close();
                        var result = JSON.parse(res.bodyText);
                        if (result.success) {
                            Toast({
                                message: '删除成功',
                                position: 'bottom',
                                duration: 1000
                            });
                            console.log(result);
                            setTimeout(function(){
                                window.location.reload();
                            },500);

                        } else {
                            Toast({
                                message: '删除失败: ' + result.message,
                                position: 'bottom'
                            });
                        }
                    }, function (res) {
                        Indicator.close();
                        Toast({
                            message: '删除失败! 请稍候再试',
                            position: 'bottom'
                        });
                    });
                });
            },
            qx_one3(){
                window.location.reload();
            },
            add_one3:function() {
                var _this = this;
                if(this.glzd=='' && this.wname3 == "" && this.wname5 == "" && this.wtel3 == ""){
                    MessageBox('提示', '物业公司全部为空，不予保存！');
                    this.showShadow=0;
                }
                /*
                 if (this.wname3 == '') {
                 MessageBox('提示', '请输入物业公司名称!');
                 return;
                 }*/
                if(this.glzd==''){
                    MessageBox('提示', '请选择管理座栋!');
                    return;
                }
                if(this.wname3==''){
                    MessageBox('提示', '请选择物业公司名称!');
                    return;
                }
                const url = this.$api + "/yhcms/web/lpjbxx/saveLpWy.do";
                let that = this;
                this.$http.post(
                    url,
                    {
                        "parameters": {
                            "lpid":this.lpid,//楼盘
                            "id": this.id, //运营商信息id
                            "wygs":this.wname3,//电话运营商
                            "wyaddress":this.wtel3,//电话承包公司
                            "wyphone":this.wname5, //电话承包公司
                            "glzd":this.glzd

                        },
                        "foreEndType": 2,
                        "code": "300000074"
                    }
                ).then(function (res) {
                    var result = JSON.parse(res.bodyText);
                    _this.showTab=2;
                    if (result.success) {
                        this.showShadow=0;
                        Toast({
                            message: '保存成功',
                            duration: 1500
                        });
                        setTimeout(function () {
                            window.location.reload();
                            // _this.$router.push({path: '/information_insert'})
                        }, 1500);
                    } else {
                        this.showShadow=1;
                        Toast({

                            message: '保存失败   '+ result.message,
                            duration: 1500
                        });
                    }
                }, function (res) {
                    this.showShadow=0;
                    Toast({
                        message: '保存失败  '+ result.message,
                        duration: 1500
                    });
                });
            },
        },
        mounted(){
            this.tebqqxpd();
        },
    }
</script>
