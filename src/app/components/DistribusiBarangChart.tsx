'use client'

import { useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const wilayahOptions = [
  { value: 'semua', label: 'Semua Wilayah' },
  { value: 'jaksel', label: 'Jakarta Selatan' },
  { value: 'jaktim', label: 'Jakarta Timur' },
  { value: 'jakbar', label: 'Jakarta Barat' },
  { value: 'jakut', label: 'Jakarta Utara' },
  { value: 'pusdiklatkar', label: 'Pusdiklatkar' },
]

const jenisBarangOptions = ['Semua', 'Helm Safety', 'Sepatu Safety', 'Sarung Tangan', 'APAR']

// Dummy data
const distribusiWilayah = [
  { name: 'Jakarta Selatan', value: 80, barang: 'Helm Safety' },
  { name: 'Jakarta Timur', value: 60, barang: 'Helm Safety' },
  { name: 'Jakarta Barat', value: 30, barang: 'Sarung Tangan' },
  { name: 'Jakarta Utara', value: 20, barang: 'Sarung Tangan' },
  { name: 'Pusdiklatkar', value: 40, barang: 'Sepatu Safety' },
]

const progressBarangs = [
  { wilayah: 'jaksel', name: 'Helm Safety', progress: 90 },
  { wilayah: 'jaksel', name: 'Sarung Tangan', progress: 70 },
  { wilayah: 'jaksel', name: 'APAR', progress: 50 },
  { wilayah: 'jaktim', name: 'Helm Safety', progress: 85 },
  { wilayah: 'jakut', name: 'Sepatu Safety', progress: 75 },
  { wilayah: 'pusdiklatkar', name: 'APAR', progress: 30 },
]

export default function DistribusiBarangChart() {
  const [selectedBarang, setSelectedBarang] = useState('Semua')
  const [selectedWilayah, setSelectedWilayah] = useState('semua')

  const pieData = distribusiWilayah.filter(
    (d) => selectedBarang === 'Semua' || d.barang === selectedBarang
  )

  const barData = progressBarangs.filter(
    (d) => selectedWilayah === 'semua' || d.wilayah === selectedWilayah
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Pie Chart */}
      <div className="border p-4 rounded bg-white shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">📊 Distribusi Barang per Wilayah</h2>
          <select
            className="border px-2 py-1 text-sm rounded"
            value={selectedBarang}
            onChange={(e) => setSelectedBarang(e.target.value)}
          >
            {jenisBarangOptions.map((barang) => (
              <option key={barang} value={barang}>
                {barang}
              </option>
            ))}
          </select>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <RechartsTooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="border p-4 rounded bg-white shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">📈 Progress Distribusi per Barang</h2>
          <select
            className="border px-2 py-1 text-sm rounded"
            value={selectedWilayah}
            onChange={(e) => setSelectedWilayah(e.target.value)}
          >
            {wilayahOptions.map((w) => (
              <option key={w.value} value={w.value}>
                {w.label}
              </option>
            ))}
          </select>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
            <RechartsTooltip formatter={(v) => `${v}%`} />
            <Bar dataKey="progress" fill="#4285F4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
