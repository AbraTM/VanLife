import React from "react";
import "./styling/navbar.css"
import { Link, NavLink } from "react-router-dom";
import imageUrl from "../../public/avatar-icon.png"

export default function NavBar(){
    const activeStyles = {
        fontWeight : "700",
        transform : "scale(1.2)",
        textDecoration : "underline",
        textUnderlineOffset : "4px",
    }
    return(
        <nav>
            <Link to = "/" className="nav-left">#VANLIFE</Link>
            <div className="nav-right">
                <NavLink to = "host" style = {({isActive}) => isActive ? activeStyles : null }>Host</NavLink>
                <NavLink to = "about" style = {({isActive}) => isActive ? activeStyles : null }>About</NavLink>
                <NavLink to = "vans" style = {({isActive}) => isActive ? activeStyles : null }>Vans</NavLink>
                <NavLink to = "login" className = "login">
                    <img src = {imageUrl} />
                </NavLink>
            </div>
        </nav>
    )
}