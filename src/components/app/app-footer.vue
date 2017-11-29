<template>
  <div class="app-footer" style="z-index: 1000">
    <div class="wrap">
      联系我们:
      <span class="glyphicon glyphicon-globe color"></span> <span> 地址/Add：北京市海淀区知春路7号致真大厦D座11层 </span>
      <span class="glyphicon glyphicon-earphone color"></span><span> 电话/Tel： 010-83030003 </span>
      <span class="glyphicon glyphicon-envelope color"></span><span> 邮箱/Mail：info@cambricon.com </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-footer {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    /*background-color: #39424e;*/
    border-top: 1px solid #e0e4e8;
    background-color: white;
  }

  .wrap {
    position: relative;
    width: 1440px;
    height: 100%;
    line-height: 50px;
    margin: 0 auto;
    /*font-weight: ;*/
    font-family: Pingfangsc;
    /*color: #C2C7D0;*/
    text-align: center;
    /*padding-left: 180px;*/
    /*background-color: rebeccapurple;*/
  }
  .color{
    color: #39424e;
  }
</style>
