'use client'

import React from 'react'

export default function AddJenisApdModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 space-y-6 relative">
        {/* Tombol Kembali */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
        >
          ←
        </button>

        <h2 className="text-xl font-semibold mb-2">Form Jenis Barang APD</h2>

        {/* Box Kategori ID */}
        <div className="bg-white border rounded p-4 shadow text-sm w-fit ml-auto">
          <p><strong>H</strong> - Helmet</p>
          <p><strong>T</strong> - Tubuh/Trouser</p>
          <p><strong>G</strong> - Gloves</p>
          <p><strong>B</strong> - Boots</p>
          <p><strong>A</strong> - Additionals / APD Tipe Lainnya</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              ID Jenis APD
            </label>
            <input
              type="text"
              placeholder="Masukan ID Jenis untuk referensi di database."
              className="w-full border px-3 py-2 rounded text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Nama Jenis APD
            </label>
            <input
              type="text"
              placeholder="Nama Jenis Barang APD"
              className="w-full border px-3 py-2 rounded text-sm"
            />
          </div>
        </div>

        {/* Tombol Simpan */}
        <div className="pt-4 border-t">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Simpan
          </button>
        </div>
      </div>
    </div>
  )
}
