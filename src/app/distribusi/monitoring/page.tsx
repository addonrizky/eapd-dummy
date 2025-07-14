"use client";

import React, { useEffect, useState } from "react";
import LayoutShell from "@/app/components/LayoutShell";

type StatusBarang =
  | "Menunggu Konfirmasi"
  | "Diterima"
  | "Belum Diterima"
  | "Rusak"
  | "Tidak Diterima";

type MonitoringEntry = {
  id: number;
  petugas: string;
  sektor: string;
  barang: string;
  nomorSeri: string;
  nomorBAST: string;
  fileBAST: string;
  didistribusi: number;
  diterima: number;
  status: StatusBarang;
};

export default function MonitoringDistribusiPage() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedSektor, setSelectedSektor] = useState("Semua");
  const [filterPetugas, setFilterPetugas] = useState("");
  const [filterBarang, setFilterBarang] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");
  const [showDetail, setShowDetail] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<MonitoringEntry | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data: MonitoringEntry[] = [
    {
      id: 1,
      petugas: "Rizky Ramadhan",
      sektor: "Sektor 1",
      barang: "Helm APD",
      nomorSeri: "SN-HEL-2025-001",
      nomorBAST: "BAST/001",
      fileBAST: "/files/BAST_001.pdf",
      didistribusi: 2,
      diterima: 2,
      status: "Diterima",
    },
    {
      id: 2,
      petugas: "Dimas Hadi",
      sektor: "Sektor 1",
      barang: "Sepatu",
      nomorSeri: "SN-SEP-2025-002",
      nomorBAST: "BAST/002",
      fileBAST: "/files/BAST_002.pdf",
      didistribusi: 2,
      diterima: 1,
      status: "Menunggu Konfirmasi",
    },
    {
      id: 3,
      petugas: "Agus Santoso",
      sektor: "Regu 2",
      barang: "Sarung Tangan",
      nomorSeri: "SN-STG-2025-003",
      nomorBAST: "BAST/003",
      fileBAST: "/files/BAST_003.pdf",
      didistribusi: 2,
      diterima: 2,
      status: "Rusak",
    },
    {
      id: 4,
      petugas: "Lina Kusuma",
      sektor: "Sektor 1",
      barang: "Masker",
      nomorSeri: "SN-MSK-2025-004",
      nomorBAST: "BAST/004",
      fileBAST: "/files/BAST_004.pdf",
      didistribusi: 1,
      diterima: 0,
      status: "Belum Diterima",
    },
    {
      id: 5,
      petugas: "Yusuf Hendra",
      sektor: "Regu 2",
      barang: "Jas Hujan",
      nomorSeri: "SN-JSH-2025-005",
      nomorBAST: "BAST/005",
      fileBAST: "/files/BAST_005.pdf",
      didistribusi: 1,
      diterima: 0,
      status: "Tidak Diterima",
    },
    {
      id: 6,
      petugas: "Rani Putri",
      sektor: "Sektor 1",
      barang: "Rompi",
      nomorSeri: "SN-RMP-2025-006",
      nomorBAST: "BAST/006",
      fileBAST: "/files/BAST_006.pdf",
      didistribusi: 1,
      diterima: 1,
      status: "Diterima",
    },
  ];

  const sektorOptions = ["Semua", "Sektor 1", "Regu 2"];

  const filteredData = data.filter(
    (d) =>
      (selectedSektor === "Semua" || d.sektor === selectedSektor) &&
      selectedYear === "2025" &&
      (filterStatus === "Semua" || d.status === filterStatus) &&
      d.petugas.toLowerCase().includes(filterPetugas.toLowerCase()) &&
      d.barang.toLowerCase().includes(filterBarang.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSektor, selectedYear, filterPetugas, filterBarang, filterStatus]);

  const totalPPK = 60;
  const totalDidistribusi = filteredData.reduce((acc, curr) => acc + curr.didistribusi, 0);
  const totalDiterima = filteredData.reduce((acc, curr) => acc + curr.diterima, 0);
  const totalKurang = totalDidistribusi - totalDiterima;
  const jumlahBelumLengkap = filteredData.filter((d) => d.diterima < d.didistribusi).length;

  return (
    <LayoutShell activeSidebar="monitoring">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">📈 Monitoring Distribusi</h1>
        <p className="text-gray-600 text-sm mt-1">
          Pantau daftar distribusi barang dan berkas BAST-nya.
        </p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Tahun Anggaran</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border px-3 py-2 rounded text-sm"
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border shadow rounded mb-2">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-3 py-2 border-b">No</th>
              <th className="px-3 py-2 border-b">Petugas</th>
              <th className="px-3 py-2 border-b">Sektor</th>
              <th className="px-3 py-2 border-b">Barang</th>
              <th className="px-3 py-2 border-b">Nomor Seri</th>
              <th className="px-3 py-2 border-b">Nomor BAST</th>
              <th className="px-3 py-2 border-b">Status</th>
              <th className="px-3 py-2 border-b">File BAST</th>
              <th className="px-3 py-2 border-b">Aksi</th>
            </tr>
            <tr className="bg-gray-100 text-sm">
              <th></th>
              <th>
                <input
                  type="text"
                  placeholder="Cari Petugas"
                  value={filterPetugas}
                  onChange={(e) => setFilterPetugas(e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                />
              </th>
              <th>
                <select
                  value={selectedSektor}
                  onChange={(e) => setSelectedSektor(e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                >
                  {sektorOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Cari Barang"
                  value={filterBarang}
                  onChange={(e) => setFilterBarang(e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                />
              </th>
              <th colSpan={1}></th>
              <th></th>
              <th>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                >
                  <option value="Semua">Semua</option>
                  <option value="Menunggu Konfirmasi">Menunggu Konfirmasi</option>
                  <option value="Diterima">Diterima</option>
                  <option value="Belum Diterima">Belum Diterima</option>
                  <option value="Rusak">Rusak</option>
                  <option value="Tidak Diterima">Tidak Diterima</option>
                </select>
              </th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-4 text-center text-gray-500">
                  Tidak ada data untuk filter ini.
                </td>
              </tr>
            ) : (
              paginatedData.map((entry, index) => (
                <tr key={entry.id} className="border-b">
                  <td className="px-3 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="px-3 py-2">{entry.petugas}</td>
                  <td className="px-3 py-2">{entry.sektor}</td>
                  <td className="px-3 py-2">{entry.barang}</td>
                  <td className="px-3 py-2">{entry.nomorSeri}</td>
                  <td className="px-3 py-2">{entry.nomorBAST}</td>
                  <td className="px-3 py-2">{entry.status}</td>
                  <td className="px-3 py-2">
                    <a
                      href={entry.fileBAST}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {entry.fileBAST.split("/").pop()}
                    </a>
                  </td>
                  <td className="px-3 py-2">
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

        {/* Pagination controls */}
        {filteredData.length > 0 && (
          <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
            <div>
              Menampilkan {Math.min((currentPage - 1) * itemsPerPage + 1, filteredData.length)}–
              {Math.min(currentPage * itemsPerPage, filteredData.length)} dari {filteredData.length} entri
            </div>
            <div className="space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Sebelumnya
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Berikutnya
              </button>
            </div>
          </div>
        )}

        {/* Ringkasan */}
        {filteredData.length > 0 && (
          <div className="bg-white shadow p-4 rounded border text-sm mt-4">
            <h3 className="text-md font-bold mb-2">📊 Ringkasan</h3>
            <ul className="space-y-1 text-gray-800">
              <li>Total Barang Diserahkan oleh PPK: <strong>{totalPPK} unit</strong></li>
              <li>Total Barang Didistribusi: <strong>{totalDidistribusi} unit</strong></li>
              <li>Total Barang Diterima oleh Petugas: <strong>{totalDiterima} unit</strong></li>
              <li>Selisih Distribusi vs Diterima: <strong>{totalKurang} unit</strong></li>
              <li>Petugas belum menerima lengkap: <strong>{jumlahBelumLengkap} orang</strong></li>
            </ul>
          </div>
        )}
      </div>

      {/* Modal detail */}
      {showDetail && selectedEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Detail Distribusi</h2>
            <p className="text-sm mb-2"><strong>Petugas:</strong> {selectedEntry.petugas}</p>
            <p className="text-sm mb-2"><strong>Sektor:</strong> {selectedEntry.sektor}</p>
            <p className="text-sm mb-2"><strong>Barang:</strong> {selectedEntry.barang}</p>
            <p className="text-sm mb-2"><strong>Nomor Seri:</strong> {selectedEntry.nomorSeri}</p>
            <p className="text-sm mb-2"><strong>Nomor BAST:</strong> {selectedEntry.nomorBAST}</p>
            <p className="text-sm mb-2"><strong>Status:</strong> {selectedEntry.status}</p>
            <p className="text-sm mb-4">
              <strong>File BAST:</strong>{" "}
              <a href={selectedEntry.fileBAST} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {selectedEntry.fileBAST.split("/").pop()}
              </a>
            </p>
            <div className="text-right">
              <button
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setShowDetail(false)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </LayoutShell>
  );
}
