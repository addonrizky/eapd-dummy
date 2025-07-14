"use client";

import React, { useState } from "react";
import LayoutShell from "@/app/components/LayoutShell";

type DistribusiEntry = {
  id: number;
  fileName: string;
  tahunAnggaran: string;
  tanggalUpload: string;
  isi: string[];
  status: string;
};

export default function UploadDistribusiPage() {
  const [mode, setMode] = useState<"list" | "upload">("list");
  const [tahun, setTahun] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [showDetail, setShowDetail] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<DistribusiEntry | null>(null);

  const [filterYear, setFilterYear] = useState("Semua");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const [distribusiList, setDistribusiList] = useState<DistribusiEntry[]>([
    {
      id: 1,
      fileName: "Distribusi_APD_Sektor_1.xlsx",
      tahunAnggaran: "2025",
      tanggalUpload: "2025-05-30",
      isi: ["Petugas A: 2 Helm", "Petugas B: 1 Sepatu"],
      status: "Menunggu Konfirmasi Penerimaan",
    },
    {
      id: 2,
      fileName: "Distribusi_Regu_2.xlsx",
      tahunAnggaran: "2024",
      tanggalUpload: "2024-06-01",
      isi: ["Petugas C: 3 Sarung Tangan"],
      status: "Diterima",
    },
  ]);

  const filteredList =
    filterYear === "Semua"
      ? distribusiList
      : distribusiList.filter((d) => d.tahunAnggaran === filterYear);

  const totalPages = Math.ceil(filteredList.length / perPage);
  const paginatedList = filteredList.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !tahun) {
      alert("Mohon lengkapi tahun anggaran dan pilih file.");
      return;
    }

    const newEntry: DistribusiEntry = {
      id: distribusiList.length + 1,
      fileName: file.name,
      tahunAnggaran: tahun,
      tanggalUpload: new Date().toISOString().split("T")[0],
      isi: ["Dummy: Belum diparsing"],
      status: "Menunggu Konfirmasi Penerimaan",
    };

    setDistribusiList([newEntry, ...distribusiList]);
    setFile(null);
    setTahun("");
    setMode("list");
  };

  return (
    <LayoutShell activeSidebar="distribusi">
      {mode === "list" ? (
        <>
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h1 className="text-2xl font-bold">📤 Upload Excel Distribusi</h1>
            <button
              onClick={() => setMode("upload")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              ➕ Upload Distribusi Baru
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
          </div>

          <table className="w-full bg-white border rounded shadow text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2 border-b">Nama File</th>
                <th className="px-4 py-2 border-b">Tahun Anggaran</th>
                <th className="px-4 py-2 border-b">Tanggal Upload</th>
                <th className="px-4 py-2 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginatedList.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-4 border-b text-center text-gray-500">
                    Tidak ada file distribusi untuk tahun ini.
                  </td>
                </tr>
              ) : (
                paginatedList.map((entry) => (
                  <tr key={entry.id}>
                    <td className="px-4 py-2 border-b">{entry.fileName}</td>
                    <td className="px-4 py-2 border-b">{entry.tahunAnggaran}</td>
                    <td className="px-4 py-2 border-b">{entry.tanggalUpload}</td>
                    <td className="px-4 py-2 border-b">
                      <button
                        onClick={() => {
                          setSelectedEntry(entry);
                          setShowDetail(true);
                        }}
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

          {showDetail && selectedEntry && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white w-full max-w-lg rounded shadow-lg p-6 relative">
                <button
                  onClick={() => setShowDetail(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-lg"
                >
                  &times;
                </button>
                <h2 className="text-lg font-semibold mb-2">📄 Detail File Distribusi</h2>
                <p className="text-sm mb-1">
                  <strong>Nama File:</strong> {selectedEntry.fileName}
                </p>
                <p className="text-sm mb-1">
                  <strong>Tahun Anggaran:</strong> {selectedEntry.tahunAnggaran}
                </p>
                <p className="text-sm mb-1">
                  <strong>Tanggal Upload:</strong> {selectedEntry.tanggalUpload}
                </p>
                <div className="border-t mt-3 pt-2">
                  <p className="text-sm font-semibold mb-1">Distribusi (dummy):</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {selectedEntry.isi.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <form
          onSubmit={handleUpload}
          className="bg-white max-w-xl p-6 rounded shadow space-y-6"
        >
          <h2 className="text-xl font-semibold mb-2">
            📤 Upload File Distribusi Baru
          </h2>

          <div>
            <label className="block font-medium mb-1">Tahun Anggaran</label>
            <select
              value={tahun}
              onChange={(e) => setTahun(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
            >
              <option value="">Pilih tahun</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">File Excel Distribusi</label>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full border rounded p-2 text-sm"
              required
            />
            {file && (
              <p className="text-sm text-gray-600 mt-2">
                File dipilih: <strong>{file.name}</strong>
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={() => setMode("list")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded text-sm"
            >
              Batal
            </button>
          </div>
        </form>
      )}
    </LayoutShell>
  );
}
