<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangNota extends Model
{
    protected $table = 'barang_notas';
    public $incrementing = false;
    protected $fillable = [
        'KodeNota',
        'KodeBarang',
        'JumlahBarang',
        'HargaSatuan',
        'Jumlah',
    ];
}
