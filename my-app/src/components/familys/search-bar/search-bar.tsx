import React from "react";
import './search-bar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
  <div className="search-wrapper">
    <input type="text" name="search" placeholder="Поиск" />
    <button type="submit" className="search-button">
      <i className="fas fa-search"></i>
    </button>
  </div>
</div>

        );
    };

export default SearchBar;