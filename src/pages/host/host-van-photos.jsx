import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos(){
    const vanData = useOutletContext()
    const vanImgURL = vanData[0].imageUrl
    return (
        <div style = {{
            padding: 20,
            marginTop: 10
        }}>
            <img 
                src = {vanImgURL}
                style = {{
                    width: 110,
                    borderRadius: 6,
                }}
            ></img>
        </div>
    )
}