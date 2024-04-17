import React from "react";
import { useOutletContext } from "react-router-dom";
import "./styling/host-van-details.css"

export default function HostVanDetails(){
    const [vanData] = useOutletContext()
    
    return (
        <div className="host-van-details">
            <div className="host-van-details-txt"><span>Name : </span>{vanData.name}</div>
            <div className="host-van-details-txt"><span>Category : </span>{vanData.type}</div>
            <div className="host-van-details-txt"><span>Description : </span>{vanData.description}</div>
            <div className="host-van-details-txt"><span>Visibility : </span>Public</div>
        </div>
    )
}