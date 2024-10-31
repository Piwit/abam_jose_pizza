import * as React from "react";
import { I18nextProvider } from "react-i18next";
import { initReactI18N } from "../i18n/i18n";
import i18n from "i18next";

export const RootWrapper = ({ children }, initialStore) => {
  initReactI18N();
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
