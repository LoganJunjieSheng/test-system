<template>
  <div>
    <myheader></myheader>

    <myfooter></myfooter>
  </div>

</template>
<script>
  import myheader from './app/app-header.vue'
  import myfooter from './app/app-footer.vue'

  export default {
    name: 'entrying',
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
