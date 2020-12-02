export default {
  data() {
    return {
      selected: null
    }
  },
  methods: {
    handleDeliver(data) {
      this.$emit('update:value', data)
      this.$emit('handle-selected', data)
    }
  }
}
