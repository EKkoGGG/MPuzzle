// pages/welcome/welcome.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIPX: app.globalData.isIPX,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.clearStorageSync()
  },

  onStory:function(event){
    wx.navigateTo({
      url: '../story/story-list/story-list',
    })
  },
  onMystery: function (event) {
    wx.navigateTo({
      url: '../mystery/mystery-list/mystery-list',
    })
  }

})