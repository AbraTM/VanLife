import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import "./styling/van-desc.css"
import { Link } from "react-router-dom";

export default function VanDesc(){
    const [vansData, setVansData] = React.useState([])

    React.useEffect(() => {
        fetch("./api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])

    return (
        <div>
            <NavBar />
            <Link className="back-btn" to = "/Vans"> 
                <div>&#8592;</div>
                <div className="back-btn-txt">Back to all vans</div>
            </Link>
        </div>
    )
}