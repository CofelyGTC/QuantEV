<script setup>
import { useRouter } from 'vue-router'
import FreeSpotButton from '@/components/FreeSpotButton.vue'

const router = useRouter()
</script>
<template>
  <!--AllowNotifications v-if="!notificationsAllowed" /-->
  <div class="justify-center">
    <v-btn @click="router.push({ name: 'availability' })" color="indigo" class="ma-2"
      >See availability</v-btn
    >
    <FreeSpotButton />
    <v-btn prepend-icon="mdi-traffic-cone" disabled class="ma-2">
      End of charge Notification
    </v-btn>
  </div>
</template>
