<script setup>
import AllowNotifications from './AllowNotifications.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
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
  <AllowNotifications v-if="!notificationsAllowed" />
  <div v-else class="hello">
    <v-btn @click="router.push({ name: 'availability' })">See availability</v-btn>
    <v-btn @click="router.push({ name: 'notif_free' })">Free spot Notification</v-btn>
    <v-btn @click="router.push({ name: 'end_charge' })">End of charge Notification</v-btn>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-btn {
  margin: 1em 2em;
}
</style>
