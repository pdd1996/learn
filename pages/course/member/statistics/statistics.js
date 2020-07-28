import * as echarts from '../../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: [{
        value: 20,
        name: '出勤'
      }, {
        value: 2,
        name: '缺勤'
      }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
 
  data: {
    memberDetail: [{
      imagePath: '/images/python.jpg',
      memberName: ' 李一凡',
      memberQ: 1,
      memberC: 2,
      memberCA: 20
    }, {
        imagePath: '/images/python.jpg',
        memberName: ' 李一凡',
        memberQ: 1,
        memberC: 2,
        memberCA: 20
    }, {
        imagePath: '/images/python.jpg',
        memberName: ' 李一凡',
        memberQ: 1,
        memberC: 2,
        memberCA: 20
    }],
    ec: {
    }
  },

  onReady() {
  },

  echartInit(e) {
    initChart(e.detail.canvas, e.detail.width, e.detail.height);
  }
});
