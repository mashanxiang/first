<template >
  <div>

    <button @click="go1">目录一</button><br><br>
        <button @click="go2">目录二</button><br><br>
        <button @click="go3">目录三</button>

    <div style="margin-top:10px">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
      yi: ['目录一'],
        er: ['目录二'],
        san: ['目录三'],
      }
    },

    methods:{
      go1:function(){
        this.$router.push({name: 'Page1'});
      },
      go2:function(){
        this.$router.push({name: 'Page2'});
      },
      go3:function(){
        this.$router.push({name: 'Page3'});
      }
    }


    }

</script>


