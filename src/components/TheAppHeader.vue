<template>
  <div class="header">
    <i class="el-icon-menu"/>
    <el-breadcrumb
      class="breadcrumb"
      separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header-operate">
      <el-dropdown trigger="click">
        <span class="name-link">
          张三疯<i class="el-icon-arrow-down el-icon--right"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    height: 100%;
    align-items: center;

    .breadcrumb {
      margin-left: 30px;
    }

    &-operate {
      flex-grow: 2;
      flex-shrink: 1;
      text-align: right;

      .name-link {
        color: #ff9800;
        cursor: pointer;
      }
    }
  }
</style>
