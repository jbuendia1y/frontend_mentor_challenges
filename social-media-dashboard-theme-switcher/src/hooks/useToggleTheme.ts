import { useState } from "react";
import { default as toggle } from "../utils/toggleTheme";

export default function useToggleTheme() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleTheme = () => {
    setIsToggle((value) => !value);
    toggle();
  };

  return { toggleTheme, isToggle };
}
