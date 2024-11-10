import React from 'react';

const Avatar = () => {
  return (
    <div
      className={` 
        w-9 h-9 sm:w-14 sm:h-14 md:w-18 md:h-18
        rounded-full
        flex items-center justify-center 
        text-sm sm:text-xl font-semibold 
        bg-custom-indigo-lightest dark:bg-custom-indigo-dark
        transition-colors duration-300
        overflow-hidden
      `}
    >
      <span className="transform rotate-15 scale-110 translate-x-[-2px] translate-y-[-3px] inline-block font-extrabold text-red-500">
        E
      </span>
      <span className="transform rotate-15 scale-110 translate-x-[2px] translate-y-[3px] inline-block font-extrabold text-yellow-500">
        Y
      </span>
    </div>
  );
};

export default Avatar;
