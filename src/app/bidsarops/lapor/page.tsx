'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import LayoutBidSarOps from '../../components/LayoutBidSarOps'

const dummyData = [
  {
    id: 1,
    foto: '/img/profile1.jpg',
    nrk: '175805',
    nama: 'Ade Setiyawan, S.Kom',
    jabatan: 'Pengendali Pemadam Kebakaran',
    penempatan: 'Sudin Jakarta Pusat Sektor Cempaka Putih',
    input: 18,
    total: 18,
    verif: 18,
  },
  {
    id: 2,
    foto: '/img/profile2.jpg',
    nrk: '171241',
    nama: 'Agus Mu`Allim',
    jabatan: 'Pemadam Kebakaran Terampil',
    penempatan: 'Sudin Jakarta Pusat Sektor Cempaka Putih',
    input: 18,
    total: 18,
    verif: 17,
  },
]

export default function LaporanAPDBidSarOpsPage() {
  const [wilayah, setWilayah] = useState('jakpus')
  const [penempatan, setPenempatan] = useState('cempaka-putih')
  const router = useRouter()

  const summary = {
    input: 97,
    validasi: 96,
    keberadaan: { ada: 1044, belum: 33, hilang: 0 },
    kondisi: { baik: 1000, rusakRingan: 50, rusakBerat: 27 },
  }

  return (
    <LayoutBidSarOps>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">📋 Progress Lapor APD</h1>

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
              <option value="jakut">Jakarta Utara</option>
              <option value="jakbar">Jakarta Barat</option>
              <option value="jaksel">Jakarta Selatan</option>
              <option value="jaktim">Jakarta Timur</option>
              <option value="dinas">Kantor Dinas</option>
              <option value="pusdiklatkar">Pusdiklatkar</option>
              <option value="lab">Laboratorium</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Penempatan</label>
            <select
              value={penempatan}
              onChange={(e) => setPenempatan(e.target.value)}
              className="border px-3 py-2 rounded w-80"
            >
              <option value="cempaka-putih">
                Sudin Jakarta Pusat Sektor Cempaka Putih
              </option>
              <option value="gambir">
                Sudin Jakarta Pusat Sektor Gambir
              </option>
            </select>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white p-4 rounded border shadow space-y-4">
          <h2 className="font-semibold text-lg">Rangkuman Inputan</h2>
          <div>
            <label className="text-sm">Inputan</label>
            <div className="w-full bg-gray-200 h-3 rounded">
              <div
                className="bg-green-600 h-3 rounded"
                style={{ width: `${summary.input}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">{summary.input}% Tercapai</p>
          </div>
          <div>
            <label className="text-sm">Validasi</label>
            <div className="w-full bg-gray-200 h-3 rounded">
              <div
                className="bg-cyan-600 h-3 rounded"
                style={{ width: `${summary.validasi}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">{summary.validasi}% Tercapai</p>
          </div>
        </div>

        {/* Ringkasan Keberadaan */}
        <div className="bg-white p-4 rounded border shadow">
          <h2 className="font-semibold mb-2">Rangkuman Keberadaan APD</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="border p-4 rounded bg-green-50">
              <p className="text-sm">Ada</p>
              <p className="text-2xl font-semibold text-green-600">{summary.keberadaan.ada}</p>
            </div>
            <div className="border p-4 rounded bg-yellow-50">
              <p className="text-sm">Belum Dapat</p>
              <p className="text-2xl font-semibold text-yellow-600">{summary.keberadaan.belum}</p>
            </div>
            <div className="border p-4 rounded bg-red-50">
              <p className="text-sm">Hilang</p>
              <p className="text-2xl font-semibold text-red-600">{summary.keberadaan.hilang}</p>
            </div>
          </div>
        </div>

        {/* Ringkasan Kondisi */}
        <div className="bg-white p-4 rounded border shadow">
          <h2 className="font-semibold mb-2">Rangkuman Kondisi APD</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="border p-4 rounded bg-green-50">
              <p className="text-sm">Baik</p>
              <p className="text-2xl font-semibold text-green-600">{summary.kondisi.baik}</p>
            </div>
            <div className="border p-4 rounded bg-yellow-50">
              <p className="text-sm">Rusak Ringan</p>
              <p className="text-2xl font-semibold text-yellow-600">{summary.kondisi.rusakRingan}</p>
            </div>
            <div className="border p-4 rounded bg-red-50">
              <p className="text-sm">Rusak Berat</p>
              <p className="text-2xl font-semibold text-red-600">{summary.kondisi.rusakBerat}</p>
            </div>
          </div>
        </div>

        {/* Tabel */}
        <div className="bg-white p-4 rounded border shadow">
          <h2 className="font-semibold mb-4">📑 Data Laporan Per APD</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2">Foto</th>
                  <th className="px-4 py-2">NRK / ID PJLP</th>
                  <th className="px-4 py-2">Nama</th>
                  <th className="px-4 py-2">Jabatan</th>
                  <th className="px-4 py-2">Penempatan</th>
                  <th className="px-4 py-2">Terinput</th>
                  <th className="px-4 py-2">Terverifikasi</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-2">
                      <img
                        src={item.foto}
                        alt={item.nama}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-4 py-2">{item.nrk}</td>
                    <td className="px-4 py-2">{item.nama}</td>
                    <td className="px-4 py-2">{item.jabatan}</td>
                    <td className="px-4 py-2">{item.penempatan}</td>
                    <td className="px-4 py-2 text-green-700 font-medium">
                      Terinput {item.input} dari {item.total} item.
                    </td>
                    <td className="px-4 py-2 text-cyan-700 font-medium">
                      Terverifikasi {item.verif} dari {item.total} item.
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => router.push(`/bidsarops/lapor/${item.id}`)}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutBidSarOps>
  )
}
