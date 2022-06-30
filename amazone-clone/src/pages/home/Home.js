import React from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import Product from '../../components/product/Product';

function Home() {
    return (
        <>
            <Header />
            <div className='home'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='banner' />

                <div className='home__row'>

                    <Product id={1} title={'The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback'} image={'https://i.ibb.co/ZYW3VTp/brown-brim.png'} price={25} rating={5} />

                    <Product id={1} title={'The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback'} image={'https://i.ibb.co/ZYW3VTp/brown-brim.png'} price={25} rating={5} />
                    
                </div>
                <div className='home__row'>

                    <Product id={1} title={'The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback'} image={'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'} price={25} rating={5} />

                    <Product id={1} title={'The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback'} image={'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24'} price={25} rating={5} />

                    <Product id={1} title={'The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback'} image={'https://i.ibb.co/ZYW3VTp/brown-brim.png'} price={25} rating={5} />

                </div>
                <div className='home__row'>

                    <Product id={1} title={'The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback'} image={'https://i.ibb.co/ZYW3VTp/brown-brim.png'} price={25} rating={5} />

                </div>
            </div>

        </>
    )
}

export default Home