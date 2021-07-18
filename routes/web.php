<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// どのパスを叩かれてもapp.blade.phpを返す。
// app.jsでログインしていない場合は、ログインvue画面に遷移させるような処理にするといいはず

Route::get('/{any}', function() {
   return view('app');
 })->where('any', '.*');

Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// // ルーテインぐ設定
// Route::group(['midddleware' => ['web']],function() {
//   // ログインしていない場合
//   if(!Auth::check()){
//     return redirect(route('LoginPage'));
//   }
// });