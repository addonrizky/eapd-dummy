"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SidebarBidSarOps({
  user = {
    nama: "Muslim Suseno, S.Sos, M.Si",
    jabatan: "Kabid Sarana Operasi",
    nip: "197205071997031005",
  },
}: {
  user?: { nama: string; jabatan: string; nip: string };
}) {
  const pathname = usePathname();
  const [openDistribusi, setOpenDistribusi] = useState(false);
  const [openLapor, setOpenLapor] = useState(false);
  const [openBarang, setOpenBarang] = useState(false);

  useEffect(() => {
    if (
      pathname.includes("/barang") ||
      pathname.includes("/jenis") ||
      pathname.includes("/apdperjabatan")
    ) {
      setOpenBarang(true);
    }
    if (pathname.includes("/distribusi")) {
      setOpenDistribusi(true);
    }
    if (pathname.includes("/lapor") || pathname.includes("/rekapitulasi")) {
      setOpenLapor(true);
    }
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href);

  return (
    <aside className="w-64 h-screen bg-white border-r shadow-md flex flex-col justify-between">
      <div>
        {/* Header Aplikasi */}
        <div className="p-4 text-lg font-bold border-b">e-APD Damkar</div>

        {/* Info User */}
        <div className="p-4 border-b text-sm text-gray-700 space-y-1">
          <div className="font-semibold">{user.nama}</div>
          <div>{user.jabatan}</div>
          <div className="text-xs text-gray-500">{user.nip}</div>
        </div>

        {/* Menu Navigasi */}
        <nav className="flex flex-col text-sm p-2 gap-1">
          {/* Menu Dashboard */}
          <Link
            href="/bidsarops"
            className={`px-3 py-2 rounded hover:bg-gray-200 ${
              pathname === "/bidsarops"
                ? "bg-blue-100 text-blue-700 font-medium"
                : ""
            }`}
          >
            🏠 Dashboard
          </Link>

          {/* Menu Parent: Pengaturan Barang */}
          <div>
            <button
              onClick={() => setOpenBarang(!openBarang)}
              className={`w-full text-left px-3 py-2 rounded hover:bg-gray-200 ${
                isActive("/bidsarops/jenis") ||
                isActive("/bidsarops/barang") ||
                isActive("/bidsarops/apdperjabatan")
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : ""
              }`}
            >
              ⚙️ Pengaturan Barang
            </button>
            {openBarang && (
              <div className="ml-4 flex flex-col gap-1 mt-1">
                <Link
                  href="/bidsarops/jenis"
                  className={`px-3 py-2 rounded hover:bg-gray-200 ${
                    isActive("/bidsarops/jenis")
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : ""
                  }`}
                >
                  📋 Jenis APD
                </Link>
                <Link
                  href="/bidsarops/barang"
                  className={`px-3 py-2 rounded hover:bg-gray-200 ${
                    isActive("/bidsarops/barang")
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : ""
                  }`}
                >
                  🧰 Barang / Merk APD
                </Link>
                <Link
                  href="/bidsarops/apdperjabatan"
                  className={`px-3 py-2 rounded hover:bg-gray-200 ${
                    isActive("/bidsarops/apdperjabatan")
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : ""
                  }`}
                >
                  👷‍♂️ APD per Jabatan
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/bidsarops/monitoringdistribusi"
            className={`px-3 py-2 rounded hover:bg-gray-200 ${
              isActive("/bidsarops/monitoringdistribusi")
                ? "bg-blue-100 text-blue-700 font-medium"
                : ""
            }`}
          >
            📈 Monitoring Distribusi
          </Link>

          {/* Menu Parent: Lapor APD */}
          <div>
            <button
              onClick={() => setOpenLapor(!openLapor)}
              className={`w-full text-left px-3 py-2 rounded hover:bg-gray-200 ${
                isActive("/bidsarops/lapor") ||
                isActive("/bidsarops/rekapitulasi")
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : ""
              }`}
            >
              📝 Monitoring Lapor APD
            </button>
            {openLapor && (
              <div className="ml-4 flex flex-col gap-1 mt-1">
                <Link
                  href="/bidsarops/lapor"
                  className={`px-3 py-2 rounded hover:bg-gray-200 ${
                    isActive("/bidsarops/lapor")
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : ""
                  }`}
                >
                  📊 Progress Lapor APD
                </Link>
                <Link
                  href="/bidsarops/rekapitulasi"
                  className={`px-3 py-2 rounded hover:bg-gray-200 ${
                    isActive("/bidsarops/rekapitulasi")
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : ""
                  }`}
                >
                  📑 Rekapitulasi
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Footer */}
      <div className="text-xs text-center text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Dinas Gulkarmat
      </div>
    </aside>
  );
}
