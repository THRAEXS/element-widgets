export default {
  beforeCreate() {
    console.time('timer-total')
    console.time('timer-create')
  },
  created() {
    console.timeEnd('timer-create')
  },
  beforeMount() {
    console.time('timer-mount')
  },
  mounted() {
    console.timeEnd('timer-mount')
  },
  beforeUpdate() {
    console.time('timer-update')
  },
  updated() {
    console.timeEnd('timer-update')
    console.timeEnd('timer-total')
  },
  beforeDestroy() {
    console.time('timer-destroy')
  },
  destroyed() {
    console.timeEnd('timer-destroy')
  }
}
