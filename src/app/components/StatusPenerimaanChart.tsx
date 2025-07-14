"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Menunggu Konfirmasi", value: 28 },
  { name: "Diterima", value: 240 },
  { name: "Belum Diterima", value: 18 },
  { name: "Rusak Ringan", value: 9 },
  { name: "Rusak Berat", value: 4 },
];

const COLORS = ["#facc15", "#10b981", "#f87171", "#60a5fa", "#a855f7"];

export default function StatusPenerimaanChart() {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">📦 Status Penerimaan APD</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
