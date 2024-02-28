import React from "react";
import "./styling/navbar.css"
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            <Link to = "/" className="nav-left">#VANLIFE</Link>
            <div className="nav-right">
                <Link to = "/about">About</Link>
                <Link to = "/Vans">Vans</Link>
            </div>
        </nav>
    )
}