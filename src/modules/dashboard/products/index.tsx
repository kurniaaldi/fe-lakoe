"use client";

import {
  AlertCircle,
  Edit,
  Eye,
  Package,
  Plus,
  Search,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ModuleProducts = () => {
  const { t } = useTranslation("products");

  const products = [
    {
      id: 1,
      name: "Nasi Goreng Spesial",
      category: "Makanan Utama",
      price: 15000,
      stock: 25,
      status: "available",
      sales: 156,
      revenue: "Rp 2.340.000",
    },
    {
      id: 2,
      name: "Ayam Bakar Madu",
      category: "Makanan Utama",
      price: 15000,
      stock: 8,
      status: "low_stock",
      sales: 134,
      revenue: "Rp 2.010.000",
    },
    {
      id: 3,
      name: "Soto Ayam",
      category: "Makanan Utama",
      price: 12000,
      stock: 0,
      status: "out_of_stock",
      sales: 98,
      revenue: "Rp 1.470.000",
    },
    {
      id: 4,
      name: "Gado-gado",
      category: "Makanan Utama",
      price: 15000,
      stock: 15,
      status: "available",
      sales: 87,
      revenue: "Rp 1.305.000",
    },
    {
      id: 5,
      name: "Es Teh Manis",
      category: "Minuman",
      price: 3000,
      stock: 50,
      status: "available",
      sales: 203,
      revenue: "Rp 609.000",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return (
          <Badge className="bg-green-100 text-green-800">
            {t("products.inStock")}
          </Badge>
        );
      case "low_stock":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            {t("products.lowStock")}
          </Badge>
        );
      case "out_of_stock":
        return (
          <Badge className="bg-red-100 text-red-800">
            {t("products.outOfStock")}
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
          <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
          <p className="text-gray-600">{t("productList")}</p>
        </div>

        <Button>
          <Plus className="w-4 h-4 mr-2" />
          {t("addProduct")}
        </Button>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder={t("searchProducts")}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">25</p>
                <p className="text-sm text-gray-500">{t("totalProducts")}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">3</p>
                <p className="text-sm text-gray-500">{t("lowStock")}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </div>
                {getStatusBadge(product.status)}
              </div>
              <CardDescription>{product.category}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{t("price")}</span>
                <span className="font-semibold">
                  Rp {product.price.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{t("stock")}</span>
                <div className="flex items-center space-x-2">
                  {product.stock === 0 && (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={`font-semibold ${
                      product.stock === 0
                        ? "text-red-600"
                        : product.stock < 10
                          ? "text-yellow-600"
                          : "text-green-600"
                    }`}
                  >
                    {product.stock} pcs
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{t("sales")}</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-sm font-medium text-green-600">
                    {product.sales}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{t("revenue")}</span>
                  <span className="font-semibold text-green-600">
                    {product.revenue}
                  </span>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  {t("common.view")}
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  {t("common.edit")}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {t("common.table.show")} 1-5 {t("common.table.to")} 25 {t("products")}
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" disabled>
            {t("common.previous")}
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
            {t("common.next")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModuleProducts;
