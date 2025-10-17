import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import { en, id } from "@/locales";

// Translation resources
const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
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
