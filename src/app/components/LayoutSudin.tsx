"use client";

import React from "react";
import SidebarSudin from "./SidebarSudin";

type Props = {
  children: React.ReactNode;
};

export default function LayoutSudin({ children }: Props) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SidebarSudin />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
