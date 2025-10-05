"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Users,
  Package,
  Settings,
  ChevronLeft,
  ChevronRight,
  Home,
  TrendingUp,
  FileText,
  CreditCard,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Statistik Penjualan",
    href: "/dashboard/sales",
    icon: BarChart3,
  },
  {
    title: "Transaksi",
    href: "/dashboard/transactions",
    icon: ShoppingCart,
  },
  {
    title: "Pelanggan",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Produk",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    title: "Laporan",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    title: "Pembayaran",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
];

const quickStats = [
  {
    title: "Penjualan Hari Ini",
    value: "Rp 2.450.000",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Transaksi Hari Ini",
    value: "45",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-40 h-full bg-white border-r border-gray-200 transition-all duration-300",
        isOpen ? "w-64" : "w-16",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {isOpen && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">Lakoe</span>
          </div>
        )}

        <Button variant="ghost" size="sm" onClick={onToggle} className="p-1">
          {isOpen ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 flex-shrink-0",
                  isActive ? "text-blue-700" : "text-gray-500",
                )}
              />
              {isOpen && <span className="font-medium">{item.title}</span>}
            </Link>
          );
        })}
      </nav>

      <Separator className="my-4" />

      {/* Quick Stats */}
      {isOpen && (
        <div className="p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Statistik Cepat
          </h3>
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-xs font-medium text-gray-600">
                  {stat.title}
                </span>
              </div>
              <p className="text-sm font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Settings */}
      <div className="absolute bottom-4 left-4 right-4">
        <Link
          href="/dashboard/settings"
          className={cn(
            "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
            pathname === "/dashboard/settings"
              ? "bg-blue-50 text-blue-700"
              : "text-gray-700 hover:bg-gray-50",
          )}
        >
          <Settings className="w-5 h-5" />
          {isOpen && <span className="font-medium">Pengaturan</span>}
        </Link>
      </div>
    </div>
  );
}
