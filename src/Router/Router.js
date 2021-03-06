import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// importar componentes criados
import About from '../Pages/About/About';
import Blog from '../Pages/Blog/Blog'
import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import NavBarApp from '../Layouts/Navbar/Navbar';
import Login from '../Pages/Login/Login'

function RouterApp() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBarApp />}>
                <Route index element={<Home /> } />
                <Route path='Blog' element={<Blog /> } />
                <Route path='About' element={<About /> } />                
                <Route path='Contact' element={<Contact /> } />
                <Route path='Login' element={<Login /> } />

                <Route path='*' element={ <Navigate replace to="/"/> } />
            </Route>
        </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default RouterApp;