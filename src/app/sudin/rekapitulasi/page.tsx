'use client'

import { useState } from 'react'
import LayoutSudin from '../../components/LayoutSudin'

const dummyData = [
  {
    jenis: 'Respirator',
    baik: 79,
    rusakRingan: 6,
    rusakSedang: 1,
    rusakBerat: 0,
    belumTerima: 0,
    hilang: 0,
    diterima: 86,
    kebutuhan: 1,
    subtotal: 86,
  },
  {
    jenis: 'Rescue Boots (Heritage )',
    baik: 83,
    rusakRingan: 0,
    rusakSedang: 0,
    rusakBerat: 0,
    belumTerima: 0,
    hilang: 0,
    diterima: 83,
    kebutuhan: 0,
    subtotal: 83,
  },
  {
    jenis: 'Kapak',
    baik: 86,
    rusakRingan: 1,
    rusakSedang: 0,
    rusakBerat: 0,
    belumTerima: 0,
    hilang: 0,
    diterima: 87,
    kebutuhan: 0,
    subtotal: 87,
  },
]

export default function RekapitulasiAPDPage() {
  const [wilayah, setWilayah] = useState('jakut')
  const [penempatan, setPenempatan] = useState('kelapa-gading')

  return (
    <LayoutSudin>
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">📊 Rekapitulasi Laporan APD</h1>
        
        <div className="text-gray-700 text-sm font-medium">
          Periode Jendela Pelaporan:{' '}
          <span className="font-semibold text-black">1 Juni – 15 Juli 2025</span>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium">Wilayah</label>
            <select
              value={wilayah}
              onChange={(e) => setWilayah(e.target.value)}
              className="border px-3 py-2 rounded w-64"
            >
              <option value="jakpus">Jakarta Pusat</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Penempatan</label>
            <select
              value={penempatan}
              onChange={(e) => setPenempatan(e.target.value)}
              className="border px-3 py-2 rounded w-80"
            >
              <option value="kelapa-gading">Sudin Jakarta Utara Sektor Kelapa Gading</option>
              <option value="cilincing">Sudin Jakarta Utara Sektor Cilincing</option>
            </select>
          </div>
          <button className="border px-3 py-2 rounded bg-white hover:bg-gray-50">
            Export KIB
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-700 text-white text-sm">
              <tr>
                <th rowSpan={2} className="px-4 py-2 border">#</th>
                <th rowSpan={2} className="px-4 py-2 border">Jenis APD</th>
                <th colSpan={4} className="px-4 py-2 border text-center">Kondisi</th>
                <th colSpan={3} className="px-4 py-2 border text-center">Keberadaan</th>
                <th rowSpan={2} className="px-4 py-2 border">Total Kebutuhan</th>
                <th rowSpan={2} className="px-4 py-2 border">SubTotal</th>
              </tr>
              <tr>
                <th className="px-4 py-2 border">Baik</th>
                <th className="px-4 py-2 border">Rusak Ringan</th>
                <th className="px-4 py-2 border">Rusak Sedang</th>
                <th className="px-4 py-2 border">Rusak Berat</th>
                <th className="px-4 py-2 border">Belum Terima</th>
                <th className="px-4 py-2 border">Hilang</th>
                <th className="px-4 py-2 border">Diterima</th>
              </tr>
            </thead>

            <tbody>
              {dummyData.map((item, i) => (
                <tr key={i} className="text-center border-b">
                  <td className="px-2 py-1 border">{i + 1}</td>
                  <td className="px-2 py-1 border text-left">{item.jenis}</td>
                  <td className="px-2 py-1 border text-blue-600 font-medium">{item.baik}</td>
                  <td className="px-2 py-1 border text-blue-600 font-medium">{item.rusakRingan}</td>
                  <td className="px-2 py-1 border text-blue-600 font-medium">{item.rusakSedang}</td>
                  <td className="px-2 py-1 border text-blue-600 font-medium">{item.rusakBerat}</td>
                  <td className="px-2 py-1 border text-blue-600 font-medium">{item.belumTerima}</td>
                  <td className="px-2 py-1 border text-blue-600 font-medium">{item.hilang}</td>
                  <td className="px-2 py-1 border text-blue-600 font-medium">{item.diterima}</td>
                  <td className="px-2 py-1 border text-blue-600 font-medium">{item.kebutuhan}</td>
                  <td className="px-2 py-1 border text-blue-600 font-medium">{item.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutSudin>
  )
}
