import React from "react";
import './header-of-company.css';

const HeaderOfCompany = () => {
    return(
        <div className="header-of-company">
            <header className="site-header">
                <div className="site-title">
                    <div>Компании</div>
                    <div>
                        <button className="button-add">+</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HeaderOfCompany;