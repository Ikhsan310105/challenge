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
            'KodeBarang' => 'required|unique:barangs,KodeBarang',
            'NamaBarang' => 'required',
            'Satuan' => 'required',
            'HargaSatuan' => 'required|numeric',
            'Stok' => 'required|integer',
        ]);

        $barang = new Barang([
            'KodeBarang' => $request->input('KodeBarang'),
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

