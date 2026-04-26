import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SUPPORTED_LANGUAGES = ["en", "hi", "te", "ar", "kn", "ml", "ta"];
const SUPPORTED_THEMES = ["light", "dark"];

const AppPreferencesContext = createContext(null);

function getInitialLanguage() {
  // Always start in English by default.
  return "en";
}

function getInitialTheme() {
  const storedTheme = window.localStorage.getItem("siteTheme");
  if (storedTheme && SUPPORTED_THEMES.includes(storedTheme)) {
    return storedTheme;
  }

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function AppPreferencesProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage());
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("siteLanguage", language);
  }, [language]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("siteTheme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      languageOptions: [
        { value: "en", label: "English" },
        { value: "hi", label: "Hindi" },
        { value: "te", label: "Telugu" },
        { value: "ar", label: "Arabic" },
        { value: "kn", label: "Kannada" },
        { value: "ml", label: "Malayalam" },
        { value: "ta", label: "Tamil" },
      ],
    }),
    [language, theme]
  );

  return <AppPreferencesContext.Provider value={value}>{children}</AppPreferencesContext.Provider>;
}

function useAppPreferences() {
  const contextValue = useContext(AppPreferencesContext);

  if (!contextValue) {
    throw new Error("useAppPreferences must be used inside AppPreferencesProvider");
  }

  return contextValue;
}

export { AppPreferencesProvider, useAppPreferences };
