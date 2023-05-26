<template>
  <div>关于</div>
  <div class="hello">
    <ul>
      <!-- <el-button
        v-if="getBarAddBtn"
        @click="showModel"
        v-show="activeList.menu == 'barGuide'"
        size="mini"
        style="background-color: #00a179; padding: 3px; margin-left: 50px"
        type="success"
        icon="el-icon-plus"
        circle
      ></el-button>
      <company-dia
        @updateSuccess="addSuccess"
        :isAdd="true"
        :show.sync="addModal"
      ></company-dia> -->
    </ul>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="less" scoped>
.hello {
  box-sizing: border-box;
  height: 200px;
  position: relative;
  top: 20px;
  left: 30px;
  width: 200px;
}
</style>
