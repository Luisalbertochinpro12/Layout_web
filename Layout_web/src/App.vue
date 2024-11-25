<script setup>
import NavBar from './components/NavBar.vue'
import MainBody from './views/MainBody.vue'
</script>

<template>
  <div class="body">
    <NavBar></NavBar>
    <MainBody v-if="$route.path !== '/formbasic'" />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
