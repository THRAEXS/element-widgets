export default {
  props: {
    index: {
      type: Object,
      default() {
        return {
          label: '',
          width: 60,
          fixed: false
        }
      }
    }
  },
  methods: {
    handleIndex(index) {
      const { page, size } = this.$props
      return (page - 1) * size + (index + 1)
    }
  }
}
