//index.js
//获取应用实例
const app = getApp(),t = getApp().globalData.host;
const citys = {
  '男生': ['绝育', '未绝育'],
  '女生': ['绝育', '未绝育']
};
Page({
  data: {
    info:{
      name:'',
      age:'',
      type:'',
      gender:'',
    },
    show: false,
    columns: [
      {
        values: Object.keys(citys),
        className: 'column1'
      },
      {
        values: citys['女生'],
        className: 'column2'
      }
    ]
  },

  onLoad: function () {
 
  },
  createCat:function(){
      console.log(this.data.info)
      wx.reLaunch({
        url: getApp().globalData.backRoute
      })
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  onChangeG(event) {
    // console.log(event)
    var gender = 'info.gender'
    this.setData({
      [gender]: event.detail
    });
  },
  onChange(event) {
  
    this.data.info.name=event
  },
  onChangeSe(event) {
    const { picker, value, index } = event.detail;
    picker.setColumnValues(1, citys[value[0]]);
  },
  onConfirm(event) {
    console.log(event.detail)
    // var thispcc = event.detail.detail.province + " " + event.detail.detail.city + " " + event.detail.detail.county
    var gender = 'info.gender'
      this.setData({ [gender]: event.detail},function(){
        this.onClose()
      });
   
  },

})
