<script setup>
import {ref, watch} from "vue";

const props = defineProps(['profile'])
const myUsername = ref(props.profile)

watch(() => props.username, newVal => {
  myUsername.value = newVal
})
</script>

<template>
</template>

<style scoped>

</style>