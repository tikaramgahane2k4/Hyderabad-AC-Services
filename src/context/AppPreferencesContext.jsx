import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SUPPORTED_LANGUAGES = ["en", "hi", "te"];
const SUPPORTED_THEMES = ["light", "dark"];

const AppPreferencesContext = createContext(null);

function getInitialLanguage() {
  return "hi";
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
  const [language, setLanguage] = useState("hi");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setLanguage(getInitialLanguage());
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    window.localStorage.setItem("siteLanguage", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem("siteTheme", theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      languageOptions: [
        { value: "en", label: "अंग्रेज़ी" },
        { value: "hi", label: "हिंदी" },
        { value: "te", label: "तेलुगु" },
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
