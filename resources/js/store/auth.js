/*
 * status cord
 */
// import axios from "axios";
import {OK, CREATED, UNPROCESSABLE_ENTITY, TOO_MANY_REQUESTS} from "../const";

/*
 * ステート
 */
const state = {
  // ログイン済みユーザーを保持
  user: null,
  // Api通信の成功、失敗の保持
  apiStatus: null,
  // ログインのエラーメッセージの保持
  loginErrorMessage: null,
  // 登録のエラーメッセージの保持
  registerErrorMessages: null,
}

/*
 * ゲッター
 */
const getters = {
  // ログイン済かどうかのチェック
  check:state => !!state.user,
  // ユーザーネームの取得
  username: state => (state.user ? state.user.name : "")
}

/*
 * ミューテーション（同期処理）
 */
const mutations = {
  // userステートの更新
  setUser(state,user) {
    state.user = user
  },
  // Api通信の成功、失敗の更新
  setApiStatus(state,status) {
    state.apiStatus = status;
  },
  // ログインのエラーメッセージの更新
  setLoginErrorMessages(state,messages) {
    state.loginErrorMessages = messages;
  },
  // 登録のエラーメッセージ
  setRegisterErrorMessages(state,messages) {
    state.loginErrorMessages = messages;
  },
}

/*
 * アクション（非同期処理）
 */
const actions = {
  /*
  * loginのアクション
  */
  async login(context,data) {

    // apiStatusのアクション
    context.commit("setApiStatus",null)

    // Apiリクエスト
    const response = await axios.post("/api/login",data)

    // 通信成功の場合 200
    if(response.status === OK) {
      // apiStatus を true に 更新
      context.commit("setApiStatus",true);
      // user にデータを登録
      context.commit("setUser", response.data);
      // ここで終了
      return false;
    }
    // 通信失敗の場合
    // apiStatus を false に更新
    context.commit("setApiStatus", false);

    // 通信失敗のステータスが 422（バリデーションエラー）の場合
    // または、認証回数制限429;（認証回数制限）の場合
    if (response.status === UNPROCESSABLE_ENTITY || response.status === TOO_MANY_REQUESTS) {
      // loginErrorMessages にエラーメッセージを登録
      context.commit("setLoginErrorMessages", response.data.errors);
    }
    // 通信失敗のステータスがその他の場合
    else {
      // エラーストアの code にステータスコードを登録
      // 別ストアのミューテーションする場合は第三引数に { root: true } を追加
      context.commit("error/setCode", response.status, {
          root: true
        });
    }
  },
  /*
  * registerのアクション
  */
  async register(context,data) {
    //apistatusのクリア
    context.commit("setApiStatus",null)

    // Apiリクエスト
    const response = await axios.post("/api/register", data)

    // 通信成功の場合 201
    if(response.status === CREATED) {

      // apiStatus を true に 更新
      context.commit("setApiStatus",true);
      // userにデータを登録
      context.commit("setUser",response.data);
      // ここで終了
      return false;
    }

    // 通信失敗の場合
    // apiStatus を falseに更新
    context.commit("setApiStatus",false);

    // 通信失敗のステータスが422の場合
    if(response.status === UNPROCESSABLE_ENTITY) {
      // registerErrorMessages に　エラーメッセージを登録
      context.commit("setRegisterErrorMessages",response.data.errors);
    }else {
      // 通信失敗のステータスがその他の場合
      // エラーストアのcodeにステータスコードを登録
      // 別ストアのミューテーションする場合は第三引数に { root: true } を追加
      context.commit("error/setCode",response.status, {
        root: true
      });
    }
  },
  /*
  * logoutのアクション
  */
  async logout(context) {
    //apiStatusのクリア
    context.commit("setApiStatus",null);

    // Apiリクエスト
    const response = await axios.post("/api/logout");

    // 通信成功の場合 200
    if(response.status === OK) {

      // apiStatus を true に 更新
      context.commit("setApiStatus",true);
      // userにデータをクリア
      context.commit("setUser",null);
      // ここで終了
      return false;
    }

    // 通信失敗のステータスがその他の場合
    // apiStatus を false に更新
    context.commit("setApiStatus", false);

    // エラーストアの code にステータスコードを登録
    // 別ストアのミューテーションする場合は第三引数に { root: true } を追加
    context.commit("error/setCode", response.status, {
        root: true
    });
  },
  /*
  * カレントユーザのアクション
  */
  async currentUser(context) {
    // apiStatusのクリア
    context.commit("setApiStatus",null);

    // Apiリクエスト
    const response = await axios.get("/api/user");

    // ユーザをレスポンスから取得、なければnull
    const user = response.data || null;

    // 通信成功の場合 200
    if(response.status === OK) {
      // apiStatus を true に更新
      context.commit("setApiStatus", true);
      // user に取得したuserを登録
      context.commit("setUser", user);
      // ここで終了
      return false;
    }
    // 通信失敗の場合
    // apiStatus を false に更新
    context.commit("setApiStatus", false);
    // エラーストアの code にステータスコードを登録
    // 別ストアのミューテーションする場合は第三引数に { root: true } を追加
    context.commit("error/setCode", response.status, {
      root: true
    } );
  }
}

/*
  * エクスポート
  */
export default {
  // 名前をストア別に区別できるようにネームスペースを使う
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}