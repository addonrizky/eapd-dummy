'use client'

import { useState } from 'react'
import LayoutKasektor from '../../components/LayoutKasektor'
import DistribusiBarangChartKasektor from '../../components/DistribusiBarangChartKasektor'


const data = [
  {
    nomor: 'BAST/001',
    tanggal: '2025-06-10',
    pengirim: 'Sudin Jakarta Utara',
    file: '/files/bast001.pdf',
    progress: 88,
    items: [
      {
        nama: 'Helm Pemadam (V-Pro)',
        total: 100,
        progress: 90,
        wilayah: [
          { nama: 'Pos Penjaringan I', jumlah: 40 },
          { nama: 'Pos Penjaringan II', jumlah: 30 },
          { nama: 'Pos Koja I', jumlah: 20 },
        ],
      },
      {
        nama: 'Sarung Tangan (SafeGrip)',
        total: 60,
        progress: 83,
        wilayah: [
          { nama: 'Pos Penjaringan I', jumlah: 30 },
          { nama: 'Pos Penjaringan II', jumlah: 20 },
        ],
      },
    ],
  },
  {
    nomor: 'BAST/002',
    tanggal: '2025-06-10',
    pengirim: 'Sudin Jakarta Utara',
    file: '/files/bast002.pdf',
    progress: 45,
    items: [
      {
        nama: 'Helm Pemadam (V-Pro)',
        total: 100,
        progress: 90,
        wilayah: [
          { nama: 'Pos Cilincing I', jumlah: 40 },
          { nama: 'Pos Tanjung Priok I', jumlah: 30 },
          { nama: 'Pos Koja I', jumlah: 20 },
        ],
      },
      {
        nama: 'Sarung Tangan (SafeGrip)',
        total: 60,
        progress: 83,
        wilayah: [
          { nama: 'Pos Koja I', jumlah: 30 },
          { nama: 'Pos Penjaringan I', jumlah: 20 },
        ],
      },
    ],
  },
]

export default function Page() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <LayoutKasektor>
      <DistribusiBarangChartKasektor />

      <div className="space-y-6">
        <br />
        <h1 className="text-2xl font-bold">🚛 Distribusi Barang dari BAST</h1>

        <div className="overflow-x-auto border rounded bg-white shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">No. BAST</th>
                <th className="px-4 py-2">Tanggal</th>
                <th className="px-4 py-2">Pengirim</th>
                <th className="px-4 py-2">File</th>
                <th className="px-4 py-2">Progress Distribusi</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <>
                  <tr key={item.nomor} className="border-t">
                    <td className="px-4 py-2">{item.nomor}</td>
                    <td className="px-4 py-2">{item.tanggal}</td>
                    <td className="px-4 py-2">{item.pengirim}</td>
                    <td className="px-4 py-2">
                      <a
                        href={item.file}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-full bg-gray-200 h-3 rounded">
                        <div className="bg-green-500 h-3 rounded" style={{ width: `${item.progress}%` }} />
                      </div>
                      <div className="text-xs text-gray-600">{item.progress}%</div>
                    </td>
                    <td className="px-4 py-2">
                      {expanded === item.nomor ? (
                        <button
                          className="text-sm text-gray-600 underline"
                          onClick={() => setExpanded(null)}
                        >
                          ✖ Tutup
                        </button>
                      ) : (
                        <button
                          className="text-sm text-blue-600 underline"
                          onClick={() => setExpanded(item.nomor)}
                        >
                          Lihat Detail
                        </button>
                      )}
                    </td>
                  </tr>

                  {expanded === item.nomor && (
                    <tr>
                      <td colSpan={6} className="bg-gray-50 px-6 py-4">
                        <h3 className="text-lg font-bold mb-4">Detail Distribusi - {item.nomor}</h3>
                        <div className="space-y-6">
                          {item.items.map((itm, idx) => (
                            <div key={idx} className="border-b pb-4">
                              <p className="font-semibold text-md mb-1">
                                🛠️ {itm.nama}
                              </p>
                              <p className="text-sm text-gray-600 mb-1">Total Barang: {itm.total} unit</p>
                              <ul className="list-disc list-inside text-sm mb-2">
                                {itm.wilayah.map((wil, wIdx) => (
                                  <li key={wIdx}>
                                    {wil.nama}: {wil.jumlah} unit
                                  </li>
                                ))}
                              </ul>
                              <div className="w-full bg-gray-200 h-3 rounded">
                                <div className="bg-green-500 h-3 rounded" style={{ width: `${itm.progress}%` }} />
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{itm.progress}% terdistribusi</p>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutKasektor>
  )
}
