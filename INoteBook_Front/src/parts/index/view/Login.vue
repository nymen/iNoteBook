<template>
  <div class="funny-space-panel">
    <div class="fs-head">
      <div class="fs-title">开心果<span>用心感受快乐</span></div>
      <div>登陆</div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>

  import dummy from './../dummy/dummyData.json';
  import validation from '@/common/tools/validation';
  import axios from 'axios';

  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        userMsg: '',
        passMsg: '',
        message: ''
      }
    },
    methods: {
      submit() {
        this.userMsg = '';
        this.passMsg = '';
        this.message = '';
        if (!validation.isNotNull(this.username) || !validation.isNotNull(this.password)) {
          if (!validation.isNotNull(this.username)) {
            this.userMsg = '用户名不能为空...';
          }
          if (!validation.isNotNull(this.password)) {
            this.passMsg = '密码不能为空...';
          }
          return;
        }

        let _self = this;
        axios.post('/ucenter/validation', {
          params: {
            userName: this.username,
            pwd: this.password
          }
        }).then((response) => {
          let result = response.data.result;
          if (result.role === 'customer') {
            this.$router.push({'path': '/customer',query:{userName:_self.username}});
          } else {
            this.$router.push({'path': '/provider'});
          }
        });
      },
      reset() {
        this.username = '';
        this.password = '';
        this.userMsg = '';
        this.passMsg = '';
        this.message = '';
      }
    }
  }
</script>


<style>
  div.page-login {
    /*background-image: url(./../../../common/image/login_bg_7.jpg);
    background-repeat: no-repeat;
    background-size: cover;*/
    height: 100%;
    width: 100%;
    color: #cccccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div.login-wlc {
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 5px;
    text-align: center;
    color: #000;
  }

  div.login-info {
    min-width: 400px;
    display: inline-block;
    padding: 20px 20px 20px 70px;
    border: 1px solid #cccccc;
    border-radius: 20px;
    font-size: 18px;
  }

  div.login-info > p {
    margin: 0 0 0 40px;
    color: #ff0000;
    font-size: 12px;
  }


  div.info-item > input {
    width: 250px;
  }

  div.info-item > span {
    color: #ff0000;
    font-size: 12px;
  }

  div.info-item > div > img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  div.login-button {
    text-align: center;
  }
</style>
