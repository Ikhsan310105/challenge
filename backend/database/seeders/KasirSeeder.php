<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kasir;

class KasirSeeder extends Seeder
{
    public function run()
    {
        Kasir::create([
            'KodeKasir' => 'KSR001',
            'Nama' => 'John Doe',
            'HP' => '081234567890',
        ]);

        // Add more Kasir records as needed
    }
}
