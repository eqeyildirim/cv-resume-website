import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import en_data from '../locales/en.json';
import tr_data from '../locales/tr.json';

export default function Skills() {
  const { t, language } = useLanguage();
  const [skills, setSkills] = useState(language === 'en' ? en_data.skillsData : tr_data.skillsData);

  useEffect(() => {
    setSkills(language === 'en' ? en_data.skillsData : tr_data.skillsData);
  }, [language]);

  return (
    <section id="skills" className="container p-8">
      <h2 className="text-6xl font-semibold dark:text-custom-gray mb-8 mt-12">
        {t('skills')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="text-4xl text-indigo-700 dark:text-custom-indigo-light font-regular mb-8">
              {skill.name}
            </h3>
            <p className="text-gray-400 dark:text-white">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
