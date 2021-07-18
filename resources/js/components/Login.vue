<template>
  <div class="container">

    <!-- login -->
    <section class="login">
      <h2>Login</h2>
      <!-- errors -->
      <div v-if="loginErrors" class="errors">
        <ul v-if="loginErrors.email">
          <li v-for="msg in loginErrors.email" :key="msg">{{ msg }}</li>
        </ul>
        <ul v-if="loginErrors.password">
          <li v-for="msg in loginErrors.password" :key="msg">{{ msg }}</li>
        </ul>
      </div>
      <!-- login -->
      <form @submit.prevent="login">
        <div>Email</div>
        <div>
          <input type="email" v-model="loginForm.email"/>
        </div>
        <div>Password</div>
        <div>
          <input type="password" v-model="loginForm.password"/>
        </div>
        <div>
          <button type="submit">login</button>
        </div>
      </form>
    </section>
    <!-- /login -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        email:"",
        password:"",
        remember: true
      }
    };
  },
  // 算出プロパティでストアのステートを参照
  computed: {
    // authストアのapiStatus
    apiStatus() {
      return this.$store.state.auth.apiStatus
    },
    // authストアのloginErrorMessages
    loginErrors() {
      return this.$store.state.auth.loginErrorMessages
    },
  },
  methods: {
    /**
     * login
     */
    async login() {
      //authストアのloginアクションを呼び出す
      await this.$store.dispatch("auth/login",this.loginForm);
      // 通信成功
      if(this.apiStatus) {
        // トップページへ遷移
        this.$router.push("/");
      }
    },
    /**
     * clear error message
     */
    clearError() {
      //AUTHストアのすべてのエラーメッセージをクリア
      this.$store.commit('auth/setLoginErrorMessages',null);
    }

  },
  created() {
    //clear error messages
    this.clearError();
  }
};
</script>