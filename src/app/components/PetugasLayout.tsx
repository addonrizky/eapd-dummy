"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ClipboardList } from "lucide-react";

export default function PetugasLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-[390px] bg-white flex flex-col min-h-screen relative">

        {/* Sticky Profile Header */}
        <header className="sticky top-0 z-50 bg-blue-600 text-white px-4 py-4 flex items-center gap-3">
          <img
            src="/petugas/avatar_default.png"
            alt="Foto Petugas"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div className="text-sm leading-tight">
            <p className="font-medium">Abdul Rochman, Se</p>
            <p className="text-xs">Pengendali Pemadam Kebakaran</p>
            <p className="text-xs opacity-80">Sudin Jakarta Utara Sektor Tanjung Priok</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-0 pb-20">{children}</main>

        {/* Sticky Bottom Menu */}
        <nav className="fixed bottom-0 z-50 w-full max-w-[390px] bg-white border-t flex justify-around py-2">
          <Link href="/petugas" className="flex flex-col items-center text-xs">
            <Home size={20} className={pathname === "/petugas" ? "text-red-600" : "text-gray-500"} />
            <span className={pathname === "/petugas" ? "text-red-600" : "text-gray-500"}>
              Beranda
            </span>
          </Link>
          <Link href="/petugas/penerimaan" className="flex flex-col items-center text-xs">
            <ClipboardList size={20} className={pathname === "/petugas/penerimaan" ? "text-red-600" : "text-gray-500"} />
            <span className={pathname === "/petugas/penerimaan" ? "text-red-600" : "text-gray-500"}>
              Daftar APD
            </span>
          </Link>
          <Link href="/petugas/verifikasi" className="flex flex-col items-center text-xs">
            <ClipboardList size={20} className={pathname === "/petugas/verifikasi" ? "text-red-600" : "text-gray-500"} />
            <span className={pathname === "/petugas/verifikasi" ? "text-red-600" : "text-gray-500"}>
              Verifikasi APD
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
