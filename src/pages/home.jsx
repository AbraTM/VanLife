import React from "react";
import "./styling/home.css";

export default function Home(){
    return(
        <div className="home">
            <div className="home-body">
                <div className="home-main-txt">You got the travel plans, we got the travel vans.</div>
                <div className="home-txt">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</div>

                <div className="findvan-btn-cn">
                    <button className="findvan">Find your van</button>
                </div>
            </div>
        </div>
    )
}