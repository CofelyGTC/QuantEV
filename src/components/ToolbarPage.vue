<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <v-toolbar class="top-0 position-absolute left-0">
    <v-btn icon="mdi-arrow-left" @click="router.go(-1)"></v-btn>
    <v-spacer></v-spacer>
    <v-btn icon="mdi-dots-vertical"></v-btn>
  </v-toolbar>
</template>
<style></style>
