import React, {useState} from "react";
import './scss/style.scss'
import Layout from "./Layout/Layout";
import Header from "./Layout/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./Layout/Footer/Footer";
import {Routes, Route} from "react-router-dom"
import Connect from "./pages/Connect/Connect";
import Questions from "./pages/Questions/Questions";
import Profile from "./pages/Profile/Profile";


function App() {
  return (
    <>
       <Routes>
           <Route path='/' element={<Layout/>}>
               <Route path='/' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/connect' element={<Connect/>}/>
               <Route path='/questions' element={<Questions/>}/>
               <Route path='/profile' element={<Profile/>}/>
           </Route>
       </Routes>

    </>
  );
}

export default App;
