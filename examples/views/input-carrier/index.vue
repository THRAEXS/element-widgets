<template>
  <thx-card-box title="Case - Input Carrier">
    {{ value || 'None' }}
    <el-row style="margin-top: 5px;">
      <thx-input-carrier
        :value.sync="value"
        clearable
        @click="handleClick" />
    </el-row>
    <el-row style="margin-top: 5px;">
      <thx-input-carrier
        :value.sync="value"
        label="选择"
        clearable
        @click="handleClick" />
    </el-row>
  </thx-card-box>
</template>
<script>
export default {
  name: 'CaseInputCarrier',
  data() {
    return {
      value: 'THRAEX'
    }
  },
  methods: {
    handleClick() {
      console.debug(arguments)
      this.value = `${this.value}-1`
      // this.value = 'THRAEX-1'
    }
  }
}
</script>
