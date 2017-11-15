<template>

  <div class="box all">
    <ul class="nav nav-tabs nav-justified lg">
      <li role="presentation"><a href="http://localhost:8080/#/signup">Sign Up</a></li>
      <li role="presentation" class="active"><a href="http://localhost:8080/#/log">Log In</a></li>
    </ul>
    <div class=" input-group input-group-lg margin-input">
                <span class="input-group-addon" id="sizing-addon1">
                    <span class="glyphicon glyphicon-user"></span>
                </span>
      <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon1">
    </div>
    <div class=" input-group input-group-lg margin-input">
      <span class="input-group-addon" id="sizing-addon3">
        <span class="glyphicon glyphicon-lock"></span>
      </span>
      <input type="text" class="form-control" placeholder="Passwd" aria-describedby="sizing-addon3">
    </div>
    <div>
      <label class="margin-input remember-me"><input type="checkbox" id="remember_me" data-analytics="AuthPageRememberMe" data-attr1="master">
        <small>Remember me</small>
      </label>
      <small class="forgot">Forgot your password?</small>
    </div>
    <div class="margin-input login">
      <button type="button" class="btn btn-info dropdown-toggle widthLoginBttn" data-toggle="dropdown"> Log In </button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'log',
    data() {
      return {}
    },
    methods: {},
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
  }
  .all{
    width: 500px;
    height: 400px;
    border: 1px solid gray;
    /*border: 1px solid cornflowerblue;*/

  }

  .margin-input {
    margin: 30px 20px 30px 20px;
  }

  .login {
    margin: 15px 100px 20px 180px;

  }
  .widthLoginBttn{
    width:150px;
  }

  .lg {
    font-size: large;
  }
  .remember-me{
    margin: 30px;
  }
  .forgot{
    margin: 30px 30px 30px 190px;
    color: dodgerblue;
  }

</style>
