import React, { useState, useEffect } from "react";
import './list-of-products.css';
import ProductPage from "../product-page/product-page";
// import axios from 'axios';
import Pistol from "../img/pistol.jpg";

// axios.get('https://localhost:7068/Gun')
//   .then(response => {
//     // Обработка полученных данных
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Обработка ошибки
//     console.error(error);
//   });

const ListOfProducts = () => {
  const [products, setProducts] = useState([]);

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
              <img src={Pistol} alt="Product 1" />
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
