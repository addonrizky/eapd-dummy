'use client'

import { useState } from 'react'
import LayoutPengurusBarangPembantuSudin from '../../components/LayoutPengurusBarangPembantuSudin'
import { format } from 'date-fns'

const bastData = [
  {
    nomor: 'BAST/001',
    tanggal: '2025-06-10',
    pengirim: 'Sudin Jakarta Utara',
    tujuan: 'Sektor Koja',
    jumlahBarang: 3,
    file: null,
    items: [
      { name: 'Helm Pemadam', jumlah: 100 },
      { name: 'Sepatu Safety', jumlah: 50 },
      { name: 'Sarung Tangan', jumlah: 30 },
    ],
  },
  {
    nomor: 'BAST/002',
    tanggal: '2025-06-15',
    pengirim: 'Sudin Jakarta Utara',
    tujuan: 'Sektor Pademangan',
    jumlahBarang: 2,
    file: '/files/bast002.pdf',
    items: [
      { name: 'Helm Pemadam', jumlah: 80 },
      { name: 'Sepatu Safety', jumlah: 60 },
    ],
  },
]

export default function HalamanBastMasuk() {
  const [wilayah, setWilayah] = useState('semua')
  const [detail, setDetail] = useState<any | null>(null)
  const [showForm, setShowForm] = useState(false)

  return (
    <LayoutPengurusBarangPembantuSudin>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">📑 Daftar BAST Barang Masuk</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
          >
            + Tambah BAST
          </button>
        </div>

        {showForm && <FormBAST onCancel={() => setShowForm(false)} />}

        {/* Filter */}
        <div className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Mulai</label>
            <input
              type="date"
              className="border px-3 py-2 rounded text-sm"
              defaultValue={format(new Date(), 'yyyy-MM-dd')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Akhir</label>
            <input
              type="date"
              className="border px-3 py-2 rounded text-sm"
              defaultValue={format(new Date(), 'yyyy-MM-dd')}
            />
          </div>
        </div>

        {/* Table BAST */}
        <h2 className="text-lg font-semibold mb-2">📦 List BAST</h2>
        <div className="overflow-x-auto border rounded-lg shadow bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">No. BAST</th>
                <th className="px-4 py-2 text-left">Tanggal</th>
                <th className="px-4 py-2 text-left">Pengirim</th>
                <th className="px-4 py-2 text-left">Jenis Barang</th>
                <th className="px-4 py-2 text-left">Jumlah Barang</th>
                <th className="px-4 py-2 text-left">Progress Distribusi</th>
                <th className="px-4 py-2 text-left">File</th>
                <th className="px-4 py-2 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {bastData.map((item, idx) => {
                const total = item.items.reduce((sum, i) => sum + i.jumlah, 0)
                const progress = Math.round((total * 0.75) / total * 100)
                return (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-2">
                      <button
                        onClick={() => setDetail(item)}
                        className="text-sm text-blue-600 underline"
                      >
                        {item.nomor}
                      </button>
                    </td>
                    <td className="px-4 py-2">{item.tanggal}</td>
                    <td className="px-4 py-2">{item.pengirim}</td>
                    <td className="px-4 py-2">
                      <ul className="list-disc list-inside space-y-1">
                        {item.items.map((i, k) => (
                          <li key={k}>{i.name}: {i.jumlah} unit</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-2 font-semibold">{total}</td>
                    <td className="px-4 py-2">
                      <div className="w-full bg-gray-200 h-3 rounded">
                        <div className="bg-green-500 h-3 rounded" style={{ width: `${progress}%` }} />
                      </div>
                      <div className="text-xs text-gray-600 mt-1">{progress}%</div>
                    </td>
                    <td className="px-4 py-2">
                      {item.file ? (
                        <a
                          href={item.file}
                          className="text-blue-600 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                        </a>
                      ) : (
                        <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">
                          Unggah
                        </button>
                      )}
                    </td>
                    <td className="px-4 py-2 space-x-2">
                      <button className="text-sm text-yellow-600 hover:underline">✏️ Edit</button>
                      <button className="text-sm text-red-600 hover:underline">🗑️ Hapus</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Modal Detail */}
        {detail && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Detail Barang - {detail.nomor}</h2>
                <button onClick={() => setDetail(null)} className="text-gray-500 text-sm">
                  ✖
                </button>
              </div>
              <ul className="space-y-1">
                {detail.items.map((itm: any, idx: number) => (
                  <li key={idx} className="flex justify-between">
                    <span>{itm.name}</span>
                    <span>{itm.jumlah} unit</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </LayoutPengurusBarangPembantuSudin>
  )
}

function FormBAST({ onCancel }: { onCancel: () => void }) {
  const [groups, setGroups] = useState([Date.now()])
  const addGroup = () => setGroups([...groups, Date.now()])
  const removeGroup = (id: number) => setGroups(groups.filter((item) => item !== id))

  return (
    <div className="p-4 border rounded-lg bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Form Input BAST Penerimaan</h1>
        <button onClick={onCancel} className="text-sm text-gray-600 hover:underline">
          ← Batal
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input placeholder="🧾 Nomor BAST" className="border p-2 rounded w-full" />
        <input type="date" className="border p-2 rounded w-full" />
        <select className="border p-2 rounded w-full">
          <option value="">Pilih Tahun</option>
          {['2023', '2024', '2025', '2026'].map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>
        <input type="file" accept=".pdf,.xls,.xlsx" className="border p-2 rounded w-full bg-white" />
      </div>
      {groups.map((id) => (
        <div key={id} className="border-t pt-4 mt-6 space-y-4 bg-gray-50 p-4 rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="border p-2 rounded w-full">
              <option>Pilih Jenis Barang</option>
              <option value="A001">Respirator</option>
              <option value="A002">Fire Goggles</option>
              <option value="T002">Jumpsuit</option>
            </select>
            <select className="border p-2 rounded w-full">
              <option value="">Pilih Nama Barang</option>
              <option>Helm Pemadam (BAST xx.xx.xx.xxx) <b>tersisa 30</b></option>
              <option>Sepatu Safety (BAST xx.xx.xx.xxx) <b>tersisa 10</b></option>
              <option>Sarung Tangan (BAST xx.xx.xx.xxx) <b>tersisa 15</b></option>
              <option>Jumpsuit (BAST xx.xx.xx.xxx) <b>tersisa 20</b></option>
              <option>Respirator (BAST xx.xx.xx.xxx) <b>tersisa 17</b></option>
              <option>Fire Goggles (BAST xx.xx.xx.xxx) <b>tersisa 21</b></option>
            </select>
            <input value="V-Pro" className="border p-2 rounded w-full bg-gray-100" readOnly />
            <textarea defaultValue="Spesifikasi" className="border p-2 rounded w-full bg-gray-100" rows={2} readOnly />
            <input type="number" placeholder="Volume" className="border p-2 rounded w-full" />
            <input type="text" defaultValue="Unit" className="border p-2 rounded w-full" />
            <input placeholder="Keterangan" className="border p-2 rounded w-full md:col-span-2" />
          </div>
          <div className="text-right">
            <button onClick={() => removeGroup(id)} className="text-red-600 text-sm hover:underline">
              🗑️ Hapus Barang
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between mt-6">
        <button onClick={addGroup} className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
          ➕ Tambah Barang
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
          Submit
        </button>
      </div>
    </div>
  )
}