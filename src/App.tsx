import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Movieslist from './components/movieslist'
import Home from './components/Home'
import ContactUs from './components/contact us'
import AboutUs from './components/About us'
import table from './components/Telugu'
import Telugu from './components/Telugu'

export default function App () {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/table" element={<Telugu/>}/>
        <Route path="/a" element={<Home/>}/>
        <Route path="/b" element={<Movieslist/>}/>
        <Route path="/c" element={<ContactUs/>}/>
        <Route path="/d" element={<AboutUs/>}/>




      </Routes>
      
      
      
      
      
      
      </BrowserRouter>









    </div>
  )
}
