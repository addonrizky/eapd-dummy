"use client";

import React, { useState } from "react";
import LayoutBidSarOps from "../../components/LayoutBidSarOps";
import Image from "next/image";
import AddApdModal from "../../components/AddApdModal"; // <--- Pastikan import

const dummyData = [
  {
    id_apd: "A001_Sun_0001",
    nama_apd: "Respirator",
    jenis: "Respirator",
    merk: "Sundstrom",
    tipe_kondisi: "Kondisi Umum",
    tipe_size: "-",
    input_no_seri: false,
    image: "/img/A001_Sun_0001.jpg",
  },
  {
    id_apd: "A002_Uve_0001",
    nama_apd: "Fire Google",
    jenis: "Fire Goggles",
    merk: "Uvex",
    tipe_kondisi: "Kondisi Umum",
    tipe_size: "-",
    input_no_seri: false,
    image: "/img/A002_Uve_0001.jpg",
  },
  {
    id_apd: "A005_Nom_0001",
    nama_apd: "Balaclava",
    jenis: "Balaclava",
    merk: "Nomex",
    tipe_kondisi: "Kondisi Umum",
    tipe_size: "-",
    input_no_seri: true,
    image: "/img/A005_Nom_0001.jpg",
  },
  // Tambahkan item lainnya sesuai kebutuhan...
];

export default function BarangAPDPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // ← Modal state

  return (
    <LayoutBidSarOps>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">📦 Barang / Merk APD</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setIsAddModalOpen(true)} // ← Open modal
          >
            + Tambah APD Baru
          </button>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 items-center">
          <input
            type="text"
            placeholder="Cari nama / merk / jenis..."
            className="border px-3 py-2 rounded w-full max-w-xs"
          />
          <select className="border px-2 py-2 rounded">
            <option>Semua Jenis</option>
            <option>Respirator</option>
            <option>Fire Goggles</option>
            <option>Balaclava</option>
          </select>
        </div>

        {/* Tabel */}
        <div className="overflow-x-auto border rounded shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border-b">Nama APD</th>
                <th className="px-4 py-2 border-b">Jenis</th>
                <th className="px-4 py-2 border-b">Merk</th>
                <th className="px-4 py-2 border-b">Tipe Kondisi</th>
                <th className="px-4 py-2 border-b">Tipe Size</th>
                <th className="px-4 py-2 border-b">Input No Seri?</th>
                <th className="px-4 py-2 border-b">Gambar</th>
                <th className="px-4 py-2 border-b">Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.id_apd} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{item.nama_apd}</td>
                  <td className="px-4 py-2">{item.jenis}</td>
                  <td className="px-4 py-2">{item.merk}</td>
                  <td className="px-4 py-2">{item.tipe_kondisi}</td>
                  <td className="px-4 py-2">{item.tipe_size}</td>
                  <td className="px-4 py-2">
                    {item.input_no_seri ? (
                      <span className="text-green-600 font-semibold">✓</span>
                    ) : (
                      <span className="text-red-600 font-semibold">✗</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <Image
                      src={item.image}
                      alt={item.nama_apd}
                      width={50}
                      height={50}
                      className="object-contain rounded"
                    />
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="text-sm px-3 py-1 bg-cyan-600 text-white rounded hover:bg-cyan-700">
                      Edit
                    </button>
                    <button className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add APD */}
      <AddApdModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </LayoutBidSarOps>
  );
}
