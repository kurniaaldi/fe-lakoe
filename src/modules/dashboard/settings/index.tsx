import {
  User,
  Bell,
  Shield,
  CreditCard,
  Smartphone,
  Save,
  Edit,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const ModuleSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Pengaturan</h1>
        <p className="text-gray-600">Kelola pengaturan akun dan aplikasi</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Menu Pengaturan</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Profil
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifikasi
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Keamanan
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pembayaran
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Integrasi
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profil Saya
              </CardTitle>
              <CardDescription>Kelola informasi profil Anda</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" defaultValue="Admin Lakoe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="admin@lakoe.id"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" defaultValue="+62 812-3456-7890" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Administrator" disabled />
              </div>

              <Button>
                <Save className="w-4 h-4 mr-2" />
                Simpan Perubahan
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Pengaturan Notifikasi
              </CardTitle>
              <CardDescription>
                Kelola preferensi notifikasi Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notifikasi Email</p>
                    <p className="text-sm text-gray-500">
                      Terima notifikasi melalui email
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Aktif
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notifikasi SMS</p>
                    <p className="text-sm text-gray-500">
                      Terima notifikasi melalui SMS
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Aktif
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notifikasi Transaksi</p>
                    <p className="text-sm text-gray-500">
                      Notifikasi untuk setiap transaksi baru
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Aktif
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notifikasi Stok Rendah</p>
                    <p className="text-sm text-gray-500">
                      Notifikasi ketika stok produk rendah
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Aktif
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Keamanan
              </CardTitle>
              <CardDescription>Kelola keamanan akun Anda</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Ubah Password</p>
                    <p className="text-sm text-gray-500">
                      Perbarui password akun Anda
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Ubah
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">
                      Tambahkan lapisan keamanan ekstra
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Aktifkan
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Sesi Aktif</p>
                    <p className="text-sm text-gray-500">
                      Kelola sesi yang sedang aktif
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Lihat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Pengaturan Pembayaran
              </CardTitle>
              <CardDescription>
                Kelola metode pembayaran yang tersedia
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">QRIS</p>
                    <p className="text-sm text-gray-500">
                      Pembayaran digital melalui QRIS
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Aktif
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Pembayaran Tunai</p>
                    <p className="text-sm text-gray-500">
                      Terima pembayaran tunai
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Aktif
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Transfer Bank</p>
                    <p className="text-sm text-gray-500">
                      Terima pembayaran via transfer
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Aktif
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModuleSettings;
