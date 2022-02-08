import { useEffect } from "react"
import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"
import AdminSidebar from "../AdminSidebar"
import { getCategories } from "../apiAdmin"
import { isAuthenticated } from "../../auth"
import Nav from "../../layout/Nav"
import Footer from "../../layout/Footer"

const AllcategoryDeleteSuccess = ({msg}) => {
    const [categories, setCategories] = useState([])
    const { token } = isAuthenticated()

    const loadCategory = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                setCategories(data)
            }
        })
    }

    useEffect(() => {
        loadCategory()
    }, [])

    return (
        <>
        <Nav/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-8">
                        <h2 className="text-center">Total {categories.length} categories.</h2>
                        <hr/>
                        <h4 className="text-success text-center">Category deleted successfully</h4>
                        <table className="table table-bordered table-secondary text-center">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category,i)=>(
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{category.category_name}</td>
                                        <td>
                                        <Link to={`/category/edit/${category._id}`} className="btn btn-primary">Edit</Link>
                                        <Link to={`/category/delete/${category._id}`} className="btn btn-danger">Delete</Link>                                        </td>
                                    </tr>
                                ))}
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AllcategoryDeleteSuccess
