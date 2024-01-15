import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const ThemeSwitch = () => {
  const [theme, settheme] = useState(false);

  const themetoggle = () => {
    settheme((prevMode) => !prevMode);
  };
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    settheme(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("darkMode", theme);
  }, [theme]);

  return (
    <div className="px-4 rounded-md text-2xl cursor-pointer" onClick={themetoggle}>
      {theme ? <GoSun className="text-white" /> : <FaRegMoon className="text-black" /> }
    </div>
  );
};

export default ThemeSwitch;
