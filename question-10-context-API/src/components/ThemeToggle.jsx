import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current Theme: {theme} (Click to toggle)
    </button>
  );
};

export default ThemeToggle;
