"use client";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type Jabatan = {
  id: string;
  nama: string;
};

type Props = {
  jabatan: Jabatan;
  onClose: () => void;
};

const jenisAPD = [
  "Respirator",
  "Fire Goggles",
  "Kapak",
  "Senter",
  "Balaclava",
  "Pelindung Lutut",
  "Pelindung Siku",
  "Tas Pemadam",
  "Fire Boots",
  "Rescue Boots",
  "Water Rescue Boots",
  "Fire Gloves",
  "Rescue Gloves",
  "Fire Helmet",
  "Rescue Helmet",
  "Fire Jacket",
  "Jumpsuit",
];

export default function PlottingModal({ jabatan, onClose }: Props) {
  const [selectedAPD, setSelectedAPD] = useState<string[]>([]);

  const toggleAPD = (item: string) => {
    setSelectedAPD((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSave = () => {
    console.log("Data tersimpan untuk:", jabatan.nama, selectedAPD);
    onClose(); // tutup modal setelah simpan
  };

  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-xl rounded bg-white p-6 shadow-xl relative space-y-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>

          <Dialog.Title className="text-lg font-semibold mb-2">
            🛠 Atur Kebutuhan APD - {jabatan.nama}
          </Dialog.Title>

          <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto border rounded p-3">
            {jenisAPD.map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedAPD.includes(item)}
                  onChange={() => toggleAPD(item)}
                  className="w-4 h-4"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
