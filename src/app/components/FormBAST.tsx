"use client";

import React, { useState } from "react";

interface Props {
  onCancel: () => void;
}

export default function FormBAST({ onCancel }: Props) {
  const [groups, setGroups] = useState([Date.now()]);

  const addGroup = () => setGroups([...groups, Date.now()]);
  const removeGroup = (id: number) =>
    setGroups(groups.filter((item) => item !== id));

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Form Input BAST Penerimaan</h1>
        <button
          onClick={onCancel}
          className="text-sm text-gray-600 hover:underline"
        >
          ← Kembali ke daftar
        </button>
      </div>

      {/* Metadata BAST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">🧾 Nomor BAST:</label>
          <input
            type="text"
            placeholder="Contoh: 2679/PN.01.02"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">📅 Tanggal BAST:</label>
          <input type="date" className="border border-gray-300 p-2 rounded w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">📆 Tahun Anggaran:</label>
          <select className="border border-gray-300 p-2 rounded w-full">
            <option value="">Pilih Tahun</option>
            {["2023", "2024", "2025", "2026"].map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            📁 Upload File BAST (PDF / Excel):
          </label>
          <input
            type="file"
            accept=".pdf,.xls,.xlsx"
            className="border border-gray-300 p-2 rounded w-full bg-white"
          />
        </div>
      </div>

      {/* Kelompok Barang */}
      {groups.map((id) => (
        <div key={id} className="border-t pt-4 mt-6 space-y-4 bg-white p-4 rounded shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Jenis Barang:</label>
              <select className="border border-gray-300 p-2 rounded w-full">
                <option>Pilih Jenis</option>
                <option>APD</option>
                <option>Peralatan Operasional</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nama Barang:</label>
              <select className="border border-gray-300 p-2 rounded w-full">
                <option>Pilih Barang</option>
                <option>Helm Pemadam</option>
                <option>Rantai Gergaji</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Merk:</label>
              <input
                type="text"
                value="V-Pro"
                className="border border-gray-200 p-2 rounded w-full bg-gray-100"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Spesifikasi:</label>
              <textarea
                className="border border-gray-200 p-2 rounded w-full bg-gray-100"
                rows={2}
                readOnly
                defaultValue="Ukuran bar 16 inci"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Volume:</label>
              <input type="number" className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Satuan:</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded w-full"
                defaultValue="Unit"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Keterangan:</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Contoh: Barang sesuai SP"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => removeGroup(id)}
              className="text-red-600 text-sm hover:underline"
            >
              🗑️ Hapus Kelompok Barang
            </button>
          </div>
        </div>
      ))}

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-8">
        <button
          type="button"
          onClick={addGroup}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
        >
          ➕ Tambah Kelompok Barang
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
          Submit Semua Barang
        </button>
      </div>
    </div>
  );
}
