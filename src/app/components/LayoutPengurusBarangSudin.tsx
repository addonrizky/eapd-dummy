'use client';

import React from 'react';
import SidebarPengurusBarangSudin from './SidebarPengurusBarangSudin';

type Props = {
  children: React.ReactNode;
};

export default function LayoutPengurusBarangSudin({ children }: Props) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SidebarPengurusBarangSudin />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
