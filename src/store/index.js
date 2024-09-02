import { reactive } from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state: reactive({
    notificationsAllowed: false,
    baseURL: 'https://smartbuildings.quantes.equans.be/quantes_restapi/ev/',
    //baseURL: 'http://localhost:5000/ev/',
    queuedIn: false,
    subscription: null,
    isIOS: null
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
    },
    setIsIOS(state, value) {
      state.isIOS = value
    }
  },
  actions: {
    initializeNotifications({ commit }) {
      const value = Notification.permission === 'granted' ? true : false
      commit('setNotificationsAllowed', value)
    },
    getSubscription({ commit }) {
      console.log('gettingSubscription1')
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
    },
    testIsIOS({ commit }) {
      commit('setIsIOS', /iPhone|iPad|iPod/i.test(navigator.userAgent))
    }
  }
})
