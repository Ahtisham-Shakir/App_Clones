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

                    <Product id={1} title={'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'} image={'https://m.media-amazon.com/images/P/B07C7M8SX9.01._SCLZZZZZZZ_SX500_.jpg'} price={25} rating={5} />

                    <Product id={2} title={'fisca Remote Control Dog, RC Robotic Stunt Puppy Voice Control Toys Handstand Push-up Electronic Pets Dancing Programmable Robot'} image={'https://m.media-amazon.com/images/I/51-nvbjP8EL._AC_SL1200_.jpg'} price={700} rating={5} />
                    
                </div>
                <div className='home__row'>

                    <Product id={3} title={'Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking'} image={'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'} price={135} rating={5} />

                    <Product id={4} title={'Echo Glow - Multicolor smart lamp for kids, a Certified for Humans Device – Requires compatible Alexa device'} image={'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24'} price={249} rating={5} />

                    <Product id={5} title={'MSI GE76 Raider 144 Hz Gaming Laptop 8-Core Intel i7-11800H 32GB DDR4 1TB NVMe SSD NVIDIA GeForce RTX3060 6GB'} image={'https://m.media-amazon.com/images/I/617fteEclkL._AC_SL1200_.jpg'} price={699} rating={5} />

                </div>
                <div className='home__row'>

                    <Product id={6} title={'Philips 346E2CUAE 34" Curved Frameless, UltraWide QHD 3440x1440,100Hz, 121% sRGB, 1ms MPRT, USB-C Docking, MultiView PIP/PBP, Height Adjustable, 4Yr Advance Replacement, Black'} image={'https://m.media-amazon.com/images/I/61ZxtUJI68L._AC_SL1181_.jpg'} price={419} rating={5} />

                </div>
            </div>

        </>
    )
}

export default Home