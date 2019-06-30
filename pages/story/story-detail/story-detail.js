var storyData = require('../../../data/story-data.js')
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
    var story_id = options.id;
    var story_data = storyData.stroy_item[story_id - 1];
    this.setData({
      story_data: story_data,
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