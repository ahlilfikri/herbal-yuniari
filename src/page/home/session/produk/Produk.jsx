import React, { Fragment } from "react";
import './Produk.css';


const Produk = () => {
    return (
        <Fragment>
            <div className="produk-container">
                <div className="top-container">
                    <div className="left-contain">
                        <h1>PRODUK UNGGULAN KAMI</h1>
                        <div className="card-wrapper">
                            <div className="card">
                                <img src="produk1.png" alt=""/>
                                <div className="card-title">
                                    <h1>Wedang Uwuh</h1>
                                </div>
                            </div>
                            <div className="card">
                                <img src="produk2.png" alt=""/>
                                <div className="card-title">
                                    <h1>Jahe Merah Premium</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-contain">
                        <h1>PRODUK TERLARIS BULAN INI</h1>
                        <div className="card-wrapper">
                            <div className="card">
                                <img src="produk3.png" alt=""/>
                                <div className="card-title">
                                    <h1>Wedang Uwuh</h1>
                                </div>
                            </div>
                            <div className="card">
                                <img src="produk4.png" alt=""/>
                                <div className="card-title">
                                    <h1>Telang Siap Minum</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <h1>PRODUK BUNDLING MINGGU INI</h1>
                        <div className="card-wrapper">
                                <div className="card">
                                    <img src="bundling.png" alt=""/>
                                    <div className="card-body">
                                        <h1 className="card-title">Bundling Penurun Berat Badan</h1>
                                        <ul className="card-text">
                                            <li>Instan 150 gr</li>
                                            <li>Fitslim Siap Minum</li>
                                        </ul>
                                        <button>Hubungi Admin</button>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="bundling.png" alt=""/>
                                    <div className="card-body">
                                        <h1 className="card-title">Bundling Perawatan Kulit</h1>
                                        <ul className="card-text">
                                            <li>Instan 150 gr</li>
                                            <li>Kapsul Kulit Manggis</li>
                                        </ul>
                                        <button>Hubungi Admin</button>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="bundling.png" alt=""/>
                                    <div className="card-body">
                                        <h1 className="card-title">Bundling Peningkat Imun Tubuh</h1>
                                        <ul className="card-text">
                                            <li>Wedang Telang</li>
                                            <li>Wedang Pitu</li>
                                        </ul>
                                        <button>Hubungi Admin</button>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="bundling.png" alt=""/>
                                    <div className="card-body">
                                        <h1 className="card-title">Bundling Perawatan Asam Urat</h1>
                                        <ul className="card-text">
                                            <li>Kapsul Amufit</li>
                                            <li>Jamu Godog</li>
                                        </ul>
                                        <button>Hubungi Admin</button>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Produk;
