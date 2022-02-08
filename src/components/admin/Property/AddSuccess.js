import React from 'react'
import AdminSidebar from '../AdminSidebar'
import Footer from '../../layout/Footer'
import Nav from '../../layout/Nav'
const AddSuccess = () => {
  
    return (
        <>
            <Nav />
            <div className='container-fluid'>
            <div className="row mx-0" style={{ "minHeight": "70vh" }}>
                <div className="col-md-3 h-100">
                    <AdminSidebar />
                </div>
                <div className="col-md-8 mt-5">
                    <h4>New Property listed successfully</h4>
                </div>
            </div>
            </div>
            <Footer />

        </>
    )
}


export default AddSuccess
