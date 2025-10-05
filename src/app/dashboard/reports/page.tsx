import React from "react";

import { Metadata } from "next";

import ModuleReports from "@/modules/dashboard/reports";

export const metadata: Metadata = {
  title: "Laporan",
};

const Page = () => <ModuleReports />;

export default Page;
