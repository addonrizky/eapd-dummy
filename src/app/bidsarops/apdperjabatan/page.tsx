"use client";

import React, { useState } from "react";
import LayoutBidSarOps from "../../components/LayoutBidSarOps";
import PlottingModal from "../../components/PlottingModal";

const dummyJabatan = [
  { id: "AKJS001", nama: "Analis Kebakaran (Ketua Subkelompok Pengendalian Operasi)" },
  { id: "KB002", nama: "Kepala Bidang Operasi" },
  { id: "KB004", nama: "Kepala Bidang Sarana Operasi" },
  { id: "KS003", nama: "Kepala Seksi Operasi" },
  { id: "KS004", nama: "Kepala Seksi Operasi Kebakaran" },
  { id: "KS005", nama: "Kepala Seksi Operasi Penyelamatan" },
  { id: "KS012", nama: "Kepala Seksi Sarana Operasi" },
  { id: "PADOPP001", nama: "Pengadministrasi Operasional Pemeliharaan Dan Perbaikan" },
  { id: "PADOPS001", nama: "Pengadministrasi Operasional Pemadam Kebakaran (Danru)" },
  { id: "PGOP001", nama: "Pengelola Operasi Dan Pemeliharaan" },
];

export default function APDPerJabatanPage() {
  const [selectedJabatan, setSelectedJabatan] = useState<null | typeof dummyJabatan[0]>(null);

  return (
    <LayoutBidSarOps>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">🏷️ Plotting Kebutuhan APD per Jabatan</h1>
        <p className="text-gray-700">
          Silakan atur kebutuhan minimal jenis-jenis APD untuk masing-masing jabatan di lapangan.
        </p>

        <div className="overflow-x-auto border rounded shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border-b">Jabatan</th>
                <th className="px-4 py-2 border-b">Jenis APD Dibutuhkan</th>
                <th className="px-4 py-2 border-b">Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {dummyJabatan.map((jabatan) => (
                <tr key={jabatan.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{jabatan.nama}</td>
                  <td className="px-4 py-2 text-gray-500 italic">
                    (Belum diisi)
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      onClick={() => setSelectedJabatan(jabatan)}
                    >
                      Atur APD
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal untuk plotting kebutuhan APD */}
        {selectedJabatan && (
          <PlottingModal
            jabatan={selectedJabatan}
            onClose={() => setSelectedJabatan(null)}
          />
        )}
      </div>
    </LayoutBidSarOps>
  );
}
