import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Download,
  Eye,
  MoreHorizontal,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

const ModuleTransactions = () => {
  const transactions = [
    {
      id: "TXN-001",
      customer: "Budi Santoso",
      items: 3,
      total: 125000,
      status: "completed",
      payment: "QRIS",
      time: "14:30",
      date: "2024-01-15",
    },
    {
      id: "TXN-002",
      customer: "Siti Rahayu",
      items: 2,
      total: 85000,
      status: "pending",
      payment: "Cash",
      time: "14:25",
      date: "2024-01-15",
    },
    {
      id: "TXN-003",
      customer: "Ahmad Wijaya",
      items: 1,
      total: 45000,
      status: "completed",
      payment: "Transfer",
      time: "14:20",
      date: "2024-01-15",
    },
    {
      id: "TXN-004",
      customer: "Maria Sari",
      items: 4,
      total: 180000,
      status: "cancelled",
      payment: "QRIS",
      time: "14:15",
      date: "2024-01-15",
    },
    {
      id: "TXN-005",
      customer: "John Doe",
      items: 2,
      total: 95000,
      status: "completed",
      payment: "Cash",
      time: "14:10",
      date: "2024-01-15",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Selesai
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Dibatalkan
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transaksi</h1>
          <p className="text-gray-600">Kelola dan pantau semua transaksi</p>
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

      {/* Search and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Cari berdasarkan ID transaksi, nama pelanggan, atau total..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">Rp 1.245.000</p>
              <p className="text-sm text-gray-500">Total Hari Ini</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Transaksi</CardTitle>
          <CardDescription>
            Semua transaksi yang terjadi hari ini
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">
                      #{transaction.id.split("-")[1]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{transaction.customer}</p>
                    <p className="text-sm text-gray-500">
                      {transaction.items} item • {transaction.payment}
                    </p>
                    <p className="text-xs text-gray-400">
                      {transaction.date} {transaction.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold">
                      Rp {transaction.total.toLocaleString()}
                    </p>
                    {getStatusBadge(transaction.status)}
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-500">
              Menampilkan 1-5 dari 1,234 transaksi
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

export default ModuleTransactions;
