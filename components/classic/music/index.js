// components/classic/music/index.js
import { classicBehavior } from '../classic-beh.js'
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBehavior],
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    waittingUrl: 'images/player@waitting.png',
    playingUrl: 'images/player@playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
