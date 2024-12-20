import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: {
          'Test example': 'Test example',
          'Toggle': 'Toggle',
          'Language': 'English',
        },
      },
    },
  });

export default i18n;
