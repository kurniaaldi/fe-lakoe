import ModuleReports from "@/modules/dashboard/reports";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Laporan",
};

const Page = () => <ModuleReports />;

export default Page;
