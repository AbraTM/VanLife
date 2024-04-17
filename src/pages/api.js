export async function getVanData(id){
    const url = id ? `/api/vans/${id}` : `/api/vans`
    const res = await fetch(url)
    if(!res.ok){
        throw {
            message : "Failed to fetch vans",
            statusText : res.StatusText,
            status: res.Status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVanData(id){
    const url = id ? `/api/host/vans/${id}` : `/api/host/vans`
    const res = await fetch (url)
    if(!res.ok){
        throw {
            message : "Failed to fetch Data",
            statusText : res.statusText,
            status : res.status
        }
    }
    const data = await res.json()
    return data.vans
}