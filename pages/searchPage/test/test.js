Page({
  data: {
    
    
    list: [
      {
        l:1,
        name: '全部',
      },
      {
        l:2,
        name: '课程',
      },
      {
        l:3,
        name: '老师',
      },
      {
        l:4,
        name: '学生',
      },
      
    ],
    line: {
      width: 40,
      left: 0,
      oldActive: 0,
      swipeIndex: 0,
      scrLeft: 0,
      timeOut: ''
    },  
    type:1,
    ctype:2,
    teacher: [{
      imagePath: '/images/python.jpg',
      className: "16软工2",
      classCourse: "编译原理",
      classTeacher: "金英",
      type: "学校课表班课"
    }, {
      imagePath: '/images/python.jpg',
      className: "16软工2",
      classCourse: "编译原理",
      classTeacher: "金三胖",
      type: "学校课表班课"
    }],
    class: [{
      imagePath: '/images/python.jpg',
      className: "java高级开发工程师",
      classGrading: 9.6,
      classNumber: 220,
      teacherName: "张老师",
    }, {
      imagePath: '/images/python.jpg',
      className: "java高级开发工程师",
      classGrading: 9.6,
      classNumber: 220,
      teacherName: "张老师",
    }],
    student: [{
      imagePath: '/images/python.jpg',
      className: "16软工2",
      classCourse: "日常考核",
      classTeacher: "李兆健",
      type: "学生"
    }, {
      imagePath: '/images/python.jpg',
      className: "16软工2",
      classCourse: "日常考核",
      classTeacher: "李兆健",
      type: "学生"
    }]

  },
  onLoad: function () {
    var _this = this;
    _this.lineInfo(0)
  },
  swipeChange: function (res) {
    var _this = this;
    if (res.detail.source == 'touch') {
      if (_this.data.line.timeOut) { clearTimeout(_this.data.line.timeOut) }
      _this.data.line.timeOut = setTimeout(function () {
        _this.lineInfo(res.detail.current, true)
      }, 10)
    }
  },
  lineInfo: function (even, type) {
    var _this = this;
    var index = even >= 0 ? even : even.currentTarget.id;
    index = parseInt(index);
    wx.getSystemInfo({
      success: function (info) {
        wx.createSelectorQuery().selectAll('.tabBtn').boundingClientRect(function (rect) {
          wx.createSelectorQuery().select('#tabButtonAll').scrollOffset(function (res) {
            var WinWidth = info.windowWidth;
            var width = rect[index].width;
            var left = rect[index].left;
            var scrLeft = res.scrollLeft;
            _this.setData({ 'line.width': width, 'line.left': left + scrLeft })
            if (_this.data.line.oldActive == index) {
            } else if (_this.data.line.oldActive < index) {
              if (left + width + (WinWidth / 750 * 72) > WinWidth) {
                _this.setData({ 'line.scrLeft': rect[index - 3].left + scrLeft })
              }
            } else {
              console.log(left)
              console.log(scrLeft)
              if (scrLeft > left + scrLeft - (WinWidth / 750 * 72)) {
                var i = index - 1 > 0 ? rect[index - 1].left + scrLeft : 0;
                _this.setData({ 'line.scrLeft': i })
              }
            }
            if (!type) {
              _this.setData({ 'line.swipeIndex': index })
            }
            _this.setData({ 'line.oldActive': index })
          }).exec()
        }).exec()
      }
    })
  }
})
