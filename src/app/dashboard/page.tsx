import React from "react";

import { Metadata } from "next";

import ModuleDashboard from "@/modules/dashboard/main";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Page = () => <ModuleDashboard />;

export default Page;
