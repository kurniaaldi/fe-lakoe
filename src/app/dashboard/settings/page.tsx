import React from "react";

import { Metadata } from "next";

import ModuleSettings from "@/modules/dashboard/settings";

export const metadata: Metadata = {
  title: "Pengaturan",
};

const Page = () => <ModuleSettings />;

export default Page;
