<template>
  <div class="header">
    <i class="el-icon-menu"/>
    <el-breadcrumb
      class="breadcrumb"
      separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbList"
        :to="item.path"
        :key="index">{{ item.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header-operate">
      <el-dropdown trigger="click">
        <span class="name-link">
          子项目16555<i class="el-icon-arrow-down el-icon--right"/>
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
function getPath (path, routes) {
  let routerArray = path.split('/')
  let origin = routerArray.shift() // 拉出第一个元素，因为是''
  let currentPath = []
  while (routerArray.length > 0) {
    origin = `${origin}/${routerArray.shift()}`
    routes.forEach(item => {
      if (item.path === origin) {
        item.parent && currentPath.push({
          title: item.parent
        })

        currentPath.push({
          title: item.title,
          path: item.path
        })
      }
    })
  }
  return currentPath
}
export default {
  name: 'TheAppHeader',
  data () {
    return {
      breadcrumbList: []
    }
  },
  watch: {
    '$route' () {
      this.changeRouter()
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.changeRouter()
      }, 100)
    })
  },
  methods: {
    changeRouter () {
      this.breadcrumbList = getPath(this.$route.path, this.$router.options.routes)
    }
  }
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
