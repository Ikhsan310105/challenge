<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nota;
use App\Models\BarangNota;
use App\Models\Barang;

class TransaksiController extends Controller
{
    public function createTransaksi(Request $request)
    {
        // Validasi request dari front end
        $request->validate([
            'KodeTenan' => 'required',
            'KodeKasir' => 'required',
            'Diskon' => 'required|numeric',
            'barang_transaksi' => 'required|array', // Pastikan ini array sesuai dengan struktur input yang diharapkan
            'barang_transaksi.*.KodeBarang' => 'required',
            'barang_transaksi.*.JumlahBarang' => 'required|integer',
        ]);

        // Ambil informasi NIM atau data pengguna lainnya
        $nim = 221511058;

        // Ambil nomor urut transaksi terakhir
        $nomorUrut = Nota::count() + 1;

        // Format KodeNota
        $kodeNota = "NO[$nim]" . sprintf('%02d', $nomorUrut);

        // Inisialisasi total sebelum diskon
        $totalBeforeDiscount = 0;
        $jumlahBelanja = 0;

        // Check if the Nota with the specified KodeNota exists
        $nota = Nota::where('KodeNota', $kodeNota)->first();

        if (!$nota) {
            // Buat Nota jika tidak ditemukan
            $nota = Nota::create([
                'KodeNota' => $kodeNota,
                'KodeTenan' => $request->input('KodeTenan'),
                'KodeKasir' => $request->input('KodeKasir'),
                'TglNota' => now()->toDateString(),
                'JamNota' => now()->toTimeString(),
                'JumlahBelanja' => 0, // Inisialisasi jumlah belanja
                'Diskon' => $request->input('Diskon'),
                'Total' => 0, // Inisialisasi total
            ]);
        }

        // Proses barang di nota
        foreach ($request->input('barang_transaksi') as $barangTransaksi) {
            $barang = Barang::where('KodeBarang', $barangTransaksi['KodeBarang'])->first();
        
            if (!$barang) {
                // Handle the situation where the Barang doesn't exist
                return response()->json(['error' => 'Barang not found'], 404);
            }
        
            $hargaSatuan = $barang->HargaSatuan;
        
            // Increment totalBeforeDiscount and jumlahBelanja
            $totalBeforeDiscount += $hargaSatuan * $barangTransaksi['JumlahBarang'];
            $jumlahBelanja += $barangTransaksi['JumlahBarang'];
        
            $barang->Stok -= $barangTransaksi['JumlahBarang'];
            $barang->save();
        
            // Simpan barang ke dalam tabel barang_notas
            BarangNota::create([
                'KodeNota' => $kodeNota,
                'KodeBarang' => $barangTransaksi['KodeBarang'],
                'JumlahBarang' => $barangTransaksi['JumlahBarang'],
                'HargaSatuan' => $hargaSatuan,
                'Jumlah' => $hargaSatuan * $barangTransaksi['JumlahBarang'],
            ]);
        }
        // Hitung total setelah diskon
        $totalAfterDiscount = $totalBeforeDiscount - ($totalBeforeDiscount * $request->input('Diskon') / 100);

        // Update Nota dengan total dan jumlah belanja yang baru
        $nota->update([
            'JumlahBelanja' => $jumlahBelanja,
            'Total' => $totalAfterDiscount,
        ]);

        return response()->json(['message' => 'Transaksi berhasil']);
    }
}
