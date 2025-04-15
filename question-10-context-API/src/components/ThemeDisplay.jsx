import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeDisplay = () => {
  const { theme } = useTheme();

  const style = {
    background: theme === "dark" ? "#333" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    padding: "1rem",
    marginTop: "1rem",
  };

  return <div style={style}>The current theme is {theme}</div>;
};

export default ThemeDisplay;
