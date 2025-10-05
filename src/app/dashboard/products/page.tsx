import ModuleProducts from "@/modules/dashboard/products";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Produk",
};

const Page = () => <ModuleProducts />;

export default Page;
