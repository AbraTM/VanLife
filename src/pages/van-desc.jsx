import React from "react";
import "./styling/van-desc.css"
import { Link, useParams } from "react-router-dom";

export default function VanDesc(){
    const [vanData, setVanData] = React.useState([])
    const vanID = useParams().id
    
    React.useEffect(() => {
        fetch(`/api/vans/${vanID}`)
            .then(res => res.json())
            .then(data => setVanData(data.vans))
    }, [vanID])

    return (
        <div >
            <Link className="back-btn" to = "/Vans"> 
                <div>&#8592;</div>
                <div className="back-btn-txt">Back to all vans</div>
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