<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tenan extends Model
{
    protected $table = 'tenans';
    protected $primaryKey = 'KodeTenan';
    public $incrementing = false;

    protected $fillable = [
        'KodeTenan',
        'NamaTenan',
        'HP',
    ];
}