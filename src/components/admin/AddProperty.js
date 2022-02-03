import { useEffect, useState } from "react"
import React from 'react'
import AdminSidebar from "./AdminSidebar"
import { getCategories, createproperty } from "./apiAdmin"
import { isAuthenticated } from "../auth"

const AddProperty = () => {
    const { token } = isAuthenticated()
    const [values, setValues] = useState({
        property_title: '',
        property_location: '',
        property_availability: true,
        property_price: '',
        property_desc: '',
        property_image:'',
        categories: [],
        category: '',
        error: '',
        success: false,
        formData: ''
    })
    const { property_title, property_location, property_availability, property_price, property_desc, property_image,categories, category, error, success, formData } = values

    //load categories and set form data
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, categories: data, formData: new FormData })
            }
        })
    }

    //to send formdata
    useEffect(() => {
        init()
    }, [])

    const handleChange=name=>event=>{
        const value=name==='property_image'? event.target.files[0]:event.target.value
        formData.set(name, value)
        setValues({...values,[name]:value})
    }

    const clickSubmit=event=>{
        event.preventDefault()

        setValues({...values,error:''})
        createproperty(token,formData)
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
            }
            else{
                setValues({...values,property_title:'',property_location:'',property_availability:true,property_price:'',property_desc:'',property_image:'',success:true,error:''})
            }
        })
    }

    //to show error msg
    const showError = () => (
        <div className="alert-alert-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
    )

    //to show success msg
    const showSuccess=()=>(
        <div className="alert alert-success" style={{display:success?'':'none'}}>New property Added</div>
    )

        


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-6">
                        <main className="form-signin">
                            <form>
                                <h1 className="h3 mb-3 fw-normal">Add property Form</h1>
                                {showError()}
                                {showSuccess()}
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="title" placeholder="" onChange={handleChange('property_title')} value={property_title} />
                                    <label htmlFor="title">Title</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="location" placeholder="" onChange={handleChange('property_location')} value={property_location} />
                                    <label htmlFor="location">Location</label>
                                </div>
                                
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="price" placeholder="Stock" onChange={handleChange('property_price')} value={property_price} />
                                    <label htmlFor="price">Price</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="desc" placeholder="Description" onChange={handleChange('property_desc')} value={property_desc} />
                                    <label htmlFor="desc">Description</label>
                                </div>

                               

                                <div className="form-floating mb-3">
                                    <input type="file" className="form-control" id="img_file" onChange={handleChange('property_image')} value={property_image} accept="image/*" />
                                    <label htmlFor="img_file">Image</label>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="category">Category</label>
                                    <select className="form-control" onChange={handleChange('category')}>
                                        <option></option>
                                        {categories && categories.map((c,i)=>(<option key={i} value={c.id}>{c.category_name}</option>))}
                                        </select>
                                        </div>

                                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={clickSubmit}>ADD property</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProperty
