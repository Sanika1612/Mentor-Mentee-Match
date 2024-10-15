import React from 'react';
import logo from '../Assets/circle-cropped-removebg-preview.png'
import { NavLink, Link } from 'react-router-dom'

const  Header = (props) => {

    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky top">
            <div className="container-fluid">
                <a className="navbar-brand"><img src={logo} alt = "Ngo Logo" style={{height: "40px"}} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            {props.isLoggedIn &&  <Link className="nav-link" to="/dashboard" >Dashboard</Link>}
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/aboutus" >About Us</Link>

                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contactus" >Contact us</Link>
                        </li>
                    </ul>
                    <div className="navbar-nav ms-auto">
                        {!(props.isLoggedIn) &&
                            <>
                                
                                <Link to="/login"  className="nav-link" >Login</Link>
                                <Link to="/signup" className="nav-link"  >Sign Up</Link>
            
                            </>
                        }
                        {props.isLoggedIn && <Link to="/logout"  className="nav-link" >Logout</Link>}
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Header;