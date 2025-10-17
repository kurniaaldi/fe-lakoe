"use client";

import { useState } from "react";

import { ArrowLeft, Shield, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

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

const ModuleLogin = () => {
  const { t } = useTranslation("auth");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi kirim OTP
    setTimeout(() => {
      setStep("otp");
      setIsLoading(false);
    }, 1000);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi verifikasi OTP
    setTimeout(() => {
      // Redirect ke dashboard
      window.location.href = "/dashboard";
    }, 1000);
  };

  const handleBackToPhone = () => {
    setStep("phone");
    setOtp("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Lakoe Backoffice</CardTitle>
          <CardDescription>
            {step === "phone" ? t("enterPhoneNumber") : t("enterOTPCode")}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {step === "phone" ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">{t("phoneNumber")}</Label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading || !phoneNumber}
              >
                {isLoading ? t("sendingOTP") : t("sendOTP")}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">{t("otpCode")}</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder={t("enterOTPPlaceholder")}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  required
                />
                <p className="text-sm text-gray-500">
                  {t("otpSentTo")} {phoneNumber}
                </p>
              </div>

              <div className="space-y-2">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || otp.length !== 6}
                >
                  {isLoading ? t("verifying") : t("verifyOTP")}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleBackToPhone}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("backToPhone")}
                </Button>
              </div>
            </form>
          )}

          <Separator className="my-6" />

          <div className="text-center text-sm text-gray-500">
            <p>{t("noAccountMessage")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleLogin;
