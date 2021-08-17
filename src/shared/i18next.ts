import i18n /* webpackChunkName: "i18next" */ from 'i18next';
import { initReactI18next } from 'react-i18next';
import firebase from 'firebase';
import { firebaseConfig } from '@firebase/firebase.config';

const resources = {
  en_US: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
    },
  },
  ka_GE: {
    translation: {
      'Welcome to React': 'ჯეკა',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ka_GE',

    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    const fire = firebase.initializeApp(firebaseConfig);
    const remoteConfig = fire.remoteConfig();
    remoteConfig.settings.minimumFetchIntervalMillis = 36000;

    firebase
      .remoteConfig()
      .fetchAndActivate()
      .then(() => {
        const lang = remoteConfig.getValue('language').asString();
        // eslint-disable-next-line no-console
        console.log('i18n lan ---------------------------- ', lang);
        if (lang) {
          const data = JSON.parse(lang);
          // eslint-disable-next-line no-console
          console.log('i18n data ---------------------------- ', data);
          i18n.addResourceBundle('en_US', 'translation', data.en_US);
          i18n.addResourceBundle('ka_GE', 'translation', data.ka_GE);
        }
      });
    console.log(i18n, 1233);
  })
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log('i18n catch ---------------------------- ', e);
  });

export default i18n;
