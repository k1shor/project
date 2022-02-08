import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { isAuthenticated } from '../auth'
import { signout } from '../auth'
import { withRouter } from 'react-router-dom'

const Nav = ({ history }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row navbar-header d-flex align-items-center py-2">
                    <div className="col-md-3"><Link className="navbar-brand text-white" to="/">GharJagga.Com</Link></div>
                    <div className="col-md-6">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center">
                            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                <><Link to="/admin/dashboard"><button className='btn btn-outline-warning mt-2'> Dashboard</button></Link>
                                    <Link><button className="btn btn-outline-warning mt-2"
                                        onClick={() => signout(() => {
                                            history.push('/')
                                        })}>Signout <i className='bi bi-box-arrow-right'></i></button></Link></>
                            )}
                            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                                <><Link to="/user/profile"><button className='btn btn-outline-warning mt-2'> Profile</button></Link>
                                    <Link><button className="btn btn-outline-warning mt-2"
                                        onClick={() => signout(() => {
                                            history.push('/')
                                        })}>Signout <i className='bi bi-box-arrow-right'></i></button></Link></>
                            )}
                            {!isAuthenticated() && (
                                <>
                                    <div class="btn-group" >
                                        <Link class="btn btn-warning text-decoration-none" to="/signin">LOGIN&nbsp;&nbsp;
                                            <i class="bi bi-box-arrow-in-left"></i>
                                        </Link>
                                        <Link class="btn btn-warning text-decoration-none" to="/signup">REGISTER&nbsp;&nbsp;
                                            <i class="bi bi-person-plus"></i>
                                        </Link>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>

                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-sub">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white" to="/buy">Buy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white" to="/lease">Rent</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white" to="/">Consultation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white" to="/contact">Contact Us</Link>
                            </li>
                            

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Nav)
