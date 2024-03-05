import React from "react";
import "./styling/host-layout.css"
import { Outlet, Link, NavLink } from "react-router-dom";

export default function HostLayout(){
    const activeStyles ={
        textDecoration : "underline",
        color : "#4D4D4D"
    }
    return (
        <div>
            <div className="host-nav">
                <NavLink to = "/host" end style = {({ isActive }) => isActive ? activeStyles : null}>Dashboard</NavLink>
                <NavLink to = "/host/income" style = {({ isActive }) => isActive ? activeStyles : null}>Income</NavLink>
                <NavLink to = "/host/vans" style = {({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
                <NavLink to = "/host/reviews" style = {({ isActive }) => isActive ? activeStyles : null}>Reviews</NavLink>
            </div>
            <Outlet />
        </div>
    )
}