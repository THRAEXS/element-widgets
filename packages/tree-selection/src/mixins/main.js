export default {
  props: {
    height: {
      type: String,
      default: '500px'
    },
    data: Array,
    props: Object,
    nodeKey: {
      type: String,
      default: 'id'
    },
    accordion: {
      type: Boolean,
      default: true
    },
    defaultExpandAll: Boolean,
    defaultExpandedKeys: Array,
    defaultExpandFirstNode: {
      type: Boolean,
      default: true
    },
    checkStrictly: Boolean
  },
  data() {
    return {
      selected: null
    }
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        this.selected = this.value
      }
    }
  },
  methods: {
    getLevelNode(node) {
      if (node.level === 0) return []

      const parent = this.getLevelNode(node.parent)
      const { label } = Object.assign({}, this.$refs.tree.props, this.props)
      const [data, key] = [node.data, this.nodeKey]

      return [...parent, { [key]: data[key], [label]: data[label] }]
    },
    handleDeliver(nodes, val) {
      this.$emit('update:value', val)
      this.$emit('selected', nodes, val)
    }
  }
}
