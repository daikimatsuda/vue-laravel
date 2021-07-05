<template>
  <div class="container">
    <div>
      <form v-on:submit.prevent="submit">
        <div class="form-group">
          <input type="text" class="col-md-12 form-control form-control-lg" placeholder="タイトル" v-model="article.title">
        </div>
        <div class="form-group">
          <mavon-editor :language="'ja'" fontSize="12px" placeholder="内容をMarkdown形式で入力" v-model="article.body"></mavon-editor>
        </div>
        <div class="form-group d-flex">
          <div class="col-md-9 pl-0">
            <!-- <input type="text" class="form-control" placeholder="投稿内容の分類を入力（例：Java）" v-model="article.body_type" @input="onInput"> -->
            <vue-simple-suggest v-model="article.body_type" :list="suggestionList" :filter-by-query="true">
              <input type="text" class="form-control" name="tag" id="tag" placeholder="タグを入力してください" autocomplete="off">
            </vue-simple-suggest>
          </div>
          <div class="col-md-3">
            <select class="form-control ml-3" v-model="article.article_type">
              <option value='' disabled selected style='display:none;'>投稿種別</option>
              <option value='1'>質問</option>
              <option value='2'>情報共有</option>
              <option value='3'>技術共有</option>
            </select>
          </div>
        </div>
        <div class="form-group d-flex">
          <div class="col-md-9 pl-0">
            <input type="text" class="form-control" placeholder="通知送信対象者" v-model="article.sendee">
          </div>
          <div class="col-md-3 pr-0 text-right">
            <button type="submit" class="w-75 btn btn-success" >投稿</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import VueSimpleSuggest from "vue-simple-suggest";
import 'vue-simple-suggest/dist/styles.css';
export default {
  components: {
        VueSimpleSuggest
  },
   data: function() {
     return {
       article: {
         user_id: 1,
         title:'',
         body:'',
         body_type:'',
         article_type:'',
        //  sendee:''
       },
       suggestionList: ['Java', 'JavaScript', 'vue.js', "STS"]
     }
   },
   methods: {
     submit() {
       this.$axios.post('/api/articles',this.article).then((res) => {
         this.$router.push({name: 'articles.list'});
       });
     },
     onInput() {
       console.log('入力されました');
     }
   }
}
</script>
<style>
.markdown-body {
    max-height: 500px;
    height: 480px;
}
</style>