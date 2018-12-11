export default {
  state: {
    name: 'APP1'
  },
  mutations: {
    setName (state, name) {
      console.log('ddd')
      state.name = name
    }
  }
}
