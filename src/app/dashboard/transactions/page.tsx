import React from "react";

import { Metadata } from "next";

import ModuleTransactions from "@/modules/dashboard/transactions";

export const metadata: Metadata = {
  title: "Transaksi",
};

const Page = () => <ModuleTransactions />;

export default Page;
