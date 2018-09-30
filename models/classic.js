import {HTTP} from '../utils/http.js'
class ClassicModels extends HTTP{
  /**
   * 加载最新期刊
   * @param  {[type]} sCallback [description]
   * @return {[type]}           [description]
   */
  getLatest(sCallback) {
    this.request({
      url: '/classic/latest',
      success: res => {
        sCallback(res)
        this._setLatestIndex(res.index)
        let key = this._getKey(res.index)
        wx.setStorageSync(key, res)
      }
    })
  }
  // 获取期刊
  getClassic(index, nextOrPrevious, sCallback) {
    let key = nextOrPrevious=='next'? this._getKey(index+1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url:'/classic/'+index+'/' + nextOrPrevious,
        success:(res) => {
          // 将期刊存在缓存里
          wx.setStorageSync(this._getKey(res.index), res)
          sCallback(res)
        }
      })
    } else {
      sCallback(classic)
    }
  }

  isFirst(index) {
    return index == 1? true : false
  }
  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }
  /**
   * 在缓存中存放最新一期的期数
   */
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }
  _getLatestIndex() {
    let _index = wx.getStorageSync('latest')
    return _index
  }

  _getKey(index) {
    let key = 'classic-' + index
    return key
  }
}

export default ClassicModels