<template>
  <div
      class="custom-select-wrapper"
      @click="isOpen = true"
      @blur="isOpen = false"
      tabindex="0"
  >
    <div
        class="custom-select"
        :class="{open: isOpen}"
    >
      <div class="custom-select__trigger"><span>{{ value || placeholder }}</span>
        <div class="arrow"></div>
      </div>
      <div class="custom-options">
        <span
            v-for="option in options"
            :key="option"
            class="custom-option"
            :class="{selected: value === option}"
            @click.stop="select(option)"
        >
          {{ option }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customSelect',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    options: Array,
    value: String,
    placeholder: String
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    select (option) {
      const value = this.value === option ? '' : option
      this.isOpen = false
      this.$emit('change', value)
    }
  }
}
</script>

<style>

.custom-select-wrapper {
  position: relative;
  user-select: none;
  width: 100%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.custom-select-wrapper:focus {
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
}

.custom-select {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
}

.custom-select__trigger {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  font-size: 14px;
  font-weight: 600;
  color: var(--input-color);
  height: 60px;
  line-height: 60px;
  background: var(--primary-color);
  cursor: pointer;

}

.custom-options {
  position: absolute;
  display: block;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  background: var(--primary-color);
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
  border-radius: 5px;
  padding: 0.5em 0;
}

.custom-select.open .custom-options {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.custom-option {
  position: relative;
  display: block;
  padding: 0 2em;
  font-size: 14px;
  font-weight: 600;
  color: var(--input-color);
  line-height: 2em;
  cursor: pointer;
  transition: all 0.5s;
}

.custom-option:hover {
  cursor: pointer;
  color: var(--text-color);
}

.custom-option.selected {
  color: var(--text-color);
}

.arrow {
  position: relative;
  display: block;
  font-size: 16px;
  width: .5em;
  height: .5em;
  border: 2px solid var(--input-color);
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  transition: transform 0.3s;
}

.open .arrow {
  transform: rotate(135deg);
}
</style>
