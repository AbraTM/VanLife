import React from "react";
import "./styling/vanspage.css";
import Van from "../components/van";
import { useSearchParams, useLoaderData } from "react-router-dom";
import { getVanData } from "./api";

export function loader(){
    return getVanData()
}

export default function VansPage(){
    const vansData = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter 
            ? vansData.filter(van => van.type === typeFilter) 
            : vansData
    
    const vanElements = displayedVans.map(van => {
        return <Van URL = {van.imageUrl} key = {van.id} name = {van.name} price = {van.price}
        type = {van.type} id = {van.id}/>
    })

    function handleFilterChange(key, value){
        setSearchParams( prevParams => {
            const newParams = prevParams
            if(value === null){
                newParams.delete(key)
            } else {
                newParams.set(key, value)
            }
            return newParams
        })
    }

    return (
        <div className="vans-page">
            <div className="search-filter">
                <div className="sf-txt">Explore our van options</div>
                <div className="sf-tags">
                    <button onClick = {() =>handleFilterChange("type", "simple")} className={`${typeFilter === "simple" ? "simple-selected" : "sf-simple-btn"}`}>Simple</button>
                    <button onClick = {() =>handleFilterChange("type", "luxury")} className={`${typeFilter === "luxury" ? "luxury-selected" : "sf-luxury-btn"}`}>Luxury</button>
                    <button onClick = {() =>handleFilterChange("type", "rugged")} className={`${typeFilter === "rugged" ? "rugged-selected" : "sf-rugged-btn"}`}>Rugged</button>
                    {typeFilter && <button onClick = {() => handleFilterChange("type", null)} className="sf-clear-btn">Clear Filters</button>}
                </div>
            </div>
            <div className="vans-grid-cn">
                <div className="vans-grid">
                    {vanElements}
                </div>
            </div>
        </div>
    )
}