import React from "react";
import SidebarPetugas from "./SidebarPetugas";

type Props = {
  children: React.ReactNode;
  activeSidebar?: "laporan" | "status";
};

export default function LayoutShellPetugas({
  children,
  activeSidebar = "laporan",
}: Props) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <SidebarPetugas active={activeSidebar} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
