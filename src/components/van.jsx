import React from "react";
import "./styling/van.css"
import { Link, useSearchParams} from "react-router-dom";

export default function Van(props){
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")
    return(
        <div className="van-card">
            <Link to = {props.id} state={ {search: searchParams.toString(), type: typeFilter} }> 
                <img src={`${props.URL}`}></img>
            </Link>
            <div className="van-card-btm">
                <div className="van-card-btm-left">
                    <Link to = {props.id} className="van-card-name"> 
                        <div>{props.name}</div>
                    </Link>
                    <div className="van-tag" style={{backgroundColor : props.type === "simple" ? "rgba(225, 118, 84, 1)" : 
                                                                        props.type === "rugged" ? "rgba(17, 94, 89, 1)" : "rgba(22, 22, 22, 1)" 
                    }}>
                        {props.type}
                    </div>
                </div>
                <div className="van-card-btm-right">
                    <div>${props.price}</div>
                    <div>/day</div>
                </div>
            </div>
        </div>
    )
}