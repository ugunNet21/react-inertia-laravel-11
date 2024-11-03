<?php

use App\Http\Controllers\Admin\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('books', BookController::class);
