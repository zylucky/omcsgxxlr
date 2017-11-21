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
  .que{position: fixed;left: 0rem;}
  .lebiao{list-style-type:none;text-align: center;}
  .cqxz{height: 4.5rem;}
  .bitan{color: #FF0000;}
</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix pr">
          <span class="ys_tit w224">座栋号：</span>
          <div class="ys_item_con fl">
            <input type="text" v-model="zdh" value="" placeholder="自动生成" readonly onfocus="this.blur()">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">产权性质：</span>
          <div class="ys_item_con fl">
            <input type="text" v-model="chqxz" value="" placeholder="自动生成" readonly onfocus="this.blur()">
          </div>
        </li>
        <li class="clearfix pr">
         
          <span class="ys_tit zyzd"><span class="bitan">*</span>行政区域：</span>
          <div v-if="xzqx">
            <select v-model='xzqy'  @change="chooseMedicine()" placeholder="请选择（行政区域）">
              <option value="0"> 请选择（行政区域）</option>
              <option v-for="option in slots" v-bind:value="option.fdcode">
                {{ option.fdname }}
              </option>
            </select>
          </div>

           <div v-else>
            <select v-model='xzqy'  disabled="disabled" placeholder="请选择（行政区域）">
              <option value="0"> 请选择（行政区域）</option>
              <option v-for="option in slots" v-bind:value="option.fdcode">
                {{ option.fdname }}
              </option>
            </select>
          </div>
        </li>
        <li class="clearfix pr bor_bot_none">
          <span class="ys_tit"></span>
          <div class="ys_item_con fl bor_bot" v-if="xzqx">
          <select v-model='xzqysq' placeholder="请选择（商圈）">
            <option value="0"> 请选择（商圈）</option>
            <option v-for="option in slots2" v-bind:value="option.fdcode">
              {{ option.fdname }}
            </option>
          </select>
          </div>

           <div class="ys_item_con fl bor_bot" v-else>
          <select v-model='xzqysq' disabled="disabled" placeholder="请选择（商圈）">
            <option value="0"> 请选择（商圈）</option>
            <option v-for="option in slots2" v-bind:value="option.fdcode">
              {{ option.fdname }}
            </option>
          </select>
          </div>

        </li>
        <li class="clearfix pr">
          <span class="ys_tit zyzd"><span class="bitan">*</span>业务区域：</span>
          <div v-if="ywqx">
          <select v-model='ywqy'  @change="chooseyw()" placeholder="请选择（业务区域）">
            <option value="0"> 请选择（业务区域）</option>
            <option v-for="option in slots3" v-bind:value="option.id">
              {{ option.fd_name }}
            </option>
          </select>
          </div>

           <div v-else>
          <select v-model='ywqy' disabled="disabled" placeholder="请选择（业务区域）">
            <option value="0"> 请选择（业务区域）</option>
            <option v-for="option in slots3" v-bind:value="option.id">
              {{ option.fd_name }}
            </option>
          </select>
          </div>
        </li>
        <li class="clearfix pr bor_bot_none">
          <span class="ys_tit"></span>
          <div class="ys_item_con fl bor_bot" v-if="ywqx">
            <select v-model='ywqypq' placeholder="请选择（片区）">
              <option value="0"> 请选择（片区）</option>
              <option v-for="option in slots4" v-bind:value="option.id">
                {{ option.fdname }}
              </option>
            </select>
          </div>

          <div class="ys_item_con fl bor_bot" v-else>
            <select v-model='ywqypq' disabled="disabled" placeholder="请选择（片区）">
              <option value="0"> 请选择（片区）</option>
              <option v-for="option in slots4" v-bind:value="option.id">
                {{ option.fdname }}
              </option>
            </select>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit zyzd"><span class="bitan">*</span>地铁位置：</span>
          <div v-if="dtqx">
          <select v-model='xl'  @change="choosezd()" placeholder="请选择线路">
            <option value="0"> 请选择线路</option>
            <option v-for="option in slots5" v-bind:value="option.id">
              {{ option.fdname }}
            </option>
          </select>
          </div>
            <div v-else>
          <select v-model='xl' disabled="disabled"  placeholder="请选择线路">
            <option value="0"> 请选择线路</option>
            <option v-for="option in slots5" v-bind:value="option.id">
              {{ option.fdname }}
            </option>
          </select>
          </div>

        </li>
        <li class="clearfix pr bor_bot_none">
          <span class="ys_tit"></span>
          <div class="ys_item_con fl bor_bot" v-if="dtqx">
            <select v-model='zd'  @change="" placeholder="请选择站点">
              <option value="0"> 请选择站点</option>
              <option v-for="option in slots6" v-bind:value="option.id">
                {{ option.fdname}}
              </option>
            </select>
          </div>

          <div class="ys_item_con fl bor_bot" v-else>
            <select v-model='zd'  disabled="disabled"  placeholder="请选择站点">
              <option value="0"> 请选择站点</option>
              <option v-for="option in slots6" v-bind:value="option.id">
                {{ option.fdname}}
              </option>
            </select>
          </div>

        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">楼层：</span>
          <div class="ys_item_con fl" v-if="!lcqx">
            <input type="text" v-model="lc" value="" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" v-model="lc" value="" readonly onfocus="this.blur()" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">实际楼层：</span>
          <div class="ys_item_con fl" v-if="!sjlcqx">
            <input type="text" v-model="sjlc" value="" placeholder="请输入">
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" v-model="sjlc" readonly onfocus="this.blur()" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">标准层高：</span>
          <div class="ys_item_con fl" v-if="!bzcgqx">
            <input type="text" v-model="bzcg" value="" placeholder="请输入">m
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" v-model="bzcg" value="" readonly onfocus="this.blur()" placeholder="请输入">m
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">净层高：</span>
          <div class="ys_item_con fl" v-if="!jcgqx">
            <input type="text" v-model="jcg" value="" placeholder="请输入">m
          </div>
          <div class="ys_item_con fl" v-else>
            <input type="text" v-model="jcg" value="" readonly onfocus="this.blur()" placeholder="请输入">m
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn ys_default1_btn mb80" v-if="saveqx" @click="save()">保存</a>
     <a href="javascript:;" class="ys_default_btn ys_default2_btn mb80" v-else @click="fhElevatorMsg">返回</a>
    </div>
    <!--行政区域-->
   <!-- <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureLevel">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureLevel">确定</span>
      </div>
      <mt-picker :slots="slots" @change="selectLevel"></mt-picker>
    </mt-popup>-->
  </div>
</template>
<script>
    import { Toast } from 'mint-ui'; //toast
    import { Indicator} from 'mint-ui'; //toast
    import { MessageBox } from 'mint-ui'; //弹窗
    import {DatetimePicker} from 'mint-ui';  //日期选择
    import {Popup} from 'mint-ui'; //弹窗

    export default {
        data () {
            return {
                id:'',
                lpid:'',
                zdh:'',//座栋号
                chqxz:'',//产权性质
                xzqy:0,//行政区域
                xzqysq:0,//行政区域2
                ywqy:0,//业务区域
                ywqypq:0,//业务区域2
                xl:0,//地铁位置线路
                zd:0,//地铁位置站点
                lc:'',//楼层
                sjlc:'',//实际楼层
                bzcg:'',//标准层高
                jcg:'',//净层高
                dtzdglid:'',//地铁站点关联的id
                glfqid:'',//这个座栋关联分区的id
                xzqybm:'',
                popupVisible:false,
                slots: [],
                slots2: [],
                slots3: [],
                slots4: [],
                slots5: [],
                slots6: [],
                lcqx:0,
                sjlcqx:0,
                bzcgqx:0,
                jcgqx:0,
                xzqx:0,
                ywqx:0,
                dtqx:0,
                saveqx:0,
            }
        },
        methods: {
            getInitData(){
                /*const zdid = this.$route.params.zdid;*/
                this.id = this.$route.params.zdid;
                this.lpid = this.$route.params.lpid;
                this.$http.post(
                    this.$api + "/yhcms/web/lpzdxx/getLpzdxx.do",
                    {"parameters":{"id":this.id, "lpid":this.lpid},"foreEndType":2,"code":"300000064"}
                    ).then((res)=>{
                    Indicator.close();
                    const zdData=JSON.parse(res.bodyText).data.b0, xzqyData=JSON.parse(res.bodyText).data.b10, sqData=JSON.parse(res.bodyText).data.b6;
                    const ywData=JSON.parse(res.bodyText).data.b13, fqData=JSON.parse(res.bodyText).data.b3;
                    const luData=JSON.parse(res.bodyText).data.b8[0], dtzdData=JSON.parse(res.bodyText).data.b7;
                    const glfqData=JSON.parse(res.bodyText).data.b1, dtzdglData=JSON.parse(res.bodyText).data.b2;
                    const slotsData=JSON.parse(res.bodyText).data.b11, sqsyData=JSON.parse(res.bodyText).data.b5;
                    const yewuqyData=JSON.parse(res.bodyText).data.b12, yewuqyfqData=JSON.parse(res.bodyText).data.b4;
                    const xlsyData=JSON.parse(res.bodyText).data.b9;
                    this.zdh = zdData.zdh == null ? '自动生成' : zdData.zdh;
                    this.chqxz = zdData.chqxz == null ? '自动生成' : zdData.chqxz;
                    this.xzqy = xzqyData.fdcode == null ? 0 : xzqyData.fdcode;
                    this.xzqysq = sqData.fdcode == null ? 0 : sqData.fdcode;
                    this.ywqy = ywData.id == null ? 0 : ywData.id;
                    this.ywqypq = fqData.id == null ? 0 : fqData.id;
                    this.xl = luData == null ? 0 : luData.id;
                    this.zd = dtzdData.id == null ? 0 : dtzdData.id;
                    this.lc = zdData.lc == null ? '请输入' : zdData.lc;
                    this.sjlc = zdData.sjlc == null ? '请输入' : zdData.sjlc;
                    this.bzcg = zdData.bzcg == null ? '请输入' : zdData.bzcg;
                    this.jcg = zdData.jcg == null ? '请输入' : zdData.jcg;
                    this.glfqid = glfqData.id;
                    this.dtzdglid = dtzdglData.id;
                    this.slots = slotsData;
                    this.slots2 = sqsyData;
                    this.slots3 = yewuqyData;
                    this.slots4 = yewuqyfqData;
                    this.slots5 = xlsyData;
                    $('title').html(zdData.topic + '一' +  zdData.zdh);
                    let a =zdData.topic + '一' + zdData.zdh;
                    this.choosezd();
                     //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.lcqx=true;
                        this.saveqx = false;

                        if(this.lc==''){
                          this.lcqx=false;
                          this.saveqx = true;
                        }

                        this.sjlcqx=true;
                        if( this.sjlc==''){
                          this.sjlcqx=false;
                          this.saveqx = true;
                        }

                        this.bzcgqx=true;
                        if(this.bzcg==''){
                        this.bzcgqx=false;
                            this.saveqx = true;
                        }

                        this.jcgqx=true;
                        if(this.jcg==''){
                         this.jcgqx=false;
                            this.saveqx = true;
                        }

                        if(this.glfqid !=''&&this.glfqid!=null){
                          this.ywqx=false;
                            this.saveqx = true;
                         }
                         if(this.xzqysq!=''&&this.xzqysq!=null&&this.xzqysq!=0){
                          this.xzqx=false;
                             this.saveqx = true;
                        }
                        if( this.dtzdglid!=''&& this.dtzdglid !=null){
                          this.dtqx=false;
                            this.saveqx = true;
                        }
                        if(this.glfqid !=''&&this.glfqid!=null && this.xzqysq!=''&&this.xzqysq!=null&&this.xzqysq!=0 && this.dtzdglid!=''&& this.dtzdglid !=null && this.jcg!='' && this.bzcg!='' && this.sjlc!='' &&this.lc!=''){
                            this.saveqx = false;
                        }else{
                            this.saveqx = true;
                        }

                    }
                    //var charString="http://omc.urskongjian.com/wanx/#/list";
                   // alert(encodeURIComponent(charString));
                     //权限判断
                    // this.tebqqxpd();
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
                    //data.qxzt = 20;
                    if(data.qxzt == 0){
                        MessageBox('提示',meg);
                        window.history.go(-1);
                        return;
                    }
                    //此用户有所有权限
                    if(data.qxzt == 1 || data.qxzt == 21 || data.qxzt == 31 || data.qxzt == 41 || data.qxzt == 43){
                        this.lcqx = false;
                        this.sjlcqx = false;
                        this.bzcgqx = false;
                        this.jcgqx = false;
                        this.xzqx = true;
                        this.ywqx = true;
                        this.dtqx = true;
                        this.saveqx = true;
                    }
                    if(data.qxzt == 2){
                        MessageBox('提示',"系统中无此用户或此用户已被禁用，请联系管理员！");
                        this.$router.push({path: '/login'});
                    }
                    //只有查看权限
                    if(data.qxzt == 11){
                        this.lcqx=true;
                        this.sjlcqx=true;
                        this.bzcgqx=true;
                        this.jcgqx=true;
                        this.xzqx=false;
                        this.ywqx=false;
                        this.dtqx=false;
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
            fhElevatorMsg(){
            window.history.go(-1);
            },
            //行政区域的change事件的方法
            chooseMedicine(){
                this.slots2=[];
                  this.$http.post(
                      this.$api + "/yhcms/web/lpjbxx/getLpXzqyFq.do",
                      {"parameters":{"district":this.xzqy},"foreEndType":2,"code":"300000064"}
                  ).then((res)=>{
                      Indicator.close();
                      const xafqData=JSON.parse(res.bodyText).data.xzfq;
                      this.slots2 = xafqData;
                  }, (res)=>{
                      Indicator.close()
                  });
            },
            chooseyw(){
                this.slots4=[];
                this.$http.post(
                    this.$api + "/yhcms/web/lpjbxx/getLpYwqyFq.do",
                    {"parameters":{"district":this.ywqy},"foreEndType":2,"code":"300000064"}
                ).then((res)=>{
                    Indicator.close();
                    const yewuData=JSON.parse(res.bodyText).data.ywfq;
                    this.slots4 = yewuData;
                }, (res)=>{
                    Indicator.close()
                });
            },
            choosezd(){
                this.$http.post(
                    this.$api + "/yhcms/web/lpjbxx/getLpSubwaystation.do",
                    {"parameters":{"line_id":this.xl},"foreEndType":2,"code":"300000064"}
                ).then((res)=> {
                    Indicator.close();
                    const zdsyData=JSON.parse(res.bodyText).data.subway_station;
                    this.slots6 = zdsyData;
                }, (res)=>{
                    Indicator.close()
                });

            },
            save(){
                if(this.xzqy != 0 && this.xzqysq != 0 && this.ywqy != 0 && this.ywqypq != 0 && this.xl != 0 && this.zd != 0){
                    this.$http.post(
                        this.$api + "/yhcms/web/lpzdxx/saveLpzdxx.do",
                        {"parameters":{ "lpid":this.lpid,"id":this.id,"bid":this.ywqypq,"sid":this.zd,"bsbid":this.glfqid,"bssid":this.dtzdglid,"lc":this.lc,"sjlc":this.sjlc,"bzcg":this.bzcg,"jcg":this.jcg,"fd_city_code":this.xzqysq},"foreEndType":2,"code":"300000064"}
                    ).then((res)=> {

                        Indicator.close();
                        var result = JSON.parse(res.bodyText);
                        if (result.success) {
                            Toast({
                                message: '保存成功',
                                duration: 1000
                            });
                            /*this.xzqy = '';*/
                            setTimeout(function () {
                                history.go(-1);
                            }, 1000);
                        } else {
                            Toast({
                                message: '保存失败: ' + result.message,
                                position: 'bottom'
                            });
                        }
                    }, (res)=>{
                        Indicator.close()
                    });
                }else{
                    confirm("必填项不能为空！");
                }
            },
        },
        mounted(){
           // this.getInitData();
           this.tebqqxpd();
        },
    }
</script>
