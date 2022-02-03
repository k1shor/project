import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, signout } from '../auth'

const UserSidebar = ({ history }) => {
    const { user: { fname, email } } = isAuthenticated()
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
                <Link to="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">User Dashboard</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <Link to="#" className="nav-link text-white">

                            Add Property for sale
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link text-white">

                            Add Property for rent
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/allproduct" className="nav-link text-white">

                            View all Listings
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/" className="nav-link text-white">

                            Find Property
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>{fname}</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><Link className="dropdown-item" to="#">{email}</Link></li>
                        <li><Link className="dropdown-item" to="#">Settings</Link></li>
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                            {isAuthenticated() && isAuthenticated().user.role == 0 && (
                                <><li className="list-unstyled  mt-2"><Link className="text-white text-decoration-none" to="/user/profile">profile</Link></li>
                                    <button className="btn btn-outline-warning mt-2"
                                        onClick={() => signout(() => {
                                            history.push('/')
                                        })}>Signout</button></>
                            )}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default withRouter(UserSidebar)
