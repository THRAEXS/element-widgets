<template>
    <el-card :body-style="{ padding: 0 }">
      <template v-slot:header>
        <el-row type="flex" align="middle" :style="headerStyle" v-if="showHeader">
          <el-col :span="leftSpan" v-if="title">
            <b>{{ title }}</b>
          </el-col>
          <el-col align="right" :span="rightSpan" v-if="$slots.toolbar">
            <slot name="toolbar"></slot>
          </el-col>
        </el-row>
      </template>
      
      <div :style="bodyStyle">
        <slot />
      </div>

      <div class="thx-card-box__footer" v-if="$slots.footer">
        <div :style="footerStyle">
          <slot name="footer" />
        </div>
      </div>
    </el-card>
</template>
<script>
export default {
  name: 'ThxCardBox',
  props: {
    title: String,
    headerStyle: {
      type: Object,
      default() {
        return {
          padding: '10px'
        }
      }
    },
    bodyStyle: {
      type: Object,
      default() {
        return {
          padding: '10px',
        }
      }
    },
    footerStyle: {
      type: Object,
      default() {
        return {
          padding: '10px',
          textAlign: 'right'
        }
      }
    }
  },
  computed: {
    showHeader() {
      return this.title || this.$slots.toolbar
    },
    leftSpan() {
      return this.span(this.$slots.toolbar)
    },
    rightSpan() {
      return this.span(this.title)
    }
  },
  methods: {
    span(obj) {
      return obj ? 12 : 24
    }
  }
}
</script>
<style scoped>
::v-deep .el-card__header {
  padding: 0;
}
.thx-card-box__footer {
  border-top: 1px solid #EBEEF5;
}
</style>
