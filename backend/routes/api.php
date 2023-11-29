<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\TransaksiController;
use App\Http\Controllers\ViewController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::get('/barangs', [BarangController::class, 'index']);
Route::post('/barangs', [BarangController::class, 'store']);
Route::get('/barangs/{id}', [BarangController::class, 'show']);
Route::put('/barangs/{id}', [BarangController::class, 'update']);
Route::delete('/barangs/{id}', [BarangController::class, 'destroy']);

Route::post('/transaksi', [TransaksiController::class, 'createTransaksi']);

Route::get('/kasirs', [ViewController::class, 'getAllKasir']);
Route::get('/tenans', [ViewController::class, 'getAllTenan']);
Route::get('/notas', [ViewController::class, 'getAllNota']);
Route::get('/barang-notas/{kodeNota}', [ViewController::class, 'getBarangNotaByKodeNota']);


