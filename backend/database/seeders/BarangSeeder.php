<?php

// database/seeders/BarangSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Barang;

class BarangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Seed your barang data here
        Barang::create([
            'KodeBarang' => 'BRG[221511058]01',
            'NamaBarang' => 'Indomie',
            'Satuan' => 'Pcs',
            'HargaSatuan' => 3000,
            'Stok' => 50,
        ]);

        Barang::create([
            'KodeBarang' => 'BRG[221511058]02',
            'NamaBarang' => 'Susu Ultra',
            'Satuan' => 'Pcs',
            'HargaSatuan' => 5000,
            'Stok' => 100,
        ]);

        // Add more barang data as needed
    }
}

