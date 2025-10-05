import {
  Download,
  Calendar,
  Filter,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  BarChart3,
  PieChart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ModuleReports = () => {
  const reportData = [
    {
      title: "Laporan Penjualan Harian",
      description: "Ringkasan penjualan dan transaksi harian",
      date: "15 Jan 2024",
      revenue: "Rp 2.450.000",
      transactions: 45,
      growth: "+12.5%",
      icon: BarChart3,
      color: "text-blue-600",
    },
    {
      title: "Laporan Produk Terlaris",
      description: "Analisis produk dengan penjualan tertinggi",
      date: "14 Jan 2024",
      revenue: "Rp 1.890.000",
      transactions: 32,
      growth: "+8.2%",
      icon: PieChart,
      color: "text-green-600",
    },
    {
      title: "Laporan Pelanggan",
      description: "Data dan aktivitas pelanggan",
      date: "13 Jan 2024",
      revenue: "Rp 3.120.000",
      transactions: 58,
      growth: "+15.3%",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Laporan Keuangan",
      description: "Ringkasan keuangan dan profitabilitas",
      date: "12 Jan 2024",
      revenue: "Rp 2.780.000",
      transactions: 41,
      growth: "+6.7%",
      icon: DollarSign,
      color: "text-orange-600",
    },
  ];

  const quickStats = [
    {
      title: "Total Revenue",
      value: "Rp 8.240.000",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Total Transaksi",
      value: "176",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: "Pelanggan Aktif",
      value: "89",
      change: "+15.3%",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Rata-rata Transaksi",
      value: "Rp 46.818",
      change: "+5.7%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Laporan</h1>
          <p className="text-gray-600">Analisis dan laporan bisnis Anda</p>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Pilih Periode
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Semua
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.color} flex items-center`}>
                {stat.change.startsWith("+") ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {stat.change} dari periode sebelumnya
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportData.map((report, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <report.icon className={`w-5 h-5 ${report.color}`} />
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription>{report.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Tanggal</span>
                <span className="font-medium">{report.date}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Revenue</span>
                <span className="font-semibold text-green-600">
                  {report.revenue}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Transaksi</span>
                <span className="font-medium">{report.transactions}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Pertumbuhan</span>
                <span
                  className={`font-medium flex items-center ${
                    report.growth.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {report.growth.startsWith("+") ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {report.growth}
                </span>
              </div>

              <div className="pt-2 border-t">
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Laporan
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Grafik Penjualan</CardTitle>
            <CardDescription>Trend penjualan 30 hari terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p>Chart akan ditampilkan di sini</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribusi Kategori</CardTitle>
            <CardDescription>
              Penjualan berdasarkan kategori produk
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <PieChart className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p>Chart akan ditampilkan di sini</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModuleReports;
