<template>
  <div>
    <thx-card-box>
      <template v-slot:title>
        Selector - User Radio
      </template>

      <template v-slot:toolbar>
        <el-button
          type="success"
          icon="el-icon-check"
          size="mini"
          circle
          @click="visible = true"
        ></el-button>
      </template>

      <el-tag type="success">
        <b>{{ data }}</b>
      </el-tag>
    </thx-card-box>

    <!-- Case 1: (v-model || :value) &&  @handle-ok  -->
    <!-- <user-selector
      :visible.sync="visible"
      v-model="uid"
      @handle-ok="handleOk" /> -->
    <!-- <user-selector
      :visible.sync="visible"
      :value="uid"
      @handle-ok="handleOk" /> -->

    <!-- Case 2: :value.sync && @handle-ok -->
    <!-- <user-selector
      :visible.sync="visible"
      :value.sync="uid"
      @handle-ok="handleOk" /> -->

    <!-- Case 3: :value.sync && :data-set.sync -->
    <user-selector
      :visible.sync="visible"
      :value.sync="uid"
      :data-set.sync="data" />
  </div>
</template>

<script>
import UserSelector from '@/components/user-selector'

export default {
  name: 'UserRadio',
  components: { UserSelector },
  data() {
    return {
      visible: false,
      uid: null,
      data: null
    }
  },
  watch: {
    uid(nv, ov) {
      console.log('watch uid:', nv, ov)
    }
  },
  methods: {
    // Case 1: (v-model || :value) &&  @handle-ok
    /* handleOk(data) {
      this.uid = data.id
      this.data = data
    } */
    
    // Case 2: :value.sync && @handle-ok
    /* handleOk(data) {
      this.data = data
    } */
  }
}
</script>
