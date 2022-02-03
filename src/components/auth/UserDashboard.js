import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import UserSidebar from '../User/UserSidebar'
// import { isAuthenticated } from '.'

const UserDashboard = () => {

    return (
        <>
            <Nav />
            <div className='container-fluid'>
                <div className="row" style={{"minHeight":"70vh"}}>
                    <div className="col-md-3">
                        <UserSidebar />
                    </div>
                    <div className="col-md-8 mt-5">
                        <h2>Welcome to User Dashboard</h2>
                        <h4>You can manage your property and contracts from here.</h4>
                    </div>
                </div>
                </div>
            <Footer />
        </>
    )
}


export default UserDashboard
