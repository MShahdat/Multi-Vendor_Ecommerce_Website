import React from 'react';
import HeaderSignin from '../Components/HeaderSignin';
import NavBar from '../Components/NavBar';
import DashboardProducts from '../Components/DashboardProducts';
import Footer from '../Components/Footer';

const DashboardProductsV = () => {
    return (
        <div>
            <HeaderSignin></HeaderSignin>
            <NavBar></NavBar>
            <DashboardProducts></DashboardProducts>
            <Footer></Footer>
        </div>
    );
};

export default DashboardProductsV;