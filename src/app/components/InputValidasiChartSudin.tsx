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
  { name: 'Sudin Jakarta Pusat', terinput: 80, tervalidasi: 60 },
  { name: 'Sudin Jakarta Pusat Sektor Gambir', terinput: 50, tervalidasi: 30 },
  { name: 'Sudin Jakarta Pusat Sektor Sawah Besar', terinput: 70, tervalidasi: 50 },
  { name: 'Sudin Jakarta Pusat Sektor Kemayoran', terinput: 65, tervalidasi: 55 },
  { name: 'Sudin Jakarta Pusat Sektor Senen', terinput: 75, tervalidasi: 70 },
  { name: 'Sudin Jakarta Pusat Sektor Cempaka Putih', terinput: 60, tervalidasi: 40 },
  { name: 'Sudin Jakarta Pusat Sektor Menteng', terinput: 90, tervalidasi: 85 },
  { name: 'Sudin Jakarta Pusat Sektor Tanah Abang', terinput: 85, tervalidasi: 80 },
  { name: 'Sudin Jakarta Pusat Sektor Johar Baru', terinput: 55, tervalidasi: 45 },
  { name: 'Sudin Jakarta Pusat Seksi Operasi', terinput: 100, tervalidasi: 100 },
  { name: 'Sudin Jakarta Pusat Subbagian Tata Usaha', terinput: 40, tervalidasi: 20 },
  { name: 'Sudin Jakarta Pusat Seksi Sarana Operasi', terinput: 90, tervalidasi: 90 },
  { name: 'Sudin Jakarta Pusat Seksi Pencegahan Kebakaran', terinput: 60, tervalidasi: 40 },
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
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data} layout="vertical" margin={{ left: 50 }}>
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="name" width={300} />
          <Tooltip />
          <Legend />
          <Bar dataKey="terinput" fill="#34d399" name="Terinput" />
          <Bar dataKey="tervalidasi" fill="#3b82f6" name="Tervalidasi" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
