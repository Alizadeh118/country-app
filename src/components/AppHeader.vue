<template>
  <header class="header">
    <div class="container header__wrapper">
      <div class="header__title">Where in the world?</div>
      <div class="header__action">
        <button
            class="header__action_button"
            @click="toggleTheme"
        >
          <img
              v-show="theme === 'light'"
              src="@/assets/images/moon-regular.svg"
              alt="Light mode"
              class="header__action_img"
          />
          <img
              v-show="theme === 'dark'"
              src="@/assets/images/moon-solid.svg"
              alt="Dark mode"
              class="header__action_img"
          />
          <span class="header__action_text">Dark Mode</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      theme: 'light'
    }
  },
  methods: {
    toggleTheme () {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', this.theme)
      localStorage.setItem('theme', this.theme)
    }
  },
  created () {
    let theme = localStorage.getItem('theme')
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    document.documentElement.setAttribute('data-theme', theme)
  }
}
</script>

<style lang="scss">
.header {
  background: var(--primary-color);

  padding: 1.5rem 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-weight: 800;
    font-size: 1.5em;
  }

  &__action {
    display: flex;
    align-items: center;
  }

  &__action_button {
    color: inherit;
    background: none;
    border: none;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: .5em;
    cursor: pointer;
  }

  &__action_img {
    width: 20px;
    height: 20px;
    transform: rotate(-20deg);
  }

  &__action_text {
    display: none;
    @media screen and (min-width: 576px) {
      display: inline;
    }
  }
}
</style>
