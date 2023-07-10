import React from "react";
import './shop.css';
import ListOfProducts from './shop-page/list-of-products/list-of-products';
import HeaderShop from './header/header-shop';
import ShopPaage from "./shop-page/shop-page";

const Shop = () => {
    return(
        <div className="shop">
            <HeaderShop />
            <ShopPaage/>
        </div>
    );
}

export default Shop;