"use client";

import React from "react";
import LayoutBidSarOps from "../components/LayoutBidSarOps";
import AnggaranChart from "../components/AnggaranChart";
import DistribusiPerSektorChart from "../components/DistribusiPerSektorChart";
import KebutuhanPerJabatanChart from "../components/KebutuhanPerJabatanChart";
import TimelineDistribusiChart from "../components/TimelineDistribusiChart";
import StatusPenerimaanChart from "../components/StatusPenerimaanChart";
import ProgressSummary from "../components/ProgressSummary"; // 👈 Tambahkan ini

export default function BidSarOpsDashboard() {
  return (
    <LayoutBidSarOps>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">
          📊 Dashboard Bidang Sarana Operasi
        </h1>

        <p className="text-gray-700">
          Silakan pilih wilayah untuk meninjau data distribusi dan kebutuhan APD.
        </p>

        {/* Dropdown Wilayah (Gimmick Only) */}
        <div className="max-w-xs">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Wilayah
          </label>
          <select className="w-full p-2 border rounded bg-white shadow-sm">
            <option>Semua Wilayah</option>
            <option>Kantor Dinas</option>
            <option>Jakarta Pusat</option>
            <option>Jakarta Utara</option>
            <option>Jakarta Barat</option>
            <option>Jakarta Selatan</option>
            <option>Jakarta Timur</option>
            <option>Pusdiklatkar</option>
            <option>Laboraturium</option>
          </select>
        </div>

        {/* 📌 Ringkasan Progres Pendataan */}
        <ProgressSummary />

        {/* 📊 Grafik Utama */}
        <AnggaranChart />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DistribusiPerSektorChart />
          <KebutuhanPerJabatanChart />
          <TimelineDistribusiChart />
          <StatusPenerimaanChart />
        </div>
      </div>
    </LayoutBidSarOps>
  );
}