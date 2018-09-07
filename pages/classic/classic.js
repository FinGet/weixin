// pages/classic/classic.js
import ClassicModels from '../../models/classic.js'
import LikeModels from '../../models/like.js'
let classicModel = new ClassicModels()
let likeModel = new LikeModels()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: '',
    first: false,
    latest: true
  },
  onLike: function(event) {
    let behavior = event.detail.behavior
    let id = this.data.classicData.id,
      category = this.data.classicData.type
    likeModel.like(behavior, id, category)
  },
  onLeft: function(e) {
    console.log('left')
  },
  onRight: function() {
    console.log('right')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest(res => {
      // console.log(res)
      this.setData({
        classicData: res
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})