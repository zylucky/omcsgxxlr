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
    <div class="build_top" style="height: 12.27rem;overflow: scroll;">
      <h1 style="text-align:center;font-size:20px;background-color: #3a94f8;color: #FFFFFF !important;padding: 5px 20px;">业主信息</h1>
      <table class="ys_item_ul mb20" style="width:100%;border-collapse: collapse;">
        <tr style="background-color: white;"><td colspan="4" style="height: .2rem;"></td></tr>
        <tr style="text-align:center;background-color: rgb(206,206,206);height: .7rem;">
          <td style="width: 1.5rem;">姓名</td>
          <td style="width: 1.5rem;">性别</td>
          <td style="width: 2.8rem;">联系方式</td>
          <td>操作</td>
        </tr>
        <tr v-for="datum in data" class="clearfix pr" style="text-align:center;border-bottom: 1px solid rgb(206,206,206);height: .8rem;">
          <td v-if="datum.qxzt == 10 || datum.qxzt == 25 || datum.qxzt == 23 || datum.qxzt == 35 || datum.qxzt == 33 || datum.qxzt == 48 || datum.qxzt == 43" style="width: 1.5rem;"> <span class="ys_tit">****</span></td>
          <td v-else style="width: 1.5rem;"> <span class="ys_tit">{{datum.topic}}</span></td>
          <td v-if="datum.qxzt == 10 || datum.qxzt == 25 || datum.qxzt == 23 || datum.qxzt == 35 || datum.qxzt == 33 || datum.qxzt == 48 || datum.qxzt == 43" style="width: 1.5rem;"> <span class="ys_tit">*</span></td>
          <td v-else style="width: 1.5rem;"> <span class="ys_tit">{{datum.xb=="1"?"男":""}}{{datum.xb=="0"?"女":""}}</span></td>
          <td v-if="datum.qxzt == 10 || datum.qxzt == 25 || datum.qxzt == 23 || datum.qxzt == 35 || datum.qxzt == 33 || datum.qxzt == 48 || datum.qxzt == 43" style="word-wrap:break-word;width:2.8rem;"> <span>*****</span></td>
          <td v-else style="word-wrap:break-word;width:2.8rem;"> <span>{{datum.phone}}</span></td>
          <!--<td style="width: 1.5rem;"> <span class="ys_tit">{{datum.topic}}</span></td>
          <td style="width: 1.5rem;"> <span class="ys_tit">{{datum.xb=="1"?"男":""}}{{datum.xb=="0"?"女":""}}</span></td>
          <td style="word-wrap:break-word;width:2.8rem;"> <span>{{datum.phone}}</span></td>-->
          <td style="width: 2rem;" v-if="datum.qxzt == 1 || datum.qxzt == 21 || datum.qxzt == 22 || datum.qxzt == 31 || datum.qxzt == 32 || datum.qxzt == 46 || datum.qxzt == 50 || datum.qxzt == 42 || datum.qxzt == 44 || datum.qxzt == 49">
            <i class="" :owner="datum.id" @click="modifyOwner($event)">修改</i>
            <i class="" :owner="datum.id" @click="modifyOwnerck($event)">查看</i>
            <i class="" :owner="datum.id" @click="modifyOwner1($event)">删除</i>
          </td>
          <td style="width: 2rem;" v-if="datum.qxzt == 3 || datum.qxzt == 11 || datum.qxzt == 24 || datum.qxzt == 20 || datum.qxzt == 34 || datum.qxzt == 30 || datum.qxzt == 41 || datum.qxzt == 47 || datum.qxzt == 45">
            <i class="" :owner="datum.id" @click="modifyOwnerck($event)">查看</i>&nbsp;&nbsp;&nbsp;
          </td>
          <td style="width: 2rem;" v-if="datum.qxzt == 10 || datum.qxzt == 25 || datum.qxzt == 23 || datum.qxzt == 35 || datum.qxzt == 33 || datum.qxzt == 48 || datum.qxzt == 43">

          </td>
        </tr>
      </table>
      <div class="tc bjt" style="position: fixed;bottom: 0px;width: 100%;height: 1rem;" v-if="tjyzqx" @click="addOwner"><a href="javascript:;" style="position: relative;bottom: -0.25rem;" class="cl_link f30">+添加业主</a></div>
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
                tjyzqx:0,
            }
        },
        methods: {
            getInitData(){
                //right_arrow
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
                    //data.fyzt = 0;
                    console.log(data.qxzt);
                    console.log(data.ryzt);
                    console.log(data.fyzt);
                    console.log(this.tjyzqx+"aaa");
                    console.log(this.data);
                    if(data.fyzt == 1 || data.ryzt == 1){
                        this.tjyzqx = false;
                    }else{
                        this.tjyzqx = true;
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
                const url1 = this.$api + "/yhcms/web/zdfyxx/getZdYzQxLb.do";
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
                    console.log(data.qxzt+"aaaa");
                    //data.qxzt = 3;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        return;
                    }
                    //此用户有所有权限
                    /*if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 22 || data.qxzt == 31 || data.qxzt == 32 || data.qxzt == 46 || data.qxzt == 50 || data.qxzt == 42 || data.qxzt == 44 || data.qxzt == 49){

                    }*/
                    //只有查看权限
                   /* if(data.qxzt == 3 || data.qxzt == 11 || data.qxzt == 24 || data.qxzt == 20 || data.qxzt == 34 || data.qxzt == 30 || data.qxzt == 41 || data.qxzt == 47 || data.qxzt == 45){
                        alert(333);
                        this.modifyOwnerqx = false;
                    }*/
                    //只有添加按钮，没有其他的任何权限

                  /*if(data.qxzt == 45){
                   MessageBox('提示',"此用户不属于收购部人员！");
                   this.$router.push({path: '/login'});
                   }*/

                    that.data = data;
                    $('title').html(data1.topic + "一" + data1.zdh +"一" + data1.fybh);
                }, (res)=>{
                    Indicator.close()
                });
            },
            addOwner(){
                this.$router.push({path:'/fang_owner/add/'+this.id});
            },
            modifyOwner(e){
                const target = $(e.target), val = target.attr("owner");
                this.$router.push({path:'/fang_owner/edit/'+val});
            },
            modifyOwnerck(e){
                const target = $(e.target), val = target.attr("owner");
                this.$router.push({path:'/fang_owner/see/'+val});
            },
            modifyOwner1(e){
                const target = $(e.target), val = target.attr("owner");
                let  _this=this;
                Indicator.open({
                    text: '删除中...',
                    spinnerType: 'fading-circle'
                });

                this.$http.post(
                    this.$api + "/yhcms/web/zdfyxx/delYzxx.do",
                    {
                        "parameters": {
                            "id": val,
                            "fyid":this.id
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
                            // location='/#/fang_owner/'+_this.id;
                            //_this.$router.push({path:'/fang_owner/'+_this.id});

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
            }
        },
        mounted(){
            this.getInitData();
        },
    }
</script>
