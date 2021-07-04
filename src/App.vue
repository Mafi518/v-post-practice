<template>
  <div class="app">
    <router-link to='/posts'>posts</router-link>
    <br>
    <router-link to='/store'>posts Store</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style >
* {
  margin: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  padding: 20px;
}
</style>