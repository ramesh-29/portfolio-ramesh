import logo from './logo.svg';
import './App.css';
import INDEX from './component/Index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './component/Navbar';
import Home from './component/Home';
import { About } from './component/About';
import Index from './component/Index';
import Navbar from './component/Navbar';
import React from 'react'


function App() {
  return (
    // <>
    // <Router>
    // <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/about-section" element={<About/>}/>
    //   </Routes>
    // </Router>
   
    // </>
    <INDEX/>
  );
}

export default App;
