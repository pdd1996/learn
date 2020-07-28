//获取app实例
var app = getApp();

Page({
  data: {
    tabbar: {},
     class: [{
      imagePath: '/images/python.jpg',
      ResourceName: "4.4请求分页",
      ResourceSize: "767KB",
      ResourceTime: "2018.12.22 18:13",
      ResourceLook: "28人查看",
      ResourceExperience: "2经验"
    }, {
      imagePath: '/images/python.jpg',
      ResourceName: "4.4请求分页",
      ResourceSize: "767KB",
      ResourceTime: "2018.12.22 18:13",
      ResourceLook: "28人查看",
      ResourceExperience: "2经验"
    }, {
      imagePath: '/images/python.jpg',
      ResourceName: "4.4请求分页",
      ResourceSize: "767KB",
      ResourceTime: "2018.12.22 18:13",
      ResourceLook: "28人查看",
      ResourceExperience: "2经验"
    }]

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
  }
})
