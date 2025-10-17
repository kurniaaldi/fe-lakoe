import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import { en, id } from "@/locales";

// Translation resources
const resources = {
  en: {
    common: en.EnglishCommon,
    dashboard: en.EnglishDashboard,
    customers: en.EnglishCustomers,
    products: en.EnglishProducts,
    sales: en.EnglishSales,
    payments: en.EnglishPayments,
    transactions: en.EnglishTransactions,
    reports: en.EnglishReports,
    settings: en.EnglishSettings,
    auth: en.EnglishAuth,
  },
  id: {
    common: id.BahasaCommon,
    dashboard: id.BahasaDashboard,
    customers: id.BahasaCustomers,
    products: id.BahasaProducts,
    sales: id.BahasaSales,
    payments: id.BahasaPayments,
    transactions: id.BahasaTransactions,
    reports: id.BahasaReports,
    settings: id.BahasaSettings,
    auth: id.BahasaAuth,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
