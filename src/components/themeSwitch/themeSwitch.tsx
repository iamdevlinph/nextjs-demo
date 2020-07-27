import clsx from 'clsx';
import React from 'react';
import Switch from 'react-switch';
import useDarkMode from 'use-dark-mode';

const MODE_TRANSITION_CLASS_NAME = 'dark-mode-transition';
const MODE_TRANSITION_DURATION = 500;

function setDarkModeTransition() {
  document.documentElement.classList.add(MODE_TRANSITION_CLASS_NAME);
  setTimeout(
    () => document.documentElement.classList.remove(MODE_TRANSITION_CLASS_NAME),
    MODE_TRANSITION_DURATION
  );
}

type ThemeSwitchProps = {
  className?: string;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const { value: hasActiveDarkMode, toggle: activateDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkModeTransition();
    activateDarkMode();
  };

  return (
    <Switch
      onChange={toggleDarkMode}
      checked={hasActiveDarkMode}
      checkedIcon={<i className="icon-moon" />}
      uncheckedIcon={<i className="icon-sun" />}
      onColor="#1a202c"
      offColor="#f7fafc"
      onHandleColor="#f7fafc"
      offHandleColor="#1a202c"
      className={clsx(
        'text-black border border-black dark:text-white dark:border-gray-500',
        className
      )}
    />
  );
};

export default ThemeSwitch;
