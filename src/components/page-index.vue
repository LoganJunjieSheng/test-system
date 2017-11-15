<template>
  <div>
    <myheader></myheader>
    <div class="body">
      ddd
    </div>
    <myfooter></myfooter>
  </div>

</template>

<script>
  import myheader from './app/app-header.vue'
  import myfooter from './app/app-footer.vue'

  export default {
    name: 'index',
    data() {
      return {}
    },
    methods: {},
    components: {
      myheader,
      myfooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body{
    margin: 0px 0 50px 0;
  }
</style>
