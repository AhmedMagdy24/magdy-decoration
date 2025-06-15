import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Service from './components/Service';
import { HashRouter } from 'react-router-dom';
import Projects from './components/Projects';


function App() {
  return (
    <>
      <HashRouter>

      
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Service} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contact' component={Footer} />
        </Routes>
        <Home/>
      </HashRouter>
    </>
  );
}

export default App;
