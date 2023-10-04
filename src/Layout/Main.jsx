import { Outlet } from "react-router-dom";
import NavBar from "../page/Shared/NavBar/NavBar";
import Footer from "../page/Shared/Footer/Footer";
import { useState } from "react";

const Main = () => {
    // const [theme, setTheme] = useState('light')

    const [isDarkMode, setIsDarkMode] = useState('');

    const toggleTheme = () => {
      setIsDarkMode(() => !isDarkMode); 

    };

  return (
    <div data-theme={`${isDarkMode ? 'dark' : 'light'}`}>
      <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode}></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
