export default {
  props: {
    selection: Object
  },
  computed: {
    selectionProps() {
      return Object.assign({
        align: 'center',
        width: '40',
        fixed: false
      }, this.selection)
    }
  },
  methods: {
    handleDeliver(data) {
      this.$emit('update:value', data)
      this.$emit('selected', data)
    }
  }
}
