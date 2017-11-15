<template>
  <div>
    <myheader></myheader>
    <div class="body">
      <div id="main">
        <div id="target">
          <div id="guide">
            <span> <a href=""><strong>寒武纪首页></strong></a>
            <a href=""><strong>在线测试</strong></a></span>
          </div>
          <div>
            <hr style="color: #9ea7b2;">
          </div>
          <div id="hd">
            <span style="font-size:40px;; font-weight :600">
                Cambricon Test 1</span> <br>
            by <a id="master">小明</a>
          </div>
          <div id="choosePart">
            <br>
            <button id="qB" value="1" onclick="problemShow()">Problem</button>
            <button id="submissionsButton" value="2" onclick="submissionsShow()">Submissions</button>
          </div>

          <div id="question">
            <div id="text1">
              <strong>Problem1:</strong>
              <br>
              Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d =
              target?
              Find all unique quadruplets in the array which gives the sum of target.
              <br>
              <br>
              <strong>Note:</strong>
              <br>
              Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
              The solution set must not contain duplicate quadruplets.
              <br><br>
              <img width="100%"
                   src="http://a3.qpic.cn/psb?/V14LSvUU4cfkK3/LST7nZYppMZNP4849kTo.NhiILX4rMUNQ7P3ZpUNur8!/b/dHYBAAAAAAAA&ek=1&kp=1&pt=0&bo=cQTgAHEE4AARADc!&tm=1510038000&sce=0-12-12&rf=viewer_311">
              <!--src="http://b271.photo.store.qq.com/psb?/V12MK4LM04eZFZ/GAT*rvi0tp8e3pnpU0Qy78e3u3IFka8YjjCxb2KnsA0!/b/dA8BAAAAAAAA&bo=yQBoAQAAAAAREIc!&rf=viewer_311">-->
              <div id="time">
                <div id="countdown">
                  <br>
                  <p><strong style="color: red">&nbsp;&nbsp;&nbsp;&nbsp;答题剩余时间：</strong></p>
                  <hr>
                  &nbsp;&nbsp;<strong> <span>20</span>min<span>00</span>s</strong>
                  <input style="display: none" type="button" value="开始">
                </div>
              </div>
              <div id="code">
                <div id="chooseLangerage">
                  <p style="font-size: 30px">&nbsp &nbsp&nbsp<strong>Code</strong></p>
                  <select class="btn btn dropdown-toggle" style="border: solid #c2c7d0 0.5px">
                    <!--选择语言-->
                    <option>C</option>
                    <option>C++</option>
                    <option>Java</option>
                    <option>PHP</option>
                    <option>Phyton</option>
                    <!--<option></option>-->
                  </select>
                </div>
                <div id="type1">
                  <textarea id="type2"></textarea>
                </div>
                <div id="run">
                  <button class="btn btn-default "
                          id="runB1">Run Code
                  </button>
                  <button class="btn btn-default "
                          id="runB2" onclick="alertShow();submissionsShow()">Submit Code
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="sub">
            <table id="subTable">
              <thead>
              <tr>
                <!--<th></th>-->
                <!--<th></th>-->
                <th></th>

                <th>Problem</th>
                <th>Language</th>
                <th>Time</th>
                <th>Result</th>
                <th>Score</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <!--<td>&nbsp;</td>-->
                <!--<td>&nbsp;</td>-->
                <td id="td1">&nbsp;</td>

                <td>Cambricon Test 1</td>
                <td>Java</td>
                <td>10min</td>
                <td>True</td>
                <td>100.0</td>
                <td>
                  <button class="btn btn-default "
                          id="subB1">view results
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <myfooter></myfooter>
    <script type="application/javascript">
      let tab1 = document.getElementById("question");
      let tab2 = document.getElementById("sub");

      function problemShow() {
        tab2.style.display = "none";
        tab1.style.display = "block";
      }


      function submissionsShow() {
        tab1.style.display = "none";
        tab2.style.display = "block";
      }

      function alertShow() {
        alert("提交成功");
      }


    </script>
  </div>

</template>

<script>
  import myheader from './app/app-header.vue'
  import myfooter from './app/app-footer.vue'


  export default {
    name: 'test',
    data() {
      return {}
    },
    methods: {},
    components: {
      myheader,
      myfooter,
    }
  }

  window.onload = function () {
    var oCountDown = document.getElementById("countdown");
    var aInput = oCountDown.getElementsByTagName("input")[0];
    var timer = null;
    aInput.onclick = function () {
      this.className == "" ? (timer = setInterval(updateTime, 1000), updateTime()) : (clearInterval(timer));
      this.className = this.className == '' ? "cancel" : '';
    };

    function format(a) {
      return a.toString().replace(/^(\d)$/, '0$1');
    }

    function updateTime() {
      var aSpan = oCountDown.getElementsByTagName("span");
      var oRemain = aSpan[0].innerHTML.replace(/^0/, '') * 60 + parseInt(aSpan[1].innerHTML.replace(/^0/, ''));
      if (oRemain <= 0) {
        clearInterval(timer);
        return;
      }
      oRemain--;
      aSpan[0].innerHTML = format(parseInt(oRemain / 60));
      oRemain %= 60;
      aSpan[1].innerHTML = format(parseInt(oRemain));
    }

    // 加上此句即可。
    aInput.click();
  };

  function alertShow() {
    alert("提交成功");
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body {
    margin: 0px 0 65px 0;
  }

  #guide {
    line-height: 20px;
    text-underline: none;
    display: inline-block;
  }

  #target {
    height: 60px;
    padding: 20px;
  }

  #main {
    padding: 20px;
    margin: 0 auto;
    width: 1000px;
  }

  #choosePart {
    background-color: #f8f9fa;
    border: solid #c2c7d0;
    margin-top: 15px;
    height: 66px;
    /*position: relative;*/
    padding-top: 0px;

  }

  #question {
    height: 1000px;
    padding-top: 30px;
    /*display: none;*/
  }

  #text1 {
    float: left;
    width: 700px;
    height: 900px;
  }

  #time {
    background-color: #f8f9fa;
    border: solid #c2c7d0;
    width: 200px;
    height: 200px;
    position: fixed;
    top: 100px;
    right: 30px;
    z-index: 20
  }

  #code {
    border: solid #c2c7d0;
    height: 400px;
    margin-top: 20px;
    position: relative;
  }

  #chooseLangerage {
    border-bottom: solid #c2c7d0;
    height: 70px;
    background-color: #f8f9fa;
    position: relative;

  }

  #chooseLangerage p {
    line-height: 65px;
    font-size: medium;
    display: inline-block;

  }

  #chooseLangerage select {
    height: 30px;
    float: right;
    position: absolute;
    right: 60px;
    top: 20px
  }

  #type2 {
    width: 695px;
    height: 275px;
    border: none;
    outline: none;
  }

  #master:hover {
    color: #26386d;
    text-decoration: none;
  }

  #guide a {
    color: #979faf;
  }

  #guide a:hover {
    color: black;
    text-decoration: none;
  }

  #choosePart button {
    border: solid #f8f9fa;
    border-bottom: solid #c2c7d0;
    background-color: #f8f9fa;
    color: #979faf;
    font-size: x-large;
    display: inline-block;
    margin-left: 10px;
    margin-top: -12px;
    height: 55px;
    outline: none;

  }

  #choosePart button:hover {
    color: black;
  }

  #choosePart button:focus {
    border: solid #c2c7d0;
    outline: none;
    background-color: white;
    border-bottom: white solid;
    color: black;
  }

  /*#type {*/
  /*display: inline-block;*/
  /*width: 700px;*/
  /*}*/

  #countdown span {
    font-size: 60px;

  }

  #run {

    border: none;
    border-top: solid #c2c7d0;
    /*background-color: #f8f9fa;*/
    height: 50px;
    width: 695px;
    position: absolute;
    bottom: 0px;
  }

  #runB1 {
    border: solid #c2c7d0 0.5px;
    background-color: white;
    position: absolute;
    right: 135px;

  }

  #runB2 {

    border: #787878 0.5px solid;
    background-color: #2dc565;
    color: white;
    position: absolute;
    right: 30px;
  }

  #run button {
    width: 100px;
    /*height: 25px;*/
    display: inline-block;
    line-height: 20px;
    margin-top: 10px;
    margin-right: 5px;
    border-radius: 3px;
  }

  #runB2:focus {
    outline: none;

  }

  #runB1:focus {
    outline: none;
    border: solid #c2c7d0 0.5px;
    background-color: #f8f9fa;;
    display: inline-block;
  }

  #text1 strong {
    font-size: large;
  }

  #text1 {
    font-size: medium;
  }

  #subTable {
    width: 920px;
    height: 80px;
    border: solid #c2c7d0;
    margin-top: 20px;
    position: relative;
  }

  #subTable thead {
    border-bottom: #c2c7d0 solid 1px;
    height: 40px;
  }

  #td1 {
    width: 18px;
  }

  #subTable td {
    width: 153px;

  }

  #sub {
    height: 500px;
    display: none;
  }

  #subB1 {
    width: 100px;
    /*height: 25px;*/
    display: inline-block;
    line-height: 20px;
    border-radius: 3px;
    outline: none;

  }

  #subB1:hover {
    background-color: #2dc565;
    color: white;

  }

</style>
