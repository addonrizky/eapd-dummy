"use client";

import React, { useState } from "react";
import FormBAST from "../components/FormBAST";
import DetailModal from "../components/DetailModal";
import LayoutShell from "../components/LayoutShell";

type BASTItem = {
  jenis: string;
  nama: string;
  merk: string;
  spesifikasi: string;
  volume: number;
  satuan: string;
};

type BASTEntry = {
  id: number;
  nomor: string;
  tanggal: string;
  tahunAnggaran: string;
  jumlahBarang: number;
  barang: BASTItem[];
};

function exportToCSV(data: BASTEntry[], filename = "bast.csv") {
  const csvContent = [
    ["Nomor", "Tanggal", "Tahun Anggaran", "Jumlah Barang"],
    ...data.map((row) => [row.nomor, row.tanggal, row.tahunAnggaran, row.jumlahBarang]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  link.click();
}

export default function BastPage() {
  const [mode, setMode] = useState<"list" | "create">("list");
  const [filterYear, setFilterYear] = useState("Semua");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const [showDetail, setShowDetail] = useState(false);
  const [selectedBAST, setSelectedBAST] = useState<BASTEntry | null>(null);

  const [bastList, setBastList] = useState<BASTEntry[]>([
    {
      id: 1,
      nomor: "BAST/001",
      tanggal: "2025-05-15",
      tahunAnggaran: "2025",
      jumlahBarang: 2,
      barang: [
        {
          jenis: "APD",
          nama: "Helm Pemadam",
          merk: "V-Pro",
          spesifikasi: "Tahan panas",
          volume: 3,
          satuan: "Unit",
        },
        {
          jenis: "Peralatan",
          nama: "Sepatu Boot",
          merk: "FireGuard",
          spesifikasi: "Tahan air & panas",
          volume: 2,
          satuan: "Pasang",
        },
      ],
    },
    {
      id: 2,
      nomor: "BAST/002",
      tanggal: "2024-06-01",
      tahunAnggaran: "2024",
      jumlahBarang: 1,
      barang: [
        {
          jenis: "APD",
          nama: "Masker N95",
          merk: "3M",
          spesifikasi: "N95 standard",
          volume: 100,
          satuan: "Buah",
        },
      ],
    },
  ]);

  const filteredList =
    filterYear === "Semua"
      ? bastList
      : bastList.filter((b) => b.tahunAnggaran === filterYear);

  const totalPages = Math.ceil(filteredList.length / perPage);
  const paginatedList = filteredList.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const handleExport = () => exportToCSV(filteredList);

  const handleShowDetail = (bast: BASTEntry) => {
    setSelectedBAST(bast);
    setShowDetail(true);
  };

  return (
    <LayoutShell activeSidebar="upload">
      {mode === "list" ? (
        <>
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h1 className="text-2xl font-bold">📥 Upload BAST Penerimaan</h1>
            <button
              onClick={() => setMode("create")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              ➕ Buat BAST Baru
            </button>
          </div>

          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Filter Tahun:</label>
              <select
                className="border border-gray-300 p-1 rounded text-sm"
                value={filterYear}
                onChange={(e) => {
                  setFilterYear(e.target.value);
                  setPage(1);
                }}
              >
                <option value="Semua">Semua</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <button
              onClick={handleExport}
              className="bg-green-600 text-white px-3 py-1.5 rounded text-sm hover:bg-green-700"
            >
              ⬇️ Export CSV
            </button>
          </div>

          <table className="w-full bg-white border rounded shadow text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2 border-b">Nomor</th>
                <th className="px-4 py-2 border-b">Tanggal</th>
                <th className="px-4 py-2 border-b">Jumlah Barang</th>
                <th className="px-4 py-2 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginatedList.length === 0 ? (
                <tr>
                  <td
                    className="px-4 py-4 border-b text-center text-gray-500"
                    colSpan={4}
                  >
                    Tidak ada data BAST untuk tahun ini.
                  </td>
                </tr>
              ) : (
                paginatedList.map((bast) => (
                  <tr key={bast.id}>
                    <td className="px-4 py-2 border-b">{bast.nomor}</td>
                    <td className="px-4 py-2 border-b">{bast.tanggal}</td>
                    <td className="px-4 py-2 border-b">{bast.jumlahBarang}</td>
                    <td className="px-4 py-2 border-b">
                      <button
                        onClick={() => handleShowDetail(bast)}
                        className="text-blue-600 hover:underline"
                      >
                        Lihat
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  className={`px-3 py-1 rounded text-sm ${
                    page === num
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <FormBAST onCancel={() => setMode("list")} />
      )}

      {showDetail && selectedBAST && (
        <DetailModal bast={selectedBAST} onClose={() => setShowDetail(false)} />
      )}
    </LayoutShell>
  );
}
