import React from "react";
import "./styling/host-vans-list.css"
import { Link, useLoaderData } from "react-router-dom";
import { getHostVanData } from "../api";
import { requireAuth } from "../util";

export async function loader(){
    await requireAuth()
    return getHostVanData()
}

export default function HostVanList(){
    const hostVans = useLoaderData()
    
    const hostVanElements = hostVans.map((van) => {
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

    return(
        <div className="host-vans-list">
            <h1>Your Listed Vans</h1>
            { hostVans.length > 0 ? 
                    <section>
                        {hostVanElements}
                    </section>
            : <h1>Loading...</h1>}
            
        </div>
    )
}