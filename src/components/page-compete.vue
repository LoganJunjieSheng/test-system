<template>
  <div>
    <myheader></myheader>
    <div class="body">
      <div class="path">
        <div class="path-wrap">
          All Contests
        </div>
      </div>
      <div class="contest">
        <div class="contest-list">
          <div class="title">Active Contests</div>
          <div class="contest-item" v-for="(item, index) in contestItem">
            <div class="item-classification">{{contestItem[index].classification}}</div>
            <div class="item-score">
              Highest score:
              <span class="height-score">{{contestItem[index].score}}</span>
            </div>
            <button class="btn btn-success item-btn">Enter</button>
          </div>
        </div>
        <div class="sidebar">
          <div class="title">Occupation</div>
          <div class="occupation-list" v-for="(item, index) in occupationList">
            <input type="checkbox" class="occupation-input">
            <div class="occupation-item">{{occupationList[index]}}</div>
          </div>
        </div>
      </div>
    </div>

    <myfooter></myfooter>
  </div>

</template>

<script>
  import myheader from './app/app-header.vue'
  import myfooter from './app/app-footer.vue'

  export default {
    name: 'compete',
    data() {
      return {
        contestItem: [
          {
            classification: 'Algorithm',
            score: '100',
            path: ''
          },
          {
            classification: ' C++ Programming Language',
            score: '100',
            path: ''
          },
          {
            classification: 'Java',
            score: '100',
            path: ''
          },
          {
            classification: 'Python',
            score: '100',
            path: ''
          },
          {
            classification: 'Html+CSS',
            score: '100',
            path: ''
          },
          {
            classification: 'JavaScript',
            score: '100',
            path: ''
          },
          {
            classification: 'Data structure',
            score: '100',
            path: ''
          },
          {
            classification: 'Qt',
            score: '100',
            path: ''
          },

        ],
        occupationList: [
          'Front-end engineers',
          'Back-end engineer',
          'Algorithm Engineer',
          'Artificial intelligence engineer',
        ]
      }
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
  .body {
    margin: 65px 0 65px 0;
  }

  .path {
    height: 65px;
    width: 100%;
    /*background-color: royalblue;*/
    border-bottom: 1px solid #e0e4e8;
    padding-left: 20px;
  }

  .path-wrap {
    width: 1440px;
    margin: 0 auto;
    line-height: 65px;
    color: #979faf;
    font-weight: bold;
    /*font*/
  }

  .contest {
    width: 1440px;
    margin: 0 auto;
    position: relative;
  }

  .contest-list {
    width: calc(100% - 350px);
    width: -webkit-calc(100% - 300px);
    width: -moz-calc(100% - 300px);
    /*background-color: salmon;*/
    position: absolute;
    left: 0;
    padding-left: 20px;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;

  }

  .contest-item {
    position: relative;
    border: 1px solid #e0e4e8;
    border-radius: 8px;
    margin-top: 10px;
    height: 70px;
    /*line-height: 70px;*/
  }

  .contest-item:hover {
    border: 1px solid #979faf;
  }

  .item-classification {
    position: absolute;
    left: 10px;
    top: 50%;
    margin-top: -25px;;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    font-size: 18px;
  }

  .item-score {
    position: absolute;
    right: 200px;
    top: 50%;
    margin-top: -25px;;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    font-size: 18px;
  }

  .height-score {
    color: #2ec866;
  }

  .item-btn {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -20px;;
    height: 40px;
    width: 160px;
  }

  .sidebar {
    width: 300px;
    /*background-color: beige;*/
    position: absolute;
    right: 0;
  }

  .occupation-list {
    margin-top: 10px;
    font-weight: bold;
    font-size: 15px;
  }
  .occupation-input{
    display: inline-block;
    height: 15px;
  }
  .occupation-item{
    display: inline-block;
    height: 20px;
    line-height: 20px;
  }
</style>
