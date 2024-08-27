<script setup>
import { ref } from 'vue'
import ToolbarComponent from './components/ToolbarPage.vue'

const installable = ref(false)
let deferredPrompt = null
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  console.log('👍', 'beforeinstallprompt', event)
  deferredPrompt = event
  installable.value = true
})

const installApp = async () => {
  //console.log('👍', 'butInstall-clicked')
  const promptEvent = deferredPrompt
  if (!promptEvent) {
    console.log("The deferred prompt isn't available.")
    return
  }
  // Show the install prompt.
  promptEvent.prompt()
  // Log the result
  const result = await promptEvent.userChoice
  console.log('👍', 'userChoice', result)
  deferredPrompt = null
  // Hide the install button.
}
</script>

<template>
  <ToolbarComponent />
  <div class="main-content">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper"></div>
    <router-view />
  </div>
  <v-footer
    v-if="installable"
    color="indigo"
    lines="one"
    class="justify-center position-absolute left-0 bottom-0 w-100"
    @click="installApp"
    >Install App
    <v-icon icon="mdi-download"></v-icon>
  </v-footer>
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
