import React from "react";
import "./styling/home.css";
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div className="home">
            <div className="home-body">
                <div className="home-main-txt">You got the travel plans, we got the travel vans.</div>
                <div className="home-txt">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</div>

                <div className="findvan-btn-cn">
                    <Link to = "/vans">
                        <button className="findvan">Find your van</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}