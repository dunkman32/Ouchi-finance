import firebaseApp from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NODE_ENV,
  authDomain: 'ouchi-finance.firebaseapp.com',
  projectId: 'ouchi-finance',
  storageBucket: 'ouchi-finance.appspot.com',
  messagingSenderId: '704737243837',
  appId: '1:704737243837:web:8a283a2820bc55f3f63dd4',
  measurementId: 'G-GYDYVRNSM5',
};

const firebase = firebaseApp.initializeApp(firebaseConfig);
const remoteConfig = firebaseApp.remoteConfig();
const storage = firebaseApp.storage();
remoteConfig.settings.minimumFetchIntervalMillis = 36000;

export { firebase, remoteConfig, storage };
