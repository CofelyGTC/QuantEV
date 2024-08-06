<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const lt = [
  { car: true, charging: true, message: 'Charging', color: '#a0a4fc' },
  { car: true, charging: false, message: 'Car Not Charging', color: '#f1a493' },
  { car: false, charging: true, message: 'Free', color: '#ace6b8' },
  { car: false, charging: false, message: 'Free', color: '#ace6b8' }
]
const data = computed(() => {
  console.log('get_data: ', get_data)
  return get_data()
})
const get_data = async () => {
  const response = await fetch(store.state.baseURL + 'get_availability')
  const data = response.json()
  return data
}
</script>
<template>
  <v-container class="h-100">
    <v-card v-for="n in lt" :key="n" style="margin-top: 10px" :color="n.color">
      <v-container>
        <v-row align="center" no-gutters>
          <v-col cols="8" class="text-left">{{ n.message }}</v-col>
          <v-col cols="2">
            <v-icon v-if="n.car" icon="mdi-car" size="x-large"></v-icon>
          </v-col>
          <v-col>
            <v-icon icon="mdi-ev-station" cols="2" size="x-large"></v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <p>{{ data }}</p>
  </v-container>
</template>
<style>
test {
  color: #ace6b8;
}
</style>
