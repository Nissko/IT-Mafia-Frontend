import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Table from './Tables/table';

const App = () => {
  return (
    <div className="App">
        <Table/>
      <Header/>
    </div>
  );
}

export default App;
