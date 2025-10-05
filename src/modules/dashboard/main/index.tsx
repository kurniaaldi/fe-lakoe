import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react";

const ModuleDashboard = () => {
  const stats = [
    {
      title: "Total Penjualan",
      value: "Rp 12.450.000",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Total Transaksi",
      value: "1,234",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: "Pelanggan Aktif",
      value: "456",
      change: "+15.3%",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Pertumbuhan",
      value: "23.1%",
      change: "+5.7%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Selamat datang di Lakoe Backoffice</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} dari bulan lalu
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Grafik Penjualan</CardTitle>
            <CardDescription>
              Performa penjualan 7 hari terakhir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500">
              Chart akan ditampilkan di sini
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Produk Terlaris</CardTitle>
            <CardDescription>
              Top 5 produk dengan penjualan tertinggi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Nasi Goreng Spesial",
                  sales: 156,
                  revenue: "Rp 2.340.000",
                },
                {
                  name: "Ayam Bakar Madu",
                  sales: 134,
                  revenue: "Rp 2.010.000",
                },
                { name: "Soto Ayam", sales: 98, revenue: "Rp 1.470.000" },
                { name: "Gado-gado", sales: 87, revenue: "Rp 1.305.000" },
                { name: "Es Teh Manis", sales: 203, revenue: "Rp 609.000" },
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      {product.sales} terjual
                    </p>
                  </div>
                  <p className="font-semibold text-green-600">
                    {product.revenue}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModuleDashboard;
