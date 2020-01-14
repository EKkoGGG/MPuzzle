var story_data = require('../../../data/story-data.js')
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
  onLoad: function (options) {
    var storyTitleUrl = app.globalData.storyTitleUrl
    wx.request({
      url: storyTitleUrl,
      method:'GET',
      success:function(res){
        console.log('ok')
      },
    })
    this.setData({
      story_data: story_data.stroy_item
    })
  },

  onStoryButton: function (event) {
    var story_id = event.currentTarget.dataset.story_id;
    wx.navigateTo({
      url: '../story-detail/story-detail?id=' + story_id,
    })
  }

})