import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/userView/HomeView.vue'
import SignUp from '../views/userView/SignUp.vue'
import Login from '../views/userView/Login.vue'
import CourseList from '../views/userView/Course_list.vue'
import UserDashboard from '../views/userView/UserDashboard.vue'
import CoursePreview from '../views/userView/CoursePreview.vue'
import CourseMain from '../views/userView/CourseMain.vue'
import UserWrap from '../views/userView/UserWrap.vue'


// ADMIN
import AdminDashboard from '../views/adminView/AdminDashboard.vue'
import AddCourse from '../views/adminView/AddCourse.vue'
import UserTable from '../views/adminView/UserTable.vue'
import CourseTable from '../views/adminView/CourseTable.vue'
import CourseOverview from '../views/adminView/CourseOverview.vue'
import AdminWrap from '../views/adminView/AdminWrap.vue'


  
const routes = [
  {
    path: '/',
    name:UserWrap,
     component:UserWrap,
    children:[
      {
        path: '/',
        name: 'home',
        component:HomeView
      },
    
      {
        path: '/signup',
        name: 'SignUp',
        component:SignUp
      },
      {
        path: '/login',
        name: 'Login',
        component:Login
      },
      {
        path: '/course_list',
        name: 'CourseList',
        component: CourseList
      },
      
      {
        path: '/preview',
        name: 'CoursePreview ',
        component: CoursePreview 
      },
    
      {
        path: '/coursemain',
        name: 'CourseMain ',
        component: CourseMain
      },
    

    ]
  },
  {
    path: '/dashboard',
    name: 'UserDashboard',
    component: UserDashboard
  },
  


  

 // ADMIN ROUTE
  {
    path: '/admin',
    name:AdminWrap,
    component:AdminWrap,
    children:[  
 {
  path: '/admin/',
  name: 'AdminDashboard',
  component: AdminDashboard
},

{
  path: '/add-course/',
  name: 'AddCourse',
  component: AddCourse
},
{
  path: '/user/',
  name: 'UserTable',
  component: UserTable
},

{
  path: '/course-list/',
  name: 'CourseTable',
  component: CourseTable
},

{
  path: '/course-overview/',
  name: 'CourseOverview',
  component:CourseOverview
},

    ]
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
