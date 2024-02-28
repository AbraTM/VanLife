import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import VansPage from "./pages/vanspage";
import VanDesc from "./pages/van-desc"
import "./server"

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/Vans" element = {<VansPage />} />
                <Route path = "/Vans/:id" element = {<VanDesc />} />
            </Routes>
        </BrowserRouter>
    )
}