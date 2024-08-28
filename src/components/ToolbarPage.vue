<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const refresh = () => {
  location.reload(true)
}
</script>
<template>
  <v-toolbar class="top-0 position-absolute left-0">
    <v-btn icon="mdi-arrow-left" @click="router.go(-1)"></v-btn>
    <v-spacer></v-spacer>
    <v-btn id="menu-activator" icon="mdi-dots-vertical"></v-btn>
    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item title="Refresh" @click="refresh"> </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<style></style>
