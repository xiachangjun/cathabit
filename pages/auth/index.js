//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
    if(wx.getStorageSync('userInfo')){
      this.login()
    // this.setData({
    //     userInfo: wx.getStorageSync('userInfo'),
    //     hasUserInfo: true
    //   })
    }
   
    // if (app.globalData.userInfo) {
      
      
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
      
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     console.log(res)
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
      var that=this
 
      wx.setStorageSync("userInfo", e.detail.userInfo)
      this.login(e)
     
    
    // console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    // this.setData({
    //   userInfo: e.detail.userInfo,
    //   hasUserInfo: true
    // })
  },
  login:function(e){
    var that=this
    wx.login({

      success: ress => {
        var ginfo = wx.getStorageSync('userInfo')
        wx.request({
          url:'https://www.xiachangjun.com/api/v1/user/login',
          method: 'POST',
          data: { code: ress.code, info: ginfo},
          header: {
            'Accept': 'application/json'
          },
          success: function (ress) {
            // console.log(ress.data.status_code)
            if(ress.data.status_code==200){
              that.setData({
                userInfo: ginfo,
                hasUserInfo: true
              })
              getApp().globalData.isLogin=true;
            }
         
          }
        })
      }
    })
  }
})
