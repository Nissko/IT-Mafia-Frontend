import React from "react";
import './company.css';
import HeaderOfCompany from "./company-page/header-of-company/header-of-company";
import TablesOfCompany from "./company-page/tbales/tables";

const Company = () => {
    return (
        <div className="company">
            <HeaderOfCompany/>
            <TablesOfCompany/>
        </div>
    );
}

export default Company