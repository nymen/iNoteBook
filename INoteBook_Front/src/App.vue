<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import '@/common/style/box.css'
  import '@/common/style/input.css'
  import '@/common/style/button.css'

  export default {
    name: 'app'
  }
</script>

<style>
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 14px;
  }

  #app {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

</style>
