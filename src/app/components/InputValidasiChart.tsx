'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Kantor Dinas', terinput: 53, tervalidasi: 32 },
  { name: 'Pusdiklatkar', terinput: 20, tervalidasi: 0 },
  { name: 'Laboratorium', terinput: 40, tervalidasi: 15 },
  { name: 'Jakarta Utara', terinput: 89, tervalidasi: 82 },
  { name: 'Jakarta Pusat', terinput: 95, tervalidasi: 88 },
  { name: 'Jakarta Barat', terinput: 91, tervalidasi: 90 },
  { name: 'Jakarta Selatan', terinput: 94, tervalidasi: 80 },
  { name: 'Jakarta Timur', terinput: 88, tervalidasi: 75 },
]

export default function InputValidasiChart() {
  return (
    <div className="border rounded-lg bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">
        Progress Inputan Saat Ini
      </h2>
      <p className="text-sm text-gray-600 mb-4 text-center font-medium">
        Capaian Persentase Input dan Validasi Data APD Pemadam DKI Jakarta
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="terinput" fill="#34d399" name="Terinput" />
          <Bar dataKey="tervalidasi" fill="#3b82f6" name="Tervalidasi" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
