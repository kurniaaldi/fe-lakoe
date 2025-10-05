import ModuleCustomers from "@/modules/dashboard/customers";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pelanggan",
};

const Page = () => <ModuleCustomers />;

export default Page;
