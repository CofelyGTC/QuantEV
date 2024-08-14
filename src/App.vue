<script setup>
import ToolbarComponent from './components/ToolbarPage.vue'

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt')
})

window.addEventListener('click', () => {
  console.log('click')
})
</script>

<template>
  <ToolbarComponent />
  <div class="main-content">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper"></div>
    <router-view />
  </div>
</template>

<style>
body {
  text-align: center;
}
.main-content {
  padding-top: 64px;
}
</style>
