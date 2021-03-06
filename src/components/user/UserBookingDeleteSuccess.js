import React from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import UserSidebar from '../auth/UserSidebar'
const UserDashboardDeleteSuccess = () => {

    return (
        <>
            <Nav />
            <div className='container-fluid'>
                <div className="row" style={{"minHeight":"70vh"}}>
                    <div className="col-md-3">
                        <UserSidebar />
                    </div>
                    <div className="col-md-8 mt-5 text-warning">
                        <h4>Booking Cancelled Successfully</h4>
                    </div>
                </div>
                </div>
            <Footer />
        </>
    )
}


export default UserDashboardDeleteSuccess
