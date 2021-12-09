<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Transportation\PackageController;
use App\Http\Controllers\Api\Transportation\AuthController;

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
// Route::get('/orders', function () {
//     // Token has both "check-status" and "place-orders" abilities...
// })->middleware(['auth:sanctum', 'abilities:check-status,place-orders']);

Route::middleware(['api'])->group(function(){
    Route::post('login',[AuthController::class,'login']);
    Route::middleware(['auth'])->group(function(){
        Route::post('logout',[AuthController::class,'logout']);
    });

    Route::middleware([])->group(function(){
        Route::get('package',[PackageController::class,"index"]);
        Route::get('package/{id}',[PackageController::class,"read"]);
        Route::post('package/create',[PackageController::class,"create"]);
        Route::post('package/update',[PackageController::class,"update"]);
        Route::delete('package/{id}',[PackageController::class,"delete"]);
        Route::get('package/compact',[PackageController::class,"compact"]);
    });
});





// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
