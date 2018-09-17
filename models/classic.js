import {HTTP} from '../utils/http.js'
class ClassicModels extends HTTP{
  getLatest(sCallback) {
    this.request({
      url: '/classic/latest',
      success: res => {
        sCallback(res)
        this._setLatestIndex(res.index)
      }
    })
  }
  getPrevious(index, sCallback){
    this.request({
      url:'/classic/'+index+'/previous',
      success:(res) => {
        sCallback(res)
      }
    })
  }
  isFirst(index) {
    return index == 1? true : false
  }
  isLatest(index) {
    let latestIndex = this._getLatestIndex(index)
    return latestIndex == index ? true : false
  }
  /**
   * 在缓存中存放最新一期的期数
   */
  _setLatestIndex(index) {
    let key = this._fullKey('latest-' + index)
    wx.setStorageSync(key, index)
  }
  _getLatestIndex(index) {
    let _index = wx.getStorageSync('latest-' + index)
    return _index
  }
}

export default ClassicModels