import { reactive } from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state: reactive({
    notificationsAllowed: false,
    baseURL: 'https://smartbuildings.quantes.equans.be/quantes_restapi/ev/',
    //baseURL: 'http://localhost:5000/ev/',
    queuedIn: false,
    subscription: null
  }),
  mutations: {
    setNotificationsAllowed(state, value) {
      state.notificationsAllowed = value
    },
    setQueuedIn(state, value) {
      state.queuedIn = value
    },
    setSubscription(state, value) {
      state.subscription = value
      console.log('subscription: ', value)
    }
  },
  actions: {
    initializeNotifications({ commit }) {
      const value = Notification.permission === 'granted' ? true : false
      commit('setNotificationsAllowed', value)
    },
    getSubscription({ commit }) {
      navigator.serviceWorker.ready
        .then((registration) => {
          return registration.pushManager.getSubscription()
        })
        .then(function (subscription) {
          if (subscription) {
            commit('setSubscription', subscription)
            console.log('subscription: ', subscription)
          } else {
            console.log('No subscription found')
          }
        })
    }
  }
})
