import React from 'react';
import './Header.css';

const Header = () => {
    return <div className="header">
      <span className="page-title">Семьи</span>
      
        <div className="search-bar">
            <input type="text" name="search" placeholder="Введите запрос" />
            <button type="submit">Поиск</button>
        </div>
      
    </div>
}

export default Header;