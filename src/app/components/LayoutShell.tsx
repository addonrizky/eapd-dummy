import React from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
  activeSidebar?: "upload" | "distribusi";
};

export default function LayoutShell({ children, activeSidebar = "upload" }: Props) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar active={activeSidebar} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
