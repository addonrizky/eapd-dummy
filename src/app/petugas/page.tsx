"use client";

import PetugasLayout from "@/app/components/PetugasLayout";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function PetugasHomePage() {
  const totalAPD = 6;

  // Simulasi data status
  const statusData = [
    { name: "Menunggu Konfirmasi", value: 1 },
    { name: "Diterima (menunggu verifikasi)", value: 2 },
    { name: "Rusak (menunggu verifikasi)", value: 1 },
    { name: "Diterima & diverifikasi", value: 1 },
    { name: "Rusak & diverifikasi", value: 1 },
  ];

  const sudahDilaporkan = statusData
    .filter((d) => d.name !== "Menunggu Konfirmasi")
    .reduce((acc, curr) => acc + curr.value, 0);

  const progress = Math.round((sudahDilaporkan / totalAPD) * 100);

  const COLORS = ["#facc15", "#60a5fa", "#f87171", "#22c55e", "#b91c1c"];

  return (
    <PetugasLayout>
      <div className="p-4 space-y-4">
        {/* Ring Progress */}
        <div className="bg-white border rounded-lg shadow p-4 text-center">
          <h2 className="text-sm font-bold mb-2">📋 Capaian Pelaporan APD</h2>
          <div className="flex items-center justify-center">
            <div className="relative w-24 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[{ value: progress }, { value: 100 - progress }]}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={35}
                    outerRadius={45}
                    stroke="none"
                  >
                    <Cell fill="#3b82f6" />
                    <Cell fill="#e5e7eb" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">{progress}%</span>
              </div>
            </div>
          </div>
          <p className="text-xs mt-2 text-gray-700">
            {sudahDilaporkan} dari {totalAPD} APD telah Anda laporkan.
          </p>
        </div>

        {/* Pie Chart Status */}
        <div className="bg-white border rounded-lg shadow p-4">
          <h2 className="text-sm font-bold mb-2">📈 Status APD Anda</h2>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  innerRadius={30}
                  label={({ name }) => name.length > 20 ? name.slice(0, 20) + "..." : name}
                >
                  {statusData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Reminder */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
          ⚠️ Pastikan Anda mengecek kondisi APD sebelum bertugas. Laporkan jika ada kerusakan.
        </div>
      </div>
    </PetugasLayout>
  );
}
