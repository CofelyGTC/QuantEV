<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const color = ref('indigo')
const queuedIn = ref(localStorage.getItem('QueuedIn'))
const inputData = ref(localStorage.getItem('queueEmail'))

watch(inputData, (val) => {
  localStorage.setItem('queueEmail', val)
})
const addToQueue = async () => {
  const requestSent = await sendRequest('add')
  if (requestSent.error === '') {
    localStorage.setItem('QueuedIn', true)
    queuedIn.value = true
  }
}
const removeFromQueue = async () => {
  const requestSent = await sendRequest('delete')
  if (requestSent.error === '') {
    localStorage.setItem('QueuedIn', false)
    queuedIn.value = false
  }
}
const sendRequest = async (method) => {
  try {
    const payload = {
      email: inputData.value
    }

    const response = await fetch(store.state.baseURL + 'queue', {
      method: method === 'add' ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result = await response.json()
    console.log('Success:', result)
    return { error: '' }
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>
<template>
  <div>
    <v-card
      text="Enter your email adress to recieve a notification when a spot opens up"
      class="py-4 px-1"
      variant="elevated"
      :color="color"
      v-if="!subscription"
    >
      <form @submit.prevent="addToQueue">
        <v-text-field
          v-model="inputData"
          type="text"
          placeholder="Enter your e-mail adress"
          required
        />
        <v-btn type="submit" :color="color">Submit</v-btn>
      </form>
    </v-card>
  </div>
  <v-btn @click="removeFromQueue" class="my-3" v-if="queuedIn" :color="color"
    >Remove me from the queue
  </v-btn>
</template>
