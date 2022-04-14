import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MenuRoute from "./components/MenuRoute";
import DetailsRoute from "./components/DetailsRoute";
import Header from "./components/Header";

function App() {
  return (
    <Router>
        <header>
        <Header/>
       </header>
      <Routes>
        <Route path='/' element={<MenuRoute/>} />
        <Route path='/details/:id' element={<DetailsRoute/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
