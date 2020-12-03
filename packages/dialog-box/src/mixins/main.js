export default {
  props: {
    visible: Boolean,
    width: {
      type: String,
      default: '70%'
    },
    top: {
      type: String,
      default: '3vh'
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  watch: {
    visible() {
      this.dialogVisible = this.visible
    }
  },
  methods: {
    handleClosed() {
      this.$emit('update:visible', false)
      this.$emit('closed')
    }
  }
}
