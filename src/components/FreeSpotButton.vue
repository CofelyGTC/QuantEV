<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const subscription = computed(() => store.state.subscription)
const queueNotification = ref(localStorage.getItem('queueNotification'))

const subscribeQueue = async () => {
  const requestSent = await sendRequest('add')
  if (requestSent.ok) {
    localStorage.setItem('queueNotification', true)
    queueNotification.value = true
  }
}
const unsubscribeQueue = async () => {
  const requestSent = await sendRequest('delete')
  if (requestSent.ok) {
    localStorage.setItem('queueNotification', false)
    queueNotification.value = false
  }
}
const sendRequest = async (method) => {
  try {
    console.log(subscription.value)
    const payload = {
      subscription: subscription.value
    }
    const response = await fetch(store.state.baseURL + 'queue', {
      method: method === 'add' ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>
<template>
  <v-btn v-if="!subscription" @click="router.push({ name: 'notif_free' })" class="ma-2"
    >email Free spot Notification</v-btn
  >
  <v-btn v-else-if="subscription && !queueNotification" @click="subscribeQueue" class="ma-2"
    >Get Notified when <br />
    spot opens up</v-btn
  >
  <v-btn v-else @click="unsubscribeQueue" class="ma-2"
    >cancel notification when <br />
    spot opens up</v-btn
  >
</template>
