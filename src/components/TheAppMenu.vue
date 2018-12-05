<template>
  <div>
    <el-menu
      style="width: 200px;"
      default-active="2"
      class="el-menu-vertical-demo"
    >
      <div class="logo">
        logo
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"/>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"/>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"/>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // isCollapse: true
    }
  },
  created () {
    console.log(this.$router)
  }
}
</script>

<style lang="scss" scoped>
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
</style>
