<template>
  <div
    class="country-card"
    @click="$emit('click')"
  >
    <img
      :src="`https://flagcdn.com/${loading ? 'w20' : 'w320'}/${code}.jpg`"
      :alt="name"
      :class="{'country-card__flag--loaded': !loading}"
      class="country-card__flag"
    >

    <div class="country-card__content">
      <h2 class="country-card__name">
        {{ name }}
      </h2>

      <div class="country-card__meta">
        <span class="country-card__meta_title">Population</span>
        <span class="country-card__meta_value">{{ population }}</span>
      </div>

      <div class="country-card__meta">
        <span class="country-card__meta_title">Region</span>
        <span class="country-card__meta_value">{{ region }}</span>
      </div>

      <div class="country-card__meta">
        <span class="country-card__meta_title">Capital</span>
        <span class="country-card__meta_value">{{ capital }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    name: String,
    capital: String,
    population: Number,
    region: String,
    alpha2Code: String
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    code () {
      return this.alpha2Code.toLowerCase()
    }
  },
  created () {
    const img = new Image()
    img.src = `https://flagcdn.com/w320/${this.code}.jpg`
    img.onload = () => {
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.country-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-radius: 0.5rem;
  background: var(--primary-color);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-0.5rem);
  }

  &__flag {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    object-fit: fill;
    aspect-ratio: 4/3;
    filter: blur(10px);
    transition: all 0.2s ease-in-out;

    &--loaded {
      filter: blur(0);
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
  }

  &__name {
    margin: 0 0 1rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 300;
  }

  &__meta_title {
    font-weight: 600;
    &:after {
      content: ': ';
    }
  }
}
</style>
