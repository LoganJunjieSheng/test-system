<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @font-face {
    font-family: PingFang SC Regular;
    src: url('../static/PingFang SC Regular.ttf');
  }
#app {
  font-family: 'PingFang SC Regular', Helvetica, Arial, sans-serif;
  font-size: 14px;

  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

</style>
