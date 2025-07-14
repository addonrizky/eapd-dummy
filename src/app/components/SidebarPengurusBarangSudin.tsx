"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SidebarPengurusBarangSudin({
  user = {
    nama: "Leo Leandro",
    jabatan: "Pengurus Barang Sudin",
    nrk: "1972054329970310442",
  },
}: {
  user?: { nama: string; jabatan: string; nrk: string }
}) {
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href)

  return (
    <aside className="w-64 h-screen bg-white border-r shadow-md flex flex-col justify-between">
      <div>
        {/* Header Aplikasi */}
        <div className="p-4 text-lg font-bold border-b">Pengurus Barang Sudin</div>

        {/* Info User */}
        <div className="p-4 border-b text-sm text-gray-700 space-y-1">
          <div className="font-semibold">{user.nama}</div>
          <div>{user.jabatan}</div>
          <div className="text-xs text-gray-500">{user.nrk}</div>
        </div>

        {/* Menu Navigasi */}
        <nav className="flex flex-col text-sm p-2 gap-1">
          <Link
            href="/pengurusbarangsudin"
            className={`px-3 py-2 rounded hover:bg-gray-200 ${
              isActive("/pengurusbarangsudin") &&
              !pathname.includes("/bast") &&
              !pathname.includes("/distribusi") &&
              !pathname.includes("/monitoring") &&
              !pathname.includes("/arsip")
                ? "bg-blue-100 text-blue-700 font-medium"
                : ""
            }`}
          >
            📦 Ringkasan Barang
          </Link>
          <Link
            href="/pengurusbarangsudin/bast"
            className={`px-3 py-2 rounded hover:bg-gray-200 ${
              isActive("/pengurusbarangsudin/bast")
                ? "bg-blue-100 text-blue-700 font-medium"
                : ""
            }`}
          >
            📋 BAST Masuk
          </Link>
          <Link
            href="/pengurusbarangsudin/distribusi"
            className={`px-3 py-2 rounded hover:bg-gray-200 ${
              isActive("/pengurusbarangsudin/distribusi")
                ? "bg-blue-100 text-blue-700 font-medium"
                : ""
            }`}
          >
            📤 Distribusi Barang
          </Link>
          <Link
            href="/pengurusbarangsudin/arsipriwayat"
            className={`px-3 py-2 rounded hover:bg-gray-200 ${
              isActive("/pengurusbarangsudin/arsipriwayat")
                ? "bg-blue-100 text-blue-700 font-medium"
                : ""
            }`}
          >
            📁 Arsip & Riwayat
          </Link>
        </nav>
      </div>

      {/* Footer */}
      <div className="text-xs text-center text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Dinas Gulkarmat
      </div>
    </aside>
  )
}
