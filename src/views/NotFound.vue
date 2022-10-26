<template>
  <div class="error404">
    <div class="error404__icon">:(</div>
    <h1>404 PAGE NOT FOUND</h1>
    <CustomButton @click="$router.replace('/')">
      Back to home
    </CustomButton>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton'

export default {
  name: 'NotFound',
  components: {
    CustomButton
  }
}
</script>

<style lang="scss">
.error404 {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__icon {
    font-size: 5em;
    transform: rotate(90deg);
  }
}
</style>
