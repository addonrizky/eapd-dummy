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
  },
  {
    name: 'Sepatu Safety',
    merk: 'FlameGuard',
    jumlah: 120,
    tujuan: 'Jakarta Barat',
    didistribusi: 120,
    diterima: 0,
  },
  {
    name: 'Sarung Tangan',
    merk: 'ProGrip',
    jumlah: 75,
    tujuan: 'Pusdiklatkar',
    didistribusi: 75,
    diterima: 75,
  },
  {
    name: 'Helm Pemadam',
    merk: 'SafeFire',
    jumlah: 100,
    tujuan: 'Jakarta Barat',
    didistribusi: 100,
    diterima: 80,
  },
]

export default function MonitoringDistribusiPage() {
  const [wilayah, setWilayah] = useState('semua')

  const distributionData = tableData.map((item) => ({
    name: item.name,
    didistribusi: item.didistribusi,
    diterima: item.diterima,
  }))

  const barangList = [...new Set(tableData.map((item) => item.name))]
  const wilayahList = [...new Set(tableData.map((item) => item.tujuan))]

  const persebaranByBarang = barangList.map((barang) => {
    const items = tableData.filter((item) => item.name === barang)
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

        {/* Filter Wilayah */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
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

        {/* Grafik Persebaran Barang per Wilayah */}
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
              {wilayahList.map((wil, idx) => (
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
              {tableData
                .filter((item) => wilayah === 'semua' || item.tujuan === wilayah)
                .map((item, i) => {
                  const percent = Math.round(
                    (item.diterima / item.jumlah) * 100
                  )
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
