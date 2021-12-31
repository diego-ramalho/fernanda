import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import MenuNav from './components/MenuNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MenuNav />
        <div className="App-intro">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;