<template>
  <the-app-layout/>
</template>

<script>
import TheAppLayout from 'vue-admin-layout'
console.log('TheAppLayout', TheAppLayout)

export default {
  name: 'App',
  components: {
    TheAppLayout
  }
}
</script>
