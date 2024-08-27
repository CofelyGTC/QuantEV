<script setup>
//import AllowNotifications from './AllowNotifications.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import FreeSpotButton from '@/components/FreeSpotButton.vue'

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
if (notificationsAllowed.value === false) {
  requestNotificationPermission()
}
</script>
<template>
  <!--AllowNotifications v-if="!notificationsAllowed" /-->
  <div class="justify-center">
    <v-btn @click="router.push({ name: 'availability' })" class="ma-2">See availability</v-btn>
    <FreeSpotButton />
    <v-btn prepend-icon="mdi-traffic-cone" disabled class="ma-2">
      End of charge Notification
    </v-btn>
  </div>
</template>
