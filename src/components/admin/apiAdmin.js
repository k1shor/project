import {API} from "../../config";

// to add category 
export const createCategory=(token,category)=>{
    return fetch(`${API}/postcategory`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

//to get all category
export const getCategories=()=>{
    return fetch(`${API}/categorylist`,{
        method:"GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

//to add property
export const createproperty=(token,property)=>{
    return fetch(`${API}/postproperty`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },
        body:property
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

// to show properties list
export const getproperties=()=>{
    return fetch(`${API}/showproperties`,{
        method:"GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}