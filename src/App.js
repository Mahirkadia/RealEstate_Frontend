import React from 'react';
import { Routes,Route } from 'react-router-dom';

//  import components 
import Header from './components/Header'
import Footer from './components/Footer'

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
  <div className='max-w-[1440px] mx-auto bg-white'>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/property/:id' element={<PropertyDetails/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <Footer/>
  </div>
  );
};

export default App;
