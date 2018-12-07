<template>
  <div class="father">
    我是父导航，哈哈哈哈
    oooo 344433
    <ul>
      <li><router-link to="/father/sub1">子导航1</router-link></li>
      <li><router-link to="/father/sub2">子导航2</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ViewFather'
}
</script>

<style scoped>
  .father {
    text-align: left;
    font-size: 20px;
    font-weight: 900;
    font-style: italic;
  }
</style>
