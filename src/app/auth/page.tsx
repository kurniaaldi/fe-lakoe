import ModuleLogin from "@/modules/auth/login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const Page = () => <ModuleLogin />;

export default Page;
