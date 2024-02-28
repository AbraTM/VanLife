import React from "react";
import "./styling/search-filter.css"

export default function SearchFilter(){
    return (
        <div className="search-filter">
            <div className="sf-txt">Explore our van options</div>
            <div className="sf-tags">
                <div>Simple</div>
                <div>Luxury</div>
                <div>Rugged</div>
            </div>
            <div className="clear-filters">Clear Filters</div>
        </div>
    )
}