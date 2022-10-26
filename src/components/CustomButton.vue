<template>
  <button
      class="button"
      @click="onClick"
  >
   <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5em 1.5em;
  gap: .5em;
  border: 0;
  box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: none;
  font-weight: 600;
  font-size: 16px;
  background: var(--primary-color);
  color: var(--input-color);
  transition: box-shadow 0.3s;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.2);
  }
}
</style>
