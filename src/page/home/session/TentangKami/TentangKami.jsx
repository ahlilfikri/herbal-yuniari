import React, { Fragment } from "react";
import './TentangKami.css';


const TentangKami = () => {
    return (
        <Fragment>
            <div className="tentangKami-container">
                <h1 className="title">TENTANG KAMI</h1>
                <div className="top-container">
                    <img src="struktur.png" alt="" />
                    <p>CV.TIMOER SENTOSA ( HERBAL YUNIARI ) berdiri sejak 24 September 2014. Perusahaan ini memproduksi aneka minuman herbal .Eksistensi dan komitmen kami membangun usaha ini terinspirasi dari minimnya kesadaran masyarakat sekitar akan potensi alam yang melimpah ,terutama hasil rempah – rempah. Oleh karena itu kami memberikan edukasi kepada masyarakat akan pentingnya pemanfaatan potensi alam tersebut untuk meningkatkan kesehatan dan Pendapatan guna meningkatkan kesejahteraan masyarakat. Ini kami wujudkan dengan membentuk komunitas jamu dikalurahan wareng yang sudah beranggotakan kurang lebih 100 ibu – ibu.</p>
                </div>
                <div className="mid-container">
                    <div className="left-contain">
                        <h1>VISI</h1>
                        <p>Menjadi Perusahaan Minuman Herbal yang bermutu dan mampu memberikan alternatif serta solusi dalam upaya meningkatkan kualitas kesehatan masyarakat dengan menghasilkan produk-produk herbal alami yang berkualitas, terjangkau dan aman untuk dikonsumsi</p>
                    </div>
                    <div className="right-contain">
                        <h1>MISI</h1>
                        <ol>
                            <li>Menjadi perusahaan minuman herbal berkualitas dengan tetap melestarikan warisan herbal nusantara dalam meningkatkan kualitas kesehatan masyarakat. </li>
                            <li>Meningkatkan pendapatan keluarga dengan pemanfaatan TOGA ( Tanaman Obat Keluarga ).</li>
                            <li>Membangun perusahaan herbal yang memberikan nilai ekonomis kepada masyarakat sekitarnya.</li>
                        </ol>
                    </div>
                </div>
                <div className="bottom-container">
                    <h1 className="title-bottom">KENAPA MEMILIH KAMI?</h1>
                    <div className="card-wrapper">
                        <div className="card">
                            <img src="amico.png" alt=""/>
                            <div className="card-title">
                                <h1>Bahan Baku Herbal Dari Masyarakat Dengan Kualitas Terbaik</h1>
                            </div>
                        </div>
                        <div className="card">
                            <img src="choose2.png" alt=""/>
                            <div className="card-title">
                                <h1>Produk Dengan 100% Bahan Herbal</h1>
                            </div>
                        </div>
                        <div className="card">
                            <img src="choose3.png" alt=""/>
                            <div className="card-title">
                                <h1>Diramu Oleh Tenaga Ahli Berpengalaman Puluhan Tahun di Bidang Herbal</h1>
                            </div>
                        </div>
                        <div className="card">
                            <img src="choose4.png" alt=""/>
                            <div className="card-title">
                                <h1>Diproses Higienis dibawah pengawasan profesional</h1>
                            </div>
                        </div>
                        <div className="card">
                            <img src="choose5.png" alt=""/>
                            <div className="card-title">
                                <h1>Dikemas Higienis dibawah pengawasan profesional</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partner-container">
                    <h1 className="title-partner">PARTNER KAMI</h1>
                    <div className="card-wrapper">
                        <div className="card">
                            <img src="partner1.png" alt=""/>
                            <div className="card-title">
                                <h1>Dinas Kelautan dan Perikanan Kabupaten Gunungkidul</h1>
                            </div>
                        </div>
                        <div className="card">
                            <img src="partner2.png" alt=""/>
                            <div className="card-title">
                                <h1>Dinas Perindustrian dan Perdagangan Kabupaten Gunungkidul</h1>
                            </div>
                        </div>
                        <div className="card">
                            <img src="partner2.png" alt=""/>
                            <div className="card-title">
                                <h1>Dinas Pertanian Kabupaten Gunungkidul</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TentangKami;
