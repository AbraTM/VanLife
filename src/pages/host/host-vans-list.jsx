import React from "react";
import "./styling/host-vans-list.css"
import { Link } from "react-router-dom";

export default function HostVanList(){

    const [hostVans, setHostVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    }, [])
   
    const hostVanElements = hostVans.map((van) => {
        return (
            <Link to = {`${van.id}`} className="host-van-link">
                <div className="host-van" key={van.id}>
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
            {hostVanElements}
        </div>
    )
}