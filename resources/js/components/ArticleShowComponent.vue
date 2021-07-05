<template>
  <div class="container">
    <div class="border">
      <form v-on:submit.prevent="submit">
        <div class="form-group">
          <h1 type="text" class="col-md-12 form-control form-control-lg" v-text="article.title"></h1>
        </div>
        <div class="form-group">
          <p class="form-control" v-text="article.content"></p>
        </div>
        <div class="form-group">
          <input type="text" class="col-md-12 form-control" placeholder="投稿内容の分類を入力（例：Java）">
        </div>
        <div class="form-group">
          <input type="text" class="col-md-12 form-control" placeholder="通知送信対象者">
        </div>
        <div class="col-md-12 pl-0 d-flex">
          <select class="form-control col-md-2">
            <option value='' disabled selected style='display:none;'>投稿種別</option>
            <option>質問</option>
            <option>情報共有</option>
            <option>技術共有</option>
          </select>
          <div class="col-md-4"></div>
          <div class="col-md-6 text-right pr-0">
            <button type="submit" class="btn btn-outline-info">プレビュー</button>
            <button type="submit" class="btn btn-success">投稿</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
   props: {
      articleId: {
        type: Number
      }
    },
    data: function () {
      return {
        article: {}
      }
    },
    methods: {
      getArticle() {
          this.$axios.get('/api/articles/' + this.$route.params.articleId)
            .then((res) => {
                this.article = res.data;
            });
      }
    },
    mounted() {
      this.getArticle();
    }
}
</script>