'use client'

import { useState } from 'react'
import LayoutBidSarOps from '../../components/LayoutBidSarOps'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const tableData = [
  {
    name: 'Helm Pemadam',
    merk: 'FireSafe',
    jumlah: 200,
    tujuan: 'Jakarta Selatan',
    didistribusi: 190,
    diterima: 150,
    tahun: 2024,
  },
  {
    name: 'Sepatu Safety',
    merk: 'FlameGuard',
    jumlah: 120,
    tujuan: 'Jakarta Barat',
    didistribusi: 120,
    diterima: 0,
    tahun: 2023,
  },
  {
    name: 'Sarung Tangan',
    merk: 'ProGrip',
    jumlah: 75,
    tujuan: 'Pusdiklatkar',
    didistribusi: 75,
    diterima: 75,
    tahun: 2024,
  },
  {
    name: 'Helm Pemadam',
    merk: 'SafeFire',
    jumlah: 100,
    tujuan: 'Jakarta Barat',
    didistribusi: 100,
    diterima: 80,
    tahun: 2023,
  },
]

export default function MonitoringDistribusiPage() {
  const [wilayah, setWilayah] = useState('semua')
  const [tahun, setTahun] = useState('semua')

  const wilayahList = [...new Set(tableData.map((item) => item.tujuan))]
  const tahunList = [...new Set(tableData.map((item) => item.tahun))]

  const filteredData = tableData.filter(
    (item) =>
      (wilayah === 'semua' || item.tujuan === wilayah) &&
      (tahun === 'semua' || item.tahun === parseInt(tahun))
  )

  const distributionData = filteredData.map((item) => ({
    name: item.name,
    didistribusi: item.didistribusi,
    diterima: item.diterima,
  }))

  const barangList = [...new Set(filteredData.map((item) => item.name))]
  const filteredWilayahList = [...new Set(filteredData.map((item) => item.tujuan))]

  const persebaranByBarang = barangList.map((barang) => {
    const items = filteredData.filter((item) => item.name === barang)
    const entry: Record<string, any> = { name: barang }
    items.forEach((item) => {
      entry[item.tujuan] = item.didistribusi
    })
    return entry
  })

  return (
    <LayoutBidSarOps>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">📦 Monitoring Distribusi Barang APD</h1>
        </div>

        {/* Filter Wilayah & Tahun */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Pilih Wilayah:</label>
            <select
              value={wilayah}
              onChange={(e) => setWilayah(e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            >
              <option value="semua">Semua Wilayah</option>
              {wilayahList.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Tahun Anggaran:</label>
            <select
              value={tahun}
              onChange={(e) => setTahun(e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            >
              <option value="semua">Semua Tahun</option>
              {tahunList.sort((a, b) => b - a).map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grafik Distribusi */}
        <div className="border rounded-lg p-4 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-2">📊 Grafik Distribusi Barang</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={distributionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="didistribusi" fill="#60a5fa" name="Didistribusi" />
              <Bar dataKey="diterima" fill="#4ade80" name="Diterima" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Grafik Persebaran */}
        <div className="border rounded-lg p-4 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-2">
            🗺️ Persebaran Barang Berdasarkan Wilayah
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={persebaranByBarang}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {filteredWilayahList.map((wil, idx) => (
                <Bar
                  key={wil}
                  dataKey={wil}
                  fill={['#f87171', '#60a5fa', '#34d399', '#facc15', '#c084fc'][idx % 5]}
                  name={wil}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tabel */}
        <div className="overflow-x-auto border rounded-lg shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Nama Barang</th>
                <th className="px-4 py-2 text-left font-semibold">Merk</th>
                <th className="px-4 py-2 text-left font-semibold">Jumlah</th>
                <th className="px-4 py-2 text-left font-semibold">Tujuan</th>
                <th className="px-4 py-2 text-left font-semibold">Didistribusi</th>
                <th className="px-4 py-2 text-left font-semibold">Serapan (%)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => {
                const percent = Math.round((item.diterima / item.jumlah) * 100)
                return (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.merk}</td>
                    <td className="px-4 py-2">{item.jumlah}</td>
                    <td className="px-4 py-2">{item.tujuan}</td>
                    <td className="px-4 py-2">{item.didistribusi}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-white text-xs ${
                          percent >= 90
                            ? 'bg-green-600'
                            : percent >= 50
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                      >
                        {percent}%
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutBidSarOps>
  )
}
