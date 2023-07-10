import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className="header">
            <header className="site-header">
                <div className="site-title">
                    <div>Семьи</div>
                    <div>
                        <button className="button-add">+</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;