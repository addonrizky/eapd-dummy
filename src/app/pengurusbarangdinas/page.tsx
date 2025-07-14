'use client'

import { useState } from 'react'
import LayoutPengurusBarang from '../components/LayoutPengurusBarangDinas'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts'

// Dummy data
const summaryData = {
  masuk: 1200,
  tersisa: 500,
  didistribusi: 700,
}

const timelineData = [
  { week: 'Minggu 1', masuk: 300, distribusi: 100 },
  { week: 'Minggu 2', masuk: 400, distribusi: 250 },
  { week: 'Minggu 3', masuk: 200, distribusi: 200 },
  { week: 'Minggu 4', masuk: 300, distribusi: 150 },
]

const stockTable = [
  {
    name: 'Helm Pemadam',
    total: 400,
    distribusi: 300,
    sisa: 100,
    distribusiDetail: [
      { wilayah: 'Jakarta Selatan', jumlah: 150 },
      { wilayah: 'Jakarta Barat', jumlah: 150 },
    ],
  },
  {
    name: 'Sepatu Safety',
    total: 300,
    distribusi: 150,
    sisa: 150,
    distribusiDetail: [
      { wilayah: 'Jakarta Utara', jumlah: 50 },
      { wilayah: 'Jakarta Pusat', jumlah: 100 },
    ],
  },
  {
    name: 'Sarung Tangan',
    total: 500,
    distribusi: 250,
    sisa: 250,
    distribusiDetail: [
      { wilayah: 'Pusdiklatkar', jumlah: 100 },
      { wilayah: 'Jakarta Timur', jumlah: 150 },
    ],
  },
]

function DistribusiModal({ item, onClose }: { item: any; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Distribusi {item.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl font-bold">×</button>
        </div>
        <div className="divide-y text-sm">
          {item.distribusiDetail.map((d: any, idx: number) => (
            <div key={idx} className="flex justify-between py-2">
              <span>{d.wilayah}</span>
              <span className="font-semibold">{d.jumlah}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function DashboardPengurusBarangDinas() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null)
  const [wilayah, setWilayah] = useState('semua')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <LayoutPengurusBarang>
      <div className="space-y-8">
        <h1 className="text-2xl font-bold">📦 Dashboard Ringkasan Barang</h1>

        {/* Filter Wilayah & Tanggal */}
        <div className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="text-sm font-medium">Wilayah:</label>
            <select
              value={wilayah}
              onChange={(e) => setWilayah(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-full"
            >
              <option value="semua">Semua Wilayah</option>
              <option value="dinas">Kantor Dinas</option>
              <option value="jakpus">Jakarta Pusat</option>
              <option value="jakut">Jakarta Utara</option>
              <option value="jakbar">Jakarta Barat</option>
              <option value="jaksel">Jakarta Selatan</option>
              <option value="jaktim">Jakarta Timur</option>
              <option value="pusdiklatkar">Pusdiklatkar</option>
              <option value="lab">Laboraturium</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Tanggal Mulai:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-full"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Tanggal Akhir:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-full"
            />
          </div>
        </div>

        {/* Ringkasan Stat */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow rounded-lg border">
            <p className="text-sm text-gray-500">Total Barang Masuk</p>
            <p className="text-2xl font-semibold text-blue-600">{summaryData.masuk}</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg border">
            <p className="text-sm text-gray-500">Total Tersisa di Gudang</p>
            <p className="text-2xl font-semibold text-yellow-600">{summaryData.tersisa}</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg border">
            <p className="text-sm text-gray-500">Total Didistribusikan</p>
            <p className="text-2xl font-semibold text-green-600">{summaryData.didistribusi}</p>
          </div>
        </div>

        {/* Grafik Timeline */}
        <div className="bg-white border rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">📈 Timeline Distribusi Barang</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="masuk" stroke="#60a5fa" name="Masuk" />
              <Line type="monotone" dataKey="distribusi" stroke="#34d399" name="Didistribusi" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Tabel Ringkasan Barang */}
        <div className="overflow-x-auto border rounded-lg shadow bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Nama Barang</th>
                <th className="px-4 py-2 text-left font-semibold">Total Masuk</th>
                <th className="px-4 py-2 text-left font-semibold">Didistribusikan</th>
                <th className="px-4 py-2 text-left font-semibold">Sisa di Gudang</th>
              </tr>
            </thead>
            <tbody>
              {stockTable.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-t hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.total}</td>
                  <td className="px-4 py-2">{item.distribusi}</td>
                  <td className="px-4 py-2">{item.sisa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedItem && (
        <DistribusiModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </LayoutPengurusBarang>
  )
}
