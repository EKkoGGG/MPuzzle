var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vis : 'visibility: hidden'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var storyUrl = app.globalData.storyUrl + options.id
    wx.request({
      url: storyUrl,
      method: 'GET',
      success: function(res) {
        that.processStoryData(res.data)
        //console.log(res.data)
      },
    })
  },
  processStoryData: function(data) {
    var stories = {
        id: data.id,
        question: data.question,
        answer:data.answer
    }
    
    this.setData({
      story_data: stories
    })    
  },

  onStoryDetail: function(event) {
    var vis = this.data.vis;
    if (vis == 'visibility: hidden') {
      vis = 'visibility: visible';
      this.data.vis = 'visibility: visible';
    } else if (vis == 'visibility: visible') {
      vis = 'visibility: hidden';
      this.data.vis = 'visibility: hidden';
    }
    this.setData({
      visibility: vis
    })
  }

})