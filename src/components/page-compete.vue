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
            <router-link to="/compete/testlist" style="color: #333;text-decoration: none;">
              <button class="btn btn-success item-btn">
                Enter
              </button>
            </router-link>
          </div>
        </div>
        <div class="sidebar">
          <div class="title">Occupation</div>
          <div class="occupation-list" v-for="(item, index) in occupationList">
            <input type="radio" class="occupation-input" :id="item.id" name="occupation-list"
                   @click="occupationChoice(item)">
            <label :for="item.id" class="occupation-item">{{item.id}}</label>
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
        DEFAULT_CONTEST_ITEM: [
          {
            classification: 'Algorithm',
            score: '100',
            path: ''
          },
          {
            classification: 'C++ Programming Language',
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
        contestItem: [],
        occupationList: [
          {
            id: 'All Contest',
            contestItem: [
              'Algorithm',
              'C++ Programming Language',
              'Java',
              'Python',
              'Html+CSS',
              'JavaScript',
              'Data structure',
              'Qt',
            ]
          },
          {
            id: 'Front-end engineers',
            contestItem: [
              'Algorithm',
              'Html+CSS',
              'JavaScript',
              'Data structure'
            ]
          },
          {
            id: 'Back-end engineer',
            contestItem: [
              'Algorithm',
              'Java',
              'Python',
              'Data structure'
            ]
          },
          {
            id: 'Algorithm Engineer',
            contestItem: [
              'Algorithm',
              'C++ Programming Language',
              'Python',
              'Data structure',
            ]
          },
          {
            id: 'Artificial intelligence engineer',
            contestItem: [
              'Algorithm',
              'C++ Programming Language',
              'Python',
              'Data structure',
            ]
          },
        ]
      }
    },
    methods: {
      occupationChoice: function (item) {
//        http://blog.csdn.net/chelen_jak/article/details/28886311
//        对contestItem数组初始化
        this.contestItem = this.DEFAULT_CONTEST_ITEM
        var tempArray1 = [];//临时数组1
        var tempArray2 = [];//临时数组2
//        给tempArray1临时数组赋值，tempArray1数组的形式为[Algorithm:true,Java:true]
        for (var i = 0; i < item.contestItem.length; i++) {
          tempArray1[item.contestItem[i]] = true
        }
//        将contestItem[i].classification的值与tempArray1作比较，如匹配，push contestItem[i].classification的值到tempArray2
        for (var i = 0; i < this.contestItem.length; i++) {
          if (tempArray1[this.contestItem[i].classification]) {
            tempArray2.push(this.contestItem[i])
          }
        }

        this.contestItem=tempArray2;

      }
    },
    components: {
      myheader,
      myfooter
    },
    created: function () {
      this.contestItem = this.DEFAULT_CONTEST_ITEM
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
    border-bottom: 1px solid #e0e4e8;
    padding-left: 20px;
  }

  .path-wrap {
    width: 1440px;
    margin: 0 auto;
    line-height: 65px;
    color: #979faf;
    font-weight: bold;
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
    box-shadow: 0 4px 8px 0 rgba(51, 51, 51, .1);
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
    position: absolute;
    right: 0;
  }

  .occupation-list {
    margin-top: 10px;
    font-weight: bold;
    font-size: 15px;
  }

  .occupation-input {
    display: inline-block;
    height: 15px;
  }

  .occupation-item {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
  }
</style>
