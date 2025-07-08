import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { flattenMessages } from '../utils/Flatten';
import menu from './messages/menu.json';
import enMessages from './messages/en.json';
import arMessages from './messages/ar.json';

const I18N_CONFIG_KEY = 'store-lang';
const I18N_LANGUAGES = [
  {
    label: 'English',
    code: 'en',
    direction: 'ltr',
    isRTL: false,
    menu: menu.map((item) => ({ title: item.EnTitle, path: item.Path })),
    messages: flattenMessages(enMessages)
  },
  {
    label: 'العربية',
    code: 'ar',
    direction: 'rtl',
    isRTL: true,
    menu: menu.map((item) => ({ title: item.ArTitle, path: item.Path })),
    messages: flattenMessages(arMessages)
  }
];

const getInitialLanguage = () => {
  const lang = localStorage.getItem(I18N_CONFIG_KEY);
  if (lang) return I18N_LANGUAGES.find((language) => language.code === lang);
  return I18N_LANGUAGES[0];
};

const TranslationsContext = createContext(null);
const useLanguage = () => useContext(TranslationsContext);

const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage());

  const changeLanguage = useCallback((lang) => {
    localStorage.setItem(I18N_CONFIG_KEY, lang);
    const language = I18N_LANGUAGES.find((language) => language.code === lang);
    setCurrentLanguage(language);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('dir', currentLanguage.direction);
    document.documentElement.setAttribute('lang', currentLanguage.code);
  }, [currentLanguage]);

  return (
    <TranslationsContext.Provider value={{ currentLanguage, changeLanguage }}>
      <IntlProvider messages={currentLanguage.messages} locale={currentLanguage.code} defaultLocale={I18N_LANGUAGES[0].code}>
        {children}
      </IntlProvider>
    </TranslationsContext.Provider>
  );
};

export { TranslationProvider, useLanguage };
