<template>
  <div id="ArticleShow">
      <div class="article_area py-4 px-2">
        <div class="col-md-12">
          <h2 type="text" v-text="article.title"></h2>
        </div>
        <div class="markdown_area mb-3">
          <mavon-editor
          :language="'ja'"
          v-model="article.body"
          :externalLink="mavonEditor.externalLink"
          :subfield="false"
          :editable="false"
          :toolbarsFlag="false"
          :boxShadow="false"
          :scrollStyle="false"
          defaultOpen="preview"
          previewBackground="#fff"
          ></mavon-editor>
        </div>
      </div>
      <div class="comment_area form-group">
        <div class="row">
          <div class="pl-4"><h5>コメント</h5></div>
          <div class="ml-auto pr-4"><button type="button" class="btn btn-success btn-sm" >コメント投稿</button></div>
        </div>
        <div class="comment pl-1 py-3">
          <span>この記事にコメントはありません。</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data: function () {
      return {
        mavonEditor: {
          externalLink: {
            markdown_css: function() {
              return '/static/css/markdown/github-markdown.min.css'
            },
            hljs_js: function() {
              return '/static/js/highlightjs/highlight.min.js'
            },
            katex_css: function() {
              return '/static/css/katex/katex.min.css'
            },
            katex_js: function() {
              return '/static/js/katex/katex.min.js'
            },
          },
        },
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
    },
}
</script>
<style lang="scss">
@import "../../sass/ArticleShow.scss";
</style>