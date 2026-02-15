<script setup lang="ts">

import {useUserStore} from "@/stores/user.js";

const user = useUserStore()

</script>

<template>
  <div class="flex justify-center">
    <div class="card w-120 bg-base-200 shadow-sm mt-16">
      <div class="card-body">
        <h3 class="text-lg font-bold my-4">编辑资料</h3>
        <Photo ref="photo-ref" :photo="user.photo" />
        <Username ref="username-ref" :username="user.username" />
        <Profile ref="profile-ref" :profile="user.profile" />
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>