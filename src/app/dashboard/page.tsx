import ModuleDashboard from "@/modules/dashboard/main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Page = () => <ModuleDashboard />;

export default Page;
