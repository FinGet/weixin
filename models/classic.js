import {HTTP} from '../utils/http.js'
class ClassicModels extends HTTP{
  getLatest(sCallback) {
    this.request({
      url: '/classic/latest',
      success: res => {
        sCallback(res)
      }
    })
  }
}

export default ClassicModels