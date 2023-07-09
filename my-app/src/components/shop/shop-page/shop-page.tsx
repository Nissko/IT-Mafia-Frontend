import React from "react";
import './shop-page.css';
import ProductPage from './product-page/product-page';
import ListOfProducts from "./list-of-products/list-of-products";

const ShopPaage = () => {
    return(
        <div className="main-container container">
            {/* <ProductPage/> */}
            <ListOfProducts/>
        </div>
    );
}

export default ShopPaage;