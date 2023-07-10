    import React from "react";
    import './list-of-products.css';

    const Shop = () => {
        return (
        <div className="Shop">
            <section className="main-section">
                <div className="product-list">
                    <div className="product">
                        <img src="product1.jpg" alt="Product 1" />
                        <h3 className="product-title">Product Title</h3>
                        <p className="product-price">$19.99</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="product">
                        <img src="product2.jpg" alt="Product 2" />
                        <h3 className="product-title">Product Title</h3>
                        <p className="product-price">$24.99</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="product">
                        <img src="product2.jpg"/>
                        <h3 className="product-title">Product Title</h3>
                        <p className="product-price">$24.99</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    {/* Дополнительные товары */}
                </div>
            </section>
        </div>
        )
    }

    export default Shop;