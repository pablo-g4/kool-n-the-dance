import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/img/logo2.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar2 = () => {
  return (
    <nav className="h-16 nav flex items-center justify-between px-6 lg:px-60">
      <NavLink to="/">
        <a className="flex items-center justify-center">
          <img src={logo} className="navbar-logo" />
        </a>
      </NavLink>
      <span className="flex">
            <>
              <a className="pointer px-2 py-1.5 text-md font-bold flex">
                <span className="hidden sm:block">
                  Deposit
                </span>
              </a>
              <a className="pointer connectbtn px-2 py-1.5 text-md font-bold flex">
                <span className="hidden sm:block" >
                  Logout
                </span>
              </a>
            </>
            :
            <a className="pointer connectbtn px-2 py-1.5 text-md font-bold flex">
              <span className="hidden sm:block">
                Connect Wallet
              </span>
            </a>
        
      </span>
    </nav>
  );
}

export default Navbar2;
