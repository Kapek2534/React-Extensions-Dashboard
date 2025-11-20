import styles from "./Extension.module.css";
import { useTheme } from "../../context/useTheme";

export function Extension({ logo, name, description, isActive, onToggle }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${styles.card} ${isDarkMode ? styles.dark : ""}`}>
      <div className={styles.imgTxtContainer}>
        <img src={logo} alt={name} />
        <div className={styles.txtContainer}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <button className={`${styles.remove} ${isDarkMode ? styles.dark : ""}`}>
          Remove
        </button>
        <label className={styles.switch}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isActive}
            onChange={onToggle}
          />
          <div
            className={`${styles.slider} ${styles.round} ${
              isDarkMode ? styles.dark : ""
            }`}
          ></div>
        </label>
      </div>
    </div>
  );
}
