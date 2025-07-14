"use client";

import PetugasLayout from "@/app/components/PetugasLayout";
import Image from "next/image";
import { User2, Clock4 } from "lucide-react";

export default function DetailLaporanStatic() {
  return (
    <PetugasLayout>
      <div className="p-4 space-y-6 pb-8">
        <h1 className="text-lg font-bold text-center">📋 Detail Laporan APD</h1>

        {/* Gambar APD */}
        <div className="flex justify-center">
          <Image
            src="/images/helm.jpg"
            alt="Foto APD"
            width={240}
            height={160}
            className="rounded border object-cover"
          />
        </div>

        {/* Info Timestamp */}
        <div className="text-sm text-gray-600 flex items-center gap-1">
          <Clock4 size={16} />
          <span>Dibuat pada: 31 Jan 2024 19:26</span>
        </div>

        {/* Detail APD */}
        <div className="space-y-2 text-sm">
          <div>
            <p className="text-gray-500">Jenis APD</p>
            <p className="font-semibold">Rescue Gloves</p>
          </div>
          <div>
            <p className="text-gray-500">Nomor Seri</p>
            <p className="font-semibold">Damkar 2022</p>
          </div>
          <div>
            <p className="text-gray-500">Ukuran</p>
            <p className="font-semibold">L</p>
          </div>
          <div>
            <p className="text-gray-500">Nomor BAST</p>
            <p className="font-semibold">BAST/001</p>
          </div>
          <div>
            <p className="text-gray-500">Tanggal BAST</p>
            <p className="font-semibold">01 Feb 2024</p>
          </div>
          <div>
            <p className="text-gray-500">File BAST</p>
            <a
              href="/files/BAST_001.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Unduh BAST (PDF)
            </a>
          </div>
          <div>
            <p className="text-gray-500">Kondisi APD</p>
            <span className="inline-block px-3 py-1 rounded bg-green-100 text-green-700 text-sm font-semibold">
              Baik
            </span>
          </div>
          <div>
            <p className="text-gray-500">Keterangan</p>
            <p className="font-semibold">Baik</p>
          </div>
          <div>
            <p className="text-gray-500">Status</p>
            <span className="inline-block px-3 py-1 rounded bg-green-100 text-green-700 text-sm font-semibold">
              Telah Di Verif
            </span>
          </div>
        </div>

        {/* Info Verifikasi */}
        <div className="text-sm space-y-2 pt-2">
          <p className="text-gray-600 flex items-center gap-1">
            <Clock4 size={16} />
            Diverifikasi pada: 02 Feb 2024 10:55
          </p>
          <div className="flex items-start gap-2">
            <User2 size={16} className="mt-0.5" />
            <div>
              <p className="font-semibold">Achmad Sadeli, Se</p>
              <p className="text-gray-600">
                Kepala Sektor Penanggulangan Kebakaran dan Penyelamatan Kecamatan Tanjung Priok
              </p>
            </div>
          </div>
        </div>

        {/* Tombol Request Ubah */}
        <div className="pt-6">
          <button className="w-full py-3 font-semibold text-sm bg-yellow-400 rounded">
            REQUEST UBAH DATA ➤
          </button>
        </div>
      </div>
    </PetugasLayout>
  );
}