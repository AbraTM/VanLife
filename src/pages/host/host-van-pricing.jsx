import React from "react";
import { useOutletContext } from "react-router-dom";
import "./styling/host-van-pricing.css"

export default function HostVanPricing(){    
    const [vanData] = useOutletContext()

    console.log(vanData)
    return (
        <div className="host-van-sub-price">${vanData.price}.00<span>/day</span></div>
    )
}