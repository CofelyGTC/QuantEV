import { createStore } from 'vuex'

export default createStore({
  state: {
    notificationsAllowed: false,
    baseURL: 'https://smartbuildings.quantes.equans.be/quantes_restapi/ev/',
    queuedIn: false
  },
  mutations: {
    setNotificationsAllowed(state, value) {
      state.notificationsAllowed = value
    },
    setQueuedIn(state, value) {
      state.queuedIn = value
    }
  },
  actions: {
    initializeNotifications({ commit }) {
      const value = Notification.permission === 'granted' ? true : false
      commit('setNotificationsAllowed', value)
    }
  }
})
