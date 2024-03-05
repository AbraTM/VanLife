import React from "react";
import "./styling/about.css";

export default function About(){
    return (
      <div className="about">
        <div className="about-body">
          <img src="./About-top.png" className="about-img-top"></img>
          <div className="about-main-txt">
            Don’t squeeze in a sedan when you could relax in a van.
          </div>
          <div className="about-txt-p1">
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)
          </div>
          <div className="about-txt-p2">
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </div>

          <div className="explore-van">
            <div className="explore-van-txt">
              <div>Your destination is waiting.</div>
              <div>Your van is ready.</div>
            </div>
            <button className="explore-van-btn">Explore our vans</button>
          </div>
        </div>
      </div>
    )
  }