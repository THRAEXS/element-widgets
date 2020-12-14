export default {
  methods: {
    handleDeliver(data) {
      this.$emit('update:value', data)
      this.$emit('selected', data)
    }
  }
}
