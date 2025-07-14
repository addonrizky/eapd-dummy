"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Sidebar({ active }: { active?: string }) {
  const pathname = usePathname();
  const [openDistribusi, setOpenDistribusi] = useState(false);

  useEffect(() => {
    // Buka sub-menu Distribusi jika path mengandung "/distribusi"
    if (pathname.includes("/distribusi")) {
      setOpenDistribusi(true);
    }
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href);

  return (
    <aside className="w-64 h-screen bg-white border-r shadow-md">
      <div className="p-4 text-xl font-bold border-b">
        🧾 e-APD Damkar
      </div>
      <nav className="flex flex-col text-sm p-2 gap-1">
        <Link
          href="/bast"
          className={`px-3 py-2 rounded hover:bg-gray-200 ${
            isActive("/bast") ? "bg-blue-100 text-blue-700 font-medium" : ""
          }`}
        >
          📥 Upload BAST Penerimaan
        </Link>

        <button
          onClick={() => setOpenDistribusi((prev) => !prev)}
          className={`px-3 py-2 rounded hover:bg-gray-200 text-left ${
            pathname.includes("/distribusi")
              ? "bg-blue-100 text-blue-700 font-medium"
              : ""
          }`}
        >
          📊 Distribusi APD
        </button>

        {openDistribusi && (
          <div className="pl-6 flex flex-col gap-1">
            <Link
              href="/distribusi/upload"
              className={`px-3 py-2 rounded hover:bg-gray-100 ${
                isActive("/distribusi/upload")
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : ""
              }`}
            >
              📤 Upload Excel Distribusi
            </Link>
            <Link
              href="/distribusi/review"
              className={`px-3 py-2 rounded hover:bg-gray-100 ${
                isActive("/distribusi/review")
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : ""
              }`}
            >
              🔍 Tinjau Hasil Upload
            </Link>
            <Link
              href="/distribusi/monitoring"
              className={`px-3 py-2 rounded hover:bg-gray-100 ${
                isActive("/distribusi/monitoring")
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : ""
              }`}
            >
              📈 Monitoring Distribusi
            </Link>
          </div>
        )}
      </nav>
    </aside>
  );
}
