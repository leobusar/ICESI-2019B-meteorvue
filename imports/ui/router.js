import Vue from 'vue'
import VueRouter from 'vue-router'

import UserList from  './UserList'
import UserAdd from './UserAdd'

Vue.use(VueRouter)

const routes = [
    { path: '/list', name: 'userlist', component: UserList},
    { path: '/add', name: 'useradd', component: UserAdd}
]

const  router = new VueRouter({mode: 'history', routes})

export default router