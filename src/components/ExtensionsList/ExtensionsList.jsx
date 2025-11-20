import styles from "./ExtensionsList.module.css";
import { Extension } from "../Extension/Extension";

export function ExtensionsList({ extensions, onToggle }) {
  return (
    <div className={styles.main}>
      {extensions.map((extension) => {
        return (
          <Extension
            key={extension.name}
            logo={extension.logo}
            name={extension.name}
            description={extension.description}
            isActive={extension.isActive}
            onToggle={() => onToggle(extension.name)}
          />
        );
      })}
    </div>
  );
}
