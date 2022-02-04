import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

import './App.css';

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
             <Router>
                <div className="App">
                  <h1>SAP</h1>
                  <nav>
                    <ul className="header">
                      <li>
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/stuff">Stuff</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="content">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/contact" element={<Contact />} /> 
                      <Route path="/stuff" element={<Stuff />} />
                    </Routes>
                  </div>
                </div>
             </Router>
         );
     }
}

export default App;