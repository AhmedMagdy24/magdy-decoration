import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';

import {HashRouter} from 'react-router-dom';


function App() {
  return (
    <>
      <HashRouter>

      
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/Contact' component={Contact} />
        </Routes>
        <Home/>
      </HashRouter>
    </>
  );
}

export default App;
