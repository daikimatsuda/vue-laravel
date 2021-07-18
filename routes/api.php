<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

//register
Route::post('/register',[RegisterController::class,'register'])->name('register');
// login
Route::post('/login',[LoginController::class,'login'])->name('login');
// logout
Route::post('/logout',[LoginController::class,'logout'])->name('logout');
// user
Route::get('user',function() {
    return Auth::user();
})->name('user');
// トークンリフレッシュ
Route::get('/refresh-token', function (Illuminate\Http\Request $request) {
    $request->session()->regenerateToken();
    return response()->json();
})->name('refresh-token');

// チュートリアル用
Route::get('/tasks',[TaskController::class,'index']);
Route::post('/tasks',[TaskController::class,'store']);
Route::get('/tasks/{taskId}',[TaskController::class,'show']);
Route::put('/tasks/{taskId}',[TaskController::class,'update']);
Route::delete('/tasks/{taskId}',[TaskController::class,'destory']);

// 作成アプリ
Route::resource('/articles',ArticleController::class);