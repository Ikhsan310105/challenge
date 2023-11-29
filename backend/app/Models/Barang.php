<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    protected $table = 'barangs';
    protected $primaryKey = 'KodeBarang';
    public $incrementing = false;

    protected $fillable = [
        'KodeBarang',
        'NamaBarang',
        'Satuan',
        'HargaSatuan',
        'Stok',
    ];
}
