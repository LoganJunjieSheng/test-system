<template>
  <div class="app-header">
    <div class="wrap">
      <div class="logo"><img src="../../assets/logo.png" height="43" width="160"/></div>
      <router-link to="/practice" class="practice" active-class="link-active">
        <span class=" glyphicon glyphicon-pencil"></span>
        <span>Practice</span>
      </router-link>
      <router-link to="/compete" class="compete" active-class="link-active">
        <span class="glyphicon glyphicon-hourglass "></span>
        <span>Compete</span>
      </router-link>
      <div class="user">
        <span class=" glyphicon glyphicon-user"></span>
        logan_junjiesheng
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-header {
    position: fixed;
    top: 0;
    height: 65px;
    width: 100%;
    min-width: 1440px;
    background-color: #39424e;
  }

  .wrap {
    position: relative;
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    padding-left: 180px;
    /*background-color: rebeccapurple;*/
  }

  .logo {
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -21.5px;
  }

  .practice, .compete {
    width: 15%;
    height: 100%;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    color: #C2C7D0;
    /*font-size: 14px;*/
    font-weight: bold;
    line-height: 65px;
    /*margin-left: 160px;*/
  }

  .practice:hover, .compete:hover {
    color: #fff;

  }

  .user {
    width: 30%;
    height: 100%;
    text-align: center;
    color: #fff;
    /*font-size: 14px;*/
    font-weight: bold;
    line-height: 65px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -32.5px;
  }

  .link-active {
    border-bottom: 5px solid #2ec866;

  }


</style>
