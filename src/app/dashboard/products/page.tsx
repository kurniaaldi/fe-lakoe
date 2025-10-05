import React from "react";

import { Metadata } from "next";

import ModuleProducts from "@/modules/dashboard/products";

export const metadata: Metadata = {
  title: "Produk",
};

const Page = () => <ModuleProducts />;

export default Page;
