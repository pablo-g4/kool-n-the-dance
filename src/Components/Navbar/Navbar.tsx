import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">
                <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">KOOL 'N' THE DANCE</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/planning" className='none'>
                                    <a className="nav-link nav-redirect" >Planning <span className="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li className="nav-item" >
                                <Link to="/cours" className='none'>
                                    <a className="nav-link nav-redirect" >Cours</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/galerie" className='none'>
                                    <a className="nav-link nav-redirect" >Galerie</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/actualite" className='none'>
                                    <a className="nav-link nav-redirect" >Actualité</a>
                                </Link>
                            </li>
                            <li>
                                <a> <SocialIcon network="tiktok" bgColor="#FFFFFF" style={{ marginLeft: "150px", marginRight: "25px", height: 30, width: 30, marginTop: "2%" }} /> </a>
                            </li>
                            <li>
                                <a> <SocialIcon network="twitter" bgColor="#FFFFFF" style={{ marginRight: "25px", height: 30, width: 30, marginTop: "3%" }} /> </a>
                            </li>
                            <li>
                                <a> <SocialIcon network="facebook" bgColor="#FFFFFF" style={{ marginRight: "25px", height: 30, width: 30, marginTop: "3%" }} /> </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Link>
        </div>
    )
}

export default Navbar