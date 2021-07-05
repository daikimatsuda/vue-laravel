<template>
  <div class="container-flex bg-primary mb-3">
    <div class="container">
      <nav class="navbar navbar-dark">
        <div class="d-flex">
          <span class="navbar-brand mb-0 font-weight-bold">sharing</span>
          <input type="search" class="ml-5 form-control" size="50" placeholder="検索ワードを入力">
        </div>
        <div>
          <router-link v-bind:to="{name: 'articles.create'}">
            <button class="btn btn-success">投稿</button>
          </router-link>
          <router-link v-bind:to="{name: 'task.create'}">
            <button class="btn btn-success">新着</button>
          </router-link>
          <router-link v-bind:to="{name: 'task.create'}">
            <button class="btn btn-success">ログイン</button>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>