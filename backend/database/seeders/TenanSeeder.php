<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tenan;

class TenanSeeder extends Seeder
{
    public function run()
    {
        Tenan::create([
            'KodeTenan' => 'TK[221511058]01',
            'NamaTenan' => 'ikhsanmaret',
            'HP' => '08221511058375',
        ]);

        Tenan::create([
            'KodeTenan' => 'TK[221511058]02',
            'NamaTenan' => 'ikhsanmart',
            'HP' => '08221511058735',
        ]);

        // Add more Tenan records as needed
    }
}
