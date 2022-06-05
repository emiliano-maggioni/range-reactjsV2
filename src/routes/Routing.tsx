import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Exercise1Page from "views/exercise1"
import Exercise2Page from "views/exercise2"
import Home from 'views/home';

const Routing = () => { 

  return (
      <Routes>
        <Route path='/exercise2' element={<Exercise2Page />} />  
        <Route path='/exercise1' element={<Exercise1Page />} />  
        <Route path='/' element={<Home />} />      
      </Routes>
  );
}

export default Routing;
