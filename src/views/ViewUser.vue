<template>
  <div >
    <h1 class="user">用户列表</h1>
    <ul>
      <li><router-link to="/user/add">添加用户</router-link></li>
      <li><router-link to="/user/detail">用户详情</router-link></li>
      <li><router-link to="/user/detail">用户详情</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ViewUser',
  data () {
    return {
      app1Data: '1'
    }
  },
  mounted () {
    // console.log('app1.store', window.apps.app1)
    console.log('store', this.$store)
  },
  methods: {
    // changeApp1Data () {

    // }
  }
}
</script>

<style scoped>
  .user {
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    font-style: italic;
  }
</style>
