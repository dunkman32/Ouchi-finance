import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();
  return <h1>{t('hello')}</h1>;
}

export default MainPage;
