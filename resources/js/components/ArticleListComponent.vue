<template>
  <div class="container">
    <div v-for="(value, key) in articles" :key="key">
      <div class="card bg-light">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <router-link v-bind:to="{name: 'articles.show',params: {articleId: value.article_id}}">
              <a class="font-weight-bold"><p>{{ value.title }}</p></a>
            </router-link>
          </blockquote>
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
  }
}
</script>
