<script setup>
import router from '../router'
</script>
<template>
  <div class="hello">
    <v-btn @click="router.push('availability')">See availability</v-btn>
    <v-btn>Free spot Notification</v-btn>
    <v-btn>End of charge Notification</v-btn>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-btn {
  margin: 1em 2em;
}
</style>
