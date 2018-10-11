<template>
<div>

  <button @click="login" >进入登录界面</button>
  <class-slect></class-slect>
</div>
</template>

<script>
  import classSlect from '@/components/Zi.vue'
    export default {
        methods:{
          login(){
            this.$router.replace('/Login')
          }
        },
      components:{
        classSlect
      }

    }
</script>

<style>

</style>
