<template>
  <div>
    <myheader></myheader>
    <div class="path">
      <div class="path-wrap">
        <span>管理者页面</span>
      </div>
    </div>
    <div class="body d-flex">
      <div class="body-width">
        <!-- 主体框 -->
        <div class="mainbody">
          <div class="general-style">
            <div class="mgb">
              <span class="title-size">题目标题</span>
            </div>
            <div>
              <input type="text" name="title" class="col-md-width fontWeight ip-pad"  required autofocus>
            </div>
          </div>
          <div class="general-style">
            <div class="mgb">
              <span class="title-size">题目描述</span>
            </div>
            <div>
              <textarea name="description" class="input ip-pad"></textarea>
            </div>
          </div>
          <div class="general-style">
            <div class="pull-left mgb2" style="width: 50%;padding-right: 10px;">
              <div class="mgb">
                <span class="title-size">时间限制<span style="font-size: 16px;">（ms，1-10000ms）</span></span>
              </div>
              <div>
                <input type="number" class="col-md-width ip-pad" required/>
              </div>
            </div>
            <div class="pull-right mgb2" style="width: 50%;padding-left: 10px;">
              <div class="mgb">
                <span class="title-size">内存限制<span style="font-size: 16px;"> ( MB, 最低16M, Java不能低于32M )</span></span>
              </div>
              <div >
                <input type="number" class="col-md-width ip-pad" required/>
              </div>
            </div>
          </div>
          <div class="general-style">
            <div class="pull-left mgb2" style="width: 50%;">
              <div class="mgb">
                <span class="title-size">难易度</span>
              </div>
              <div>
                <select name="difficulty" class=" ip-pad" style="width: 150px;" required>
                  <option value="1" selected="selected">Easy</option>
                  <option value="2">Middle</option>
                  <option value="3">Difficult</option>
                </select>
              </div>
            </div>
            <div class="pull-right mgb2" style="width: 50%;padding-left: 10px;">
              <div class="mgb">
                <span class="title-size">标签</span>
              </div>
              <div>
                <input type="text" class="col-md-width ip-pad" required/>
              </div>
            </div>
          </div>
        </div>
        <!-- 侧边栏 -->
        <div class="asidebar">

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body {
    margin: 0 0 65px 0;
  }

  .ip-pad{
    padding: 5px 10px;
   }

  .pull-left{
    float: left;
  }

  .pull-right{
    float: right;
  }

  .col-md-width{
    width: 100%;
  }

  .fontWeight{
    font-weight: normal;
  }

  .mgb{
    margin-bottom: 10px;
  }

  .mgb2{
    margin-bottom: 20px;
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
  }

  .d-flex{
    display: flex;
    justify-content: center;
  }

  .body-width{
    width:1440px;
    margin-top: 20px;
    font-weight: bold;
  }

  .mainbody{
    width: 70%;
    float: right;
    padding-left: 10px;
    padding-right: 10px;
  }

  .general-style{
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
  }

  .input{
    font-weight: normal;
    font-size: 16px;
    width:100%;
    height: 300px;
    resize: none;
    line-height: 1.6;
  }

  .asidebar{
    width:30%;
    padding-right: 10px;
    border: 1px solid red;
    height: 50px;
  }


  .title-size{
    font-size: large;
  }
</style>
