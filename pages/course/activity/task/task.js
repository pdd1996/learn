// pages/course/activity/task/task.js
var upFiles = require('../../../../utils/upFiles.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:10,
    note:"请完成软件文档写作实验报告册",
    upFilesBtn:true,
    upFilesProgress:false,
    maxUploadLen:6,
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

  },
  
  previewImg: function (e) {
    let imgsrc = e.currentTarget.dataset.presrc;
    let _this = this;
    let arr = _this.data.upImgArr;
    let preArr = [];
    arr.map(function(v,i){
        preArr.push(v.path)
    })
  //   console.log(preArr)
    wx.previewImage({
        current: imgsrc,
        urls: preArr
    })
},
  // 删除上传图片 或者视频
delFile:function(e){
   let _this = this;
   wx.showModal({
       title: '提示',
       content: '您确认删除嘛？',
       success: function (res) {
           if (res.confirm) {
               let delNum = e.currentTarget.dataset.index;
               let delType = e.currentTarget.dataset.type;
               let upImgArr = _this.data.upImgArr;
               let upVideoArr = _this.data.upVideoArr;
               if (delType == 'image') {
                   upImgArr.splice(delNum, 1)
                   _this.setData({
                       upImgArr: upImgArr,
                   })
               } else if (delType == 'video') {
                   upVideoArr.splice(delNum, 1)
                   _this.setData({
                       upVideoArr: upVideoArr,
                   })
               }
               let upFilesArr = upFiles.getPathArr(_this);
               if (upFilesArr.length < _this.data.maxUploadLen) {
                   _this.setData({
                       upFilesBtn: true,
                   })
               }
           } else if (res.cancel) {
               console.log('用户点击取消')
           }
       }
   })
   
   
},
// 选择图片或者视频
uploadFiles: function (e) {
    var _this = this;
    wx.showActionSheet({
        itemList: ['选择图片', '选择视频'],
        success: function (res) {
          //   console.log(res.tapIndex)
            let xindex = res.tapIndex;
            if (xindex == 0){
                upFiles.chooseImage(_this, _this.data.maxUploadLen)
            } else if (xindex == 1){
                upFiles.chooseVideo(_this, _this.data.maxUploadLen)
            }
            
        },
        fail: function (res) {
            console.log(res.errMsg)
        }
    })
},
// 上传文件
subFormData:function(){
    let _this = this;
    let upData = {};
    let upImgArr = _this.data.upImgArr;
    let upVideoArr = _this.data.upVideoArr;
    _this.setData({
        upFilesProgress:true,
    })
    upData['url'] = config.service.upFiles;
    upFiles.upFilesFun(_this, upData,function(res){
        if (res.index < upImgArr.length){
            upImgArr[res.index]['progress'] = res.progress
            
            _this.setData({
                upImgArr: upImgArr,
            })
        }else{
            let i = res.index - upImgArr.length;
            upVideoArr[i]['progress'] = res.progress
            _this.setData({
                upVideoArr: upVideoArr,
            })
        }
      //   console.log(res)
    }, function (arr) {
        // success
        console.log(arr)
    })
}
})