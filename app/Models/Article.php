<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $primaryKey = 'article_id';
    // 更新可能カラム
    protected $fillable = ['user_id', 'title', 'body', 'body_type','article_type'];
}
