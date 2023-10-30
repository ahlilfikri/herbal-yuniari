import React, { Fragment } from "react";
import './Beranda.css';
import NavBar from "../../../../components/navBar/NavBar"

const Beranda = () => {
    return (
        <Fragment>
            <div className="beranda-container">
                <NavBar></NavBar>
                <div className="header">
                    <div className="header-text">
                        <p>selamat datang di</p>
                        <h1>CV TIMOER SENTOSA</h1>
                    </div>
                    <div className="header-button">
                        <button className="tentangKami">Tentang Kami</button>
                        <button className="produkUnggulan">Produk Unggulan</button>
                    </div>
                </div>
                <div className="image-background">
                    <img src="/Top.png" alt="" />
                </div>
            </div>
            
        </Fragment>
    )
}

export default Beranda;
