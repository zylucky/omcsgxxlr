<style scoped lang="less">

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
</style>
<template>
    <div class="all_elements" style="height: 12.27rem;overflow: scroll;">
        <div class="build_top h72 bg-white clearfix pr">
            <div class="ys_column3 fl tc" style="background-color: 	#3a94f8;text-align: left !important;padding: 5px ;padding-left: 20px;border-right: 1px solid #3a94f8;"   :class="this.showTab==2?'act':''" @click="showTab=2">
                物业公司</div>
            <!--<span class="ver_line left1"></span>-->
            <div class="ys_column3 fl tc" style="background-color: 	#84beff;text-align: left !important;padding: 5px 20px;border-right: 1px solid #3a94f8;" @click="showTab2">
                电话运营商</div>
            <!--<span class="ver_line left2"></span>-->
            <div class="ys_column3 fl tc" style="background-color: 	#84beff;padding: 5px;padding-left: 20px;"   @click="showTab1">
                网络运营商</div>
        </div>

        <div class="alla_elements" style="width:100%;height: 11.45rem;overflow: scroll;">
            <div class="build_top">
                <table class="ys_item_ul mb20" style="width:100%;border-collapse: collapse;">
                    <tr><td colspan="3" style="background-color: white;height: .2rem;"></td></tr>
                    <tr style="text-align:center;background-color: rgb(206,206,206);height: .7rem;">
                        <td style="width: 2.4rem;text-align: left !important;padding: 5px;padding-left: 20px;">物业公司</td>
                        <td style="width: 2.7rem;text-align: left !important;padding: 10px 25px">物业电话</td>
                        <td>操作</td>
                    </tr>
                    <tr v-for="datum in data" class="clearfix pr" style="text-align:center;border-bottom: 1px solid rgb(206,206,206);">
                        <td style="text-align: left !important;padding: 5px;padding-left: 20px;"> <span class="ys_tit" style="">{{datum.wygs}}</span></td>
                        <td style="text-align: left !important;padding: 10px 25px"> <span>{{datum.wyphone}}</span></td>
                        <td v-if="xgsqqx == 1">
                            <i class="" :owner="datum.id" @click="modifyDhyyxx($event)">修改</i>&nbsp;&nbsp;&nbsp;
                            <i class="" :owner="datum.id" @click="modifyDhyyxxck($event)">查看</i>
                        </td>
                        <td v-else-if="xgsqqx == 2">
                            <i class="" :owner="datum.id" @click="modifyDhyyxx($event)">修改</i>
                            <i class="" :owner="datum.id" @click="modifyDhyyxxck($event)">查看</i>
                            <i class="" :owner="datum.id" @click="delDhyyxx($event)">删除</i>
                        </td>
                        <td v-else>
                            <i class="" :owner="datum.id" @click="modifyDhyyxxck($event)">查看</i>&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                </table>

            </div>
        </div>

        <div class="tab tab3" :class="this.showTab==2?'show':'hide'" >
            <div class="tc pt20 bjt" style="position: fixed;bottom: 0px;width: 100%;height: 1rem;" @click="showShadow1" v-if="tjwygsqx">
                <a href="javascript:;" class="cl_link f30" style="position: relative;bottom: 0.1rem;">+添加物业公司</a>
            </div>
            <div class="tc pt20 bjt" style="position: fixed;bottom: 0px;width: 100%;height: 1rem;" v-else>
            </div>
        </div>
        <div class="shadow-p" :class="this.showShadow==1?'show':'hide'">
            <div class="info-tab three" :class="this.showTab==2?'show':'hide'">
                <p class="clearfix" v-if="!wnameqx1">
                    <label >物业公司名称:</label>
                    <input type="text" value="" name="wname3" id="wname3" v-model="wname3" placeholder="请输入" />
                </p>
                <p class="clearfix" v-else>
                    <label >物业公司名称:</label>
                    <input type="text" value="" readonly onfocus="this.blur()" name="wname3" id="wname3" v-model="wname3" placeholder="请输入" />
                </p>
                <p class="clearfix" v-if="!wnameqx2">
                    <label >联系方式:</label>
                    <input type="text" style="width: 2.58rem;" value="" name="wname5" id="wname5" v-model="wname5" placeholder="请输入" />
                </p>
                <p class="clearfix" v-else>
                    <label >联系方式:</label>
                    <input type="text" style="width: 2.58rem;" value="" readonly onfocus="this.blur()" name="wname5" id="wname5" v-model="wname5" placeholder="请输入" />
                </p>
                <p class="clearfix" v-if="!wnameqx3">
                    <label >物业地址:</label>
                    <input type="text" style="width: 2.58rem;" value="" name="wtel3" id="wtel3" v-model="wtel3" placeholder="请输入" />

                </p>
                <p class="clearfix" v-else>
                    <label >物业地址:</label>
                    <input type="text" style="width: 2.58rem;" value="" readonly onfocus="this.blur()" name="wtel3" id="wtel3" v-model="wtel3" placeholder="请输入" />

                </p>
                <p class="clearfix" style="clear: both;" v-if="glzdqx">
                    <label >管理座栋:</label>
                    <input type="text" style="width: 2.58rem;" value="" name="wtel6" id="wtel6" v-model="wtel6" placeholder="请选择" @click="glzdAction" readonly="readonly"/>
                    <input type="hidden" value="" name="glzd" id="glzd" v-model="glzd" placeholder="请选择"/>
                </p>
                <p class="clearfix" style="clear: both;" v-else>
                    <label >管理座栋:</label>
                    <input type="text" style="width: 2.58rem;" value="" name="wtel6" id="wtel6" v-model="wtel6" placeholder="请选择" readonly="readonly" onfocus="this.blur()"/>
                    <input type="hidden" value="" name="glzd" id="glzd" v-model="glzd" placeholder="请选择"/>
                </p>

                <div class="glzdClass" style="display:none;height: 1.5rem;overflow: scroll;display:inline-block;" v-show="glzdqx">
                    <li v-for="zdl in optionsgssx" class="clearfix pr" style="list-style:none;width:1.5rem;display:inline-block;">
                        <input type="checkbox" :value="zdl.zdh"  :id="zdl.id" class="checkbox" name="xzzdh" />
                        <label>{{zdl.zdh}}</label>
                    </li>
                    <span @click="checkTj" style="border: 1px solid rgb(58, 148, 248);position: fixed;left: 5.4rem;top: 6.8rem;padding: .05rem;background-color: rgb(58, 148, 248);color:#ffffff;border-radius:0.4em;">确定</span>
                </div>
                <div v-if="wyqdqx">
                    <button class="sure" @click="add_one3" style="background-color: rgb(58, 148, 248);">确定</button>
                    <button class="sure" @click="qx_one3" style="background-color: rgb(58, 148, 248);">取消</button>
                </div>
                <div v-else>
                    <button class="sure" @click="qx_one3" style="background-color: rgb(58, 148, 248);">返回</button>
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
            getInitData(){
                console.log(this.tjwygsqx+"getInitData");
                //   管理座栋    和pc 端作比较      这个比较麻烦
                // 添加物业公司的时候要把 楼盘下的所有的座栋查询出来  getLpdetWy   glzd存放的是座栋的ID,如： ";1;2;"
                const lpid = this.$route.params.lpid;
                this.lpid = lpid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/lpjbxx/getLpWy.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"300000033"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    const topic = JSON.parse(res.bodyText).topic;
                    that.data = data;
                    $('title').html(topic);
                }, (res)=>{
                    Indicator.close()
                });

            },
            /*getInitDatanei(){
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
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.tjwygsqx = false;
                        if(this.wname3 != "" && this.wname5 != "" && this.wtel3 != "" && this.optionsgssx.length != 0){
                            this.xgsqqx = false;
                            this.wyqdqx = false;
                        }else{
                            this.xgsqqx = 1;
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
                        if(this.this.optionsgssx.length == 0){
                            this.glzdqx = true;
                        }
                    }

                }, (res)=>{
                    Indicator.close()
                });
            },*/

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
                        console.log(arraycheckdel1.substring(0,(arraycheckdel1.length-1))+"aaa");
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
                        console.log(arraycheckdel1.substring(0,(arraycheckdel1.length-1))+"aaa");
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
                Indicator.open({
                    text: '删除中...',
                    spinnerType: 'fading-circle'
                });

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
