<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

store.dispatch('initializeNotifications')

const notificationsAllowed = computed(() => store.state.notificationsAllowed)

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }

  return outputArray
}
const subscribePushManager = async () => {
  const registration = await navigator.serviceWorker.ready
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      'BAMvmDPwZonZMiMQ0MA-hVzxOBsTsDbdH67VW9RvZTG5cPuHAMwhlsK0D9zdg7Qc5V_CVaNLlrlFfihh6QtogaQ'
    )
  })
  store.commit('setSubscription', subscription)
}

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission()
  if (permission === 'granted') {
    store.commit('setNotificationsAllowed', true)
    subscribePushManager()
  }
}
</script>
<template>
  <v-footer
    v-if="!notificationsAllowed"
    color="red-darken-2"
    lines="one"
    @click="requestNotificationPermission"
    class="justify-center"
    >Allow Notification
    <v-icon icon="mdi-bell"></v-icon>
  </v-footer>
</template>
