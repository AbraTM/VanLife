import React from "react";
import "./styling/van-desc.css"
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVanData } from "./api";

export function loader( { params }){
    return getVanData(params.id)
}

export default function VanDesc(){
    const vanData = useLoaderData()
    const Location = useLocation()
    const search = Location.state.search
    
    return (
        <div >
            <Link className="back-btn" to = { search ? `..?${search}` : ".." } relative="path"> 
                <div>&#8592;</div>
                <div className="back-btn-txt">{Location.state.type ? `Back to all ${Location.state.type} vans` : "Back to all vans"}</div>
            </Link>
            <div className="van">
                <img src = {vanData.imageUrl} className="van-img"></img>
                <div className="van-details">
                    <div className="van-tag" style={{backgroundColor: vanData.type === "simple" ? "rgba(225, 118, 84, 1)" :
                                                                        vanData.type === "rugged" ? "rgba(17, 94, 89, 1)" : "rgba(22, 22, 22, 1)"
                    }}>{vanData.type}</div>
                    <div className="van-name">{vanData.name}</div>
                    <div className="van-price">${vanData.price}<span>/day</span></div>
                    <p className="van-description">{vanData.description}</p>
                    <button className="rent-van-btn">Rent this van</button>
                </div>
            </div>
        </div>
    )
}