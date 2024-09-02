<script setup>
const safari = navigator.userAgent.indexOf('Safari') !== -1
const chrome = navigator.userAgent.indexOf('Chrome') !== -1
const firefox = navigator.userAgent.indexOf('Firefox') !== -1
</script>
<template>
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
  <v-footer v-if="firefox" class="d-flex flex-column justify-center" color="cyan-darken-3"
    ><div class="w-100">To install the app click on : <v-icon icon="mdi-menu"></v-icon></div>
    <div class="w-100">
      Then on : "Add to home screen"
      <v-icon icon="mdi-plus-box-outline"></v-icon>
    </div>
  </v-footer>
</template>
