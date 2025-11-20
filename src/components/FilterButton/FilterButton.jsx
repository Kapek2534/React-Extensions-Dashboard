import styles from "./FilterButton.module.css";
import { useTheme } from "../../context/useTheme";

export function FilterButton({ children, onClick, active }) {
  const { isDarkMode } = useTheme();

  return (
    <button
      className={`${styles.filterBtn} ${active ? styles.active : ""} ${
        isDarkMode ? styles.dark : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
