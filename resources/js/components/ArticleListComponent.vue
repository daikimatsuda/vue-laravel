<template>
  <div id="ArticleList" class="container">
    <div>
      <div class="article_area mb-5">
        <div class="row" v-for="(value, key) in articles" :key="key">
          <div class="col-1">
            <p class="article_status">未解決</p>
            <p class="article_type">{{ value.article_type_disp }}</p>
          </div>
          <div class="col-10">
            <router-link v-bind:to="{name: 'articles.show',params: {articleId: value.article_id}}">
              <h3><a href="#" class="text-dark">{{ value.title }}</a></h3>
            </router-link>
            <ul class="pl-0">
              <li class="list-unstyled "><a href="#" class="article_tag">{{ value.body_type }}</a></li>
            </ul>
            <div class="">
              <div class="float-left"><span>コメント数 : 0</span></div>
              <div class="float-right">
                <span class="pr-3">@松田　大樹</span>
                <span class="pl-2">2021/07/07 11:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      articles: []
    }
  },
  methods: {
    getArticle() {
      this.$axios.get('/api/articles').then((res) =>{
        console.log(res);
        this.articles = res.data;
      });
    }
  },
  mounted() {
    this.getArticle();
  },
}
</script>
<style lang="scss">
@import "../../sass/ArticleList.scss";
</style>
