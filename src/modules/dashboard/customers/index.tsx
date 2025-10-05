import {
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Star,
  ShoppingCart,
  Calendar,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ModuleCustomers = () => {
  const customers = [
    {
      id: 1,
      name: "Budi Santoso",
      email: "budi@email.com",
      phone: "+62 812-3456-7890",
      totalOrders: 15,
      totalSpent: 1250000,
      lastOrder: "2024-01-15",
      status: "active",
      loyaltyPoints: 250,
    },
    {
      id: 2,
      name: "Siti Rahayu",
      email: "siti@email.com",
      phone: "+62 813-4567-8901",
      totalOrders: 8,
      totalSpent: 680000,
      lastOrder: "2024-01-14",
      status: "active",
      loyaltyPoints: 120,
    },
    {
      id: 3,
      name: "Ahmad Wijaya",
      email: "ahmad@email.com",
      phone: "+62 814-5678-9012",
      totalOrders: 3,
      totalSpent: 135000,
      lastOrder: "2024-01-10",
      status: "inactive",
      loyaltyPoints: 30,
    },
    {
      id: 4,
      name: "Maria Sari",
      email: "maria@email.com",
      phone: "+62 815-6789-0123",
      totalOrders: 22,
      totalSpent: 2100000,
      lastOrder: "2024-01-15",
      status: "vip",
      loyaltyPoints: 500,
    },
    {
      id: 5,
      name: "John Doe",
      email: "john@email.com",
      phone: "+62 816-7890-1234",
      totalOrders: 1,
      totalSpent: 45000,
      lastOrder: "2024-01-12",
      status: "new",
      loyaltyPoints: 5,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "vip":
        return (
          <Badge className="bg-purple-100 text-purple-800">
            <Star className="w-3 h-3 mr-1" />
            VIP
          </Badge>
        );
      case "active":
        return <Badge className="bg-green-100 text-green-800">Aktif</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Tidak Aktif</Badge>;
      case "new":
        return <Badge className="bg-blue-100 text-blue-800">Baru</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pelanggan</h1>
          <p className="text-gray-600">Kelola data dan riwayat pelanggan</p>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Tambah Pelanggan
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
              placeholder="Cari pelanggan berdasarkan nama, email, atau nomor telepon..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">1,234</p>
              <p className="text-sm text-gray-500">Total Pelanggan</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customers List */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Pelanggan</CardTitle>
          <CardDescription>Semua pelanggan yang terdaftar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src="/placeholder-avatar.jpg"
                      alt={customer.name}
                    />
                    <AvatarFallback className="bg-blue-600 text-white">
                      {customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">{customer.name}</p>
                      {getStatusBadge(customer.status)}
                    </div>
                    <p className="text-sm text-gray-500">{customer.email}</p>
                    <p className="text-xs text-gray-400">{customer.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Total Pesanan</p>
                    <p className="font-semibold flex items-center">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      {customer.totalOrders}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">Total Belanja</p>
                    <p className="font-semibold text-green-600">
                      Rp {customer.totalSpent.toLocaleString()}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">Poin Loyalitas</p>
                    <p className="font-semibold text-yellow-600 flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {customer.loyaltyPoints}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">Pesanan Terakhir</p>
                    <p className="font-semibold text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {customer.lastOrder}
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-500">
              Menampilkan 1-5 dari 1,234 pelanggan
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

export default ModuleCustomers;
