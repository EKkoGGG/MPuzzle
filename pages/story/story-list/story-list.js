var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var storyTitleUrl = app.globalData.storyTitleUrl
    wx.request({
      url: storyTitleUrl,
      method: 'GET',
      success: function(res) {
        that.processStoryData(res.data)
      },
    })
  },

  processStoryData: function(datas) {
    var storyTitles = []
    for(var idx in datas){
      var id = datas[idx].id
      var title = datas[idx].title
      var temp = {
        id: id,
        title: title
      }
      storyTitles.push(temp)
    }
    this.setData({
      story_data: storyTitles
    })    
  },
  onStoryButton: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../story-detail/story-detail?id=' + id,
    })
  }

})