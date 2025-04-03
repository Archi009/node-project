<!-- views/UserInfo.vue -->
<template>
  <div class="container">
    <table class="table">
      <tr>
        <th class="text-right">NO</th>
        <td class="text-center">{{ info.user_no }}</td>
      </tr>
      <tr>
        <th class="text-right">아이디</th>
        <td class="text-center">{{ info.user_id }}</td>
      </tr>
      <tr>
        <th class="text-right">비밀번호</th>
        <td class="text-center">{{ info.user_pwd }}</td>
      </tr>
      <tr>
        <th class="text-right">이름</th>
        <td class="text-center">{{ info.user_name }}</td>
      </tr>
      <tr>
        <th class="text-right">성별</th>
        <td class="text-center">{{ info.user_gender }}</td>
      </tr>
      <tr>
        <th class="text-right">나이</th>
        <td class="text-center">{{ info.user_age }}</td>
      </tr>
      <tr>
        <th class="text-right">가입일자</th>
        <td class="text-center">{{ info.join_date }}</td>
      </tr>
    </table>
    <div>
      <button class="btn btn-light">목록</button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import publicFnc from '../func/publicFuncs';
  export default  {
    data(){
      return {
        info:{}
        
      }
    },
    created(){
      const selected = this.$route.query.id
      this.getUserInfo(selected)
    },
    methods:{
      async getUserInfo(id){
        let ajaxRes = await axios.get(`api/users/${id}`)
                              .catch(err=>console.log(err))
                           
        this.info = ajaxRes.data
      },
      dateFormat(value,format){
    let date =(value == null) ? new Date() : new Date(value);
    let year = date.getFullYear()
    let month =('0'+ (date.getMonth() +1)).slice(-2)
    let day = ('0'+ (date.getDate())).slice(-2)
    let result = format.replace('yyyy',year)
                       .replace('MM',month)
                       .replace('dd',day)
    return result
    }

    }
  }
</script>