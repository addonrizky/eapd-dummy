'use client'

import { useState } from 'react'
import LayoutKasektor from '../../components/LayoutKasektor'
import { format } from 'date-fns'

const bastData = [
  {
    nomor: 'BAST/001',
    tanggal: '2025-06-10',
    pengirim: 'Sudin Jakarta Utara',
    tujuan: 'Sektor Koja',
    personil: { nama: 'Agus Pratama', nip: '19790101 200312 1 001' },
    file: null,
    items: ['Helm Pemadam'],
  },
  {
    nomor: 'BAST/002',
    tanggal: '2025-06-15',
    pengirim: 'Sudin Jakarta Utara',
    tujuan: 'Sektor Pademangan',
    personil: { nama: 'Siti Nurhaliza', nip: '19850302 200604 2 002' },
    file: '/files/bast002.pdf',
    items: ['Sepatu Safety'],
  },
]

export default function HalamanBastKeluar() {
  const [showForm, setShowForm] = useState(false)

  return (
    <LayoutKasektor>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">📑 Daftar BAST Barang Keluar</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
          >
            + Tambah BAST Keluar
          </button>
        </div>

        {showForm && <FormBAST onCancel={() => setShowForm(false)} />}

        {/* Filter */}
        <div className="flex gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Mulai</label>
            <input type="date" className="border px-3 py-2 rounded text-sm" defaultValue={format(new Date(), 'yyyy-MM-dd')} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Akhir</label>
            <input type="date" className="border px-3 py-2 rounded text-sm" defaultValue={format(new Date(), 'yyyy-MM-dd')} />
          </div>
        </div>

        {/* Tabel BAST */}
        <div className="flex justify-end mb-2">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600"
            onClick={() => alert('Fitur bulk upload coming soon...')}
          >
            📥 Bulk Upload
          </button>
        </div>
        <h2 className="text-lg font-semibold mt-8">📦 List BAST Keluar</h2>
        <div className="overflow-x-auto border rounded-lg shadow bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">No. BAST</th>
                <th className="px-4 py-2 text-left">Tanggal</th>
                <th className="px-4 py-2 text-left">Pengirim</th>
                <th className="px-4 py-2 text-left">Jenis Barang</th>
                <th className="px-4 py-2 text-left">Personil Penerima</th>
                <th className="px-4 py-2 text-left">File</th>
                <th className="px-4 py-2 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {bastData.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2">{item.nomor}</td>
                  <td className="px-4 py-2">{item.tanggal}</td>
                  <td className="px-4 py-2">{item.pengirim}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      {item.items.map((i, k) => (
                        <li key={k}>{i}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-2">
                    <div className="font-medium">{item.personil.nama}</div>
                    <div className="text-xs text-gray-600">{item.personil.nip}</div>
                  </td>
                  <td className="px-4 py-2">
                    {item.file ? (
                      <a href={item.file} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Download</a>
                    ) : (
                      <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">Unggah</button>
                    )}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="text-sm text-yellow-600 hover:underline">✏️ Edit</button>
                    <button className="text-sm text-red-600 hover:underline">🗑️ Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutKasektor>
  )
}

function FormBAST({ onCancel }: { onCancel: () => void }) {
  const [groups, setGroups] = useState([Date.now()])
  const addGroup = () => setGroups([...groups, Date.now()])
  const removeGroup = (id: number) => setGroups(groups.filter((item) => item !== id))

  return (
    <div className="p-4 border rounded-lg bg-white mt-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Form Input BAST Distribusi</h1>
        <button onClick={onCancel} className="text-sm text-gray-600 hover:underline">← Batal</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input placeholder="🧾 Nomor BAST" className="border p-2 rounded w-full" />
        <input type="date" className="border p-2 rounded w-full" />
        <select className="border p-2 rounded w-full">
          <option>Pilih Tahun</option>
          {['2023', '2024', '2025', '2026'].map((y) => <option key={y}>{y}</option>)}
        </select>
        <input type="file" accept=".pdf,.xls,.xlsx" className="border p-2 rounded w-full bg-white" />
        <select className="border p-2 rounded w-full">
          <option>Pilih Personil Penerima</option>
          <option value="1">Agus Pratama (19790101 200312 1 001)</option>
          <option value="2">Siti Nurhaliza (19850302 200604 2 002)</option>
        </select>
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
              <option>Helm Pemadam (BAST xx.xx.xx.xxx) - tersisa 30</option>
              <option>Sepatu Safety (BAST xx.xx.xx.xxx) - tersisa 10</option>
              <option>Sarung Tangan (BAST xx.xx.xx.xxx) - tersisa 15</option>
            </select>
            <input value="V-Pro" className="border p-2 rounded w-full bg-gray-100" readOnly />
            <textarea defaultValue="Spesifikasi" className="border p-2 rounded w-full bg-gray-100" rows={2} readOnly />
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
        <button onClick={addGroup} className="bg-blue-600 text-white px-4 py-2 rounded text-sm">➕ Tambah Barang</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">Submit</button>
      </div>
    </div>
  )
}
