"use client";

import { useEffect, useState } from "react";

export type Language = "en" | "si";

const STORAGE_KEY = "sahana-language";
const LANGUAGE_CHANGE_EVENT = "sahana-language-change";

function isValidLanguage(value: string | null): value is Language {
  return value === "en" || value === "si";
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    if (isValidLanguage(savedLanguage)) {
      setLanguageState(savedLanguage);
    }

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>;

      if (isValidLanguage(customEvent.detail)) {
        setLanguageState(customEvent.detail);
      }
    };

    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);

    return () => {
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
    };
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    localStorage.setItem(STORAGE_KEY, nextLanguage);

    window.dispatchEvent(
      new CustomEvent(LANGUAGE_CHANGE_EVENT, {
        detail: nextLanguage,
      })
    );
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "si" : "en");
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
  };
}