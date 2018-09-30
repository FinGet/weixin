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
    latest: true,
    likeCount: 0,
    likeStatus: false
  },
  /**
   * 喜欢
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  onLike: function(event) {
    // behavior 来自组件
    let behavior = event.detail.behavior
    let id = this.data.classicData.id,
      category = this.data.classicData.type
    likeModel.like(behavior, id, category)
  },
  /**
   * 向后
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  onLeft: function(e) {
    let index = this.data.classicData.index
    this._getClassic(index,'next')
  },
  /**
   * 向右
   * @return {[type]} [description]
   */
  onRight: function() {
    let index = this.data.classicData.index
    this._getClassic(index,'previous')
  },
  /**
   * 获取期刊
   * @param  {[type]} index [description]
   * @param  {[type]} dir   [description]
   * @return {[type]}       [description]
   */
  _getClassic(index,dir) {
    classicModel.getClassic(index,dir, res => {
      this._getLikeStatus(res.id,res.type)
      this.setData({
        classicData: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },
  /**
   * 获取点赞状态
   * @param  {[type]} artID    [description]
   * @param  {[type]} category [description]
   * @return {[type]}          [description]
   */
  _getLikeStatus: function(artID, category) {
    likeModel.getClassicLikeStatus(artID, category, res => {
      this.setData({
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest(res => {
      this.setData({
        classicData: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status
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