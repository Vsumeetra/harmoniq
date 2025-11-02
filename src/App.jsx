import { useState } from 'react'

import './App.css'
import { Routes, Route } from "react-router-dom";

import CustomNavbar from "./component/Navbar";
import Home from "./pages/Home"
import AuthPage from "./pages/AuthPage";



function App() {


  return (
    <>

      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />

        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

      </Routes>

    </>
  )
}

export default App
