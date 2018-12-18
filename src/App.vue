<template>
  <the-app-layout user-name="奥巴马打地鼠"/>
</template>

<script>
import TheAppLayout from 'vue-admin-main/lib/Layout'
console.log('TheAppLayout', TheAppLayout)

export default {
  name: 'App',
  components: {
    TheAppLayout
  }
}
</script>
