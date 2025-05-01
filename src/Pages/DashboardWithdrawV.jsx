import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import DashboardBody from '../Components/DashboardWithdraw';
import Footer from '../Components/Footer';
import HeaderSignin from '../Components/HeaderSignin';

const DashboardWithdrawV = () => {
    return (
        <div>
            <HeaderSignin></HeaderSignin>
            <NavBar></NavBar>
            <DashboardBody></DashboardBody>
            <Footer></Footer>
        </div>
    );
};

export default DashboardWithdrawV;