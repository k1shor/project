import React, { useState } from 'react'
import { isAuthenticated } from '../auth'
import AdminSidebar from './AdminSidebar'
import { createCategory } from './apiAdmin'

const AddCategory = () => {
    //destructuring user and token from localStorage
    const { user, token } = isAuthenticated()
    const [category_name, setCategory] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setError('')
        setCategory(e.target.value.toLowerCase())
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)
        // make request to post category 
        createCategory(token, { category_name })
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setError('')
                    setSuccess(true)
                    setCategory('')
                }
            })
    }
    //to show error msg
    const showError = () => (
        <div className="alert-alert-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
    )

    //to show success msg
    const showSuccess=()=>(
        <div className="alert alert-success" style={{display:success?'':'none'}}>New Category Added</div>
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
                                <h1 className="h3 mb-3 fw-normal">Add Category Form</h1>
                                {showError()}
                                {/* {showSuccess()} */}
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingCategory" placeholder="Category" onChange={handleChange} value={category_name} />
                                    <label htmlFor="floatingCategory">Category</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={clickSubmit}>ADD</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCategory
