<?php

// app/Http/Controllers/BarangController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;

class BarangController extends Controller
{
    public function index()
    {
        $barangs = Barang::all();
        return response()->json($barangs);
    }

    public function store(Request $request)
    {
        $request->validate([
            'NamaBarang' => 'required',
            'Satuan' => 'required',
            'HargaSatuan' => 'required|numeric',
            'Stok' => 'required|integer',
        ]);

        // Mendapatkan NIM dari pengguna (gantilah ini sesuai dengan bagaimana Anda mengelola informasi pengguna)
        $nim = '221511058'; // Contoh NIM statis, sesuaikan dengan cara Anda mendapatkan NIM

        // Mendapatkan jumlah barang yang sudah ada untuk NIM tersebut
        $countBarangNIM = Barang::where('KodeBarang', 'like', "BRG[$nim]%")->count() + 1;

        // Format KodeBarang
        $kodeBarang = "BRG[$nim]" . sprintf('%02d', $countBarangNIM);

        $barang = new Barang([
            'KodeBarang' => $kodeBarang,
            'NamaBarang' => $request->input('NamaBarang'),
            'Satuan' => $request->input('Satuan'),
            'HargaSatuan' => $request->input('HargaSatuan'),
            'Stok' => $request->input('Stok'),
        ]);

        $barang->save();

        return response()->json(['message' => 'Barang has been added']);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'NamaBarang' => 'required',
            'Satuan' => 'required',
            'HargaSatuan' => 'required|numeric',
            'Stok' => 'required|integer',
        ]);

        $barang = Barang::find($id);
        $barang->update([
            'NamaBarang' => $request->input('NamaBarang'),
            'Satuan' => $request->input('Satuan'),
            'HargaSatuan' => $request->input('HargaSatuan'),
            'Stok' => $request->input('Stok'),
        ]);

        return response()->json(['message' => 'Barang has been updated']);
    }

    public function destroy($id)
    {
        $barang = Barang::find($id);
        $barang->delete();

        return response()->json(['message' => 'Barang has been deleted']);
    }
}

