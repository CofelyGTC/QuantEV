<script setup>
import ToolbarComponent from './components/ToolbarPage.vue'
import FooterElements from './components/FooterElements.vue'
</script>

<template>
  <ToolbarComponent />
  <div class="main-content">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper"></div>
    <router-view />
  </div>
  <FooterElements />
</template>

<style>
body {
  text-align: center;
  background-color: white;
}
.main-content {
  padding-top: 64px;
}
</style>
