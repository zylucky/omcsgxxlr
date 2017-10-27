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
  .kbcss{
    height: 3px;
    background-color: #ffffff;
  }
  .bjt{
    background-image: url('../resources/images/1.png') !important;
  }

</style>
<template>
  <div class="all_elements">
    <div class="kbcss"></div>
    <div class="build_top" style="height: 12rem;overflow: scroll;">
      <h1 style="text-align:center;font-size:20px;background-color: #3a94f8;color: #FFFFFF !important;padding: 5px 20px;">代理人信息</h1>
      <table class="ys_item_ul mb20" style="width:100%;border-collapse: collapse;">
        <tr style="background-color: white;"><td colspan="4" style="height: .2rem;"></td></tr>
        <tr style="text-align:center;background-color: rgb(206,206,206);height: .7rem;">
          <td style="width: 1.5rem;">姓名</td>
          <td style="width: 1.5rem;">性别</td>
          <td style="width: 2.8rem;">联系方式</td>
          <td>操作</td>
        </tr>
        <tr v-for="datum in data" class="clearfix pr" style="text-align:center;border-bottom: 1px solid rgb(206,206,206);height: .8rem;">
            <td v-if="datum.qxzt == 10 || datum.qxzt == 25 || datum.qxzt == 23 || datum.qxzt == 35 || datum.qxzt == 33 || datum.qxzt == 48 || datum.qxzt == 43">  <span class="ys_tit">*****</span></td>
            <td v-else>  <span class="ys_tit">{{datum.topic}}</span></td>
            <td v-if="datum.qxzt == 10 || datum.qxzt == 25 || datum.qxzt == 23 || datum.qxzt == 35 || datum.qxzt == 33 || datum.qxzt == 48 || datum.qxzt == 43">   <span class="ys_tit">*</span></td>
            <td v-else>  <span class="ys_tit">{{datum.xb=="1"?"男":""}}{{datum.xb=="0"?"女":""}}</span></td>
            <td v-if="datum.qxzt == 10 || datum.qxzt == 25 || datum.qxzt == 23 || datum.qxzt == 35 || datum.qxzt == 33 || datum.qxzt == 48 || datum.qxzt == 43">  <span>******</span></td>
            <td v-else>  <span>{{datum.phone}}</span></td>
            <td v-if="datum.qxzt == 1 || datum.qxzt == 21 || datum.qxzt == 22 || datum.qxzt == 31 || datum.qxzt == 32 || datum.qxzt == 46 || datum.qxzt == 50 || datum.qxzt == 42 || datum.qxzt == 44 || datum.qxzt == 49">
                <i class="" :agent="datum.id" @click="modifyAgent($event)">修改</i>
                <i class="" :agent="datum.id" @click="modifyAgentck($event)">查看</i>
                <i class="" :agent="datum.id" @click="modifyAgent1($event)">删除</i>
            </td>
            <td v-if="datum.qxzt == 3 || datum.qxzt == 11 || datum.qxzt == 24 || datum.qxzt == 20 || datum.qxzt == 34 || datum.qxzt == 30 || datum.qxzt == 41 || datum.qxzt == 47 || datum.qxzt == 45">
                <i class="" :agent="datum.id" @click="modifyAgentck($event)">查看</i>&nbsp;&nbsp;&nbsp;
            </td>
          <td v-if="datum.qxzt == 10 || datum.qxzt == 25 || datum.qxzt == 23 || datum.qxzt == 35 || datum.qxzt == 33 || datum.qxzt == 48 || datum.qxzt == 43">

          </td>
        </tr>
      </table>
      <div class="tc bjt" style="position: fixed;bottom: 0px;width: 100%;height: 1rem;" v-if="tjdlrqx" @click="addAgent"><a href="javascript:;" style="position: relative;bottom: -0.25rem;display: block;" class="cl_link f30">+添加代理人</a></div>
      <div class="tc bjt" style="position: fixed;bottom: 0px;width: 100%;height: 1rem;" v-else></div>
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
                "data": [],
                tjdlrqx:0,
            }
        },
        methods: {
            getInitData(){
                const fyid = this.$route.params.fyid;
                this.id = fyid;
                let user22 = JSON.parse(localStorage.getItem('cook'));
                const url = this.$api + "/yhcms/web/wxqx/getFyxxqx.do";
                this.$http.post(url, {"cookie":user22.sjs,"fyid":this.id,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    //data.qxzt = 1;

                    if(data.fyzt == 1 || data.ryzt == 1){
                        this.tjdlrqx=false;
                    }else{
                        this.tjdlrqx=true;
                    }
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        return;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                }, (res)=>{
                    Indicator.close()
                });
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url1 = this.$api + "/yhcms/web/zdfyxx/getDlrxxQxLb.do";
                let that = this;
                this.$http.post(url1, {
                    "parameters": {
                        "cookie": user22.sjs, "id": this.id, "foreEndType": 2, "code": "30000008"
                    }
                    }).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    const data1 = JSON.parse(res.bodyText).data1;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    that.data = data;
                    $('title').html(data1.topic + '一' + data1.zdh + '一' + data1.fybh);
                }, (res)=>{
                    Indicator.close()
                });
            },
            addAgent(){
                this.$router.push({path:'/fang_agenter/add/'+this.id});
            },
            modifyAgent(e){
                const target = $(e.target), val = target.attr("agent");
                this.$router.push({path:'/fang_agenter/edit/'+val});
            },
            modifyAgentck(e){
                const target = $(e.target), val = target.attr("agent");
                this.$router.push({path:'/fang_agenter/see/'+val});
            },
            modifyAgent1(e){
                const target = $(e.target), val = target.attr("agent");
                let  _this=this;
                Indicator.open({
                    text: '删除中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/zdfyxx/delDlrxx.do",
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

                        setTimeout(function(){
                            window.location.reload();
                            // location='/#/fang_agenter/'+_this.id;
                            // _this.$router.push({path:'/fang_agenter/'+_this.id});

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
        },
        mounted(){
            this.getInitData();
        },
    }
</script>
