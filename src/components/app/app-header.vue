<template>
  <div class="app-header">
    <div class="wrap">
      <div class="logo"><img src="../../assets/logo.png" height="43" width="160"/></div>
      <router-link to="/practice" class="practice">
        <span class=" glyphicon glyphicon-pencil" style="line-height: 65px"></span>
        <span>Practice</span>
      </router-link>
      <router-link to="/compete" class="compete">
        <span class="glyphicon glyphicon-hourglass " style="line-height: 65px"></span>
        <span>Compete</span>
      </router-link>
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
    background-color: #39424e;
  }

  .wrap {
    position: relative;
    width: 65%;
    height: 100%;
    margin: 0 auto;
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
    font-size: 16px;
    font-weight: bold;
  }

  .practice:hover, .compete:hover {
    color: #fff;

  }
  .link-active{
    border-bottom: 5px solid #2ec866;;
  }


</style>
