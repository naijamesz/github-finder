import { useEffect, useState } from 'react';
import styles from './SwitcherTheme.module.scss';

import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icon-sun.svg';

interface SwitcherThemeProps {}

export const SwitcherTheme = ({}: SwitcherThemeProps) => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.switcher}>
      <span onClick={() => setDark(!isDark)}>{themeText}</span>
      <ThemeIcon onClick={() => setDark(!isDark)} className={styles.icon} />
    </div>
  );
};
