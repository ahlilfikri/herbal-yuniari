import React, { Fragment } from "react";
import './NavBar.css';


const NavBar = () => {
    return (
        <Fragment>
            <div className="navBar-container">
                <div className="logo">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="nav-links">
                    <ul>
                        <li>BERANDA</li>
                        <li>TENTANG KAMI</li>
                        <li>PRODUK</li>
                        <li>P4S</li>
                        <li>HUBUNGI KAMI</li>
                    </ul>    
                </div> 
            </div>
        </Fragment>
    )
}

export default NavBar;
