"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  { jabatan: "Komandan Regu", kebutuhan: 60 },
  { jabatan: "Wakil Komandan", kebutuhan: 40 },
  { jabatan: "Petugas Lapangan", kebutuhan: 120 },
  { jabatan: "Sopir Mobil Damkar", kebutuhan: 35 },
];

export default function KebutuhanPerJabatanChart() {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">
        🧑‍🚒 Kebutuhan APD per Jabatan
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="jabatan" angle={-15} textAnchor="end" interval={0}>
            <Label value="Jabatan" offset={-20} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: "Jumlah Kebutuhan", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Bar dataKey="kebutuhan" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
