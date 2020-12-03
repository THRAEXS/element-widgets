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
    handleOpen() {
      this.$emit('open')
    },
    handleOpened() {
      this.$emit('opened')
    },
    handleClose() {
      this.updateVisible()
      this.$emit('close')
    },
    handleClosed() {
      this.$emit('closed')
    },
    updateVisible(v = false) {
      this.$emit('update:visible', v)
    }
  }
}
