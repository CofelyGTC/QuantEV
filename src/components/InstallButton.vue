<script setup>
import { ref } from 'vue'

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

const safari = navigator.userAgent.indexOf('Safari') !== -1
const chrome = navigator.userAgent.indexOf('Chrome') !== -1
const firefox = navigator.userAgent.indexOf('Firefox') !== -1
</script>
<template>
  <v-footer v-if="installable" color="indigo" lines="one" @click="installApp" class="justify-center"
    >Install App
    <v-icon icon="mdi-download"></v-icon>
  </v-footer>
  <v-footer v-if="safari" class="d-flex flex-column justify-center" color="cyan-darken-3"
    ><div class="w-100">
      To install the app click on : <v-icon icon="mdi-export-variant"></v-icon>
    </div>
    <div class="w-100">
      Then on : "Add to home screen"
      <v-icon icon="mdi-plus-box-outline"></v-icon>
    </div>
  </v-footer>
  <v-footer v-if="chrome" class="d-flex flex-column justify-center" color="cyan-darken-3"
    ><div class="w-100">
      To install the app click on : <v-icon icon="mdi-dots-horizontal"></v-icon>
    </div>
    <div class="w-100">
      Then on : "Add to home screen"
      <v-icon icon="mdi-plus-box-outline"></v-icon>
    </div>
  </v-footer>
</template>
