import React from "react";
import './product-page.css';

const ProductPage = () => {
    return(
        <div className="product-page container"> 
            <div className="main-container-of-product">
                <div className="product-image">
                    <img src="https://static7.depositphotos.com/1040880/738/i/600/depositphotos_7387821-stock-photo-pistol-isolated.jpg" alt="Product Image" />
                </div>
                <div className="product-details">
                    <h2 className="product-title">Пистоле</h2>
                    <p className="product-description">Пистоле́т — ручное короткоствольное стрелковое оружие, предназначенное для поражения целей на дальности до 25–50 метров. Бывает как огнестрельным, так и пневматическим. Ранние пистолеты были, как правило, однозарядными, с гладким или нарезным стволом.</p>
                    <div className="product-info">
                        {/* Дополнительная информация о товаре */}
                    </div>
                </div>
                <div className="product-options">
                    <div className="select-container">
                        <select id="family-select">
                            <option value="">Выберите семью</option>
                            <option value="family1">Семья 1</option>
                            <option value="family2">Семья 2</option>
                            <option value="family3">Семья 3</option>
                        </select>
                        <select id="member-select">
                            <option value="">Выберите члена семьи</option>
                            <option value="member1">Член 1</option>
                            <option value="member2">Член 2</option>
                            <option value="member3">Член 3</option>
                        </select>
                        <div className="slider-container">
                            <label htmlFor="consumption-slider">Количество потронов:</label>
                            <input type="range" id="consumption-slider" min="0" max="100" defaultValue="0" />
                        </div>
                    </div>
                    <button className="buy-button">Купить</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;