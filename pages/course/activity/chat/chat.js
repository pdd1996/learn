// test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      loop: [
          {
              opt: "监听页面加载",
              id: 1,
              head: '../images/icon_contact_wx.png',
              class: 'message',
              visible: 'block'
          },
          {
              opt: "监听页面初次渲染完成",
              id: 2,
              head: '../images/icon_contact_wx.png',
              class: 'send',
              visible: 'block'
          },
          {
              opt: "监听用户下拉动作",
              id: 3,
              head: '../images/icon_contact_wx.png',
              class: 'message',
              visible: 'block'
          },
          {
              opt: "页面上拉触底事件的处理函数",
              id: 4,
              head: '../images/icon_contact_wx.png',
              class: 'send',
              visible: 'block'
          },
          {
              opt: "用户点击右上角分享",
              id: 5,
              head: '../images/icon_contact_wx.png',
              class: 'message',
              visible: 'block'
          },
      ],
      value: 0
  },
  ltap: function (e) {
      this.setData({
          value: e.target.dataset.id
      })
  },
  del: function (e) {
      var index = e.target.dataset.id - 1
      var param = {};
      var string = "loop[" + index + "].visible"
      param[string] = 'none';
      this.setData(param);
  },
  click_blank: function (e) {
      this.setData({
          value: 0
      })
  }
})