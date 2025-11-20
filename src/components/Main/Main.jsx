// import styles from "./Main.module.css";
import data from "../../../data.json";

import { ExtensionsList } from "../ExtensionsList/ExtensionsList";
import { NavBar } from "../NavBar/NavBar";

import { useState } from "react";

export function Main() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("all");

  function onToggle(name) {
    setExtensions((prev) =>
      prev.map((extension) =>
        extension.name === name
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  }

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true;
  });

  return (
    <>
      <NavBar filter={filter} setFilter={setFilter} />
      <ExtensionsList extensions={filteredExtensions} onToggle={onToggle} />
    </>
  );
}
