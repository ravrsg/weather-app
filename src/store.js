import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apikey: '027ee07fafd9a678d925c3a9220c1289',
    data: [],
    error: ''
  },
  actions: {
    async getData ({ commit }, city) {
      const axios = require('axios').default;
      await axios({
        method: 'post',
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.state.apikey + "&lang=pl&units=metric",
      })
      .then(function (response) {
        commit('setData', response);
        commit('setError', '');
      })
      .catch(function (error) {
        commit('setError', error.response.data.message);
        commit('setData', []);
      })
    },
    async getDataByLocation ({ commit }, crd) {
      const axios = require('axios').default;
      await axios({
        method: 'post',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=' + crd.latitude + '&lon=' + crd.longitude + '&appid=' + this.state.apikey + "&lang=pl&units=metric",
      })
      .then(function (response) {
        commit('setData', response);
        commit('setError', '');
      })
      .catch(function (error) {
        commit('setError', error.response.data.message);
        commit('setData', []);
      })
    }
  },
  mutations: {
    setData (state, data) {
      state.data = data;
    },
    setError (state, data) {
      state.error = data;
    }
  },
});