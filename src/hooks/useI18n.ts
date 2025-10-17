import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { LanguageType } from "@/interface/GlobalInterface";
import {
  EnglishAuth,
  EnglishCommon,
  EnglishCustomers,
  EnglishDashboard,
  EnglishPayments,
  EnglishProducts,
  EnglishReports,
  EnglishSales,
  EnglishSettings,
  EnglishTransactions,
} from "@/locales/en";
import {
  BahasaAuth,
  BahasaCommon,
  BahasaCustomers,
  BahasaDashboard,
  BahasaPayments,
  BahasaProducts,
  BahasaReports,
  BahasaSales,
  BahasaSettings,
  BahasaTransactions,
} from "@/locales/id";

export const useI18n = () => {
  const lng: LanguageType = "en";

  const changeLanguage = async (to: LanguageType) => {
    if (i18n.isInitialized) {
      await i18n.changeLanguage(to);
    }
  };

  const englishResources = {
    common: EnglishCommon,
    dashboard: EnglishDashboard,
    customers: EnglishCustomers,
    products: EnglishProducts,
    sales: EnglishSales,
    payments: EnglishPayments,
    transactions: EnglishTransactions,
    reports: EnglishReports,
    settings: EnglishSettings,
    auth: EnglishAuth,
  };

  const bahasaResources = {
    common: BahasaCommon,
    dashboard: BahasaDashboard,
    customers: BahasaCustomers,
    products: BahasaProducts,
    sales: BahasaSales,
    payments: BahasaPayments,
    transactions: BahasaTransactions,
    reports: BahasaReports,
    settings: BahasaSettings,
    auth: BahasaAuth,
  };

  const resources = {
    en: englishResources,
    id: bahasaResources,
  };

  const config = {
    resources,
    lng,
    fallbackLng: "en",
    ns: [
      "common",
      "dashboard",
      "customers",
      "products",
      "sales",
      "payments",
      "transactions",
      "reports",
      "settings",
      "auth",
    ],
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    react: {
      useSuspense: false, // Disable suspense to avoid server-side issues
    },
  };

  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init(config);
  }

  return {
    i18n,
    t: i18n.t.bind(i18n),
    changeLanguage,
  };
};

export { i18n };
