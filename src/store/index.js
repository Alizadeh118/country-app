import Vue from 'vue'
import Vuex from 'vuex'
import { getCountries, getCountry } from '@/services/country'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    details: [],
    regions: []
  },
  getters: {
    country: state => countryName => {
      return state.details.find(country => country.name === countryName)
    }
  },
  mutations: {
    SET_COUNTRIES (state, countries) {
      state.countries = countries
    },
    ADD_DETAILS (state, country) {
      state.details.push(country)
    },
    SET_REGIONS (state, regions) {
      state.regions = regions
    }
  },
  actions: {
    async getCountries ({ commit }) {
      try {
        const countries = await getCountries()
        commit('SET_COUNTRIES', countries)

        const regions = [...new Set(countries.map(country => country.region))]
        regions.sort((a, b) => a.localeCompare(b))
        commit('SET_REGIONS', regions)
        return Promise.resolve(countries)
      } catch (e) {
        commit('SET_COUNTRIES', [])
        commit('SET_REGIONS', [])
        return Promise.reject(e)
      }
    },
    async getCountry ({ commit }, name) {
      try {
        const [country] = await getCountry(name)
        commit('ADD_DETAILS', country)
        return Promise.resolve(country)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
})
