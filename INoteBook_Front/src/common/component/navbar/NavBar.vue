<template>
  <div class="nav-bar">
    <span title="用户信息"><font-awesome-icon class="user-info" :icon="['fas','user-secret']"/></span>
    <span title="写笔记"><font-awesome-icon class="create-diary" :icon="['fas','edit']" @click="createDiary"/></span>
    <span title="笔记搜索"><font-awesome-icon class="diary-search" :icon="['fas','search']"/></span>
  </div>
</template>

<script type="es6">
  export default {
    name: 'NavBar',
    data() {
      return {
        msg: '',
        show: false
      }
    },
    methods: {
      createDiary() {
        this.$emit('initHtmlEditor', true);
      }
    }
  }
</script>

<style>
  .nav-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
    border-bottom: 2px solid #808080;
    border-top: 1px solid #808080;
    box-sizing: border-box;
    height: 40px;
    font-size: 22px;
  }

  .nav-bar > * {
    cursor: pointer;
  }
</style>
