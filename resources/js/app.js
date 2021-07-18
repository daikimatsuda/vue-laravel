import "./bootstrap";
import Vue from "vue";
import axios from 'axios';
import VueRouter from 'vue-router';
import store from './store';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import 'mavon-editor/dist/markdown/github-markdown.min.css'
import 'mavon-editor/dist/highlightjs/highlight.min.js'
import 'mavon-editor/dist/katex/katex.min.css'
import 'mavon-editor/dist/katex/katex.min.js'

import App from "./App.vue";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Message from "./components/Message";
import Login from "./components/Login";
import SystemError from "./components/SystemError";
import NotFound from "./components/NotFound";
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskEditComponent from "./components/TaskEditComponent";
import ArticleCreateComponent from "./components/ArticleCreateComponent";
import ArticleListComponent from "./components/ArticleListComponent";
import ArticleShowComponent from "./components/ArticleShowComponent";
import ArticleEditComponent from "./components/ArticleEditComponent";

Vue.config.devtools = true;
window.Vue = require('vue');
Vue.prototype.$axios = axios
Vue.use(VueRouter);
Vue.use(mavonEditor);

// componentのタグ名を決める
Vue.component("header-component", HeaderComponent);
Vue.component("footer-component", FooterComponent);
Vue.component("message", Message);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/tasks",
            name: "task.list",
            component: TaskListComponent
        },
        {
            path: "/tasks/create",
            name: "task.create",
            component: TaskCreateComponent,
            props: true
        },
        {
            path: "/tasks/:taskId",
            name: "task.show",
            component: TaskShowComponent,
            props: true
        },
        {
            path: "/tasks/:taskId/edit",
            name: "task.edit",
            component: TaskEditComponent,
            props: true
        },
        // 新規作成
        // ログイン
        {
            path: "/login",
            name: "login",
            component: Login,
            props: true,
        },
        {
            path: "/500",
            name: "systemError",
            component: SystemError,
            props: true
        },
        {
            path: "*",
            name: "systemError",
            component: NotFound,
            props: true
        },
        {
            path: "/",
            name: "articles.list",
            component: ArticleListComponent,
            props: true,
            // beforeEnter(to,from,next) {
            //     //AUTHストアでログインしているかチェック
            //     if(store.getters["auth/check"]) {
            //         // している場合
            //         next("/");
            //     }else {
            //         // していない場合ログイン画面へ
            //         next("/login");
            //     }
            // }
        },
        {
            path: "/articles",
            name: "articles.create",
            component: ArticleCreateComponent,
            props: true
        },
        {
            path: "/articles/:articleId",
            name: "articles.show",
            component: ArticleShowComponent,
            props: true
        },
        {
            path: "/articles/:articleId/edit",
            name: "articles.edit",
            component: ArticleEditComponent,
            props: true
        },
    ]
});

const app = async() => {
    
    await store.dispatch("auth/currentUser");
    new Vue({
        el: "#app",
        router,
        store,
        components: { App },
        template: "<App />"
    });
};

// appを実行
app();

