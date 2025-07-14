import React from "react";

export default function ProgressSummary() {
  // Dummy data untuk representasi visual
  const totalBarang = 1200;
  const jumlahDilaporkan = 900;
  const jumlahTerverifikasi = 600;

  const persentaseLaporan = Math.round((jumlahDilaporkan / totalBarang) * 100);
  const persentaseVerifikasi = Math.round((jumlahTerverifikasi / totalBarang) * 100);

  return (
    <div className="bg-white p-6 rounded shadow border space-y-4">
      <h2 className="text-lg font-semibold">📋 Ringkasan Progres Pendataan Ulang</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-800">
        <div>
          <div className="text-gray-500">Total Barang</div>
          <div className="text-xl font-bold">{totalBarang}</div>
        </div>
        <div>
          <div className="text-gray-500">Dilaporkan oleh Petugas</div>
          <div className="text-xl font-bold">{jumlahDilaporkan}</div>
        </div>
        <div>
          <div className="text-gray-500">Sudah Diverifikasi</div>
          <div className="text-xl font-bold">{jumlahTerverifikasi}</div>
        </div>
      </div>

      <div>
        <div className="text-sm text-gray-600 mb-1">
          Progress Laporan Petugas ({persentaseLaporan}%)
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${persentaseLaporan}%` }}
          />
        </div>

        <div className="text-sm text-gray-600 mb-1">
          Progress Verifikasi oleh Kepala Sektor ({persentaseVerifikasi}%)
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${persentaseVerifikasi}%` }}
          />
        </div>
      </div>
    </div>
  );
}
