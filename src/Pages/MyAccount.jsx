import React from 'react';
import Header from '../Components/Header';
import AccountHeroSection from '../Components/AccountHeroSection';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import HeaderSignin from '../Components/HeaderSignin';

const MyAccount = () => {
    return (
        <div>
            <HeaderSignin></HeaderSignin>
            <NavBar></NavBar>
            <AccountHeroSection></AccountHeroSection>
            <Footer></Footer>
        </div>
    );
};

export default MyAccount;