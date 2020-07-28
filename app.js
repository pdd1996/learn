//app.js
App({
 
  editTabBar: function(){
    var tabbar = this.globalData.tabbar,
        currentPages = getCurrentPages(),
        _this = currentPages[currentPages.length - 1],
        pagePath = _this.__route__;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for(var i in tabbar.list){
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData:{
    userInfo:null,
    tabbar:{
      color: "#8A8A8A",
      selectedColor: "#01BBDD",
      backgroundColor: "#ffffff",
      borderStyle: "black",
      list: [
        {
          pagePath: "/pages/course/resource/resource",
          text: "资源",
          iconPath: "/images/tabBar2/resource.png",
          selectedIconPath: "/images/tabBar2/resource_b.png",
          selected: false
        },
        {
          pagePath: "/pages/course/member/member",
          text: "成员",
          iconPath: "/images/tabBar2/member.png",
          selectedIconPath: "/images/tabBar2/member_b.png",
          selected: false
        },
        {
          pagePath: "/pages/course/activity/activity",
          text: "活动",
          iconPath: "/images/tabBar2/activity.png",
          selectedIconPath: "/images/tabBar2/activity_b.png",
          selected: true
        },
        {
          pagePath: "/pages/course/information/information",
          text: "消息",
          iconPath: "/images/tabBar2/information.png",
          selectedIconPath: "/images/tabBar2/information_b.png",
          selected: false
        },
        {
          pagePath: "/pages/course/details/details",
          text: "详情",
          iconPath: "/images/tabBar2/details.png",
          selectedIconPath: "/images/tabBar2/details_b.png",
          selected: false
        }
      ],
      position: "bottom"
    }
  }
})
