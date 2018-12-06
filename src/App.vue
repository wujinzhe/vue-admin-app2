<template>
  <el-container
    id="app">
    <el-aside
      class="aside"
      width="200px">
      <the-app-menu/>
    </el-aside>
    <el-container>
      <el-header style="height: 64px;">
        <the-app-header/>
      </el-header>
      <el-main class="main">
        <div class="router-view">
          <router-view/>
        </div>
        <a href=""/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TheAppHeader from '@/components/TheAppHeader'
import TheAppMenu from '@/components/TheAppMenu'

export default {
  name: 'App',
  components: {
    TheAppHeader,
    TheAppMenu
  }
}
</script>

<style lang="scss" scoped>
  .main {
    background-color: #f0f2f5;
    display: flex;
    padding: 24px 16px;
  }

  .aside {
    .logo {
      height: 64px;
      line-height: 64px;
      white-space: 5px;
      background-color: #ff9800;
      color: white;
      font-size: 30px;
      font-style: italic;
      font-weight: 900;
      text-align: center;
    }
  }

  .router-view {
    background-color: #ffffff;
    width: 100%;
    padding: 20px;
  }
</style>
