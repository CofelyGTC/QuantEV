<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import InstallDetails from './InstallDetails.vue'
const store = useStore()

const installable = ref(false)
let deferredPrompt = null
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  deferredPrompt = event
  installable.value = true
})

const installApp = async () => {
  const promptEvent = deferredPrompt
  if (!promptEvent) {
    console.log("The deferred prompt isn't available.")
    return
  }
  promptEvent.prompt()
  const result = await promptEvent.userChoice
  console.log('👍', 'userChoice', result)
  deferredPrompt = null
}
store.dispatch('testIsIOS')
const isIOS = ref(store.state.isIOS)
console.log('isIOS: ', isIOS)
const standalone = ref(false)
if ('standalone' in navigator) {
  standalone.value = navigator.standalone
  console.log('standalone.value: ', standalone.value)
}
</script>
<template>
  <v-footer v-if="installable" color="indigo" lines="one" @click="installApp" class="justify-center"
    >Install App
    <v-icon icon="mdi-download"></v-icon>
  </v-footer>
  <InstallDetails v-if="isIOS && !standalone" />
</template>
