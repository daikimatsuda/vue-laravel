<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <!-- ルート -->
        <router-view />
      </div>
    </main>
  </div>
</template>
<script>
import Header from "./components/HeaderComponent.vue";
import Message from "./components/Message.vue";
// ステータスコード
import { NOT_FOUND, UNAUTHORIZED, INTERNAL_SERVER_ERROR } from "./const";
export default {
  components: {
    Header,
    Message
  },
  computed: {
    // ERRORストアのcodeステートを取得
    errorCode() {
      return this.$store.state.error.code;
    }
  },
  watch: {
    // errorCodeを監視
    errorCode: {
      async handler(val) {
        // 500
        if(val === INTERNAL_SERVER_ERROR) {
          // 500に移動
          this.$router.push("/500");
        }
        // 419
        else if (val === UNAUTHORIZED) {
          // トークンをリフレッシュ
          await axios.get("/api/refresh-token");
          // ストアのuserをクリア
          this.$store.commit("auth/setUser",null);
          // ログイン画面へ移動
          this.$router.push("/login");
        }
        // 404
        else if(val === NOT_FOUND) {
          // 404へ移動
          this.$router.push("/not-found");
        }
      },
      // createdでも呼び出すときはこれだけでOK
      immediate: true
    },
    // 同じrouteの異なるパラメータでも画面遷移しても、vue-routerは画面を再描画しないのでwatchで監視
    $route() {
      this.$store.commit("error/setCode",null);
    }
  }
};
</script>