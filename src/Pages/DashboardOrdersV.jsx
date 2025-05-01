import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import DashboardOrders from '../Components/DashboardOrders';
import HeaderSignin from '../Components/HeaderSignin';

const DashboardOrdersV = () => {
    return (
        <div>
            <HeaderSignin></HeaderSignin>
            <NavBar></NavBar>
            <DashboardOrders></DashboardOrders>
            <Footer></Footer>
        </div>
    );
};

export default DashboardOrdersV;