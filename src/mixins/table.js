export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    height: [String, Number],
    maxHeight: {
      type: [String, Number],
      default: 530
    },
    size: String
  },
  methods: {
    handleSelect() {
      this.$emit('select', ...arguments)
    },
    handleSelectAll() {
      this.$emit('select-all', ...arguments)
    },
    handleSelectionChange() {
      this.$emit('selection-change', ...arguments)
    },
    handleRowClick() {
      this.$emit('row-click', ...arguments)
    },
    handleRowDblclick() {
      this.$emit('row-dblclick', ...arguments)
    }
  }
}
