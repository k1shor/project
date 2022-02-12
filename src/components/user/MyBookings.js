import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../auth'
import Nav from '../layout/Nav'
import Footer from '../layout/Footer'
import UserSidebar from '../auth/UserSidebar'
import { getBookings } from '../admin/apiAdmin'
import { Link } from 'react-router-dom'

const MyBookings = () => {
    const token = isAuthenticated()
    const [bookings, setBookings] = useState([])

    const loadBookings = () => {
        getBookings(token).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                setBookings(data)
            }
        })
    }

    useEffect(() => {
        console.log(token)
        loadBookings()
    }, [])

    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <UserSidebar />
                    </div>
                    <div className="col-md-8 mt-5">
                        <div className='h2 text-center text-info'>Bookings</div>
                        <hr />
                        <table className="text-center table table-bordered table-secondary align-middle">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Image</th>
                                    <th>Property Title</th>
                                    <th>Location</th>
                                    <th>Price</th>
                                    <th>Listing Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((listing, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td><img src={`http://localhost:5000/${listing.property_image}`} alt="" className="img-fluid" width="130" /></td>

                                        <td>{listing.property_title}</td>
                                        <td>{listing.property_location}</td>
                                        <td>{listing.property_price}</td>
                                        <td>{listing.listing_type}</td>

                                        <td>
                                            <Link to={`/user/booking/details/${listing._id}`} className="btn btn-info">View Booking</Link>
                                            <Link to={`/user/booking/delete/${listing._id}`} className="btn btn-danger">Cancel Booking</Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>



                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyBookings
