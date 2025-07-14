// components/bast-columns.tsx
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export type BastData = {
  nomor: string
  tanggal: string
  pengirim: string
  tujuan: string
  jumlahBarang: number
  file?: string | null
}

export const columns: ColumnDef<BastData>[] = [
  {
    accessorKey: "nomor",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        No. BAST
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "tanggal",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Tanggal
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "pengirim",
    header: "Pengirim",
  },
  {
    accessorKey: "tujuan",
    header: "Tujuan",
  },
  {
    accessorKey: "jumlahBarang",
    header: "Jumlah Barang",
  },
  {
    accessorKey: "file",
    header: "File",
    cell: ({ row }) => {
      const file = row.getValue("file")
      return file ? (
        <a
          href={file}
          className="text-blue-600 underline text-sm"
          target="_blank"
        >
          Lihat File
        </a>
      ) : (
        <span className="text-sm text-gray-400">Belum diunggah</span>
      )
    },
  },
]
