"use client";

import PetugasLayout from "@/app/components/PetugasLayout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ItemData = {
  id: number;
  nama: string;
  nomorSeri: string;
  status: string;
  foto: string;
  nomorBAST: string;
  tanggalBAST: string;
  fileBAST: string;
};

const dummyData: ItemData[] = [
  {
    id: 1,
    nama: "Helm APD",
    nomorSeri: "H-001",
    status: "menunggu_konfirmasi",
    foto: "/images/helm.jpg",
    nomorBAST: "BAST/001",
    tanggalBAST: "2025-05-01",
    fileBAST: "/files/BAST_001.pdf",
  },
  {
    id: 10,
    nama: "Sarung Tangan",
    nomorSeri: "SG-002",
    status: "diterima",
    foto: "/images/sarung_tangan.jpg",
    nomorBAST: "BAST/002",
    tanggalBAST: "2025-05-01",
    fileBAST: "/files/BAST_002.pdf",
  },
];

export default function PenerimaanPage() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const [modalType, setModalType] = useState<"terima" | "rusak" | null>(null);

  const handleItemClick = (id: number) => {
    router.push(`/petugas/penerimaan/${id}`);
  };

  const handleOpenModal = (item: ItemData, type: "terima" | "rusak") => {
    setSelectedItem(item);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  return (
    <PetugasLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-lg font-bold">📦 Daftar APD</h1>
        {dummyData.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-4 shadow-sm cursor-pointer"
            onClick={() => handleItemClick(item.id)}
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.foto}
                alt={item.nama}
                width={64}
                height={64}
                className="rounded border object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-base">{item.nama}</p>
                <p className="text-gray-600">Nomor Seri: {item.nomorSeri}</p>
                <p className="text-gray-600">Status: {item.status.replace("_", " ")}</p>
                <p className="text-gray-600">Nomor BAST: {item.nomorBAST}</p>
                <p className="text-gray-600">Tanggal BAST: {item.tanggalBAST}</p>
                <p>
                  <a
                    href={item.fileBAST}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Unduh PDF
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                className={`text-sm py-1.5 rounded text-white ${item.status === "menunggu_konfirmasi" ? "bg-blue-600" : "bg-gray-300 cursor-not-allowed"}`}
                disabled={item.status !== "menunggu_konfirmasi"}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenModal(item, "terima");
                }}
              >
                Terima (Upload Foto)
              </button>
              <button
                className="bg-red-500 text-white text-sm py-1.5 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenModal(item, "rusak");
                }}
              >
                Lapor Rusak
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold">
              {modalType === "terima" ? "Konfirmasi Penerimaan" : "Lapor Kerusakan"}
            </h2>
            <p className="text-sm text-gray-700">
              Barang: <strong>{selectedItem.nama}</strong>
            </p>
            <input type="file" accept="image/*" className="w-full border p-2 rounded" />
            <textarea
              placeholder="Keterangan tambahan"
              className="w-full border p-2 rounded text-sm"
              rows={3}
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-sm bg-gray-300 rounded"
              >
                Batal
              </button>
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </PetugasLayout>
  );
}
