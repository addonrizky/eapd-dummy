"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function AddApdModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [inputNoSeri, setInputNoSeri] = useState(false);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl rounded bg-white p-6 shadow-lg relative">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
            onClick={onClose}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          <Dialog.Title className="text-xl font-bold mb-4">
            Tambah Barang APD Baru
          </Dialog.Title>

          <form className="space-y-4">
            <div>
              <label className="block font-medium text-sm mb-1">
                Nama Model APD
              </label>
              <input
                type="text"
                placeholder="Masukan Nama APD"
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Jenis APD
              </label>
              <select className="w-full border px-3 py-2 rounded">
                <option value="">Pilih Jenis APD</option>
                <option>Respirator</option>
                <option>Fire Goggles</option>
                <option>Balaclava</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">Merk APD</label>
              <input
                type="text"
                placeholder="Masukan Merk APD"
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Tipe Opsi Ukuran APD
              </label>
              <select className="w-full border px-3 py-2 rounded">
                <option>Ukuran Standar</option>
                <option>Ukuran S / M / L</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Tipe Opsi Kondisi APD
              </label>
              <select className="w-full border px-3 py-2 rounded">
                <option value="">Pilih Kondisi</option>
                <option>Kondisi Umum</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Gambar APD
              </label>
              <input type="file" className="w-full" />
            </div>

            <div className="flex items-center gap-2">
              <input
                id="noSeriCheck"
                type="checkbox"
                checked={inputNoSeri}
                onChange={(e) => setInputNoSeri(e.target.checked)}
              />
              <label htmlFor="noSeriCheck" className="text-sm">
                Perlu input No. Seri?{" "}
                <span className="text-gray-500">
                  Pegawai perlu menginput No. Seri yang tertera pada APD.
                </span>
              </label>
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                No Referensi Dari Penyedia
              </label>
              <input
                type="text"
                placeholder="Masukkan No Referensi"
                className="w-full border px-3 py-2 rounded"
              />
              <p className="text-xs text-gray-500 mt-1">
                Misalnya No DPA atau lainnya. Kosongkan jika tidak ada.
              </p>
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Penyedia No Referensi
              </label>
              <input
                type="text"
                placeholder="Masukkan Nama Pihak"
                className="w-full border px-3 py-2 rounded"
              />
              <p className="text-xs text-gray-500 mt-1">
                Vendor / organisasi pemberi No. Referensi.
              </p>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Simpan Data APD
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
