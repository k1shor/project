import { useEffect } from "react"
import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"
import AdminSidebar from "./AdminSidebar"
import { getproperties } from "./apiAdmin"
import { isAuthenticated } from "../auth"

const Allproperty = () => {
    const [properties, setproperties] = useState([])
    const { token } = isAuthenticated()

    const loadproperty = () => {
        getproperties().then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                setproperties(data)
            }
        })
    }

    useEffect(() => {
        loadproperty()
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-8">
                        <h2 className="text-center">Total {properties.length} properties.</h2>
                        <hr/>
                        <table className="table table-bordered table-secondary">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Stock Number</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {properties.map((item,i)=>(
                                    <tr key={i}>
                                        <td>{item.property_name}</td>
                                        <td>{item.property_price}</td>
                                        <td>{item.countInStock}</td>
                                        <td>{item.property_description}</td>
                                        <td><img src={`http://localhost:5000/${item.property_image}`} alt="" className="img-fluid" width="130"/></td>
                                        <td>
                                        <Link to='#' className="btn btn-primary">Update</Link>
                                        <Link to='#' className="btn btn-danger">Delete</Link>
                                        </td>
                                    </tr>
                                ))}
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Allproperty
