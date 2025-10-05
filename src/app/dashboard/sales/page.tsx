import ModuleSales from "@/modules/dashboard/sales";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Statistik Penjualan",
};

const Page = () => <ModuleSales />;

export default Page;
