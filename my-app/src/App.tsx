import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Footer from './components/footer/footer';  
import SideBar from './components/sidebar/sidebar'; 
import Company from './components/company/company';
import Shop from './components/shop/shop';
import FamilysPage from './components/familys/familys';


const App = () => {
  return (
    <div className="App">
      <Shop/>
      {/* <Company/> */}
      {/* <FamilysPage/> */}
      <SideBar/>
      <Footer/>
    </div>
  );
}

export default App;
