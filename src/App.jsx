import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import VansPage from "./pages/vanspage";
import VanDesc from "./pages/van-desc";
import HostLayout from "./components/hostlayout";
import Dashboard from "./pages/host/dashboard";
import HostVanList from "./pages/host/host-vans-list";
import HostVan from "./pages/host/host-van";
import HostVanDetails from "./pages/host/host-van-details";
import HostVanPricing from "./pages/host/host-van-pricing";
import HostVanPhotos from "./pages/host/host-van-photos";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import "./server"

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Layout />}>
                    <Route index element = {<Home />} />
                    <Route path = "about" element = {<About />} />
                    <Route path = "vans" element = {<VansPage />} />
                    <Route path = "vans/:id" element = {<VanDesc />} />
                    <Route path = "host" element = {<HostLayout />}>
                        <Route index element ={<Dashboard />} />
                        <Route path = "income" element = {<Income />} />
                        <Route path = "vans" element = {<HostVanList />} />
                        <Route path = "vans/:id" element = {<HostVan />}>
                            <Route index element = {<HostVanDetails />} />
                            <Route path = "pricing" element = {<HostVanPricing />} />
                            <Route path = "photos" element = {<HostVanPhotos />} />
                        </Route>
                        <Route path = "reviews" element = {<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}