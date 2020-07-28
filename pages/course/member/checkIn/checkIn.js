// pages/course/member/checkIn/checkIn.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    currentNumber:38,
    totalNumber:60,
    checkIn:[{
      name:"张三",
      time:"20:16",
      state:1
    },{
      name:"张三",
      time:"20:16",
      state:1
    },{
      name:"张三",
      state:0,
    },]
  },
  setGive: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否放弃签到',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  setEnd: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否结束并完成签到',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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