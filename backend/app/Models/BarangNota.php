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

    public function barang()
    {
        return $this->belongsTo(Barang::class, 'KodeBarang', 'KodeBarang');
    }

    // Define the relationship with the Nota model
    public function nota()
    {
        return $this->belongsTo(Nota::class, 'KodeNota', 'KodeNota');
    }
}
