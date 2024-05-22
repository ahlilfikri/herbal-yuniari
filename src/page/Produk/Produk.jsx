import { Fragment } from "react"
import Footer from '../../components/footer/Footer'

const Produk = () => {
    return (
        <Fragment>
            <div className="produk-wrapper">
                <section id='beranda-produk'>
                    <Beranda/>
                </section>
                <section id='tentangKami'>
                    <TentangKami /> 
                </section>
                <section id='produk'>
                    <Produk />
                </section>
                <section id="hubungiKami">
                    <Footer />
                </section>
            </div>
        </Fragment>
    )
}

export default Produk