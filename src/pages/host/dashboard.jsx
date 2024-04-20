import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./styling/dashboard.css"
import { getHostVanData } from "../api";
import { requireAuth } from "../util";

export async function loader({ request }){
    await requireAuth(request)
    return getHostVanData()
}

export default function Dashboard(){
    const hostVans = useLoaderData()
        
    const hostVanElements = hostVans.filter((van,index) => index < 2).map((van) => {
        return (
            <Link to = {`${van.id}`} className="host-van-link" key={van.id}>
                <div className="host-van" >
                    <img src = {van.imageUrl} className="host-van-img"></img>
                    <div className="host-van-data">
                        <div className="host-van-name">{van.name}</div>
                        <div className="host-van-price">${van.price}/day</div>
                    </div>
                </div>
            </Link>
            )
        })

    return (
        <div>
            <div className="dashboard-income">
                <h1>Welcome !</h1>
                <div className="dashboard-income-txt">
                    <div>Income last <u>30 days</u></div>
                    <Link to = "income" className = "black">Details</Link>
                </div>
                <div className="income-amount">$2,260</div>
            </div>
            <div className="dashboard-score">
                <div className="score-data">
                    Review Score <div className="star">&#9733;</div>
                    <div>5.0<span>/5</span></div>
                </div>
                <Link to = "reviews" className = "black">Details</Link>
            </div>
            <div className="host-vans-list">
                <h1>Your Listed Vans</h1>
                <section>
                    {hostVanElements}
                </section>
                <Link to = "vans" className="viewall">View all</Link>
            </div>
        </div>
    )
}