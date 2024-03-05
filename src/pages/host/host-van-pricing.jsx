import React from "react";
import { useParams } from "react-router-dom";
import "./styling/host-van-pricing.css"

export default function HostVanPricing(){
    const vanId = useParams().id;
    
    const [vanPrice, setVanPrice] = React.useState("")

    React.useEffect(() => {
        fetch(`/api/host/vans/${vanId}`)
            .then(res => res.json())
            .then(data => setVanPrice(data.vans[0].price))
    }, [vanId])

    console.log(vanPrice)

    return (
        <div className="host-van-price">${vanPrice}.00<span>/day</span></div>
    )
}