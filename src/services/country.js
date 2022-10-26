import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://restcountries.com/v2/'
})

instance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  console.log('API ERROR', error)
  return Promise.reject(error)
})

export const getCountries = () => {
  const fields = ['name', 'capital', 'population', 'region', 'alpha2Code', 'alpha3Code']
  return instance.get('/all', {
    params: {
      fields: fields.join()
    }
  })
}

export const getCountry = (name) => {
  const fields = ['name', 'nativeName', 'population', 'region', 'subregion', 'capital', 'topLevelDomain', 'currencies', 'languages', 'borders', 'alpha2Code']
  return instance.get(`/name/${name}`, {
    params: {
      fields: fields.join()
    }
  })
}

export default {
  getCountries,
  getCountry
}
