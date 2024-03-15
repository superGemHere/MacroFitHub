import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'


import './App.css'
import Header from './components/outlet/Navbar/Header';
import Home from './components/main/Home/Home';
import Catalog from './components/main/Catalog/Catalog';

function App() {

  return (
    
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>

    </div>

  )
}

export default App
