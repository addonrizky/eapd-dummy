'use client'

import { useState } from 'react'
import LayoutPengurusBarang from '../../components/LayoutPengurusBarangDinas'
import { format, parseISO, isAfter, isBefore } from 'date-fns'

const dataRiwayat = [
  {
    tanggal: '2025-06-10',
    jenis: 'BAST Masuk',
    nomor: 'BAST/001',
    wilayah: '-',
    items: [
      { name: 'Helm Pemadam', jumlah: 60 },
      { name: 'Sepatu Safety', jumlah: 50 },
    ],
    status: 'Selesai',
    file: '/files/bast001.pdf',
  },
  {
    tanggal: '2025-06-12',
    jenis: 'Distribusi',
    nomor: 'DIST/001',
    wilayah: 'Jakarta Selatan',
    items: [
      { name: 'Helm Pemadam', jumlah: 30 },
      { name: 'Sarung Tangan', jumlah: 60 },
    ],
    status: 'Diterima',
    file: null,
  },
  {
    tanggal: '2025-06-13',
    jenis: 'Distribusi',
    nomor: 'DIST/002',
    wilayah: 'Pusdiklatkar',
    items: [
      { name: 'Helm Pemadam', jumlah: 25 },
      { name: 'Jumpsuit', jumlah: 40 },
    ],
    status: 'Ditolak',
    file: null,
  },
]

export default function ArsipRiwayatPage() {
  const [filterJenis, setFilterJenis] = useState('')
  const [filterWilayah, setFilterWilayah] = useState('')
  const [searchNomor, setSearchNomor] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const filtered = dataRiwayat.filter((item) => {
    const tanggalItem = parseISO(item.tanggal)

    const cocokJenis = filterJenis === '' || item.jenis === filterJenis
    const cocokWilayah = filterWilayah === '' || item.wilayah === filterWilayah
    const cocokNomor = item.nomor.toLowerCase().includes(searchNomor.toLowerCase())
    const cocokTanggal =
      (!startDate || !isBefore(tanggalItem, parseISO(startDate))) &&
      (!endDate || !isAfter(tanggalItem, parseISO(endDate)))

    return cocokJenis && cocokWilayah && cocokNomor && cocokTanggal
  })

  return (
    <LayoutPengurusBarang>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">📁 Arsip & Riwayat</h1>

        {/* Filter */}
        <div className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-1">Jenis Dokumen</label>
            <select
              value={filterJenis}
              onChange={(e) => setFilterJenis(e.target.value)}
              className="border px-3 py-2 rounded text-sm"
            >
              <option value="">Semua</option>
              <option>BAST Masuk</option>
              <option>Distribusi</option>
              <option>Pengembalian</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Wilayah</label>
            <select
              value={filterWilayah}
              onChange={(e) => setFilterWilayah(e.target.value)}
              className="border px-3 py-2 rounded text-sm"
            >
              <option value="">Semua</option>
              <option>Jakarta Pusat</option>
              <option>Jakarta Utara</option>
              <option>Jakarta Barat</option>
              <option>Jakarta Selatan</option>
              <option>Jakarta Timur</option>
              <option>Pusdiklatkar</option>
              <option>-</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Mulai</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border px-3 py-2 rounded text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Selesai</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border px-3 py-2 rounded text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Cari Nomor Dokumen</label>
            <input
              type="text"
              placeholder="Contoh: BAST/001"
              value={searchNomor}
              onChange={(e) => setSearchNomor(e.target.value)}
              className="border px-3 py-2 rounded text-sm w-64"
            />
          </div>
        </div>

        {/* Table Riwayat */}
        <div className="overflow-x-auto border rounded-lg bg-white shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Tanggal</th>
                <th className="px-4 py-2 text-left">Jenis</th>
                <th className="px-4 py-2 text-left">No. Dokumen</th>
                <th className="px-4 py-2 text-left">Wilayah</th>
                <th className="px-4 py-2 text-left">Jumlah Barang</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">File</th>
                <th className="px-4 py-2 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2">{item.tanggal}</td>
                  <td className="px-4 py-2">{item.jenis}</td>
                  <td className="px-4 py-2 font-medium">{item.nomor}</td>
                  <td className="px-4 py-2">{item.wilayah}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc list-inside space-y-0.5">
                      {item.items.map((i, j) => (
                        <li key={j}>
                          {i.jumlah} unit {i.name}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        item.status === 'Selesai' || item.status === 'Diterima'
                          ? 'bg-green-100 text-green-700'
                          : item.status === 'Ditolak'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {item.file ? (
                      <a
                        href={item.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <button className="text-blue-600 text-sm underline">Lihat Detail</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    Tidak ada data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutPengurusBarang>
  )
}
