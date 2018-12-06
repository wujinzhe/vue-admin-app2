<template>
  <div>
    <el-menu
      style="width: 200px;"
      default-active="2"
      class="el-menu-vertical-demo"
      router
    >
      <div class="logo">
        logo
      </div>
      <el-submenu
        v-for="(item, index) in menuList"
        :key="index"
      >
        <template slot="title">
          <i class="el-icon-location"/>
          <span>{{ index }}</span>
        </template>
        <el-menu-item
          v-for="(child, index1) in item"
          :index="child.path"
          :key="index1"
        >{{ child.title }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
/** 判断两个路由的父子关系 */
function compare (fatherPath, subPath) {
  let _path1 = fatherPath.replace(/\//, '\\/')
  return new RegExp(`${_path1}\\/([\\s\\w]*)$`, 'ig').test(subPath)
}
export default {
  data () {
    return {
      menuList: []
      // isCollapse: true
    }
  },
  created () {
    this.menuList = this.fun1()
  },
  methods: {
    fun1 () {
      console.log('转换前', this.$router.options.routes)
      const routes = this.$router.options.routes
      const rr = {}
      routes.forEach(item => {
        if (item.parent) {
          if (!rr[item.parent]) {
            rr[item.parent] = []
          }

          rr[item.parent].push({
            title: item.title,
            path: item.path
          })
        } else {
          for (let parent in rr) {
            rr[parent].forEach(child => {
              if (!child.children) {
                child.children = []
              }
              if (compare(child.path, item.path) && item.isMenu) {
                child.children.push({
                  title: item.title,
                  path: item.path
                })
              }
            })
          }
        }
      })

      console.log('转换后', rr)
      return rr
    },
    fun2 () {
      // console.log('转换前', this.$router.options.routes)
      // const routes = this.$router.options.routes
      // const rr = {}
    }
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
