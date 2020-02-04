var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer_hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var stories = wx.getStorageSync(options.id.toString())
    if (stories) {
      this.setData({
        story_data: stories,
        answer_hidden: false
      })
    } else {
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
    }

  },
  processStoryData: function(data) {
    var stories = {
      id: data.id,
      question: data.question,
      answer: data.answer
    }
    wx.setStorageSync(data.id.toString(), stories)
    this.setData({
      story_data: stories,
      answer_hidden: this.data.answer_hidden
    })
  },

  onStoryDetail: function(event) {
    var answer_hidden = this.data.answer_hidden
    if (answer_hidden == true) {
      this.setData({
        answer_hidden: false
      })
    } else {
      this.setData({
        answer_hidden: true
      })
    }
  }

})