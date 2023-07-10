import React from "react";
import Header from './header/header';
import Table from "./table/table";
import SearchBar from "./search-bar/search-bar";

const FamilysPage = () => {
    return(
        <div className="families-page">
            <Header />
            <SearchBar/>
            <Table />
        </div>
    );
}

export default FamilysPage;