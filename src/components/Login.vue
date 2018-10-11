<template>
  <el-row type="flex" justify="center">
    <el-form  ref="Form" :model="user" v-bind:rules="rules" label-width="80px" >
      <h1 style="text-align: center">登录界面</h1>
      <el-form-item label="用户名" prop="name"  >
        <el-input v-model="user.name" autofocus="autofocus"></el-input >
      </el-form-item>
        <el-form-item label="密码" prop="pass">
        <el-input v-model="user.pass" type="password"  @keyup.enter.native="submit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" >登录</el-button>
        <el-button @click="cz" >重置用户名及密码</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
  export default {
    methods: {
      login () {
        this.$refs.Form.validate((yz) => {
          if (yz) {
            if (this.user.name === 'admin' && this.user.pass === '123') {
              this.$notify({
                type: 'success',
                message: '欢迎你,  ' + this.user.name + '！！！',
                duration: 3000
              })
              this.$router.replace('/navi')
            } else {
              this.$message({
                type: 'error',
                message: '用户名或密码错误',
                showClose: true
              })
            }
          }
          else {
            return false
          }
        })
      },
      cz(){
        this.user.name='',
          this.user.pass=''

      },
        submit(ev){
        if (ev.keyCode==13 && this.user.name === 'admin' && this.user.pass === '123'){
          this.$router.replace('/navi')
          this.$notify({
            type: 'success',
            message: '欢迎你,  ' + this.user.name + '！！！',
            duration: 3000
          })
        }else{
          this.$message({
            type: 'error',
            message: '用户名或密码错误',
            showClose: true
          })
        }
      }

    },
    data () {
      return {
        user: {},
        rules: {
          name: [
            {required: true, message: '用户名不能为空'}
          ],
          pass: [
            {required: true, message: '密码不能为空'}
          ]
        }
      }
    }
  }
</script>
<style>

</style>
