import {
  Search,
  Filter,
  Download,
  Eye,
  CreditCard,
  Smartphone,
  Banknote,
  QrCode,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ModulePayments = () => {
  const payments = [
    {
      id: "PAY-001",
      transactionId: "TXN-001",
      amount: 125000,
      method: "QRIS",
      status: "completed",
      time: "14:30",
      date: "2024-01-15",
      customer: "Budi Santoso",
    },
    {
      id: "PAY-002",
      transactionId: "TXN-002",
      amount: 85000,
      method: "Cash",
      status: "completed",
      time: "14:25",
      date: "2024-01-15",
      customer: "Siti Rahayu",
    },
    {
      id: "PAY-003",
      transactionId: "TXN-003",
      amount: 45000,
      method: "Transfer",
      status: "pending",
      time: "14:20",
      date: "2024-01-15",
      customer: "Ahmad Wijaya",
    },
    {
      id: "PAY-004",
      transactionId: "TXN-004",
      amount: 180000,
      method: "QRIS",
      status: "failed",
      time: "14:15",
      date: "2024-01-15",
      customer: "Maria Sari",
    },
    {
      id: "PAY-005",
      transactionId: "TXN-005",
      amount: 95000,
      method: "Cash",
      status: "completed",
      time: "14:10",
      date: "2024-01-15",
      customer: "John Doe",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Berhasil
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      case "failed":
        return (
          <Badge className="bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Gagal
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case "QRIS":
        return <QrCode className="w-4 h-4 text-blue-600" />;
      case "Cash":
        return <Banknote className="w-4 h-4 text-green-600" />;
      case "Transfer":
        return <CreditCard className="w-4 h-4 text-purple-600" />;
      default:
        return <Smartphone className="w-4 h-4 text-gray-600" />;
    }
  };

  const paymentStats = [
    {
      title: "Total Pembayaran Hari Ini",
      value: "Rp 1.245.000",
      change: "+12.5%",
      icon: CreditCard,
      color: "text-green-600",
    },
    {
      title: "Transaksi Berhasil",
      value: "42",
      change: "+8.2%",
      icon: CheckCircle,
      color: "text-blue-600",
    },
    {
      title: "Transaksi Pending",
      value: "3",
      change: "-2.1%",
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "Transaksi Gagal",
      value: "1",
      change: "-5.3%",
      icon: XCircle,
      color: "text-red-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pembayaran</h1>
          <p className="text-gray-600">Kelola dan pantau semua pembayaran</p>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.color}`}>
                {stat.change} dari kemarin
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Cari berdasarkan ID pembayaran, transaksi, atau nama pelanggan..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Pembayaran</CardTitle>
          <CardDescription>
            Semua pembayaran yang terjadi hari ini
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {getMethodIcon(payment.method)}
                  </div>
                  <div>
                    <p className="font-medium">{payment.customer}</p>
                    <p className="text-sm text-gray-500">ID: {payment.id}</p>
                    <p className="text-xs text-gray-400">
                      {payment.date} {payment.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Metode</p>
                    <p className="font-medium">{payment.method}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">Jumlah</p>
                    <p className="font-semibold">
                      Rp {payment.amount.toLocaleString()}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">Status</p>
                    {getStatusBadge(payment.status)}
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-500">
              Menampilkan 1-5 dari 1,234 pembayaran
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Sebelumnya
              </Button>
              <Button variant="outline" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Selanjutnya
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModulePayments;
