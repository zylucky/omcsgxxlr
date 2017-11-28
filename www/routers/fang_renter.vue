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
      <h1 style="text-align:center;font-size:20px;background-color: #3a94f8;color: #FFFFFF !important;padding: 5px 20px;">租户信息</h1>
      <table class="ys_item_ul mb20" style="width:100%;border-collapse: collapse;">
        <tr style="background-color: white;"><td colspan="4" style="height: .2rem;"></td></tr>
        <tr style="text-align:center;background-color: rgb(206,206,206);height: .7rem;">
          <td style="width: 2.5rem;">姓名</td>
          <!--<td style="width: 1.5rem;">性别</td>-->
          <td style="width: 2.8rem;">联系方式</td>
          <td>操作</td>
        </tr>
        <tr v-for="datum in data" class="clearfix pr" style="text-align:center;border-bottom: 1px solid rgb(206,206,206);height: .8rem;">
          <td> <span class="ys_tit">{{datum.topic}}</span></td>
         <!-- <td> <span class="ys_tit">{{datum.xb == "1" ? "男":""}}{{datum.xb == "0" ? "女":""}}</span></td>-->
          <td><span>{{datum.lxfs}}</span></td>
          <td v-if="xgsqfyqx == 1">
            <i class="" :rent="datum.id" @click="modifyRent($event)">修改</i>&nbsp;&nbsp;&nbsp;
            <i class="" :rent="datum.id" @click="modifyRentck($event)">查看</i>&nbsp;&nbsp;&nbsp;
          </td>
          <td v-else-if="xgsqfyqx == 2">
            <i class="" :rent="datum.id" @click="modifyRent($event)">修改</i>
            <i class="" :rent="datum.id" @click="modifyRentck($event)">查看</i>
            <i class="" :rent="datum.id" @click="modifyRent1($event)">删除</i>
          </td>
          <td v-else>
            <i class="" :rent="datum.id" @click="modifyRentck($event)">查看</i>&nbsp;&nbsp;&nbsp;
          </td>
        </tr>
      </table>
      <div class="tc bjt" style="position: fixed;bottom: 0px;width: 100%;height: 1rem;" v-if="tjzhqx" @click="addRent"><a href="javascript:;" style="position: relative;bottom: -0.25rem;" class="cl_link f30">+添加租户</a></div>
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
                xgsqfyqx:2,
                tjzhqx:true,
            }
        },
        methods: {
            getInitData(){
                const fyid = this.$route.params.fyid;
                this.id = fyid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/zdfyxx/getLpZdZhxx.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "id":fyid},"foreEndType":2,"code":"300000021"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    const data1 = JSON.parse(res.bodyText).data1;
                    that.data = data;
                    $('title').html(data1.topic + '一' + data1.zdh + '一' + data1.fybh);
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 46){
                        this.xgsqfyqx = 1;
                    }
                }, (res)=>{
                    Indicator.close()
                });
            },
            tebqqxpd(){
                let user22 = JSON.parse(localStorage.getItem('cook'));
                const url = this.$api + "/yhcms/web/wxqx/getFyxxqx.do";
                this.$http.post(url, {"cookie":user22.sjs,"fyid":this.$route.params.fyid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
                    console.log(data.qxzt+"aaaa");
                    //data.qxzt = 3;
                    if(data.fyzt == 1 || data.ryzt == 1){
                        this.tjzhqx = false;
                    }
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 22 || data.qxzt == 32 || data.qxzt == 45 || data.qxzt == 47){
                        this.tjzhqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    if(data.qxzt == 3 || data.qxzt == 11 || data.qxzt == 21 || data.qxzt == 23 || data.qxzt == 31 || data.qxzt == 33 || data.qxzt == 41 || data.qxzt == 42 || data.qxzt == 43){
                        this.xgsqfyqx = 3;
                        this.tjzhqx = false;
                        $("input").attr('placeholder',"");
                    }

                    if(data.qxzt == 45 && data.ryzt == 5){
                        MessageBox('提示',"此用户不属于收购部人员！");
                        this.$router.push({path: '/login'});
                    }
                    this.getInitData();
                }, (res)=>{
                    Indicator.close()
                });
            },
            addRent(){
                this.$router.push({path:'/fang_renter/add/'+this.id});
            },
            modifyRent(e){
                const target = $(e.target), val = target.attr("rent");
                this.$router.push({path:'/fang_renter/edit/'+val+'/'+this.id});
            },
            modifyRentck(e){
                const target = $(e.target), val = target.attr("rent");
                this.$router.push({path:'/fang_renter/see/'+val+'/'+this.id});
            },
            modifyRent1(e){
                const target = $(e.target), val = target.attr("rent");
                let  _this=this;
                MessageBox.confirm('确定删除此租户信息吗?').then(action => {
                    Indicator.open({
                        text: '删除中...',
                        spinnerType: 'fading-circle'
                    });
                    this.$http.post(
                        this.$api + "/yhcms/web/zdfyxx/deleteZhxx.do",
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
                        console.log(result);
                        if (result.success) {
                            Toast({
                                message: '删除成功',
                                position: 'bottom',
                                duration: 1000
                            });

                            setTimeout(function(){
                                window.location.reload();
                                //location='/#/fang_renter/'+_this.id;

                                // _this.$router.push({path:'/fang_renter/'+_this.id});

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
            }
        },
        mounted(){
            this.tebqqxpd();

        },
    }
</script>
