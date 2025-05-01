import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import CheckoutHero from '../Components/CheckoutHero'
import Footer from '../Components/Footer';

const CheckoutPage = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <CheckoutHero></CheckoutHero>
            <Footer></Footer>
        </div>
    );
};

export default CheckoutPage;