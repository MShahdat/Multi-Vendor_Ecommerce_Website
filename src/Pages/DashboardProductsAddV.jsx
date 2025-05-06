import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import DashboardProductsAdd from '../Components/DashboardProductsAdd';
import Footer from '../Components/Footer';

const DashboardProductsAddV = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <DashboardProductsAdd></DashboardProductsAdd>
            <Footer></Footer>
        </div>
    );
};

export default DashboardProductsAddV;