import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Calendar,
  Download,
  Filter,
} from "lucide-react";

const ModuleSales = () => {
  const salesData = [
    {
      period: "Hari Ini",
      sales: "Rp 2.450.000",
      transactions: 45,
      growth: "+12.5%",
    },
    {
      period: "Minggu Ini",
      sales: "Rp 15.230.000",
      transactions: 287,
      growth: "+8.2%",
    },
    {
      period: "Bulan Ini",
      sales: "Rp 58.750.000",
      transactions: 1156,
      growth: "+15.3%",
    },
    {
      period: "Tahun Ini",
      sales: "Rp 425.600.000",
      transactions: 8234,
      growth: "+23.1%",
    },
  ];

  const topProducts = [
    {
      name: "Nasi Goreng Spesial",
      sales: 156,
      revenue: "Rp 2.340.000",
      growth: "+15%",
    },
    {
      name: "Ayam Bakar Madu",
      sales: 134,
      revenue: "Rp 2.010.000",
      growth: "+8%",
    },
    { name: "Soto Ayam", sales: 98, revenue: "Rp 1.470.000", growth: "+22%" },
    { name: "Gado-gado", sales: 87, revenue: "Rp 1.305.000", growth: "+5%" },
    { name: "Es Teh Manis", sales: 203, revenue: "Rp 609.000", growth: "+18%" },
  ];

  const hourlyData = [
    { hour: "08:00", sales: 120000 },
    { hour: "09:00", sales: 180000 },
    { hour: "10:00", sales: 250000 },
    { hour: "11:00", sales: 320000 },
    { hour: "12:00", sales: 450000 },
    { hour: "13:00", sales: 380000 },
    { hour: "14:00", sales: 220000 },
    { hour: "15:00", sales: 190000 },
    { hour: "16:00", sales: 280000 },
    { hour: "17:00", sales: 350000 },
    { hour: "18:00", sales: 420000 },
    { hour: "19:00", sales: 380000 },
    { hour: "20:00", sales: 290000 },
    { hour: "21:00", sales: 150000 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Statistik Penjualan
          </h1>
          <p className="text-gray-600">
            Analisis performa penjualan bisnis Anda
          </p>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Sales Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {salesData.map((data, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {data.period}
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.sales}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ShoppingCart className="h-3 w-3 mr-1" />
                {data.transactions} transaksi
              </div>
              <div className="flex items-center text-xs">
                {data.growth.startsWith("+") ? (
                  <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
                )}
                <span
                  className={
                    data.growth.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {data.growth} dari periode sebelumnya
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Trend Penjualan Harian</CardTitle>
            <CardDescription>
              Performa penjualan dalam 7 hari terakhir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p>Chart akan ditampilkan di sini</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hourly Sales */}
        <Card>
          <CardHeader>
            <CardTitle>Penjualan Per Jam</CardTitle>
            <CardDescription>
              Distribusi penjualan dalam satu hari
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {hourlyData.slice(0, 8).map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{data.hour}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(data.sales / 450000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-20 text-right">
                      Rp {data.sales.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Products */}
      <Card>
        <CardHeader>
          <CardTitle>Produk Terlaris</CardTitle>
          <CardDescription>
            Top 5 produk dengan penjualan tertinggi
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">
                      #{index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      {product.sales} terjual
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">
                    {product.revenue}
                  </p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {product.growth}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleSales;
