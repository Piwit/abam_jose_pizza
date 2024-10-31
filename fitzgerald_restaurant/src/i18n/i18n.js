import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "../data/locales.json";

export const initReactI18N = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: "fr", // must be a general settings
      fallbackLng: "fr",

      interpolation: {
        escapeValue: false, // not needed for react!!
      },
    });
};
