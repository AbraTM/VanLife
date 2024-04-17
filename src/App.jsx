import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import VansPage, { loader as vansPageLoader }  from "./pages/vanspage";
import VanDesc, {loader as vanDescLoader } from "./pages/van-desc";
import HostLayout from "./components/hostlayout";
import Dashboard from "./pages/host/dashboard";
import HostVanList, { loader as hosVanListLoader } from "./pages/host/host-vans-list";
import HostVan, { loader as hostVanLoader }from "./pages/host/host-van";
import HostVanDetails from "./pages/host/host-van-details";
import HostVanPricing from "./pages/host/host-van-pricing";
import HostVanPhotos from "./pages/host/host-van-photos";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import NotFound from "./components/notfound";
import Error from "./components/error";
import LoginForm from "./components/login";
import "./server"
import { requireAuth } from "./pages/util";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element = {<Layout />}>
        <Route index element = {<Home />} />
        <Route path = "login" element = {<LoginForm />} />
        <Route path = "about" element = {<About />} />
        <Route path = "vans" element = {<VansPage />} loader = { vansPageLoader } errorElement = {<Error />} />
        <Route path = "vans/:id" element = {<VanDesc />} loader = { vanDescLoader }/>
        <Route path = "host" element = {<HostLayout />}>
            <Route index element ={<Dashboard />} loader = {async () => await requireAuth()}/>
            <Route path = "income" element = {<Income />} loader = {async () => await requireAuth()}/>
            <Route path = "vans" element = {<HostVanList />} loader = { hosVanListLoader }/>
            <Route path = "vans/:id" element = {<HostVan />} loader = { hostVanLoader }>
                <Route index element = {<HostVanDetails />} loader = {async () => await requireAuth()}/>
                <Route path = "pricing" element = {<HostVanPricing />} loader = {async () => await requireAuth()}/>
                <Route path = "photos" element = {<HostVanPhotos />} loader = {async () => await requireAuth()}/>
            </Route>
            <Route path = "reviews" element = {<Reviews />} />
        </Route>
        <Route path = "*" element = {<NotFound />} />
    </Route>
))

export default function App(){
    return (
        <RouterProvider router = {router} />
    )
}