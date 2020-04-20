//index.js
//获取应用实例
const app = getApp(),t = getApp().globalData.host;
var n = require("../../utils/util.js");
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({
  data: {
    motto: 'Hello World',
  },

  onLoad: function () {
    //判断授权
    // if(!app.isLogin){
    //   wx.redirectTo({
    //     url: "/pages/auth/index"
    //   });
    // }
    //获取必要参数
    this.createInfo()
  },
  createInfo:function(){
    var cats= app.globalData.cats;
    var e = this;
    //判断是否有mao
    if(!cats.length){
     
      app.globalData.backRoute = n.getCurrentPageUrlWithArgs(e);
      Dialog.alert({
        message: '还没有小猫咪点击确定去添加'
      }).then(() => {
        //跳转前页面
        wx.redirectTo({
          url: "/pages/my/cats/createCat"
        });
      });
      
    }
    
  }
 

})
