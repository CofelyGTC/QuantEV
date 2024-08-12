<script setup>
import { ref, onUnmounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const parkingData = ref({
  parking_1: {
    sensor: false,
    charging: false,
    color: '#ace6b8',
    message: 'Free'
  },
  parking_2: {
    sensor: false,
    charging: false,
    color: '#ace6b8',
    message: 'Free'
  },
  parking_3: {
    sensor: false,
    charging: false,
    color: '#ace6b8',
    message: 'Free'
  },
  parking_4: {
    sensor: false,
    charging: false,
    color: '#ace6b8',
    message: 'Free'
  }
})
async function fetchParkingData() {
  console.log('fetching Parking Data')

  const response = await fetch(store.state.baseURL + 'get_availability')
  const data = await response.json()
  populateMessages(data)
}
const populateMessages = (data) => {
  for (const key in data) {
    if (data[key].charging && data[key].sensor) {
      parkingData.value[key].color = '#a0a4fc'
      parkingData.value[key].message = 'Charging'
    } //bleu
    else if (!data[key].charging && data[key].sensor) {
      parkingData.value[key].color = '#f1a493'
      parkingData.value[key].message = 'Not Charging'
    } //rouge
    else {
      parkingData.value[key].color = '#ace6b8'
      parkingData.value[key].message = 'Free'
    } //vert
  }
}
fetchParkingData()
const refresh = setInterval(fetchParkingData, 30000)
onUnmounted(() => {
  clearInterval(refresh)
})
</script>
<template>
  <v-container class="h-100">
    <v-card
      v-for="(value, key) in parkingData"
      :key="key"
      style="margin-top: 10px"
      v-bind:color="value.color"
    >
      <v-container>
        <v-row align="center" no-gutters>
          <v-col cols="8" class="text-left">{{
            key.substring(key.length - 1) + '. ' + value.message
          }}</v-col>
          <v-col cols="2">
            <v-icon v-if="value.sensor" icon="mdi-car" size="x-large"></v-icon>
          </v-col>
          <v-col>
            <v-icon icon="mdi-ev-station" cols="2" size="x-large"></v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>
<style>
test {
  color: #ace6b8;
}
</style>
