import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './navbar.css'
import { isAuthenticated } from '../auth'
import { signout } from '../auth'
const Nav = ({ history }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row navbar-header d-flex align-items-center">
                    <div className="col-md-3"><Link className="navbar-brand text-white" to="/">GharJagga.Com</Link></div>
                    <div className="col-md-6">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <ul className="d-flex list-unstyled justify-content-evenly pt-2">
                            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                                <><li className="list-unstyled mt-2"><Link to="/admin/dashboard">dashboard</Link></li>
                                    <button className="btn btn-outline-warning mt-2"
                                        onClick={() => signout(() => {
                                            history.push('/')
                                        })}>Signout</button></>
                            )}
                            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                <><li className="list-unstyled  mt-2"><Link className="text-white text-decoration-none" to="/user/profile">profile</Link></li>
                                    <button className="btn btn-outline-warning mt-2"
                                        onClick={() => signout(() => {
                                            history.push('/')
                                        })}>Signout</button></>
                            )}
                            {!isAuthenticated() && (
                                <>
                                    <li className="px-2"><Link class="text-decoration-none" to="/signin">
                                        <i class="bi bi-box-arrow-in-left text-white fs-3"></i>
                                    </Link></li>
                                    <li><Link class="text-decoration-none" to="/signup">
                                        <i class="bi bi-person-plus text-white fs-3"></i>
                                    </Link></li>

                                </>
                            )}

                            <li><Link class="text-decoration-none" to="/cart">
                                <i class="bi bi-cart text-white fs-3"></i>
                            </Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-sub">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="#">Land</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white" to="#">Buildings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white" to="/customerservice">Others</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
