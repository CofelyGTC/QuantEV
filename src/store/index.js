import { createStore } from 'vuex'

export default createStore({
  state: {
    notificationsAllowed: false,
    baseURL: 'http://localhost:5000/ev/'
  },
  mutations: {
    setNotificationsAllowed(state, value) {
      state.notificationsAllowed = value
    }
  },
  actions: {
    initializeNotifications({ commit }) {
      const value = Notification.permission === 'granted' ? true : false
      commit('setNotificationsAllowed', value)
      console.log('setting notifications', value)
    }
  }
})
