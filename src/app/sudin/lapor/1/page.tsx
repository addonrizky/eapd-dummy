'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LayoutSudin from '../../../components/LayoutSudin'
import { useState } from 'react'

export default function DetailLaporAPD() {
  const router = useRouter()
  const [tindakan, setTindakan] = useState('')
  const [komentarVerifikator, setKomentarVerifikator] = useState('')

  return (
    <LayoutSudin>
      <div className="space-y-6 p-6">
        <div className="max-w-6xl mx-auto bg-white rounded shadow border p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">📄 Detail Laporan APD</h1>
            <button
              onClick={() => router.back()}
              className="text-sm text-blue-600 hover:underline"
            >
              ← Kembali
            </button>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gambar */}
            <div className="space-y-2">
              <div className="border-b pb-2">
                <button className="text-sm font-semibold border-b-2 border-blue-500 mr-4">
                  Gambar yang diupload
                </button>
                <button className="text-sm font-medium text-gray-400">
                  Gambar APD
                </button>
              </div>
              <div className="border rounded p-2">
                <Image
                  src="/img/apd-upload.jpg"
                  alt="Foto APD"
                  width={600}
                  height={400}
                  className="rounded object-contain w-full h-auto"
                />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-4">
              <div className="border rounded p-4">
                <p className="text-sm font-medium text-gray-500">Nomer Seri APD</p>
                <p className="text-base text-gray-800">-</p>
              </div>

              {/* Data Inputan */}
              <div className="border rounded p-4">
                <h2 className="font-semibold text-gray-800 mb-2">Data Inputan</h2>
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <p className="text-sm">
                      Keberadaan:{' '}
                      <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2 py-1 rounded">
                        Ada
                      </span>
                    </p>
                    <p className="text-sm">
                      Kondisi:{' '}
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        Baik
                      </span>
                    </p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-sm">
                      Ukuran:{' '}
                      <span className="inline-block text-sm px-2 font-medium text-gray-800">
                        –
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Terakhir Diubah:{' '}
                      <span className="bg-gray-200 px-2 py-0.5 rounded text-xs font-mono">
                        2024-01-26 20:00:10
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Verifikasi */}
              <div className="border rounded p-4">
                <h2 className="font-semibold text-gray-800 mb-2">Data Verifikasi</h2>
                <p className="text-sm">
                  Status Verifikasi:{' '}
                  <span className="bg-cyan-200 text-cyan-800 px-2 py-1 rounded text-xs font-medium">
                    Telah Di Verif
                  </span>
                </p>
                <p className="text-sm mt-1">
                  Terakhir Diubah:{' '}
                  <span className="bg-cyan-100 px-2 py-0.5 rounded text-xs font-mono">
                    2024-02-02 21:40:11
                  </span>
                </p>
                <p className="text-sm mt-2">
                  Verifikator: <span className="font-medium">David Zulkarnaen, S.Sos, Ma</span>
                </p>
                <p className="text-sm">
                  Jabatan Verifikator: <br />
                  <span className="text-gray-800">
                    Kepala Sektor Penanggulangan Kebakaran Dan Penyelamatan Kecamatan Koja
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Komentar */}
          <div className="border rounded p-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold">Komentar Pengupload :</p>
                <div className="mt-1 p-2 border rounded bg-gray-50 text-sm">Kondisi baik</div>
              </div>
              <div>
                <p className="text-sm font-semibold">Komentar Admin Verifikator :</p>
                <div className="mt-1 p-2 border rounded bg-gray-50 text-sm">-</div>
              </div>
            </div>
          </div>

          {/* Ubah Verifikasi */}
          <div className="border rounded p-4 space-y-4">
            <h2 className="font-semibold">Ubah Verifikasi</h2>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Tindakan Anda</label>
              <select
                value={tindakan}
                onChange={(e) => setTindakan(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="">Pilih Tipe Verifikasi</option>
                <option value="verif">Setujui Verifikasi</option>
                <option value="tolak">Tolak Inputan</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium">Komentar</label>
              <textarea
                rows={3}
                placeholder="(opsional) Tulis komentar/catatan tentang inputan ini"
                value={komentarVerifikator}
                onChange={(e) => setKomentarVerifikator(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div className="text-right">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                onClick={() => alert('Verifikasi disimpan!')}
              >
                💾 Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutSudin>
  )
}
