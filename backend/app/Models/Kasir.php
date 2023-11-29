<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kasir extends Model
{
    protected $table = 'kasirs';
    protected $primaryKey = 'KodeKasir';
    public $incrementing = false;

    protected $fillable = [
        'KodeKasir',
        'Nama',
        'HP',
    ];
}
