"use client";

import React, { useState } from "react";
import LayoutShell from "@/app/components/LayoutShell";

type DistribusiEntry = {
  petugas: string;
  jabatan: string;
  sektor: string;
  barang: string;
  jumlah: number;
  status: "Belum Dikonfirmasi" | "Sudah Dikonfirmasi" | "Perlu Koreksi";
};

type FileDistribusi = {
  id: number;
  namaFile: string;
  tahun: string;
  isi: DistribusiEntry[];
};

export default function TinjauHasilUploadPage() {
  const [selectedFileId, setSelectedFileId] = useState<number | null>(null);

  const files: FileDistribusi[] = [
    {
      id: 1,
      namaFile: "Distribusi_APD_Sektor_1.xlsx",
      tahun: "2025",
      isi: [
        {
          petugas: "Dimas Hadi",
          jabatan: "Pelaksana",
          sektor: "Sektor 1",
          barang: "Helm Damkar",
          jumlah: 2,
          status: "Belum Dikonfirmasi",
        },
        {
          petugas: "Rizky Ramadhan",
          jabatan: "Pemadam",
          sektor: "Sektor 1",
          barang: "Sepatu APD",
          jumlah: 1,
          status: "Sudah Dikonfirmasi",
        },
      ],
    },
    {
      id: 2,
      namaFile: "Distribusi_Regu_2.xlsx",
      tahun: "2024",
      isi: [
        {
          petugas: "Agus Santoso",
          jabatan: "Pemadam",
          sektor: "Regu 2",
          barang: "Sarung Tangan",
          jumlah: 3,
          status: "Perlu Koreksi",
        },
      ],
    },
  ];

  const selectedFile = files.find((f) => f.id === selectedFileId);

  return (
    <LayoutShell activeSidebar="review">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">🔍 Tinjau Hasil Upload</h1>
        <p className="text-gray-600 text-sm mt-1">
          Lihat data hasil parsing file distribusi sebelum diverifikasi petugas.
        </p>
      </div>

      {!selectedFileId ? (
        <div className="space-y-4">
          <h2 className="text-sm font-medium">Pilih File Distribusi:</h2>
          <ul className="space-y-2">
            {files.map((file) => (
              <li key={file.id}>
                <button
                  onClick={() => setSelectedFileId(file.id)}
                  className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 w-full text-left text-sm"
                >
                  📁 {file.namaFile} ({file.tahun})
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              📁 {selectedFile?.namaFile} ({selectedFile?.tahun})
            </h2>
            <button
              onClick={() => setSelectedFileId(null)}
              className="text-sm text-blue-600 hover:underline"
            >
              ⬅ Kembali ke daftar file
            </button>
          </div>

          <table className="w-full text-sm border shadow rounded">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-3 py-2 border-b">Petugas</th>
                <th className="px-3 py-2 border-b">Jabatan</th>
                <th className="px-3 py-2 border-b">Sektor</th>
                <th className="px-3 py-2 border-b">Barang</th>
                <th className="px-3 py-2 border-b">Jumlah</th>
                <th className="px-3 py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {selectedFile?.isi.map((entry, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-3 py-2">{entry.petugas}</td>
                  <td className="px-3 py-2">{entry.jabatan}</td>
                  <td className="px-3 py-2">{entry.sektor}</td>
                  <td className="px-3 py-2">{entry.barang}</td>
                  <td className="px-3 py-2">{entry.jumlah}</td>
                  <td className="px-3 py-2">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        entry.status === "Belum Dikonfirmasi"
                          ? "bg-yellow-100 text-yellow-800"
                          : entry.status === "Sudah Dikonfirmasi"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </LayoutShell>
  );
}
