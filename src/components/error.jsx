import React from "react";
import { useRouteError } from "react-router-dom"

export default function Error(){
    const err = useRouteError()
    
    return(
        <div>
            <h1>Error : {err.message}</h1>
            <pre>{err.Status} - {err.StatusText}</pre>
        </div>    
    )
}