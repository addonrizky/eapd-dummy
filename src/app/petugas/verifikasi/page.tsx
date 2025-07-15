"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PetugasLayout from  "@/app/components/PetugasLayout";
// Mock data
const laporanMenunggu = [
  {
    id: 1,
    nama: "Dimas Hadi",
    sektor: "Sektor 1",
    jenisAPD: "Helm APD",
    kondisi: "Baik",
    statusVerifikasi: "Menunggu Verifikasi",
    tanggal: "01 Juni 2025",
  },
  {
    id: 2,
    nama: "Rizky Ramadhan",
    sektor: "Sektor 1",
    jenisAPD: "Sepatu Safety",
    kondisi: "Rusak",
    statusVerifikasi: "Menunggu Verifikasi",
    tanggal: "01 Juni 2025",
  },
];

export default function VerifikasiPage() {
  const router = useRouter();
  const [filter, setFilter] = useState("");

  const filtered = laporanMenunggu.filter((lapor) =>
    lapor.nama.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PetugasLayout>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">✅ Verifikasi Laporan</h1>

        <input
          type="text"
          placeholder="Cari nama petugas..."
          className="w-full mb-4 p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        {filtered.length === 0 ? (
          <p className="text-sm text-gray-500">Tidak ada laporan yang perlu diverifikasi.</p>
        ) : (
          <ul className="space-y-3">
            {filtered.map((lapor) => (
              <li
                key={lapor.id}
                onClick={() => router.push("/petugas/verifikasi/detail")}
                className="border p-4 rounded shadow hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{lapor.nama}</p>
                    <p className="text-sm text-gray-600">
                      {lapor.jenisAPD} — {lapor.kondisi}
                    </p>
                    <p className="text-xs text-gray-500">{lapor.tanggal}</p>
                  </div>
                  <span className="text-yellow-600 text-sm font-semibold">
                    {lapor.statusVerifikasi}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PetugasLayout>
  );
}
