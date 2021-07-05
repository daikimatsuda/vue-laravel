<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('article_id')->comment('記事ID');
            $table->integer('user_id')->comment('ユーザーID');
            $table->string('title',100)->comment('タイトル');
            $table->text('body')->comment('記事内容');
            $table->string('body_type')->comment('記事内容種類');
            $table->integer('article_type')->comment('記事種別');
            $table->timestamps('');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
