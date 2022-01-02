<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Transportation\PackageController;
use App\Http\Controllers\Api\Transportation\UserController;
use App\Http\Controllers\Api\Transportation\AuthController;
use App\Http\Controllers\Api\Transportation\ClientController;
use App\Http\Controllers\Api\Transportation\StaffController;

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

Route::group([
    'middleware' => [
        'api'
    ]
],function(){
    Route::post('login',[AuthController::class,'login']);
    Route::group([
        'middleware' => [
            'auth:api'
        ]
    ],function(){
        Route::post('logout',[AuthController::class,'logout']);
    });

    Route::group([
        'middleware' => [
            'auth:api'
        ]
    ],function(){
        /**
         * Package
         */
        Route::get('package',[PackageController::class,"index"]);
        Route::get('package/{id}',[PackageController::class,"read"]);
        Route::post('package/create',[PackageController::class,"create"]);
        Route::post('package/update',[PackageController::class,"update"]);
        Route::delete('package/{id}',[PackageController::class,"delete"]);
        Route::get('package/compact',[PackageController::class,"compact"]);

        /**
         * User
         */
        Route::get('user',[UserController::class,"index"]);
        Route::get('user/{id}',[UserController::class,"read"]);
        Route::post('user/create',[UserController::class,"create"]);
        Route::post('user/update',[UserController::class,"update"]);
        Route::post('user/password/change',[UserController::class,"changePassword"]);
        Route::delete('user/{id}',[UserController::class,"delete"]);
        Route::get('user/compact',[UserController::class,"compact"]);

        /**
         * Client
         */
        Route::get('client',[ClientController::class,"index"]);
        Route::get('client/{id}',[ClientController::class,"read"]);
        Route::post('client/create',[ClientController::class,"create"]);
        Route::post('client/update',[ClientController::class,"update"]);
        Route::delete('client/{id}',[ClientController::class,"delete"]);
        Route::get('client/compact',[ClientController::class,"compact"]);

        /**
         * Staff
         */
        Route::get('staff',[StaffController::class,"index"]);
        Route::get('staff/{id}',[StaffController::class,"read"]);
        Route::post('staff/create',[StaffController::class,"create"]);
        Route::post('staff/update',[StaffController::class,"update"]);
        Route::delete('staff/{id}',[StaffController::class,"delete"]);
        Route::get('staff/compact',[StaffController::class,"compact"]);
    });
});





// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
