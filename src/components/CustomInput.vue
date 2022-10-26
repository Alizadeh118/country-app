<template>
  <div class="customInput">
    <img
        src="@/assets/images/magnifying-glass-solid.svg"
        alt="search icon"
        class="customInput__icon"
    >
    <input
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="customInput__input"
        :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
  name: 'customInput',
  props: {
    value: String,
    placeholder: String
  }
}
</script>

<style lang="scss">
.customInput {
  display: flex;
  align-items: center;
  position: relative;

  &__input {
    width: 100%;
    padding: 1.5em 1.5em 1.5em 4.5em;
    border: 0;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    outline: none;
    font-weight: 600;
    font-size: 14px;
    background: var(--primary-color);
    color: var(--input-color);
    transition: box-shadow 0.3s ease-in-out;

    &::placeholder {
      color: var(--input-color);
    }

    &:focus {
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    }
  }
  &__icon {
    position: absolute;
    left: 2em;
    width: 1em;
    height: 1em;
    opacity: 0.4;
  }
}
</style>
