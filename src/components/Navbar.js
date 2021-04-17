import React from "react"
import myLogo from "../IMG_6930.jpg"
// import {Link} from "react-scroll";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";




export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container">
                <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className ="logo" src = {myLogo} alt ="logo"/></a>  
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link smooth ={true} to="/" className="nav-link active" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth ={true} to="/about"className="nav-link" href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth ={true} to="/services" className="nav-link" href="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth ={true} to="/experience" className="nav-link" href="/experience">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio" >Portfolio</Link>
                    </li>
                    </ul>
                
                </div>
                </div>
            </div>
      </nav>
    )
}

export default Navbar