var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchTitle: '',
    loading_hidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var storyTitles = wx.getStorageSync('story_data')
    if (storyTitles) {
      this.setData({
        story_data: storyTitles
      })
      this.setData({
        loading_hidden: true
      })
    } else {
      this.setData({
        loading_hidden: false
      })
      var that = this
      var storyTitleUrl = app.globalData.storyTitleUrl
      wx.request({
        url: storyTitleUrl,
        method: 'GET',
        success: function(res) {
          that.processStoryData(res.data)
        },
      })
    }
  },

  processStoryData: function(datas) {
    var storyTitles = []
    for (var idx in datas) {
      var id = datas[idx].id
      var title = datas[idx].title
      var temp = {
        id: id,
        title: title
      }
      storyTitles.push(temp)
    }
    wx.setStorageSync('story_data', storyTitles)
    this.setData({
      story_data: storyTitles,
      loading_hidden: true
    })
  },
  onStoryButton: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../story-detail/story-detail?id=' + id,
    })
  },
  onSearch: function() {
    this.setData({
      loading_hidden: false
    })
    var that = this
    var storysearchUrl = app.globalData.storysearchUrl + this.data.searchTitle
    wx.request({
      url: storysearchUrl,
      method: 'GET',
      success: function (res) {
        that.processStoryData(res.data)
      },
    })
  },

  storyTitleInput: function (e) {
    this.setData({
      searchTitle: e.detail.value
    })
  }

})