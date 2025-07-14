'use client'

import { Bar, Pie } from 'react-chartjs-2'
import {
  PieController,
  ArcElement,
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, PieController, ArcElement)

export default function DashboardSarOps() {
  const summary = [
    { label: 'Total APD', value: 1240 },
    { label: 'Terdistribusi', value: 1100 },
    { label: 'Rusak', value: 68 },
    { label: 'Belum Diterima', value: 45 },
  ]

  const totalAPD = 1240
  const verifiedAPD = 986

  const distribusiPersen = Math.round((verifiedAPD / totalAPD) * 100)

  const distribusiColor =
    distribusiPersen < 70 ? 'bg-red-500'
    : distribusiPersen < 90 ? 'bg-yellow-400'
    : 'bg-green-500'


  const jenisApdData = {
    labels: ['Fire Goggles', 'Respirator', 'Gloves', 'Balaclava', 'Others'],
    datasets: [
      {
        label: 'Komposisi Jenis APD',
        data: [300, 250, 180, 100, 70],
        backgroundColor: [
          '#3b82f6', // biru
          '#10b981', // hijau
          '#f59e0b', // kuning
          '#ef4444', // merah
          '#6366f1', // ungu
        ],
        borderWidth: 1,
      },
    ],
  }


  const distribusiData = {
    labels: ['Sektor 1', 'Sektor 2', 'Sektor 3', 'Sektor 4', 'Sektor 5'],
    datasets: [
      {
        label: 'Jumlah APD',
        data: [240, 180, 260, 200, 120],
        backgroundColor: '#2563eb', // biru Tailwind
      },
    ],
  }

  const sektorLabels = ['Sektor 1', 'Sektor 2', 'Sektor 3', 'Sektor 4', 'Sektor 5']
  const distribusiPerSektor = [240, 180, 260, 200, 130]
  const laporanTerverifikasi = [198, 165, 240, 185, 90]

  const chartDataSektor = {
    labels: sektorLabels,
    datasets: [
      {
        label: 'APD Terdistribusi',
        data: distribusiPerSektor,
        backgroundColor: '#3b82f6', // biru
      },
      {
        label: 'Laporan Diverifikasi',
        data: laporanTerverifikasi,
        backgroundColor: '#10b981', // hijau
      },
    ],
  }


  const apdRusak = [
    { nama: 'Fire Goggles', sektor: 'Sektor 2', tgl: '2025-06-10' },
    { nama: 'Kapak', sektor: 'Sektor 3', tgl: '2025-06-11' },
  ]

  const statusPelaporan = [
    { sektor: 'Sektor 1', total: 200, laporan: 198 },
    { sektor: 'Sektor 2', total: 180, laporan: 165 },
    { sektor: 'Sektor 3', total: 220, laporan: 200 },
  ]

  return (
    <div className="space-y-8 p-4">
      {/* Ringkasan */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {summary.map((s, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-4">
            <p className="text-sm text-gray-600">{s.label}</p>
            <p className="text-2xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Grafik Distribusi vs Laporan Verifikasi per Sektor */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Distribusi vs Laporan Verifikasi per Sektor</h2>
        <Bar
          data={chartDataSektor}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              tooltip: { mode: 'index', intersect: false },
            },
          }}
        />
      </div>


      {/* Cakupan Distribusi vs Target */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Cakupan Distribusi APD Terverifikasi</h2>
        <p className="text-sm text-gray-700 mb-2">
          {verifiedAPD} dari {totalAPD} APD telah diverifikasi (
          <span className="font-semibold">{distribusiPersen}%</span>)
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className={`h-4 rounded-full transition-all ${distribusiColor}`}
            style={{ width: `${distribusiPersen}%` }}
          />
        </div>
      </div>


      {/* Komposisi Jenis APD */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Komposisi Jenis APD Terdistribusi</h2>
        <div className="w-full md:w-1/2 mx-auto">
          <Pie data={jenisApdData} />
        </div>
      </div>


      {/* Status Pelaporan per Sektor */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Status Pelaporan per Sektor</h2>
        <div className="space-y-4">
          {statusPelaporan.map((item, idx) => {
            const percentage = Math.round((item.laporan / item.total) * 100)
            return (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {item.sektor} | {item.laporan} dari {item.total} (✓ {percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>


      {/* Tabel APD Rusak */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">APD Rusak Terbaru</h2>
        <table className="w-full text-sm table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Nama</th>
              <th className="p-2">Sektor</th>
              <th className="p-2">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {apdRusak.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{item.nama}</td>
                <td className="p-2">{item.sektor}</td>
                <td className="p-2">{item.tgl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Status Pelaporan */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Status Pelaporan per Sektor</h2>
        <table className="w-full text-sm table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Sektor</th>
              <th className="p-2">Total APD</th>
              <th className="p-2">Sudah Lapor</th>
            </tr>
          </thead>
          <tbody>
            {statusPelaporan.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{item.sektor}</td>
                <td className="p-2">{item.total}</td>
                <td className="p-2">{item.laporan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
