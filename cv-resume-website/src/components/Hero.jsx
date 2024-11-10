import React, { useState } from 'react';
import MyImage from '../assets/profile-pic.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLanguage } from '../context/LanguageContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const [clickedButton, setClickedButton] = useState('hire');
  const { t } = useLanguage();
  const handleButtonClick = (button) => {
    setClickedButton(button);

    if (button === 'hire') {
      toast.success(t('toastMail'));
    } else if (button === 'github') {
      toast.success(t('toastGithub'));
    } else if (button === 'linkedin') {
      toast.success(t('toastLinkedin'));
    }
  };

  return (
    <section className="container flex flex-col sm:flex-row items-center justify-between p-8 text-white mt-12 overflow-x-hidden">
      <div className="flex flex-col items-center sm:items-start sm:text-left w-full sm:w-auto">
        <div className="flex self-start items-center mb-2 mt-12 justify-start">
          <div className="border-t-2 border-custom-indigo-dark dark:border-custom-indigo-light w-32"></div>
          <h1 className="mx-4 text-lg sm:text-xl md:text-2xl font-regular text-custom-indigo-dark dark:text-custom-indigo-light">
            Ege Yıldırım
          </h1>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-800 dark:text-custom-gray mt-8 mb-12">
          {t('entry')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl mr-4 text-gray-400 dark:text-white mb-8">
          {t('heroAbout')}
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-12 w-full sm:w-auto">
          <a
            href="mailto:eqeyildirim@yandex.com"
            onClick={() => handleButtonClick('hire')}
            className={`flex items-center justify-center border border-custom-blue dark:border-custom-indigo-lightest dark:hover:bg-gray-600 py-2 px-4 rounded transition ${
              clickedButton === 'hire'
                ? 'bg-custom-blue text-white dark:bg-custom-indigo-lightest dark:text-black'
                : 'text-indigo-700 dark:text-custom-indigo-lightest dark:bg-custom-light-gray'
            }`}
          >
            {t('hireme')}
          </a>
          <a
            href="https://github.com/eqeyildirim"
            target="_blank"
            onClick={() => handleButtonClick('github')}
            className={`flex items-center justify-center border border-custom-blue dark:border-custom-indigo-lightest dark:hover:bg-gray-600 py-2 px-4 rounded transition ${
              clickedButton === 'github'
                ? 'bg-custom-blue text-white dark:bg-custom-indigo-lightest dark:text-black'
                : 'text-indigo-700 hover:bg-custom-blue hover:text-white dark:text-custom-indigo-lightest dark:bg-custom-light-gray'
            }`}
          >
            <GitHubIcon
              className={`mr-2 ${
                clickedButton === 'github'
                  ? 'text-white dark:text-black'
                  : 'text-custom-blue dark:text-custom-purple'
              }`}
            />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ege-yıldırım"
            target="_blank"
            onClick={() => handleButtonClick('linkedin')}
            className={`flex items-center justify-center border border-custom-blue dark:border-custom-indigo-lightest dark:hover:bg-gray-600 py-2 px-4 rounded transition ${
              clickedButton === 'linkedin'
                ? 'bg-custom-blue text-white dark:bg-custom-indigo-lightest dark:text-black'
                : 'text-indigo-700 hover:bg-custom-blue hover:text-white dark:text-custom-indigo-lightest dark:bg-custom-light-gray'
            }`}
          >
            <LinkedInIcon
              className={`mr-2 ${
                clickedButton === 'linkedin'
                  ? 'text-white dark:text-black'
                  : 'text-custom-blue dark:text-custom-purple'
              }`}
            />
            LinkedIn
          </a>
        </div>
      </div>
      <img
        src={MyImage}
        alt="profile-photo"
        className="rounded-lg shadow-4xl w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 sm:mb-0 ml-auto"
      />
      <ToastContainer autoClose={3000} />
    </section>
  );
};

export default Hero;
