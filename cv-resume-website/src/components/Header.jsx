import React, { useState } from 'react';
import ProfileImage from './ProfileImage';  
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [activeButton, setActiveButton] = useState('hireme');
  const { t } = useLanguage();

  const activeButtonClasses =
    'border border-custom-blue text-indigo-700 py-2 px-4 dark:bg-custom-indigo-lightest dark:text-custom-indigo-dark rounded transition text-base md:text-lg'; 

  const inactiveButtonClasses =
    'text-gray-400 py-2 px-4 rounded hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-300 transition text-base md:text-lg'; 

  return (
    <header className="container flex justify-between items-center p-6 bg-white dark:bg-dark-purple mb-8"> 
      <ProfileImage />
      <nav className="ml-auto flex space-x-4 flex-wrap"> 
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className={activeButton === 'skills' ? activeButtonClasses : inactiveButtonClasses}
          onClick={() => setActiveButton('skills')}
        >
          {t('skills')}
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className={activeButton === 'projects' ? activeButtonClasses : inactiveButtonClasses}
          onClick={() => setActiveButton('projects')}
        >
          {t('projects')}
        </Link>
        <Link
          to="/hireme"
          href="mailto:eqeyildirim@yandex.com"
          className={`${activeButton === 'hireme' ? activeButtonClasses : inactiveButtonClasses} dark:bg-custom-indigo-lightest dark:hover:bg-gray-600 dark:hover:text-black dark:hover:border-custom-indigo-lightest`}
          onClick={() => setActiveButton('hireme')}
        >
          {t('hireme')}
        </Link>
      </nav>
    </header>
  );
}
