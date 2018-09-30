import { HTTP } from '../utils/http.js'
class LikeModels extends HTTP {
  /**
   * 点赞/取消点赞
   * @param  {[type]} behavior [点赞/取消点赞]
   * @param  {[type]} artID    [id]
   * @param  {[type]} category [类型]
   * @return {[type]}          [description]
   */
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

  getClassicLikeStatus(artID, category, sCallback) {
    this.request({
      url: `classic/${category}/${artID}/favor`,
      success: sCallback
    })
  }
}

export default LikeModels