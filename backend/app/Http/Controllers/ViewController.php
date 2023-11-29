<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nota;
use App\Models\BarangNota;
use App\Models\Kasir;
use App\Models\Tenan;

class ViewController extends Controller
{
    // Get all Kasir
    public function getAllKasir()
    {
        $kasirs = Kasir::all();
        return response()->json($kasirs);
    }

    // Get all Tenan
    public function getAllTenan()
    {
        $tenans = Tenan::all();
        return response()->json($tenans);
    }

    // Get all Nota
    public function getAllNota()
    {
        $notas = Nota::all();
        return response()->json($notas);
    }

    // Get specific BarangNota based on KodeNota
    public function getBarangNotaByKodeNota($kodeNota)
    {
        $barangNotas = BarangNota::with('barang', 'nota')
            ->where('KodeNota', $kodeNota)
            ->get();

        return response()->json(['barangNotas' => $barangNotas], 200);
    }
    
    
}

