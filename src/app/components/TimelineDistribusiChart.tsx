"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { tanggal: "01/05", distribusi: 15 },
  { tanggal: "05/05", distribusi: 32 },
  { tanggal: "10/05", distribusi: 48 },
  { tanggal: "15/05", distribusi: 72 },
  { tanggal: "20/05", distribusi: 96 },
  { tanggal: "25/05", distribusi: 110 },
];

export default function TimelineDistribusiChart() {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">
        ⏱️ Timeline Distribusi APD
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tanggal" />
          <YAxis label={{ value: "Jumlah Distribusi", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="distribusi" stroke="#f97316" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
