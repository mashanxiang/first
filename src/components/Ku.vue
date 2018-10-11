<template>
 <div>
   <div id="shang">
     <fieldset>
       <legend>员工档案管理</legend>
       姓名：<input type="text" placeholder="请输入姓名" name="" v-model="add.name" autofocus="autofocus" ><br>
       性别：<select v-model="add.sex" >
       <option value="男">男</option>
       <option value="女">女</option>
       <option value="第三">第三</option>
     </select>
       年龄：<input type="number" placeholder="请输入年龄" name="" v-model="add.age" ><br>
       手机：<input type="number" placeholder="请输入手机" name="" v-model="add.phone" ><br>
       公司：<input type="text" placeholder="请输入公司名称" name="" v-model="add.company" ><br>
       <button @click="addP">创建</button>
       <button @click="deleteall">删除所有</button>
     </fieldset>
   </div>


   <table class="xia">
     <thead class="title">
     <tr>
       <td>姓名</td>
       <td>性别</td>
       <td>年龄</td>
       <td>手机</td>
       <td>公司</td>
       <td>删除</td>
     </tr>
     </thead>


     <tbody>
       <tr v-for="(Per,index) in Person">
         <td>{{Per.name}}</td>
         <td>{{Per.sex}}</td>
         <td>{{Per.age}}</td>
         <td>{{Per.phone}}</td>
         <td>{{Per.company}}</td>
         <td><button @click="removeone(index)">删除</button></td>
       </tr>
     </tbody>


   </table>
   <el-button @click="fh">返回首页</el-button>
 </div>
</template>

<script>

    export default {
      name:'',
      data(){
        return{
          Person:[
            {name:"马善翔",sex:"男",age:1,phone:11111111,company:"tal"},
            {name:"崔鹏飞",sex:"男",age:2,phone:22222222,company:"tal"},
            {name:"陶红达",sex:"男",age:3,phone:333333333,company:"tal"},
            {name:"李妍",sex:"女",age:3,phone:44444444,company:"tal"},
            {name:"刘子根",sex:"男",age:4,phone:5555555,company:"tal"},
            {name:"皮特",sex:"男",age:5,phone:66666666,company:"tal"},
            {name:"李文斌",sex:"男",age:6,phone:7777777,company:"tal"}
          ],

          add:{name:"",sex:"男",age:"",phone:"",company:""}

        }
      },
      methods:{
        addP:function(){
          if(this.add.name===""){
            alert("请输入姓名！");
            return;
          }
          if(this.add.age<=0||this.add.age>=200){
            alert("请输入正确的年龄！");
            return;
          }
          if(this.add.phone.length<=0){
            alert("请输入11位的手机号！");
            return;
          }
          if(this.add.company===""){
            alert("请输入公司名称");
            return;
          }
          this.Person.unshift(this.add);
          this.add={name:"",sex:"",age:"",phone:"",company:""};
        },
        removeone:function(index){
          this.Person.splice(index,1);
        },
        deleteall:function(index){
          this.Person.splice(index);
        },

        fh(){
          this.$router.replace('/')
        }
      },

    }
</script>

<style type="text/css">
  #shang{
    width: 800px;
  }
  #shang input,#shang select{
    margin: 10px;
  }
  .xia{
  width: 800px;
  border: 2px solid pink;
  text-align: center;

}
  .title{
    background-color:  pink;
  }
  fieldset{border: 1px solid  red;}

</style>


