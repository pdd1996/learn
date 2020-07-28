//获取app实例
var app = getApp();

Page({
  data: {
    tabbar: {},
    detailsclass: '16软工',
    detailscourse: '编译原理',
    detailsteacher: '金英',
    buildtime: '2018-12-12',
    studynumber: '232人',
    detail1: 12,
    detail2: 12,
  },
  switch1Change: function () {
    console.log("已置顶");
  },
  exit: function () {
    console.log("退出课程成功");
  },
  comment: function(){
    wx.navigateTo({
      url: 'comment/comment',
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    //调用函数
    app.editTabBar();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  // intervalChange:wx.getSystemInfo({
  //   success: function (res) {
  //     this.setData({
  //       clientHeight: res.windowHeight
  //     });
  //   }
  // })
})
