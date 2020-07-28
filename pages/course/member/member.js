//获取app实例
var app = getApp();

Page({
  data: {
    number:1,
    exp:22,
    member:'37',
    tabbar: {},
    memberDetail: [{
      imagePath: '/images/python.jpg',
      memberName: ' 李一凡',
      memberNo:1,
      memberExp:20
    }, {
      imagePath: '/images/python.jpg',
      memberName: ' 李一凡',
      memberNo: 2,
      memberExp: 20
    }, {
      imagePath: '/images/python.jpg',
      memberName: ' 李一凡',
      memberNo: 3,
      memberExp: 20
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
