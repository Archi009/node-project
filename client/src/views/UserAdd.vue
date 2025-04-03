<!-- views/UserAdd.vue -->
<template>
  <div class="container">
    <table class="table">      
      <tr>
        <th class="text-right">아이디</th>
        <td class="text-center">
          <input class="form-control"  type="text" v-model="info.user_id">
        </td>
      </tr>
      <tr>
        <th class="text-right">비밀번호</th>
        <td class="text-center">
          <input class="form-control" type="password" v-model="info.user_pwd">
        </td>
      </tr>
      <tr>
        <th class="text-right">이름</th>
        <td class="text-center">
          <input class="form-control" type="text" v-model="info.user_name">
        </td>
      </tr>
      <tr>
        <th class="text-right">성별</th>
        <td class="text-center">
          <input type="radio" v-model="info.user_gender"> 남자 
          <input type="radio" v-model="info.user_gender"> 여자 
        </td>
      </tr>
      <tr>
        <th class="text-right">나이</th>
        <td class="text-center">
          <input class="form-control" type="number" v-model="info.user_age">
        </td>
      </tr>
      <tr>
        <th class="text-right">가입일자</th>
        <td class="text-center">
          <input class="form-control" type="date" v-model="info.join_date">
        </td>
      </tr>
    </table>
    <div>
      <button class="btn btn-info" @click="addUser" >등록</button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data(){
      return{
        info:{
          user_id : '',
          user_pwd : '',
          user_name : '',
          user_gender : '',
          user_age : '',
          join_date : ''
        }
      }
    },
    methods:{
      async addUser(){
        console.log(this.info);
        // let ajaxRes = await axios.post('/api/users',this.info)
        //                           .catch(err=>console.log(err))
        // console.log(ajaxRes);
      },


    }
  }
</script>