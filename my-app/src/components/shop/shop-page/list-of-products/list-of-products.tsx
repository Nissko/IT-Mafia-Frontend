import React, { useState } from "react";
import './list-of-products.css';
import ProductPage from "../product-page/product-page";

const ListOfProducts = () => {
  const [showProductPage, setShowProductPage] = useState(false);

  const handleProductClick = () => {
    setShowProductPage(!showProductPage);
  };

  return (
    <div className="ListOfProducts">
      {showProductPage && <ProductPage/>}
      <section className="main-section">
        <div className="product-list-container">
          <div className="product-list">
            <div className="product" onClick={handleProductClick}>
              <img src="https://static7.depositphotos.com/1040880/738/i/600/depositphotos_7387821-stock-photo-pistol-isolated.jpg" alt="Product 1" />
              <h3 className="product-title">Product Title</h3>
              <p className="product-price">$19.99</p>
            </div>
            {/* Добавьте остальные карточки товаров */}
          </div>
          <div className="sort-section">
            <input type="text" className="search-input" placeholder="Search" />
            <ul className="sort-options">
              <li className="sort-option">Price</li>
              <li className="sort-option">Popularity</li>
              <li className="sort-option">Rating</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListOfProducts;
