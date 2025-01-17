
import Vue from 'vue'
import VueRouter from 'vue-router'

import CommonHomePage from './pages/Common/HomePage.vue';
import CommonNotFoundPage from './pages/Common/NotFoundPage.vue';

import PostDetailPage from './pages/Post/DetailPage.vue';
import PostUploadPage from './pages/Post/UploadPage.vue';

import UserRegisterPage from './pages/User/RegisterPage.vue';
import UserLoginPage from './pages/User/LoginPage.vue';
import UserPage from './pages/User/MainPage.vue';
import UserProfilePage from './pages/User/ProfilePage.vue';
import UserChangePassword from './pages/User/ChangePasswordPage.vue';

Vue.use(VueRouter)

let isLogin = false;

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: CommonHomePage
  },
  //================================== USER
  {
    path: '/user/login',
    name: 'user-login-page',
    component: UserLoginPage,
    beforeEnter: (to, from, next) => {
      if(isLogin){
        next({name: 'home-page'});
      } else {
        next();
      }
    }
  },
  {
    path: '/user/register',
    name: 'user-register-page',
    component: UserRegisterPage
  },
  {
    path: '/user/:id/profile',
    name: 'user-profile-page',
    component: UserProfilePage
  },
  {
    path: '/user/:id/change-password/',
    name: 'user-change-password-page',
    component: UserChangePassword
  },
  {
    path: '/user/:id',
    name: 'user-page',
    component: UserPage
  },
  //================================== POST

  {
    path: '/post/upload/',
    name: 'post-upload-page',
    component: PostUploadPage
  },
  {
    path: '/post/:id',
    name: 'post-detail-page',
    component: PostDetailPage
  },
  //================================== COMMON
  {
    path: '*',
    component:  CommonNotFoundPage
  }
]

const router = new VueRouter({
    routes
});

export default router
