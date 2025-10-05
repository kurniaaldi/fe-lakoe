import ModuleTransactions from "@/modules/dashboard/transactions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Transaksi",
};

const Page = () => <ModuleTransactions />;

export default Page;
