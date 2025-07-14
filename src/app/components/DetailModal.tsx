"use client";

import React from "react";

type BASTItem = {
  jenis: string;
  nama: string;
  merk: string;
  spesifikasi: string;
  volume: number;
  satuan: string;
};

type BASTEntry = {
  nomor: string;
  tanggal: string;
  tahunAnggaran: string;
  barang: BASTItem[];
};

interface Props {
  bast: BASTEntry;
  onClose: () => void;
}

export default function DetailModal({ bast, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white max-w-3xl w-full rounded shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Detail BAST #{bast.nomor}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
          <div><strong>Tanggal:</strong> {bast.tanggal}</div>
          <div><strong>Tahun Anggaran:</strong> {bast.tahunAnggaran}</div>
        </div>

        <h3 className="text-sm font-semibold mb-2">📦 Daftar Barang</h3>
        <table className="w-full border text-xs">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Jenis</th>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Merk</th>
              <th className="p-2 border">Spesifikasi</th>
              <th className="p-2 border">Volume</th>
              <th className="p-2 border">Satuan</th>
            </tr>
          </thead>
          <tbody>
            {bast.barang.map((item, idx) => (
              <tr key={idx}>
                <td className="p-2 border">{item.jenis}</td>
                <td className="p-2 border">{item.nama}</td>
                <td className="p-2 border">{item.merk}</td>
                <td className="p-2 border">{item.spesifikasi}</td>
                <td className="p-2 border">{item.volume}</td>
                <td className="p-2 border">{item.satuan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
