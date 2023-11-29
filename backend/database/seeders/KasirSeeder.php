<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kasir;

class KasirSeeder extends Seeder
{
    public function run()
    {
        Kasir::create([
            'KodeKasir' => 'KS[221511058]01',
            'Nama' => 'Ani Ikhsan',
            'HP' => '08221511058375',
        ]);
        
        Kasir::create([
            'KodeKasir' => 'KS[221511058]02',
            'Nama' => 'Ani Ikhsan',
            'HP' => '08221511058735',
        ]);

        // Add more Kasir records as needed
    }
}
