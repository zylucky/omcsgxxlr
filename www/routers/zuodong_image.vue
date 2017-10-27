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
  .upload_btn{
    position: relative;
    input{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99999;
      opacity: 0;
    }
  }
  .image_wrap {
    .img_demo{
      margin-right: .2rem;
    }
  }
</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <div class="common_title">座栋照片</div>

      <div class="image_wrap clearfix mb140">
        <div v-if="il < 1 && imgqx==2" class="upload_btn mr10 fl">
          <input @change='add_img' id="file_add" type="file">
        </div>
         <div v-if="imgqx==3" class="mr10 fl">

        </div>

        <div class="img_demo fl pr" v-for='(item,index) in imgList' v-if="item.isdelete==0&&imgxqx==2">
          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
          <i class="delete_icon" @click='delete_img(index, item.id)'></i>
        </div>

        <div class="img_demo fl pr" v-for='(item,index) in imgList' v-if="item.isdelete==0&&imgxqx==3">
          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
        </div>
      </div>


      <a href="javascript:;" class="ys_default_btn ys_default1_btn mb80" @click.stop.prevent="saveToserver" v-if="saveimg">保存</a>
      <a href="javascript:;" class="ys_default_btn ys_default2_btn mb80" @click.stop.prevent="fhToserver" v-else>返回</a>
    </div>
  </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    import {Indicator} from 'mint-ui';
    import { MessageBox } from 'mint-ui'; //弹窗

    export default {
        data(){
            return{
                lpid: "",
                zdid: "",
                imgList:[],
                il: 0,
                upload: 0,
                uploaded: 0,
                imgqx:2,
                imgxqx:2,
                saveimg:true,
            }
        },
        methods:{
            delete_img(index, id){
                if(id !== 'xxx'){
                    this.imgList[index].isdelete = "1";
                }
                else{
                    this.imgList.splice(index,1);
                    this.upload -= 1;
                }
                this.il -= 1;
            },
            add_img(event){
                var reader = new FileReader();
                const tag = $(event.target).attr("tag");
                var img1=event.target.files[0];
                if (!/\/(?:jpeg|jpg|png)/i.test(img1.type)){
                    MessageBox('提示', '请选择图片文件!');
                    return
                }
                var that=this;
                reader.onloadend = () => {
                    let ret;
                    const imgx = new Image();
                    imgx.src = reader.result;
                    imgx.onload = function(){
                        var canvas = document.createElement('canvas');
                        canvas.width = imgx.naturalWidth;
                        canvas.height = imgx.naturalHeight;
                        canvas.getContext("2d").drawImage(imgx, 0, 0);
                        ret = canvas.toDataURL(img1.type, .5);

                        const obj = {
                            id: "xxx",
                            lpid: that.lpid,
                            isdelete: 0,
                            type: 2,
                            suffix:img1.type,
                            url: ret
                        };
                        that.imgList.push(obj)
                    }
                }
                reader.readAsDataURL(img1);
                this.il += 1;
                this.upload += 1;
            },
            getInitData(){
                const zdid = this.$route.params.zdid;
                this.zdid = zdid;
                this.lpid = sessionStorage.getItem("zd-lp");

                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/zdfyxx/getLpZdTp.do";
                let that = this;
                this.$http.post(url, {"parameters":{"zdid":zdid},"foreEndType":2,"code":"300000016"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    const data1 = JSON.parse(res.bodyText).data1;
                    that.imgList = data;
                    $('title').html(data1.topic + '一' +  data1.zdh);
                    that.il = that.imgList.length;
                    //权限判断
                     //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.imgqx = 3;
                        this.imgxqx = 3;
                        this.saveimg = false;
                        if(this.il == ""){
                            this.imgqx = 2;
                            this.imgxqx = 2;
                            this.saveimg = true;
                        }
                    }
                }, (res)=>{
                    Indicator.close()
                });
            },
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
                        this.imgqx = 3;
                        this.imgxqx = 3;
                        this.saveimg = false;
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
            fhToserver(){
            window.history.go(-1);
            },
            saveToserver(){
                //开始上传图片
                const that = this;
                let fp = [];
                if(this.upload > 0){
                    Indicator.open({
                        text: '上传图片中...',
                        spinnerType: 'fading-circle'
                    });
                }

                this.imgList.forEach((img)=>{
                    if(img.id === "xxx"){
                        const [_, data] = img.url.split(","), [prefix, t] = img.suffix.split('/');
                        that.saveImages(data, t, function(path){
                            fp.push({"id":"", "isdelete":"0", "url":path})
                            that.uploaded += 1;
                            if(that.uploaded >= that.upload){
                                // 新图片上传完成
                                Indicator.close();
                                setTimeout(function(){
                                    that.saveImageData();
                                }, 1000);
                            }
                        });
                    }
                    else{
                        fp.push({"id": img.id, "isdelete": img.isdelete, "url": img.url});
                    }
                });
                this.imgList = fp;

                //保存信息
                if(this.upload < 1){
                    setTimeout(function(){
                        Indicator.close();
                        that.saveImageData();
                    }, 1000);
                }
            },
            saveImages(pic, type, cb){
                const that = this;
                this.$http.post(
                    this.$api + "/yhcms/web/jcsj/uploadPic.do",
                    {"parameters":{ "smallPic":pic,"suffix": "." + type},"foreEndType":2,"code":"300000084"}
                ).then((res)=>{
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        cb && cb(result.data);
                    }
                    else{
                    }
                }, (res)=>{});
            },
            saveImageData(){
                const that = this;
                Indicator.open({
                    text: '保存中...',
                    spinnerType: 'fading-circle'
                });
                let lp = this.imgList.map((item, idx)=>{
                    return {"id": item.id, "isdelete": item.isdelete, "url": item.url};
                });

                this.$http.post(
                    this.$api + "/yhcms/web/zdfyxx/saveLpZdTp.do",
                    {"parameters":{"zdid":this.zdid,"zdtp":lp},"foreEndType":2,"code":"300000081"}).then((res)=>{
                    Indicator.close();
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        Toast({
                            message: '保存成功',
                            position: 'bottom',
                            duration: 1000
                        });

                        setTimeout(function(){
                            that.$router.push({path:'/zuodong_list/'+that.lpid});
                        },1000);
                    } else {
                        Toast({
                            message: '保存失败: ' + result.message,
                            position: 'bottom'
                        });
                    }
                },(res)=>{
                    Indicator.close();
                    Toast({
                        message: '保存失败! 请稍候再试',
                        position: 'bottom'
                    });
                });
            },
        },
        mounted(){
            
            this. tebqqxpd();
        }
    }

</script>
