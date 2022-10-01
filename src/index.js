import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./About";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";

ReactDOM.render(
  <BrowserRouter>

  <Navbar />
  <Routes >

    <Route path="/"  element={<Home/>}   />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />

  </Routes>
  </BrowserRouter>,

document.getElementById("root"));

