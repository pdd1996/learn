// pages/discover/searchPage/searchresult/searchresult.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: 1,
    ctype:1,
    ttype:1,
    stype:1,
    teacher: [{
      imagePath: '/images/python.jpg',
      className: "16软工2",
      classCourse: "编译原理",
      classTeacher: "金英",
      type:"学校课表班课"
    }, {
      imagePath: '/images/python.jpg',
      className: "16软工2",
      classCourse: "编译原理",
      classTeacher: "金三胖",
      type:"学校课表班课"
    }],
    class: [{
      imagePath: '/images/python.jpg',
      className: "java高级开发工程师",
      classGrading:9.6,
      classNumber:220,
      teacherName: "张老师",
    }, {
      imagePath: '/images/python.jpg',
      className: "java高级开发工程师",
      classGrading:9.6,
      classNumber:220,
      teacherName: "张老师",
    }],
    student:[{
      imagePath: '/images/python.jpg',
      className: "16软工2",
      classCourse: "日常考核",
      classTeacher: "李兆健",
      type:"学生"
    }, {
      imagePath: '/images/python.jpg',
      className: "16软工2",
      classCourse: "日常考核",
      classTeacher: "李兆健",
      type:"学生"
    }] 
  },
  changeState: function (e) {
    this.setData({
      state: e.currentTarget.dataset.state
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})