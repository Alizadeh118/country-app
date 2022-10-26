<template>
  <div>
    <CustomButton @click="goBack">
      <img
          class="back-button__icon"
          src="@/assets/images/arrow-left-long-solid.svg"
          alt="back"
      />
      <span>Back</span>
    </CustomButton>
    <CountryDetails
        v-if="country && $store.state.countries.length"
        :name="country.name"
        :native-name="country.nativeName"
        :population="country.population"
        :region="country.region"
        :subregion="country.subregion"
        :capital="country.capital"
        :top-level-domain="country.topLevelDomain"
        :currencies="country.currencies"
        :languages="country.languages"
        :borders="country.borders"
        :alpha2-code="country.alpha2Code"
        class="country__details"
    />
    <CountryDetailsSkeleton
        v-else
        class="country__details"
    />
  </div>
</template>

<script>
import CountryDetails from '@/components/CountryDetails'
import CountryDetailsSkeleton from '@/components/CountryDetailsSkeleton'
import CustomButton from '@/components/CustomButton'

export default {
  name: 'DetailsPage',
  components: {
    CustomButton,
    CountryDetails,
    CountryDetailsSkeleton
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    countryName () {
      return this.$route.params.country
    },
    country () {
      return this.$store.getters.country(this.countryName)
    }
  },
  created () {
    if (!this.$store.state.countries.length) {
      this.$store.dispatch('getCountries')
    }

    if (!this.country) {
      this.loading = true
      this.$store.dispatch('getCountry', this.countryName)
        .catch(() => {
          this.$router.replace({ name: 'notFound' })
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.country__details {
  margin-top: 3rem;
}

.back-button__icon {
  width: 20px;
  opacity: .7;
}
</style>
