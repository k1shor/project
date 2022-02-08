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


//to get single category
export const getCategory=()=>{
    return fetch(`${API}/findCategory/`,{
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
    return fetch(`${API}/showproperty`,{
        method:"GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

//to show all users
export const getUsers=(token)=>{
    return fetch(`${API}/userList`,{
        method:"GET",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

//filter product by price and category
export const getFilteredProperty=(skip, limit, filters ={})=>{
    let data={limit,skip,filters}

    return fetch(`${API}/list/by/search`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response=>{
        return response.json()
    })
    .catch(error=>console.log(error))
}