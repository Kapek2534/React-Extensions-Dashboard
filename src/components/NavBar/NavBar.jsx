import styles from "./NavBar.module.css";
import { FilterButton } from "../FilterButton/FilterButton";
import { useTheme } from "../../context/useTheme";

export function NavBar({ filter, setFilter }) {
  const { isDarkMode } = useTheme();

  return (
    <nav className={styles.nav}>
      <h1 className={isDarkMode ? styles.dark : ""}>Extensions List</h1>
      <div className={styles.filters}>
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === "active"}
          onClick={() => setFilter("active")}
        >
          Active
        </FilterButton>
        <FilterButton
          active={filter === "inactive"}
          onClick={() => setFilter("inactive")}
        >
          Inactive
        </FilterButton>
      </div>
    </nav>
  );
}
