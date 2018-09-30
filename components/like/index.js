// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: Boolean,
    count: Number,
    readOnly: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(e) {
      if (this.properties.readOnly) {
        return
      }
      let count = this.properties.count
      count = this.properties.like ? count - 1 : count + 1
      this.setData({
        count: count,
        like: !this.properties.like
      })
      let behavior = this.properties.like ? 'like' : 'cancel'

      // 派发一个 like 事件
      this.triggerEvent('like', {
        behavior: behavior
      }, {})
    }
  }
})
