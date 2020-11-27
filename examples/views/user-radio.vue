<template>
  <div>
    <el-card>
      <template v-slot:header>
        <span>
          <b>Selector - User Radio</b>
        </span>
        <el-button
          style="float: right;"
          type="success"
          icon="el-icon-check"
          size="mini"
          circle
          @click="visible = true"></el-button>
        <el-button
          style="float: right;"
          type="info"
          icon="el-icon-edit"
          size="mini"
          circle
          @click="dialogBoxVisible = true"></el-button>
      </template>
      <el-tag type="success">
        <b>{{ data }}</b>
      </el-tag>
    </el-card>

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

    <thx-dialog-box :visible.sync="dialogBoxVisible" />

    <thx-tree-selector />
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
      dialogBoxVisible: false,
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
<style>
.el-card__header { padding: 15px!important; }
.el-card__body { padding: 15px!important; }
</style>
