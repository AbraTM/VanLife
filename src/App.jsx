import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/about" element = {<About />} />
            </Routes>
        </BrowserRouter>
    )
}