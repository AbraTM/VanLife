import React from "react";
import "./styling/vanspage.css";
import SearchFilter from "../components/search-filter";
import Van from "../components/van";

export default function VansPage(){

    const [vansData, setVansData] = React.useState([])

    React.useEffect( () => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])
    
    const vanElements = vansData.map(van => {
        return <Van URL = {van.imageUrl} key = {van.id} name = {van.name} price = {van.price}
        type = {van.type} id = {van.id}/>
   })
  
  

    return (
        <div className="vans-page">
            <SearchFilter />
            <div className="vans-grid-cn">
                <div className="vans-grid">
                    {vanElements}
                </div>
            </div>
        </div>
    )
}