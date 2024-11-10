import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Profile() {
  const { t } = useLanguage();

  return (
    <section className="container p-4">
      <hr className="border-t border-custom-purple mt-4" />

      <h2 className="text-6xl font-semibold dark:text-custom-gray mb-8 mt-8">
        {t('profile')}
      </h2>

      <div className="flex flex-col sm:flex-row justify-between border-gray-300 pb-4 mb-4 gap-4 sm:gap-8">
        <div className="flex flex-col w-full sm:w-1/2 pr-4">
          <h3 className="text-4xl font-regular text-indigo-700 dark:text-custom-indigo-light mb-4">
            {t('profile')}
          </h3>
          <div className="flex mb-2 dark:text-white">
            <strong className="w-1/2">{t('birthDate')}</strong>
            <span className="ml-4 w-1/2">{t('birthDateValue')}</span>
          </div>
          <div className="flex mb-2 dark:text-white">
            <strong className="w-1/2">{t('residence')}</strong>
            <span className="ml-4 w-1/2">{t('residenceValue')}</span>
          </div>
          <div className="flex mb-2 dark:text-white">
            <strong className="w-1/2">{t('education')}</strong>
            <span className="ml-4 w-1/2">
              {t('educationValue')
                .split('\n')
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </span>
          </div>
          <div className="flex mb-2 dark:text-white">
            <strong className="w-1/2">{t('role')}</strong>
            <span className="ml-4 w-1/2">{t('roleValue')}</span>
          </div>
        </div>

        <div className="flex flex-col w-full sm:w-1/2 pl-0 sm:p-0">
          <h3 className="text-4xl font-regular text-indigo-700 dark:text-custom-indigo-light mb-4">
            {t('aboutMe')}
          </h3>
          <p className="text-gray-400 dark:text-white">{t('aboutMeValue')}</p>
        </div>
      </div>
    </section>
  );
}
