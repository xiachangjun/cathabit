//index.js
//获取应用实例
const app = getApp(), t = getApp().globalData.host;

Page({
  data: {
    motto: 'Hello World',
  },

  onLoad: function () {

  },
  createHabit: function () {
    wx.redirectTo({
      url: "/pages/habit/create"
    });
  }

})
