<template>
  <div class="container">
    <div>
      <form v-on:submit.prevent="submit">
        <div class="form-group">
          <input type="text" class="col-md-12 form-control form-control-lg" placeholder="タイトル">
        </div>
        <div class="form-group">
          <textarea class="form-control" rows="15" placeholder="投稿内容を入力"></textarea>
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
   data: function() {
     return {
       article: {}
     }
   },
   method: {
     submit() {
       this.$axios.post('/api/articles',this.article).then((res) => {
         this.$router.push({name: 'article.list'});
       });
     }
   }
}
</script>