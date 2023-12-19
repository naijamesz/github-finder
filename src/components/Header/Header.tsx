import { SwitcherTheme } from '../SwitcherTheme';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <div className={styles.header}>
    <div className={styles.logo}>Devfinder</div>
    <SwitcherTheme />
  </div>
);
