import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/sidebar/sidebar'; 
import Table from './components/familys/table/table';
import Footer from './components/footer/footer';  
import SideBar from './components/sidebar/sidebar'; 
import Company from './components/company/company';
import Shop from './components/shop/shop';
import FamilyList from './components/family/familymember';
import ThemeContext from './themeContext';
import FamilysPage from './components/familys/familys';


const App = () => {
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme}`}>
        <button className="toggle-theme" onClick={toggleTheme}>
          {/* {theme === 'light' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />} */}
          {theme === 'light' ? <button>светлая</button> : <button>темная</button>}
        </button>
        {/* <Header /> */}
        {/* <Table /> */}
        {/* <FamilysPage/> */}
        {/* <Footer /> */}
        <SideBar />
        <Company />
        <Shop />
        {/* <FamilyList /> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
