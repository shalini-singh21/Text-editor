

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function app() {
  return (
    <>
      <Router>

        <Navbar title="Navbar" />
        <div className="container">
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path="/" element={<Textform heading="Enter the text below" />} />
          </Routes>





          {/* // <Textform heading= "Enter the text below" /> */}
        </div>
        {/* <About/> */}
      </Router>
    </>
  )
}
export default app;
