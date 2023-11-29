<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tenan;

class TenanSeeder extends Seeder
{
    public function run()
    {
        Tenan::create([
            'KodeTenan' => 'TEN001',
            'NamaTenan' => 'Food Corner',
            'HP' => '081234567890',
        ]);

        // Add more Tenan records as needed
    }
}
