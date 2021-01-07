<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <van-button type="default">默认按钮</van-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from 'vant'
export default {
  name: 'home',
  components: {
    [Button.name]: Button
  }
}
</script>
<style scoped >

</style>
