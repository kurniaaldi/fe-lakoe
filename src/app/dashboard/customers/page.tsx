import React from "react";

import { Metadata } from "next";

import ModuleCustomers from "@/modules/dashboard/customers";

export const metadata: Metadata = {
  title: "Pelanggan",
};

const Page = () => <ModuleCustomers />;

export default Page;
