import React from "react";

import { Metadata } from "next";

import ModuleLogin from "@/modules/auth/login";

export const metadata: Metadata = {
  title: "Login",
};

const Page = () => <ModuleLogin />;

export default Page;
