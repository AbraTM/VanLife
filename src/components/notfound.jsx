import React from "react";
import { Link } from "react-router-dom";
import "./styling/notfound.css"

export default function NotFound(){
    return (
        <div className="nf-container">
            <div className="notfound">
                <h1 className="nf-txt">Sorry, the page you were looking for was not found.</h1>
                <Link to = "/">
                    <button className="nf-return-btn">Return To Home</button>
                </Link>
            </div>
        </div>
    )
}