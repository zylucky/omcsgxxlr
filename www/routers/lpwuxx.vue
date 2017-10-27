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
    .hs{
        border: 0px solid red;
        line-height: .72rem;
        text-align: center;
        background-color: #3a94f8;
        color: 	#FFFFFF;
        font-size: .32rem;
    }
    .kbcss{
        height: 3px;
        background-color: #ffffff;
    }
    .dckg{
        border:0px solid red;
        background-color: rgb(206, 206, 206);
        height: 13px;
    }

</style>
<template>
    <div class="all_elements">
        <div class="hs">
            物业公司
        </div>
        <div class="dckg"></div>
        <div class="build_top">
            <ul class="ys_item_ul mb60">
                <!--<li class="clearfix pr" style="background-color:#f0eff5;">
                    <span class="ys_tit w224">总户数：</span>
                    <div class="ys_item_con fl" style="background-color:#f0eff5 !important;">
                        <input type="number" value="" style="background-color: #f0eff5;" v-model="zhsh" placeholder="自动生成" readonly="readonly">
                    </div>
                </li>
                <li class="clearfix pr" style="background-color:#f0eff5;">
                    <span class="ys_tit w224">空置总户数：</span>
                    <div class="ys_item_con fl" style="background-color:#f0eff5 !important;">
                        <input type="number" value="" style="background-color: #f0eff5;" v-model="kzzhsh" placeholder="自动生成" readonly="readonly">
                    </div>
                </li>-->
                <li class="clearfix pr">
                    <span class="ys_tit w224">物业公司名称：</span>
                    <div class="ys_item_con fl">
                        <!--<input type="number" value="" v-model="kfszhs" placeholder="请输入">-->
                        <input type="text" value="" name="wname3" id="wname3" v-model="wname3" placeholder="请输入" />
                    </div>
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit w224">联系方式：</span>
                    <div class="ys_item_con fl">
                       <!-- <input type="number" value="" v-model="yzzhs" placeholder="请输入">-->
                        <input type="text" value="" name="wname5" id="wname5" v-model="wname5" placeholder="请输入" />
                    </div>
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit w224">物业地址：</span>
                    <div class="ys_item_con fl">
                        <!--<input type="number" value="" v-model="shyzhs" placeholder="请输入">-->
                        <input type="text" value="" name="wtel3" id="wtel3" v-model="wtel3" placeholder="请输入" />
                    </div>
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit w224">管理座栋：</span>
                    <div class="ys_item_con fl">
                        <!--<input type="number" value="" v-model="shyzhs" placeholder="请输入">-->
                        <input type="text" value="" name="wtel6" id="wtel6" v-model="wtel6" placeholder="请选择" @click="glzdAction" readonly="readonly"/>
                        <input type="hidden" value="" name="glzd" id="glzd" v-model="glzd" placeholder="请选择"/>
                    </div>
                </li>
                <div class="glzdClass" style="display:none">
                    <li v-for="zdl in optionsgssx" class="clearfix pr" style="list-style:none">
                        <input type="checkbox" :value="zdl.zdh"  :id="zdl.id" class="checkbox" name="xzzdh"/>
                        <label>{{zdl.zdh}}</label>
                    </li>
                    <span @click="checkTj">确定</span>
                </div>
            </ul>
            <div class="shadow-p" :class="this.showShadow==1?'show':'hide'">
                <div class="info-tab three" :class="this.showTab==2?'show':'hide'">
                    <!--<p class="clearfix">
                        <label >物业公司名称:</label>
                        <input type="text" value="" name="wname3" id="wname3" v-model="wname3" placeholder="请输入" />
                    </p>



                    <p class="clearfix">
                        <label >联系方式:</label>
                        <input type="text" value="" name="wname5" id="wname5" v-model="wname5" placeholder="请输入" />
                    </p>
                    <p class="clearfix">
                        <label >物业地址:</label>
                        <input type="text" value="" name="wtel3" id="wtel3" v-model="wtel3" placeholder="请输入" />

                    </p>
                    <p class="clearfix">
                        <label >管理座栋:</label>
                        <input type="text" value="" name="wtel6" id="wtel6" v-model="wtel6" placeholder="请选择" @click="glzdAction" readonly="readonly"/>
                        <input type="hidden" value="" name="glzd" id="glzd" v-model="glzd" placeholder="请选择"/>
                    </p>-->

                    <!--<div class="glzdClass" style="display:none">
                        <li v-for="zdl in optionsgssx" class="clearfix pr" style="list-style:none">
                            <input type="checkbox" :value="zdl.zdh"  :id="zdl.id" class="checkbox" name="xzzdh"/>
                            <label>{{zdl.zdh}}</label>
                        </li>
                        <span @click="checkTj">确定</span>
                    </div>-->

                    <button class="sure" @click="add_one3">确定</button>
                    <button class="sure" @click="qx_one3">取消</button>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui'; //toast
    import { Indicator } from 'mint-ui';

    import { MessageBox } from 'mint-ui'; //弹窗

    export default {
        components: {},

        data () {
            return {
                wname3:"",
                wname5:"",
                wtel3:"",
                wtel6:"",
                glzd:"",
                lpid: '',
                zhsh: '',
                kfszhs: '',
                yzzhs: '',
                shyzhs: '',
                kzzhsh:'',
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
                const url = this.$api + "/yhcms/web/lpjbxx/getLpHs.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"300000042"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.zhsh = data.zhsh;
                    that.kfszhs = data.kfszhs;
                    that.yzzhs = data.yzzhs;
                    that.shyzhs = data.shyzhs;
                    that.kzzhsh=data.kzzhsh;
                }, (res)=>{
                    Indicator.close()
                });
            },
            showShadow1(){
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
            glzdAction(){
                //选择管理座栋
                $(".glzdClass").css("display","block");

            },
            //保存户数信息
            saveHouse(){
                var _this = this;

                if(!this.kfszhs){
                    MessageBox('提示', '请输入开发商总数');
                    return;
                }

                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/lpjbxx/saveLpHs.do",
                    {
                        "parameters": {
                            "lpid": this.lpid,
                            "zhsh": this.zhsh,
                            "kfszhs": this.kfszhs,
                            "yzzhs": this.yzzhs,
                            "shyzhs": this.shyzhs,
                            "kzzhsh":this.kzzhsh
                        },
                        "foreEndType": 2,
                        "code": "300000044"
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
            this.getInitData();
        },
    }
</script>
