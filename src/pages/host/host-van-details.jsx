import React from "react";
import { useParams } from "react-router-dom";
import "./styling/host-van-details.css"

export default function HostVanDetails(){
    const hostVanId = useParams().id;
    const [vanData, setVanData] = React.useState({})
    
    React.useEffect(() => {
        fetch(`/api/host/vans/${hostVanId}`)
            .then(res => res.json())
            .then(data => setVanData(data.vans[0]))
    }, [hostVanId])

    console.log(vanData)

    return (
        <div className="host-van-details">
            <div className="host-van-details-txt"><span>Name : </span>{vanData.name}</div>
            <div className="host-van-details-txt"><span>Category : </span>{vanData.type}</div>
            <div className="host-van-details-txt"><span>Description : </span>{vanData.description}</div>
            <div className="host-van-details-txt"><span>Visibility : </span>Public</div>
        </div>
    )
}