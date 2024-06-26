import React from "react";
import "./styling/host-layout.css"
import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout(){
    const activeStyles ={
        textDecoration : "underline",
        color : "#4D4D4D",
        fontWeight: 700,
        textUnderlineOffset: 2
    }
    return (
        <div>
            <div className="host-nav">
                <NavLink to = "." end style = {({ isActive }) => isActive ? activeStyles : null}>Dashboard</NavLink>
                <NavLink to = "income" style = {({ isActive }) => isActive ? activeStyles : null}>Income</NavLink>
                <NavLink to = "vans" style = {({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
                <NavLink to = "reviews" style = {({ isActive }) => isActive ? activeStyles : null}>Reviews</NavLink>
            </div>
            <Outlet />
        </div>
    )
}