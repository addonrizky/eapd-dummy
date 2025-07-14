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
  { sektor: "Sektor 1", jumlah: 75 },
  { sektor: "Sektor 2", jumlah: 63 },
  { sektor: "Sektor 3", jumlah: 82 },
  { sektor: "Sektor 4", jumlah: 91 },
  { sektor: "Sektor 5", jumlah: 55 },
];

export default function DistribusiPerSektorChart() {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">
        📍 Distribusi APD per Sektor
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sektor" />
          <YAxis label={{ value: "Jumlah Barang", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Bar dataKey="jumlah" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
