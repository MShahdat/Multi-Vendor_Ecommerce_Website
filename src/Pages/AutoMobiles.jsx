import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import AutoMobilesHero from '../Components/AutoMobilesHero';
import Footer from '../Components/Footer';

const AutoMobiles = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <AutoMobilesHero></AutoMobilesHero>
            <Footer></Footer>
        </div>
    );
};

export default AutoMobiles;