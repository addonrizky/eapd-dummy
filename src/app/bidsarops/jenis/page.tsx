'use client'

import React, { useState } from 'react'
import LayoutBidSarOps from '../../components/LayoutBidSarOps'
import AddJenisApdModal from '../../components/AddJenisApdModal'

const jenisApdList = [
  { id: 'A001', nama: 'Respirator', jumlahItem: 1 },
  { id: 'A002', nama: 'Fire Goggles', jumlahItem: 1 },
  { id: 'A003', nama: 'Kapak', jumlahItem: 1 },
  { id: 'A004', nama: 'Senter', jumlahItem: 1 },
  { id: 'A005', nama: 'Balaclava', jumlahItem: 1 },
  { id: 'A006', nama: 'Pelindung Lutut', jumlahItem: 1 },
  { id: 'A007', nama: 'Pelindung Siku', jumlahItem: 1 },
  { id: 'A008', nama: 'Tas Pemadam', jumlahItem: 1 },
  { id: 'A009', nama: 'Fire Boots', jumlahItem: 1 },
]

export default function JenisAPDPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  return (
    <LayoutBidSarOps>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">📋 Jenis APD</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            onClick={() => setIsAddModalOpen(true)}
          >
            + Buat Jenis APD Baru
          </button>
        </div>

        {/* Filter & Kolom */}
        <div className="flex flex-wrap gap-2 items-center">
          <input
            type="text"
            placeholder="Cari"
            className="border px-3 py-2 rounded w-full max-w-xs text-sm"
          />
          <div className="ml-auto flex items-center gap-2 text-sm">
            <span>Kolom</span>
            <select className="border rounded px-2 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
        </div>

        {/* Tabel */}
        <div className="overflow-x-auto border rounded shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border-b font-medium">Id jenis ⬍</th>
                <th className="px-4 py-2 border-b font-medium">Nama jenis ⬍</th>
                <th className="px-4 py-2 border-b font-medium">Jumlah Item APD</th>
                <th className="px-4 py-2 border-b font-medium">Tindakan</th>
              </tr>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                <td colSpan={4} className="px-4 py-2">
                  Berapa banyak APD unik yang berjenis ini.
                </td>
              </tr>
            </thead>
            <tbody>
              {jenisApdList.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.nama}</td>
                  <td className="px-4 py-2">{item.jumlahItem}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="text-sm px-3 py-1 bg-cyan-600 text-white rounded hover:bg-cyan-700">
                      Edit
                    </button>
                    <button className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah Jenis APD */}
      <AddJenisApdModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </LayoutBidSarOps>
  )
}
