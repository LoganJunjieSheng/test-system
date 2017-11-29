<template>
  <div style="z-index: 10;position: relative">
    <myheader></myheader>
    <!--body是全部的内容-->
    <div class="body">
      <div id="main">
        <div id="target">
          <!--guide是导航栏，可以跳转到首页-->
          <!--<div id="guide">-->
            <!--<span> <a href=""><strong>寒武纪首页></strong></a>-->
            <!--<p style="display: inline-block"><strong>在线测试</strong></p></span>-->
          <!--</div>-->
          <div class="path">
            <div class="path-wrap">
              <span>Dashboard > </span>
            </div>
          </div>
          <!--这是一条横线-->
          <div>
            <hr style="color: #9ea7b2;">
          </div>
          <!--hd是题目的标题还有题目的发布者，之后应该要更改-->
          <div id="hd">
            <span style="font-size:40px;; font-weight :600">
                Cambricon Test 1</span> <br>
            by <a id="master">小明</a>
          </div>
          <!--choosePart是选择题目（problem）或者已提交代码（Submissions）-->
          <div id="choosePart">
            <br>
            <button id="qB" value="1" onclick="problemShow()">Problem</button>
            <button id="submissionsButton" value="2" onclick="submissionsShow()">Submissions</button>
          </div>
          <!--question是题目区的全部部分，包括问题内容及打代码的地方-->
          <div id="question">
            <!--text1是问题正文，之后需要更改成可传入图片的形式-->
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
              <!--time是倒计时部分-->
              <div id="time">
                <div id="countdown">
                  <br>
                  <p><strong style="color: red">&nbsp;&nbsp;&nbsp;&nbsp;答题剩余时间：</strong></p>
                  <hr>
                  &nbsp;&nbsp;<strong> <span>20</span>min<span>00</span>s</strong>
                  <input style="display: none" type="button" value="开始">
                </div>
              </div>
              <!--code是写代码的所有地方-->
              <div style="position: relative;z-index: 5">
                <div id="code">
                  <!--chooseLangerage是选择所需编程语言的地方，选择之后传参数到后端-->
                  <div id="chooseLangerage" style="position: relative">
                    <p style="font-size: 30px">&nbsp &nbsp&nbsp<strong>Code</strong></p>
                    <select class="btn btn dropdown-toggle" style="border: solid #c2c7d0 0.5px">
                      <!--选择语言-->
                      <option value="1">C</option>
                      <option value="2">C++</option>
                      <option value="3">Java</option>
                      <option value="4">PHP</option>
                      <option value="5">Python</option>
                      <!--<option></option>-->
                    </select>
                  </div>
                  <!--type1是真正的代码区，即实际写代码的地方-->
                  <div id="type1" style="position: relative">
                  <textarea id="type2">
                  </textarea>
                  </div>
                  <div id="run" style="z-index: 5;background-color:#ffffff;position: relative ">
                    <button class="btn btn-default "
                            id="runB1" onclick="resultShow()">Run Code
                    </button>
                    <button class="btn btn-default "
                            id="runB2" onclick="alertShow();submissionsShow()">Submit Code
                    </button>
                  </div>

                </div>
                <div id="result">
                  <p style="background-color:#f7f7f7">Input</p>
                  <p style="">1 2 3 4</p>
                  <p style="background-color:#f7f7f7">Output</p>
                  <p style="">4 3 2 1</p>
                  <p style="background-color:#f7f7f7">Others:</p>
                </div>
              </div>
            </div>
          </div>
          <!--sub是查看已提交代码的区域，包含了运行的结果得分等等-->

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
      <!--<pre class="hljs">-->
      <!--<code>-->
      <!--function problemShow() {-->
      <!--tab2.style.display = "none";-->
      <!--tab1.style.display = "block";-->
      <!--}-->
      <!--</code>-->
      <!--</pre>-->
    </div>
    <myfooter></myfooter>
    <script type="application/javascript">
      <!--editor是代码区的方法，主要作用是决定代码区代码的样式-->
      var editor = CodeMirror.fromTextArea(document.getElementById("type2"), {
        lineNumbers: true,     // 显示行数
        indentUnit: 4,         // 缩进单位为4
        styleActiveLine: true, // 当前行背景高亮
        matchBrackets: true,   // 括号匹配
        lineWrapping: true,    // 自动换行
//        mode:   //
        theme: 'default',     //样式
      });


      //      这部分是用于切换problem和Submissions两个tab的
      let tab1 = document.getElementById("question");
      let tab2 = document.getElementById("sub");
      var result1 = document.getElementById("result");

      function resultShow() {
        result1.style.display = "block";

      }

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
  //这部分是负责倒计时的
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
  .path {
    height: 65px;
    width: 100%;
    /*background-color: royalblue;*/
    border-bottom: 1px solid #e0e4e8;
    padding-left: 20px;
  }

  #result {

    border: solid #c2c7d0;
    height: 220px;
    margin-top: 30px;
    margin-bottom: 100px;
    display: none;
  }

  #result p {
    height: 40px;
    font-size: larger;
    margin: 0px;
  }

  .body {
    margin: 65px 0 65px 0;
  }

  #guide {
    line-height: 0px;
    text-underline: none;
    display: inline-block;
    height: 0px;
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
    z-index: 0;

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
    margin-top: -11px;
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
    bottom: 30px;
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
