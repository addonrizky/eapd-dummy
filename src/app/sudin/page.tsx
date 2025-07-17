'use client'

import React from 'react'
import LayoutSudin from '../components/LayoutSudin'
import AnggaranChart from '../components/AnggaranChart'
import DistribusiPerSektorChart from '../components/DistribusiPerSektorChart'
import KebutuhanPerJabatanChart from '../components/KebutuhanPerJabatanChart'
import TimelineDistribusiChart from '../components/TimelineDistribusiChart'
import StatusPenerimaanChart from '../components/StatusPenerimaanChart'
import ProgressSummary from '../components/ProgressSummary'
import InputValidasiChartSudin from '../components/InputValidasiChartSudin'

export default function SudinDashboard() {
  const wilayahOptions = [
    "Sudin Jakarta Pusat",
    "Sudin Jakarta Pusat Sektor Gambir",
    "Sudin Jakarta Pusat Sektor Sawah Besar",
    "Sudin Jakarta Pusat Sektor Kemayoran",
    "Sudin Jakarta Pusat Sektor Senen",
    "Sudin Jakarta Pusat Sektor Cempaka Putih",
    "Sudin Jakarta Pusat Sektor Menteng",
    "Sudin Jakarta Pusat Sektor Tanah Abang",
    "Sudin Jakarta Pusat Sektor Johar Baru",
    "Sudin Jakarta Pusat Seksi Operasi",
    "Sudin Jakarta Pusat Subbagian Tata Usaha",
    "Sudin Jakarta Pusat Seksi Sarana Operasi",
    "Sudin Jakarta Pusat Seksi Pencegahan Kebakaran",
  ]

  return (
    <LayoutSudin>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">
          📊 Dashboard Sudin Jakarta Pusat
        </h1>

        <p className="text-gray-700">
          Silakan pilih wilayah untuk meninjau data distribusi dan kebutuhan APD.
        </p>

        {/* Dropdown Wilayah (gimmick only) */}
        <div className="max-w-md">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Wilayah
          </label>
          <select className="w-full p-2 border rounded bg-white shadow-sm">
            <option disabled selected>Silahkan Pilih</option>
            {wilayahOptions.map((w) => (
              <option key={w}>{w}</option>
            ))}
          </select>
        </div>

        {/* 📌 Ringkasan Progres Pendataan */}
        <ProgressSummary />

        {/* 📊 Grafik Capaian Input vs Validasi */}
        <InputValidasiChartSudin />

        {/* 📊 Grafik Anggaran */}
        <AnggaranChart />

        {/* 📊 Grafik Lainnya */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DistribusiPerSektorChart />
          <KebutuhanPerJabatanChart />
          <TimelineDistribusiChart />
          <StatusPenerimaanChart />
        </div>
      </div>
    </LayoutSudin>
  )
}
