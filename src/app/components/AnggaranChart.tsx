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

type APDKebutuhan = {
  nama: string;
  kebutuhan: number;
};

const data: APDKebutuhan[] = [
  { nama: "Fire Goggles", kebutuhan: 221 },
  { nama: "Respirator", kebutuhan: 128 },
  { nama: "Kapak", kebutuhan: 16 },
  { nama: "Senter", kebutuhan: 16 },
  { nama: "Rescue Boots", kebutuhan: 357 },
  { nama: "Balaclava", kebutuhan: 8 },
  { nama: "Pelindung Lutut", kebutuhan: 0 },
  { nama: "Pelindung Siku", kebutuhan: 2 },
];

export default function AnggaranChart() {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">
        Grafik Kebutuhan APD untuk Perencanaan Anggaran
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nama" angle={-30} textAnchor="end" interval={0}>
            <Label value="Jenis APD" offset={-25} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: "Jumlah (unit)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Bar dataKey="kebutuhan" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
