"use client";

import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageType } from "@/interface/GlobalInterface";
import { useGlobalStore } from "@/store/global";

const languages = [
  { code: "en" as LanguageType, name: "English", flag: "🇺🇸" },
  { code: "id" as LanguageType, name: "Bahasa Indonesia", flag: "🇮🇩" },
];

export function LanguageSwitcher() {
  const translation = useGlobalStore((state) => state.translation);
  const setTranslation = useGlobalStore((state) => state.setTranslation);

  const currentLanguage =
    languages.find((lang) => lang.code === translation) || languages[0];

  const handleLanguageChange = (languageCode: LanguageType) => {
    setTranslation(languageCode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="gap-2"
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
