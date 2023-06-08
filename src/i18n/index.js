/* eslint-disable import/no-extraneous-dependencies */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from './locales/pt/pt-br.json';
import ENUS from './locales/en/en-us.json';

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
};

const language = localStorage.getItem('language') || 'pt-BR';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: language,
    fallbackLng: 'pt-BR',
    interpolation: { escapeValue: false }, // precaução contra xss
  });

export default i18n;
