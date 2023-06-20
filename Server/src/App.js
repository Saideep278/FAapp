import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route ,Navigate  } from 'react-router-dom';

import Home from './components/Home/Home';
import Help from './components/Help/Help';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Gachi from './components/Locations/Gachibowli';
import Secbd from './components/Locations/Secbd';
import Kukat from './components/Locations/Kukat';
import WishList from './components/WishList/WishList';
import Resetpwd from './components/Resetpwd/Resetpwd';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/Postdetails'


import { gapi } from "gapi-script";
import { useSelector } from 'react-redux';

const App = () => {


  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "*****.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  })

  const user = JSON.parse(localStorage.getItem('profile'))


  return (
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path="/posts" exact element={<Home/>} />
            <Route path="/help" exact element={<Help/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/contact" exact element={<Contact/>} />
            <Route path="/gachibowli" exact element={<Gachi/>} />
            <Route path="/secundrabad" exact element={<Secbd/>} />
            <Route path="/kukatpally" exact element={<Kukat/>} />
            <Route path="/posts/search" exact element={<Home/>} />
            <Route path="/posts/:id"  element={<PostDetails/>} />
            <Route path="/wishlist" exact element={<WishList/>} />
            <Route path="/resetpwd" exact element={<Resetpwd/>} />
            <Route path="/auth" element={!user ? <Auth /> : <Navigate replace to="/posts" />} />          
          </Routes>
        </Container>
    </BrowserRouter>
  )
};

export default App;