"use client";

import React from "react";
import Link from "next/link";
import LayoutShell from "./components/LayoutShell";

export default function HomePage() {
  const menuItems = [
    {
      label: "📥 Upload BAST Penerimaan",
      href: "/bast",
      desc: "Form input barang yang diterima dari Kadin/Sudin.",
    },
    {
      label: "📤 Upload Excel Distribusi",
      href: "/distribusi/upload",
      desc: "Unggah file distribusi APD ke masing-masing petugas.",
    },
    {
      label: "🔍 Review Pre-fill",
      href: "/distribusi/review",
      desc: "Lihat dan perbaiki hasil parsing distribusi sebelum disebar.",
    },
    {
      label: "📈 Monitoring Distribusi",
      href: "/distribusi/monitoring",
      desc: "Pantau status konfirmasi & verifikasi oleh petugas.",
    },
  ];

  return (
    <LayoutShell activeSidebar="">
      <h1 className="text-2xl font-bold mb-6">📂 Pengaturan Barang</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-white p-5 rounded shadow hover:shadow-md transition border border-gray-200 hover:border-blue-400"
          >
            <h2 className="text-lg font-semibold mb-1">{item.label}</h2>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </Link>
        ))}
      </div>
    </LayoutShell>
  );
}
