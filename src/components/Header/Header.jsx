import styles from "./Header.module.css";
import logo from "/images/logo.svg";
import headerButtonLight from "/images/icon-moon.svg";
import headerButtonDark from "/images/icon-sun.svg";

import { useTheme } from "../../context/useTheme";

export function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : ""}`}>
      <img src={logo} alt="extensions" />
      <button
        onClick={toggleTheme}
        className={`${styles.headerButton} ${isDarkMode ? styles.dark : ""}`}
      >
        {isDarkMode ? (
          <img src={headerButtonDark} alt="lightmode switcher" />
        ) : (
          <img src={headerButtonLight} alt="darkmode switcher" />
        )}
      </button>
    </header>
  );
}
