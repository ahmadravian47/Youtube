import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup';
import User from './components/user/User'
import Editorportal from './components/editorportal/Editorportal'
import Youtuberportal from './components/youtuberportal/Youtuberportal';
import Notification from './components/notifications/Notification'
import About from './components/about/About';
import Docs from './components/docs/Docs';
import Product from './components/product/Product';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
        <Route path="/editorportal" element={<Editorportal />} />
        <Route path="/youtuberportal" element={<Youtuberportal />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
