"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SidebarProps = {
  active?: "laporan" | "status";
};

export default function SidebarPetugas({ active }: SidebarProps) {
  const pathname = usePathname();

  const menu = [
    {
      label: "📥 Laporan Penerimaan",
      href: "/petugas/laporan",
      id: "laporan",
    },
    {
      label: "✅ Status Verifikasi",
      href: "/petugas/status",
      id: "status",
    },
  ];

  return (
    <aside className="w-64 bg-white h-screen shadow-md border-r">
      <div className="p-4 text-xl font-bold border-b">🧑‍🚒 Petugas</div>
      <nav className="flex flex-col p-2 text-sm">
        {menu.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`px-3 py-2 rounded hover:bg-gray-200 ${
              active === item.id || pathname.startsWith(item.href)
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-gray-700"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
