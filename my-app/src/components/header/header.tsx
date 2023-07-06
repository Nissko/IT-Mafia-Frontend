import React from 'react';
import './Header.css';
import searchIcon from './IMG/magnifier.jpg';

const Header = () => {
    return <div className="header">
      <span className="page-title">Семьи</span>
        <div className="search-bar">
            <input type="text" name="search" placeholder="Поиск" />
            <button type="submit" className="search-button">
                <img src={searchIcon} alt="Search" />
            </button>
        </div>
    </div>
}

export default Header;