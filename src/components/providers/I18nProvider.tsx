"use client";

import { useEffect, useRef } from "react";

import { useI18n } from "@/hooks/useI18n";
import "@/lib/i18n";
import { useGlobalStore } from "@/store/global";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const { changeLanguage } = useI18n();
  const translation = useGlobalStore((state) => state.translation);
  const lastTranslation = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (translation && translation !== lastTranslation.current) {
      lastTranslation.current = translation;
      changeLanguage(translation);
    }
  }, [translation, changeLanguage]);

  return <>{children}</>;
}
