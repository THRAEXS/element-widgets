<template>
  <el-input
    v-model="val"
    :disabled="disabled"
    v-bind="$attrs"
    @blur="handleBlur"
    @focus="handleFocus"
    @change="handleChange"
    @input="handleInput"
    @clear="handleClear">
    <el-button
      slot="append"
      :disabled="disabled"
      @click="handleClick"
      v-if="label">
      {{ label }}
    </el-button>
    <el-button
      slot="append"
      :icon="icon"
      :disabled="disabled"
      @click="handleClick"
      v-else>
    </el-button>
  </el-input>
</template>
<script>
export default {
  name: 'ThxInputCarrier',
  props: {
    value: [String, Number],
    disabled: Boolean,
    icon: {
      type: String,
      default: 'el-icon-check'
    },
    label: String
  },
  data() {
    return {
      val: null
    }
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        this.val = this.value
      }
    }
  },
  methods: {
    handleBlur() {
      this.$emit('blur', ...arguments)
    },
    handleFocus() {
      this.$emit('focus', ...arguments)
    },
    handleChange() {
      this.$emit('update:value', this.val)
      this.$emit('change', ...arguments)
    },
    handleInput() {
      this.$emit('update:value', this.val)
      this.$emit('input', ...arguments)
    },
    handleClear() {
      this.$emit('clear', ...arguments)
    },
    handleClick() {
      this.$emit('click', ...arguments)
    }
  }
}
</script>
