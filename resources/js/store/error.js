/*
 * エクスポート
 */
const state = {
   // エラーコードの保持
   code: null
};

 /*
 * ミューテーション
 */
const mutations = {
  // エラーコードの更新
  setCode(state,code) {
    state.code = code;
  }
};

/*
 * エクスポート
 */
export default {
  // 名前のストア別に区別できるようにネームスペースを使う
  namespaced: true,
  state,
  mutations
};
