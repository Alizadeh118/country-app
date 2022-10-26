<template>
  <div class="country">

    <div class="country__image">
      <img
          :src="`https://flagcdn.com/${loading ? 'w20' : 'w320'}/${code}.jpg`"
          :alt="name"
          :class="{'country__flag--loaded': !loading}"
          class="country__flag"
      >
    </div>

    <div class="country__content">
      <h1 class="country__name">
        {{ name }}
      </h1>

      <div class="country__metas">

        <div class="country__meta">
          <span class="country__meta_title">Native Name</span>
          <span class="country__meta_value">{{ nativeName }}</span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Population</span>
          <span class="country__meta_value">{{ population }}</span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Region</span>
          <span class="country__meta_value">{{ region }}</span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Sub Region</span>
          <span class="country__meta_value">{{ subregion }}</span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Capital</span>
          <span class="country__meta_value">{{ capital }}</span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Top Level Domain</span>
          <span class="country__meta_value">{{ topLevelDomainString }}</span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Currencies</span>
          <span class="country__meta_value">{{ currenciesString }}</span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Languages</span>
          <span class="country__meta_value">{{ languagesString }}</span>
        </div>
      </div>
      <div
          v-if="borders"
          class="country__borders"
      >
        <div class="country__borders_title">
          Border Countries
        </div>
        <div class="country__borders_value">
          <CustomButton
              v-for="country in bordersCountries"
              :key="country"
              @click="onClick(country)"
          >
            {{ country }}
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton'

export default {
  name: 'CountryCard',
  components: {
    CustomButton
  },
  props: {
    name: String,
    nativeName: String,
    population: Number,
    region: String,
    subregion: String,
    capital: String,
    topLevelDomain: Array,
    currencies: Array,
    languages: Array,
    borders: Array,
    alpha2Code: String
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    code () {
      return this.alpha2Code?.toLowerCase()
    },
    bordersCountries () {
      return this.borders?.map(border => this.getCountryNameByBorder(border))
    },
    currenciesString () {
      return this.currencies.map(currency => currency.name).join(', ')
    },
    languagesString () {
      return this.languages.map(language => language.name).join(', ')
    },
    topLevelDomainString () {
      return this.topLevelDomain.join(', ')
    }
  },
  created () {
    const img = new Image()
    img.src = `https://flagcdn.com/w320/${this.code}.jpg`
    img.onload = () => {
      this.loading = false
    }
  },
  methods: {
    getCountryNameByBorder (border) {
      return this.$store.state.countries
        .find(country => country.alpha3Code === border).name
    },
    onClick (country) {
      this.$router.push({
        name: 'details',
        params: {
          country
        }
      })
    }
  }
}
</script>

<style lang="scss">
.country {
  display: flex;
  flex-direction: column;
  gap: 3em;
  font-weight: 300;
  font-size: 14px;
  overflow: hidden;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 5em;
  }

  &__image {
    min-width: 40%;
  }

  &__flag {
    display: block;
    width: 100%;
    height: auto;
    object-fit: fill;
    aspect-ratio: 4/3;
    filter: blur(10px);
    transition: filter 1s;

    &--loaded {
      filter: blur(0);
    }
  }

  &__name {
    font-weight: 800;
    margin: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 2em;
    padding: .5em;
    @media screen and (min-width: 768px) {
      padding: 2em;
    }
  }

  &__metas {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    gap: 1em;
    @media screen and (min-width: 768px) {
      flex-wrap: wrap;
      height: 160px;
    }
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__meta_title {
    font-weight: 600;
    font-size: 14px;

    &:after {
      content: ': ';
    }
  }

  &__borders {
    display: flex;
    flex-wrap: wrap;
    margin-top: auto;
    gap: 1em;
    font-size: 14px;
    white-space: nowrap;
    @media screen and (min-width: 768px) {
      flex-wrap: nowrap;
    }
  }

  &__borders_title {
    font-weight: 600;
    padding: 9px 0;

    &:after {
      content: ': ';
    }
  }

  &__borders_value {
    display: flex;
    white-space: nowrap;
    gap: 1em;
    flex-wrap: wrap;
  }
}
</style>
