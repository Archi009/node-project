<!-- views/UserList.vue -->
<template>
  <div class="container">
    <table class="table">
      <caption>Total : {{ count }}</caption>
      <thead>
        <tr>
          <th>NO</th>
          <th>아이디</th>
          <th>이름</th>
          <th>성별</th>
          <th>가입날짜</th><!-- yyyy-MM-dd -->
        </tr>        
      </thead>
      <tbody>
        <!-- 데이터 출력-->
         <tr v-for="(item,idx) in userList" :key="item.user_id" @click="goToUserInfo(item.user_no)">
          <td>{{ item.user_no }}</td>
          <td>{{ item.user_id }}</td>
          <td>{{ item.user_name }}</td>
          <td>{{ item.user_gender }}</td>
          <td>{{ item.join_date }}</td>
         </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
import publicFnc from '../func/publicFuncs'
export default{
  data(){
    return{
      userList :[],
    }
  },
  created(){
    this.getUserList()
  },
  methods :{
    async getUserList(){
      let result = await axios.get('/api/users')
            .catch(err => console.log(err))
      
      result.data.forEach(item => {
        item.join_date = publicFnc.dateFormat(item.join_date,'yyyy-MM-dd')
      });
      return this.userList = result.data
    },
    goToUserInfo(id){
      this.$router.push({name : 'userInfo',query:{id}})
    },
   

  },
  computed :{
    count(){
      return this.userList.length
    }
  }
}
</script>