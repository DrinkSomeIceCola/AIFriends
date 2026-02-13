<script setup xmlns="http://www.w3.org/1999/html">

import {useUserStore} from "@/stores/user.js";
import UserSpaceIcon from "@/components/navbar/icons/UserSpaceIcon.vue";
import UserProfileIcon from "@/components/navbar/icons/UserProfileIcon.vue";
import {useRouter} from "vue-router";
import api from "@/js/http/api.js";

function closeMenu() {
  const element = document.activeElement
  if (element && element instanceof HTMLElement) element.blur()
}

const user = useUserStore()
const router = useRouter()

async function handleLogout() {
  try {
    const res = await api.post('api/user/account/logout/')
    if (res.data.result === 'success') {
      user.logout()
      await router.push({
        name: 'homepage-index'
      })
    }
  }catch (err) {
    console.log(err)
  }
}

</script>

<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="avatar btn btn-circle w-8 h-8 mr-6">
      <div class="w-8 rounded-full">
        <img :src="user.photo" alt="">
      </div>
    </div>
    <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-48 p-2 shadow-lg">
      <li>
        <RouterLink @click="closeMenu" :to="{name: 'user-space-index',params: {user_id: user.id}}">
          <div class="avatar">
            <div class="w-10 rounded-full">
              <img :src="user.photo" alt="">
            </div>
          </div>
          <span class="text-base font-bold line-clamp-1">{{user.username}}</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink @click="closeMenu" class="text-sm font-bold py-3" :to="{name: 'user-space-index',params: {user_id: user.id}}">
          <UserSpaceIcon/>
          个人空间
        </RouterLink>
      </li>
      <li>
        <RouterLink @click="closeMenu" class="text-sm font-bold py-3" :to="{name: 'user-profile-index'}">
          <UserProfileIcon/>
          编辑资料
        </RouterLink>
      </li>
      <li/>
      <li>
        <a @click="handleLogout" class="text-sm font-bold py-3">
          <UserSpaceIcon/>
          退出登录
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>