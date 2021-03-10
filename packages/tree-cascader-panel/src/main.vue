<template>
  <multi
    v-if="multiple"
    v-bind="$attrs"
    v-on="$listeners"
  />
  <radio
    v-else
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
<script>
import Radio from './radio'
import Multi from './multi'

export default {
  name: 'ThxTreeCascaderPanel',
  components: { Radio, Multi },
  computed: {
    multiple() {
      const { multiple } = this.$attrs.props || {}
      return multiple === true
    }
  }
}
</script>
