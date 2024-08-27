<script setup>
import { ref, onUnmounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const initialValue = {
  sensor: false,
  charging: false,
  color: '#f2f2f2',
  message: 'Unkown'
}
const parkingData = ref({
  parking_1: Object.create(initialValue),
  parking_2: Object.create(initialValue),
  parking_3: Object.create(initialValue),
  parking_4: Object.create(initialValue)
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
      parkingData.value[key].sensor = true
    } //bleu
    else if (!data[key].charging && data[key].sensor) {
      parkingData.value[key].color = '#f1a493'
      parkingData.value[key].message = 'Not Charging'
      parkingData.value[key].sensor = true
    } //rouge
    else {
      parkingData.value[key].color = '#ace6b8'
      parkingData.value[key].message = 'Free'
      parkingData.value[key].sensor = false
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
        <v-row align="center" no-gutters :class="key">
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
