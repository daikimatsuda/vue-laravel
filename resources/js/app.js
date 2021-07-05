import Vue from "vue";
import axios from 'axios';
import VueRouter from 'vue-router';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskEditComponent from "./components/TaskEditComponent";
import ArticleCreateComponent from "./components/ArticleCreateComponent";
import ArticleListComponent from "./components/ArticleListComponent";
import ArticleShowComponent from "./components/ArticleShowComponent";
import ArticleEditComponent from "./components/ArticleEditComponent";

window.Vue = require('vue');
Vue.prototype.$axios = axios
Vue.use(VueRouter);
Vue.use(mavonEditor);

// componentのタグ名を決める
Vue.component("header-component", HeaderComponent);
Vue.component("footer-component", FooterComponent);

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
        {
            path: "/",
            name: "articles.list",
            component: ArticleListComponent,
            props: true
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

const app = new Vue({
    el: "#app",
    router
});
