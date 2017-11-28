<template>
  <div>
    <myheader></myheader>
    <div class="body">
      <div class="path">
        <div class="path-wrap">
          <span>Dashboard > {{path.speciesName}} > {{path.trackName}} </span>
        </div>
      </div>
      <div class="contest">
        <div>
          <div class="mainbody" >
            <div class="mainTitle-style ">
              <h4 class="h4-style">Warmup Challenges</h4>
          </div>
            <div>
              <div class="prac-border" >
                <div class="content-listbody">
                  <span class="list-title">Solve Me First</span>
                </div>
                <div class="bottom-listbody" >
                  <div class="practiceText1">
                  <span class="body-font">Success Rate:</span>
                  <span >97.33%</span>
                  <span class="body-font">Max Score:</span>
                  <span>1</span>
                  <span class="body-font">Difficulty:</span>
                  <span >Easy</span>
                  </div>
                  <div class="pull-right pos-button" style="display: inline-block;position: absolute;top: 35px;right: 40px" >
                    <router-link to="/test" style="color: #333;text-decoration: none;">
                      <button  class="btn btn-success item-btn" >
                        Enter
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="prac-border" >
                <div class="content-listbody">
                  <span class="list-title">Solve Me First</span>
                </div>
                <div class="bottom-listbody" >
                  <div class="practiceText1">
                    <span class="body-font">Success Rate:</span>
                    <span >97.33%</span>
                    <span class="body-font">Max Score:</span>
                    <span>1</span>
                    <span class="body-font">Difficulty:</span>
                    <span >Easy</span>
                  </div>
                  <div class="pull-right pos-button"  style="display: inline-block;position: absolute;top: 35px;right: 40px">
                    <router-link to="/test" style="color: #333;text-decoration: none;">
                      <button  class="btn btn-success item-btn" >
                        Enter
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar">
          <div class="title">{{path.species}}</div>
          <div class="track-list li-hover" v-for="(item,index) in trackList">
            <div class="track-item" :class="{borderLeft:item.isSelected}" @click="selectTrack(index)">{{item.id}}</div>
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
    name: 'testlist',
    data() {
      return {
        path: {
          species: 'TUTORIALS',
          speciesName: 'Tutorials',
          trackName: '30 Days of Code'
        },
        trackListData:[]
      }
    },
    methods: {
      selectTrack: function (index) {
        this.trackList[index].isSelected=true
        var temp=this.path.species
        this.path.species=''
        this.path.species=temp

//        console.log(123)
      }
    },
    computed: {
      trackList: function () {
        var that=this
        switch (this.path.species) {
          case 'CORE CS':
            var array=[
              {
                id: 'Algorithms',
                isSelected: false,
              },
              {
                id: 'Data Structures',
                isSelected: false,
              }, {
                id: 'CORE CS',
                isSelected: false,
              },
            ];
            that.trackListData=array
            return  array
          case 'TUTORIALS':
            var array=[
              {
                id: '30 Day of Code',
                isSelected: false,
              },
              {
                id: 'Cracking the Coding Interview',
                isSelected: false,
              },
              {
                id: '10 Days of Statistics',
                isSelected: false,
              },
              {
                id: '10 Days of JavaScript',
                isSelected: false,
              },
            ]
            that.trackListData=array
            return  array
          case 'SPECIALIZED SKILLS':
            return [
              {
                id: 'Artificial Intelligence',
                isSelected: false,
              },
              {
                id: '30 Day of SQL',
                isSelected: false,
              },
              {
                id: '30 Day of Database',
                isSelected: false,
              },
              {
                id: 'Distributed Systems',
                isSelected: false,
              },
              {
                id: 'Regex',
                isSelected: false,
              },
              {
                id: 'Security',
                isSelected: false,
              },


            ]
          case 'LANGUAGES':
            return [
              {
                id:  'C++',
                isSelected: false,
              },
              {
                id:  'Java',
                isSelected: false,
              },
              {
                id: 'Ruby',
                isSelected: false,
              },
              {
                id: 'Linux Shell',
                isSelected: false,
              },
              {
                id:  'Functional Programming',
                isSelected: false,
              },
            ]
        }
      }
    },
    components: {
      myheader,
      myfooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body {
    margin: 0px 0 65px 0;
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
    margin: 30px auto 0;
    position: relative;

  }

  .sidebar {
    width: 300px;
    /*background-color: beige;*/
    position: absolute;
    left: 20px;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .track-list {
    font-weight: bold;
    font-size: 15px;
  }

  .track-item {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    cursor: pointer;
  }

  .track-item:hover {

    color: #4691f6;
    transition: all 0.3s;
  }

  .borderLeft {
    border-left: 4px solid #4691f6;
  }

  <!-- -----------------我是华丽的分割线----------------- -->
  .pos-button{
    display: inline-block;
    position: absolute;
    top: 35px;
    right: 40px;
  }

  .practiceText1{
    width: 400px;
    display: inline-block;
    position: absolute;
    top: 55px;
  }

  .font-w{
    font-weight: bold;
  }
  .h4-style{
    margin: 0px;
    font-weight: bold;
    font-size: 150%;
  }

  .li-hover:hover{
    border-left: 3px solid #4691f6;
  }

  .item-btn {

    height: 40px;
    width: 160px;
  }

  .pull-left{
    float: left;
  }

  .pull-right{
    float:right;
  }

  .mainbody{
    width: 65%;
    float: right;
    box-sizing: border-box;
  }

  .mainTitle-style{
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .prac-border{
    border: 1px solid #e0e4e8;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
  }

  .content-listbody{
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
  }
  .list-title{
    color: rgba(14,220,0,0.96);
    font-size: large;
    font-weight:600;
  }
  .bottom-listbody{
    padding-top: 10px;
    padding-left: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
  }

  .body-font{
    font-weight:600;
    font-size: x-small;
    color: #979faf;
  }

</style>
