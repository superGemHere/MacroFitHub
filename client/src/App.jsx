import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'


import './App.css'
import Header from './components/outlet/Navbar/Header';
import Home from './components/main/Home/Home';

function App() {

  return (
    
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>

  )
}

export default App
