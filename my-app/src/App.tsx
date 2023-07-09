import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/sidebar/sidebar'; 
import Table from './components/table/table'; 
import Footer from './components/footer/footer';  
import SideBar from './components/sidebar/sidebar'; 

const App = () => {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Header/>
      <Table/>
      <SideBar/>
      <Footer/>
    </div>
  );
}

export default App;
