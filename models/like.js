import { HTTP } from '../utils/http.js'
class LikeModels extends HTTP {
  like(behavior, artID, category) {
    let url = behavior == 'like' ? 'like':'like/cancel'
    this.request({
      url: url,
      method: 'post',
      data: {
        art_id: artID,
        type: category
      }
    })
  }
}

export default LikeModels