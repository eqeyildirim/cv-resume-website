import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <div className="footer bg-gray-100 p-16 dark:bg-dark-gray"> 
      <div className="container flex flex-col items-start">
        <div className="text-left">
          <p className="text-32 sm:text-48 font-regular dark:text-custom-gray mt-8 mb-12">
            {t('footerAbout')}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-4">
          <p className="flex items-center mb-4 sm:mb-0">
            <span
              role="img"
              aria-label="right pointing finger"
              className="mr-2"
            >
              👉
            </span>
            <span className="text-red-600 dark:text-custom-purple">
              eqeyildirim@yandex.com
            </span>
          </p>
          <div className="flex space-x-6"> 
            <a
              href="#"
              className="text-black dark:text-custom-indigo-lightest font-regular text-base sm:text-lg"
            >
              Personal Blog
            </a>
            <a href="#" className="text-custom-green text-base sm:text-lg">
              GitHub
            </a>
            <a href="#" className="text-custom-blue text-base sm:text-lg">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
