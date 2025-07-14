"use client";

import React from "react";
import SidebarBidSarOps from "./SidebarBidSarOps";

type Props = {
  children: React.ReactNode;
};

export default function LayoutBidSarOps({ children }: Props) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SidebarBidSarOps />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
