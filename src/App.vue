<template>
  <div id="app">
    <appHeader />
    <div class="container">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/AppHeader'

export default {
  name: 'app',
  components: {
    appHeader
  }
}
</script>

<style scoped>
.container {
  margin-top: 3rem;
  margin-bottom: 2rem;
}
</style>
