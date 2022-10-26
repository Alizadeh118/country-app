<template>
  <div>
    <div class="form">
      <div class="form__search_box">
        <customInput
            v-model="search"
            placeholder="Search for a country..."
        />
      </div>

      <div class="form__select_box">
        <customSelect
            :options="regions"
            v-model="region"
            placeholder="Filter by Region"
        />
      </div>

    </div>
    <div
        v-if="!loading"
        class="countries"
    >
      <CountryCard
          v-for="country in filteredCountries"
          :key="country.name"
          v-bind="country"
          @click="onCountryClick(country.name)"
      />
    </div>
    <div
        v-else
        class="countries"
    >
      <CountryCardSkeleton
          v-for="n in 20"
          :key="n"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CountryCard from '@/components/CountryCard'
import CountryCardSkeleton from '@/components/CountryCardSkeleton'
import customInput from '@/components/CustomInput'
import customSelect from '@/components/CustomSelect'

export default {
  name: 'HomePage',
  components: {
    CountryCard,
    CountryCardSkeleton,
    customInput,
    customSelect
  },
  data () {
    return {
      search: '',
      region: '',
      loading: false
    }
  },
  methods: {
    onCountryClick (country) {
      this.$router.push({
        name: 'details',
        params: {
          country
        }
      })
    },
    fuzzyMatch (pattern, str) {
      pattern = '\\S*' + pattern.split('').join('\\S*') + '\\S*'
      const re = new RegExp(pattern)
      return re.test(str)
    },
    swapped (str) {
      const persian = ['ح', 'خ', 'ه', 'ع', 'غ', 'ف', 'ق', 'ث', 'ص', 'ض', 'م', 'ن', 'ت', 'ا', 'ل', 'ب', 'ی', 'س', 'ش', 'پ', 'د', 'ذ', 'ر', 'ز', 'ط', 'ظ']
      const english = ['p', 'o', 'i', 'u', 'y', 't', 'r', 'e', 'w', 'q', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'm', 'n', 'b', 'v', 'c', 'x', 'z']
      return str.split('').map(char => english[persian.indexOf(char)]).join('')
    }
  },
  computed: {
    ...mapState(['countries', 'regions']),
    filteredCountries () {
      if (!this.search && !this.region) return this.countries

      let filtered = this.countries

      if (this.region !== '') {
        filtered = this.countries.filter(country => {
          return country.region === this.region
        })
      }

      const exactMatched = filtered.filter(country => {
        const name = country.name.toLowerCase()
        const search = this.search.toLowerCase()
        if (name.startsWith(search)) return true

        const swapped = this.swapped(search)
        return !!swapped && name.startsWith(swapped)
      })
      if (exactMatched.length) return exactMatched

      return filtered.filter(country => {
        const name = country.name.toLowerCase()
        const search = this.search.toLowerCase()

        const fuzzyMatched = this.fuzzyMatch(search, name)
        if (fuzzyMatched) return true

        const swapped = this.swapped(search)
        return swapped && this.fuzzyMatch(swapped, name)
      })
    }
  },
  created () {
    if (!this.countries.length) {
      this.loading = true
      this.$store.dispatch('getCountries')
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss">
.countries {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 3em;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));;
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));;
  }
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3em;
  gap: 3em;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }

  &__search_box {
    max-width: 500px;
    flex-grow: 1;
  }

  &__select_box {
    flex-grow: 1;
    max-width: 200px;
    @media screen and (min-width: 576px) {
    }
  }
}
</style>
