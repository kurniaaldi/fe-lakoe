import ModulePayments from "@/modules/dashboard/payments";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pembayaran",
};

const Page = () => <ModulePayments />;

export default Page;
