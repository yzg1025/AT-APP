<template>
  <el-container class="layout-default">
    <el-header>
      <my-header/>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>
      <my-footer/>
    </el-footer>
  </el-container>
</template>
<script>
import MyHeader from '../components/pubilc/header/index'
import MyFooter from '../components/pubilc/footer/index'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
</style>
