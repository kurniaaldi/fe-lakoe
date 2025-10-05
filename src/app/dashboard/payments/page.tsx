import React from "react";

import { Metadata } from "next";

import ModulePayments from "@/modules/dashboard/payments";

export const metadata: Metadata = {
  title: "Pembayaran",
};

const Page = () => <ModulePayments />;

export default Page;
