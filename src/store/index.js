/*
 * @Author: 吴晋哲 
 * @Date: 2018-04-10 14:19:50 
 * @Last Modified by: 吴晋哲
 * @Last Modified time: 2018-08-08 17:49:02
 */

import Vue from 'vue'
import Vuex from 'vuex'

// 在modules文件夹里面创建文件后自动添加到store中 this.$store.state.XXXX
const modules = require.context('./modules', false, /.js$/)
let m = []
modules.keys().map(key => {
  m[key.replace(/(\.\/)|(\.js)/ig, '')] = modules(key).default
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ...m
  }
})

export default store
