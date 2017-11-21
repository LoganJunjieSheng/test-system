<template>
  <div>
    <myheader></myheader>
    <div class="body">
      <div class="path">
        <div class="path-wrap">
          Dashboard
        </div>
      </div>
      <div class="contest">
        <div class="title">
          <div class="title-wrap">
            ALL TRACKS
          </div>
        </div>
        <div class="track">
          <div class="track-list-1 track-list">
            <div class="track-title">CORE CS</div>
            <div class="track-item" v-for="(item, index) in track1 ">
              <router-link to="/practice/testlist">
                <div class="track-wrap">
                  <img :src="track1[index].imgUrl" class="tracl-item-img" height="50" width="50"/>
                  <div class="tracl-item-text">{{track1[index].name}}</div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="track-list-2 track-list">
            <div class="track-title">TUTORIALS</div>
            <div class="track-item" v-for="(item, index) in track2 ">
              <router-link to="/practice/testlist">
                <div class="track-wrap">
                  <img :src="track2[index].imgUrl" class="tracl-item-img" height="50" width="50"/>
                  <div class="tracl-item-text">{{track2[index].name}}</div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="track-list-3 track-list">
            <div class="track-title">SPECIALIZED SKILLS</div>
            <div class="track-item" v-for="(item, index) in track3 ">
              <router-link to="/practice/testlist">
                <div class="track-wrap">
                  <img :src="track3[index].imgUrl" class="tracl-item-img" height="50" width="50"/>
                  <div class="tracl-item-text">{{track3[index].name}}</div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="track-list-4 track-list">
            <div class="track-title">LANGUAGES</div>
            <div class="track-item" v-for="(item, index) in track4 ">
              <router-link to="/practice/testlist">
                <div class="track-wrap">
                  <img :src="track4[index].imgUrl" class="tracl-item-img" height="50" width="50"/>
                  <div class="tracl-item-text">{{track4[index].name}}</div>
                </div>
              </router-link>
            </div>
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
    name: 'practice',
    data() {
      return {
//        defaultUrl:''
        track1: [
          {
            species:'CORE CS',
            name: 'Algorithms',
            imgUrl: require('../assets/Algorithms.png')
          },
          {
            species:'CORE CS',
            name: 'Data Structures',
            imgUrl: require('../assets/Data Structures.png')
          },
          {
            species:'CORE CS',
            name: 'Mathematics',
            imgUrl: require('../assets/Mathematics.png')
          },

        ],
        track2: [
          {
            species:'TUTORIALS',
            name: '30 Day of Code',
            imgUrl: require('../assets/Code.png')
          },
          {
            species:'TUTORIALS',
            name: 'Cracking the Coding Interview',
            imgUrl: require('../assets/Cracking the Coding Interview.png')
          },
          {
            species:'TUTORIALS',
            name: '10 Days of Statistics',
            imgUrl: require('../assets/Statistics.png')
          },
          {
            species:'TUTORIALS',
            name: '10 Days of JavaScript',
            imgUrl: require('../assets/JavaScript.png')
          },
        ],
        track3: [
          {
            species:'SPECIALIZED SKILLS',
            name: 'Artificial Intelligence',
            imgUrl: require('../assets/Artificial Intelligence.png')
          },
          {
            species:'SPECIALIZED SKILLS',
            name: '30 Day of SQL',
            imgUrl: require('../assets/SQL.png')
          },
          {
            species:'SPECIALIZED SKILLS',
            name: '30 Day of Database',
            imgUrl: require('../assets/Database.png')
          },
          {
            species:'SPECIALIZED SKILLS',
            name: 'Distributed Systems',
            imgUrl: require('../assets/Distributed.png')
          },
          {
            species:'SPECIALIZED SKILLS',
            name: 'Regex',
            imgUrl: require('../assets/Regex.png')
          },
          {
            species:'SPECIALIZED SKILLS',
            name: 'Security',
            imgUrl: require('../assets/Security.png')
          },

        ],
        track4: [
          {
            species:'LANGUAGES',
            name: 'C++',
            imgUrl: require('../assets/cplus.png')
          },
          {
            species:'LANGUAGES',
            name: 'Java',
            imgUrl: require('../assets/Java.png')
          },
          {
            species:'LANGUAGES',
            name: 'Ruby',
            imgUrl: require('../assets/Ruby.png')
          },
          {
            species:'LANGUAGES',
            name: 'Linux Shell',
            imgUrl: require('../assets/Linux.png')
          },
          {
            species:'LANGUAGES',
            name: 'Functional Programming',
            imgUrl: require('../assets/Functional Programming.png')
          },
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

  .title {
    height: 40px;
    line-height: 40px;
  }

  .title-wrap {
    width: 1400px;
    margin: 0 auto;
    color: #333;
    font-weight: bold;
  }

  .track {
    width: 1400px;
    margin: 0 auto;
    position: relative;
  }

  .track-list {
    position: absolute;
    width: 24%;
  }

  .track-list-1 {
    left: 0;
  }

  .track-list-2 {
    left: 25%;
  }

  .track-list-3 {
    left: 50%;
  }

  .track-list-4 {
    left: 75%;
  }

  .track-wrap {
    width: 100%;
    height: 100%
  }

  .track-title {
    height: 40px;
    line-height: 40px;
    color: #979faf;
    font-weight: bold;
  }

  .track-item {
    border-bottom: 1px dotted #ccc;
    height: 80px;
    /*margin-top: 15px;*/
    position: relative;
  }

  .track-item:hover {
    border: 1px solid #2ec866;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    box-shadow:0 4px 8px 0 rgba(51,51,51,.1);
      /*margin: 13px 0 19px 0;*/
    /*transition:  .4s ;*/
  }

  .tracl-item-img {
    position: absolute;
    top: 50%;
    margin-top: -25px;
    left: 10px;
  }

  .tracl-item-text {
    position: absolute;
    height: 30px;
    line-height: 30px;
    top: 50%;
    margin-top: -15px;
    left: 90px;
    color: #444;
    font-weight: bold;
  }
</style>
