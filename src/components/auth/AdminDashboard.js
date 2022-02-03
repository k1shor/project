import React from 'react'
import { withRouter } from 'react-router-dom'
import AdminSidebar from '../../admin/AdminSidebar'

const AdminDashboard = () => {
    return (
        <>
            
                <div className="row" style={{"minHeight":"70vh"}}>
                <div className="col-md-3">
                    <AdminSidebar />
                </div>
                <div className="col-md-8 mt-5">
                    <h2>Welcome to Admin Dashboard</h2>
                    <h4>You can manage Category, Product and orders from here.</h4>
                </div>
                </div>
            
        </>
    )
}


export default AdminDashboard
