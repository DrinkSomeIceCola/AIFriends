import { createRouter, createWebHistory } from 'vue-router'
import Homepage from "@/views/homepage/Homepage.vue";
import FriendIcon from "@/components/navbar/icons/FriendIcon.vue";
import Friend from "@/views/friend/Friend.vue";
import Create from "@/views/create/Create.vue";
import NotFound from "@/views/error/NotFound.vue";
import Login from "@/views/user/account/Login.vue";
import Register from "@/views/user/account/Register.vue";
import Space from "@/views/user/space/Space.vue";
import Profile from "@/views/profile/Profile.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path:'/',
          component: Homepage,
          name: 'homepage',
      },
      {
          path:'/friend',
          component: Friend,
          name: 'friend',
      },
      {
          path:'/create',
          component: Create,
          name: 'create',
      },
      {
          path:'/404',
          component: NotFound,
          name: '404',
      },
      {
          path:'/user/account/login',
          component: Login,
          name: 'login',
      },
      {
          path:'/user/account/register',
          component: Register,
          name: 'register',
      },
      {
          path:'/user/space/:user_id',
          component: Space,
          name: 'space',
      },
      {
          path:'/user/profile',
          component: Profile,
          name: 'profile',
      },
      {
          path:'/:pathMatch(.*)*',
          component: NotFound,
          name: 'NotFound',
      },
  ],
})

export default router
