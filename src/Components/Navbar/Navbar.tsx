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

                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <div className="navbar-nav2 ">
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
                                <Link to="/news" className='none'>
                                    <a className="nav-link nav-redirect" >Actualités</a>
                                </Link>
                            </li>
                        </div>

                    </div>
                    <div className='navicon navbar-collapse collapse navbar-collapse text-center' id="navbarSupportedContent">
                        <a href='https://www.facebook.com/people/Kool-N-the-dance/100063903799414/' target='blank'> <SocialIcon network="facebook" bgColor="#FFFFFF" style={{ height: 30, width: 30, marginTop: "4%" }} /> </a>
                    </div>
                </nav>
            </Link>
        </div>
    )
}

export default Navbar