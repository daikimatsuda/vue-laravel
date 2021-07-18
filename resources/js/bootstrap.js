// クッキーを簡単に扱えるモジュールをインポート
import Cookies from "js-cookie";

window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

//
window.axios.interceptors.request.use(config => {
    //クッキーからトークンを取り出す
    const xsrfToken = Cookies.get("XSRF-TOKEN");
    // ヘッダーに添付する
    config.headers["X-XSRF-TOKEN"] = xsrfToken;
    return config;
});

// responseの設定
// API通信の成功、失敗のresponseの形が変わるため、どちらともresponseにレスポンスオブジェクトを代入
window.axios.interceptors.response.use(
    //成功時の処理
    response => response,
    //失敗時の処理
    error => error.response || error
);

