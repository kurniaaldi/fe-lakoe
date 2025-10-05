import React from "react";

import { Metadata } from "next";

import ModuleSales from "@/modules/dashboard/sales";

export const metadata: Metadata = {
  title: "Statistik Penjualan",
};

const Page = () => <ModuleSales />;

export default Page;
