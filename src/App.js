import React from 'react'
import {Route,Routes} from "react-router-dom";

import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import errorp from './components/errorp';
const App =() =>{
  return(
    <div>
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='*' Component={errorp} />
        </Routes>
      </>
    </div>
  )
}

export default App