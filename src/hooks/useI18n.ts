import { useCallback } from "react";

import { useTranslation } from "react-i18next";

import { LanguageType } from "@/interface/GlobalInterface";

export const useI18n = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(
    (language: LanguageType) => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

  const getCurrentLanguage = useCallback((): LanguageType => {
    return i18n.language as LanguageType;
  }, [i18n]);

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    currentLanguage: i18n.language as LanguageType,
  };
};
