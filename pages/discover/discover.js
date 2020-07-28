//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper1.jpg',
      '/images/swiper1.jpg',
      '/images/swiper1.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    circle: [{
      imagePath: '/images/python.jpg',
      imageName:'数据结构'
    }, {
        imagePath: '/images/python.jpg',
        imageName: '数据结构'
      }, {
        imagePath: '/images/python.jpg',
        imageName: '数据结构'
      }, {
        imagePath: '/images/python.jpg',
        imageName: '数据结构'
      }, {
        imagePath: '/images/python.jpg',
        imageName: '数据结构'
      }, {
        imagePath: '/images/python.jpg',
        imageName: '数据结构'
      }, {
        imagePath: '/images/python.jpg',
        imageName: '数据结构'
      }, {
        imagePath: '/images/python.jpg',
        imageName: '数据结构'
      }, {
        imagePath: '/images/python.jpg',
        imageName: '数据结构'
      }, {
        imagePath: '/images/python.jpg',
        imageName: '数据结构'
      }],

    lesson: [{
      imagePath: '/images/python.jpg',
      lessonName: "编译原理",
    }, {
      imagePath: '/images/python.jpg',
      lessonName: "数据建模",
      },{
        imagePath: '/images/python.jpg',
        lessonName: "数据库",
      },{
        imagePath: '/images/python.jpg',
        lessonName: "大数据",
      }]
  },
 // 搜索页面跳回
  onLoad: function (options) {
    if (options && options.searchValue) {
      this.setData({
        searchValue: "搜索：" + options.searchValue
      });
    }
  },

  // 搜索入口  
  wxSearchTab: function () {
    wx.redirectTo({
      url: '../searchPage/searchPage'
    })
  }

  
})
