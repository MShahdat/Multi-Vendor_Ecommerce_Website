import React from 'react';
import Header from '../Components/Header';
import NabBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Dashboard from '../Components/Dashboard';
import HeaderSignin from '../Components/HeaderSignin';

const DashboardV = () => {
    return (
        <div>
            <HeaderSignin></HeaderSignin>
            <NabBar></NabBar>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    );
};

export default DashboardV;