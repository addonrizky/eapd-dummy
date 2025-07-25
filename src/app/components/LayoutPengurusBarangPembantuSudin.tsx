'use client';

import React from 'react';
import SidebarPengurusBarangPembantuSudin from './SidebarPengurusBarangPembantuSudin';

type Props = {
  children: React.ReactNode;
};

export default function LayoutPengurusBarangPembantuSudin({ children }: Props) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SidebarPengurusBarangPembantuSudin />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
