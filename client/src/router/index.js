import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import UserList from '@/views/UserList.vue'
import UserAdd from '@/views/UserAdd.vue'
import UserInfo from '@/views/UserInfo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect : {name : 'userList'}
  },
 
  {
    path : '/userList',
    name : 'userList',
    component : UserList
  },
  {
    path : '/userAdd',
    name : 'userAdd',
    component : UserAdd
  },
  {
    path : '/userInfo',
    name : 'userInfo',
    component : UserInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
