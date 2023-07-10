import React, { useState } from 'react';
import './tables.css';

const TablesOfCompany = () => {
  const [activeRows, setActiveRows] = useState<number[]>([]);

  const handleRowClick = (index: number) => {
    if (activeRows.includes(index)) {
      setActiveRows(activeRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setActiveRows([...activeRows, index]);
    }
  };

  const handleDeleteButtonClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setActiveRows(activeRows.filter((rowIndex) => rowIndex !== index));
  };

  return (
    <div className="container">
      <h2></h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Id</div>
          <div className="col col-2">Name</div>
          <div className="col col-3">Families</div>
          <div className="col col-4">Net income</div>
        </li>
        <li className={`table-row ${activeRows.includes(0) ? 'active' : ''}`} onClick={() => handleRowClick(0)}>
          <div className="col col-1" data-label="Job Id">
            1
          </div>
          <div className="col col-2" data-label="Customer Name">
            Понорама
          </div>
          <div className="col col-3" data-label="Amount">
            Якудзэ
          </div>
          <div className="col col-4" data-label="Payment Status">
            300$
          </div>
          {activeRows.includes(0) && (
            <div className="additional-info">
              <p>Адрес: пр. Ленина, 130</p>
              <p>Номер контактного телефона: +7 800 222-74-01</p>
              <p>Тип бизнеса: Клуб</p>
              <button className="delete-button" onClick={(e) => handleDeleteButtonClick(e, 0)}>
                <i className="fa-solid fa-gun fa-flip-horizontal"></i>
              </button>
            </div>
          )}
        </li>
        {/* Дополнительные строки */}
      </ul>
    </div>
  );
};

export default TablesOfCompany;
