import React from 'react'
import logo from '../Assets/logo.ico'
import { Link } from 'react-router-dom'

function Nav({cartValue}) {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid nav-bar">
                <Link className="navbar-brand"  ><img src={logo} style={{'width':'5rem',"borderRadius":"15px"}}  alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Nav option */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link active" aria-current="page" >HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-link" >SHOP</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link" >ABOUT-US</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link" >CONTACT-US</Link>
                        </li>
                    </ul>
                    {/* Login icon */}
                    <div className='d-flex gap-3 h4 me-4'>
                        <form className="d-flex gap-3">
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Cart<i class="fa-solid text-black fa-cart-shopping"></i>
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartValue}</span>
                            </button>
                            <button className="btn btn-outline-dark" type="submit">
                                <Link to='/sign-in' className='text-decoration-none login' ><i className="fa-solid fa-user p-1"></i>LOG IN</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Nav