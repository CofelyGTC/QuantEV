<script setup>
import LandingPage from './components/LandingPage.vue'
import AllowNotifications from './components/AllowNotifications.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
//const notificationsAllowed = ref(Notification.permission === "granted" ? true : false)
const notificationsAllowed = computed(() => store.state.notificationsAllowed)

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission()
  if (permission === 'granted') {
    store.commit('setNotificationsAllowed', true)
  }
}
console.log(notificationsAllowed.value)
if (notificationsAllowed.value === false) {
  requestNotificationPermission()
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <LandingPage v-if="notificationsAllowed" />
      <AllowNotifications v-else />
    </div>
  </header>
</template>

<style>
body {
  text-align: center;
  /*background-color: #012237;*/
}
</style>
