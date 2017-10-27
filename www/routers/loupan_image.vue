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
      <div class="common_title">楼盘图</div>
      <div class="image_wrap clearfix mb140">
        <div v-if="il < 5 && imgqx==2" class="upload_btn mr10 fl">
          <input @change='add_img1' id="file_add" tag="lp" type="file" multiple>
        </div>
        <div v-if="imgqx==3" class="mr10 fl">

        </div>
        <div class="img_demo fl pr" v-for='(item,index) in imgList' v-if="item.isdelete==0 && imgxqx==2">
          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
          <i class="delete_icon" tag="lp" @click='delete_img(index, item.id, $event)'></i>
        </div>
        <div class="img_demo fl pr" v-for='(item,index) in imgList' v-if="item.isdelete==0 && imgxqx==3">
          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
        </div>
      </div>
      <div class="common_title">楼盘封面图</div>
      <div class="image_wrap clearfix mb140">
        <div v-if="fl < 1 && imglpfmtqx==2" class="upload_btn mr10 fl">
          <input @change='add_img2' id="file_add" tag="fm" type="file">
        </div>
        <div v-if="imglpfmtqx==3" class="mr10 fl">
        </div>
        <div class="img_demo fl pr" v-for='(item,index) in fmList' v-if="item.isdelete==0 && imglpfmtxqx==2">
          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
          <i class="delete_icon" tag="fm" @click='delete_img(index, item.id, $event)'></i>
        </div>
        <div class="img_demo fl pr" v-for='(item,index) in fmList' v-if="item.isdelete==0 && imglpfmtxqx==3">
          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
        </div>
      </div>
    </div>
    <a href="javascript:;" class="ys_default_btn mb80" v-if="saveqx" @click.stop.prevent="saveToserver">保存</a>
    <a href="javascript:;" class="ys_default_btn mb80" v-else @click.stop.prevent="fanhui">返回</a>
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
                imgList:[],
                fmList:[],
                il: 0,
                fl: 0,
                upload: 0,
                uploaded: 0,
                imgqx:2,
                imgxqx:2,
                imglpfmtqx:2,
                imglpfmtxqx:2,
                saveqx:true,
            }
        },
        methods:{
            delete_img(index, id, event){
                const tag = $(event.target).attr("tag"), which = tag === "lp" ? "imgList":"fmList";
                const filter = tag === "lp" ? "il" : "fl";
                if(id !== 'xxx'){
                    this[which][index].isdelete = "1";
                }
                else{
                    this[which].splice(index,1);
                    this.upload -= 1;
                }
                this[filter] -= 1;
            },
            add_img1(event){
                const fis = event.target.files;
                let len = fis.length;
                len = Math.min(len, 5 - this.il);
                for(let i = 0; i < len; ++i){
                    this.append_img(fis[i]);
                }
            },
            add_img2(event){
                const fis = event.target.files;
                let len = fis.length;
                len = Math.min(len, 5 - this.fl);
                for(let i = 0; i < len; ++i){
                    this.append_img(fis[i]);
                }
            },
            append_img(image){
                const type = image.type;
                if (!/\/(?:jpeg|jpg|png)/i.test(type)){
                    return;
                }
                const tag = $(event.target).attr("tag"), which = tag === "lp" ? "imgList":"fmList";
                const filter = tag === "lp" ? "il" : "fl";
                const that=this, reader = new FileReader();
                reader.onloadend = () => {
                    let ret;
                    const imgx = new Image();
                    imgx.src = reader.result;
                    imgx.onload = function(){
                        var canvas = document.createElement('canvas');
                        canvas.width = imgx.naturalWidth;
                        canvas.height = imgx.naturalHeight;
                        canvas.getContext("2d").drawImage(imgx, 0, 0);
                        ret = canvas.toDataURL(type, .2);

                        const obj = {
                            id: "xxx",
                            lpid: that.lpid,
                            isdelete: 0,
                            type: 2,
                            suffix:type,
                            url: ret
                        };
                        that[which].push(obj)
                    }
                }
                reader.readAsDataURL(image);
                this[filter] += 1;
                this.upload += 1;
            },
            getInitData(){
                const lpid = this.$route.params.lpid;
                this.lpid = lpid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/lpjbxx/getLpTp.do";
                let that = this;
                this.$http.post(url, {"parameters":{"lpid":lpid},"foreEndType":2,"code":"300000059"}).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    const topic = JSON.parse(res.bodyText).topic;
                    that.imgList = data.lppic;
                    that.il = that.imgList.length;
                    that.fmList = data.fmpic;
                    that.fl = that.fmList.length;
                     //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.imgqx = 3;
                        this.imgxqx = 3;
                        this.saveqx = false;
                        if(this.il < 5){
                            this.imgqx = 2;
                            this.imgxqx = 2;
                            this.saveqx = true;
                        }
                        this.imglpfmtqx = 3;
                        this.imglpfmtxqx = 3;
                        if(this.fl == 0){
                            this.imglpfmtqx = 2;
                            this.imglpfmtxqx = 2;
                            this.saveqx = true;
                        }
                    }
                    $('title').html(topic);
                }, (res)=>{
                    Indicator.close()
                });
            },
            tebqqxpd(){
                let user22 = JSON.parse(localStorage.getItem('cook'));
                const url = this.$api + "/yhcms/web/wxqx/getLpqx.do";
                this.$http.post(url, {"cookie":user22.sjs,"lpid":this.$route.params.lpid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const meg = JSON.parse(res.bodyText).message;
                    this.ryzt = data.ryzt;
                    this.qxzt = data.qxzt;
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
                        this.imglpfmtqx = 3;
                        this.imglpfmtxqx = 3;
                        this.saveqx = false;
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
            fanhui(){
                window.history.go(-1);
            },
            saveToserver(){
                //开始上传图片
                const that = this;
                let fp = [], fm = [];
                const cb = (img, obj) => {
                    if(img.id === "xxx"){
                        const [_, data] = img.url.split(","), [prefix, t] = img.suffix.split('/');
                        that.saveImages(data, t, function(path){
                            obj.push({"id":"", "isdelete":"0", "url":path})
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
                        obj.push({"id": img.id, "isdelete": img.isdelete, "url": img.url});
                    }
                };

                if(this.upload > 0){
                    Indicator.open({
                        text: '上传图片中...',
                        spinnerType: 'fading-circle'
                    });
                }

                this.imgList.forEach((img)=>{cb(img,fp)});
                this.imgList = fp;
                this.fmList.forEach((img)=>{cb(img,fm)});
                this.fmList = fm;

                //保存信息
                if(this.upload < 1){
                    // 没有新图片要上传
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

                let fp = this.imgList.map((item, idx)=>{
                    return {"id": item.id, "isdelete": item.isdelete, "url": item.url};
                });
                let fm = this.fmList.map((item, idx)=>{
                    return {"id": item.id, "isdelete": item.isdelete, "url": item.url};
                });

                this.$http.post(
                    this.$api + "/yhcms/web/lpjbxx/saveLpTp.do",
                    {"parameters":{"lpid":this.lpid,"lptp":fp,"fmtp":fm},"foreEndType":2,"code":"300000080"}).then((res)=>{
                    Indicator.close();
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        Toast({
                            message: '保存成功',
                            position: 'bottom',
                            duration: 1000
                        });

                        setTimeout(function(){
                            that.$router.push({path:'/index'});
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
            
            this.tebqqxpd();
        }
    }

</script>
