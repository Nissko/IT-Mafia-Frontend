import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/sidebar/sidebar'; 
import Table from './components/table/table'; 
import Footer from './components/footer/footer';  
import SideBar from './components/sidebar/sidebar'; 
import Company from './components/company/company';
import Shop from './components/shop/list-of-products/list-of-products';

const App = () => {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Header/>
      <Shop/>
      {/* <Company/> */}
      {/* <Table/> */}
      <SideBar/>
      <Footer/>
    </div>
  );
}

export default App;
