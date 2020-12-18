export default {
  props: {
    total: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    sizes: Array,
    small: Boolean
  },
  computed: {
    leftSpan() {
      return this.$slots.default ? 18 : 24
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('update:size', val)
      this.$emit('size-change', val)
    },
    handleCurrentChange(val) {
      this.$emit('update:page', val)
      this.$emit('current-change', val)
    },
    handlePrevClick(val) {
      this.$emit('prev-click', val)
    },
    handleNextClick(val) {
      this.$emit('next-click', val)
    }
  }
}
