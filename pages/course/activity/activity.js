//获取app实例
var app = getApp();

Page({
  data: {
    state: 1,
    tabbar: {},
    task: [{
      imagePath: '/images/python.jpg',
      state: 0,
      type: '实验报告',
      number: 7,
      exp: 10,
    },
    {
      imagePath: '/images/python.jpg',
      state: 1,
      type: '实验报告',
      number: 7,
      exp: 10,
    }, {
      imagePath: '/images/python.jpg',
      state: 1,
      type: '实验报告',
      number: 7,
      exp: 10,
    }, {
      imagePath: '/images/python.jpg',
      state: 1,
      type: '实验报告',
      number: 7,
      exp: 10,
    }, {
      imagePath: '/images/python.jpg',
      state: 1,
      type: '实验报告',
      number: 7,
      exp: 10,
    }, {
      imagePath: '/images/python.jpg',
      state: 0,
      type: '实验报告',
      number: 7,
      exp: 10,
    }, {
      imagePath: '/images/python.jpg',
      state: 0,
      type: '实验报告',
      number: 7,
      exp: 10,
    },]
  },
  changeState: function (e) {
    this.setData({
      state: e.currentTarget.dataset.state
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
  }
})
