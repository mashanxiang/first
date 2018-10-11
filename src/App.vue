<template>
  <el-container>
    <el-header class="header">
      <h3 class="sy">首页</h3>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .header{
    background-color: pink;
    color: white;
    text-align: center;
 }
.sy{
  background: pink;
}
</style>

