import React from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";
import "./styling/host-van.css"

export default function HostVan(){

    const hostVanID = useParams().id
    const [hostVan, setHostVan] = React.useState([])
    
    React.useEffect(() => {
        fetch(`/api/host/vans/${hostVanID}`)
            .then(res => res.json())
            .then(data => setHostVan(data.vans[0]))
    }, [hostVanID])

    const activeStyles = {
        textDecoration: "underline",
        textUnderlinePosition: "below",
        textUnderlineOffset: "5px",
        fontWeight: "700"
    }

    return(
        <div className="host-van-page">
            <Link className="host-back-btn" to = "/host/vans"> 
                <div>&#8592;</div>
                <div className="host-back-btn-txt">Back to all vans</div>
            </Link>
            <div className="host-van-desc-cn">
                <div className="host-van-desc">
                    <div className="host-van-desc-top">
                        <img className="host-van-desc-img" src = {hostVan.imageUrl}></img>
                        <div className="host-van-desc-top-right">
                            <div style = {{background : hostVan.type == "simple" ? "rgba(225, 118, 84, 1)" : hostVan.type == "rugged" ? "rgba(17, 94, 89, 1)" : "rgba(22, 22, 22, 1)" }} className="host-van-desc-type">{hostVan.type}</div>
                            <div className="host-van-desc-name">{hostVan.name}</div>
                            <div className="host-van-desc-price">${hostVan.price}<span>/day</span></div>
                        </div>
                    </div>
                    <div>
                        <div className="host-sub-nav">
                            <NavLink to = "" end style = {({isActive}) => isActive ? activeStyles : null}>Details</NavLink>
                            <NavLink to = "pricing" style = {({isActive}) => isActive ? activeStyles : null}>Pricing</NavLink>
                            <NavLink to = "photos" style = {({isActive}) => isActive ? activeStyles : null}>Photos</NavLink>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}