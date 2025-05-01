import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DailyDeals from '../Components/DailyDeals';
import TopSellers from '../Components/TopSellers';
import CountdownBox from '../Components/CountdownBox';
import Banner from '../Components/Banner';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import New from '../Components/New';

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Header></Header>
            <NavBar></NavBar>
            <Banner></Banner>
            <DailyDeals></DailyDeals>
            <New></New>
            <TopSellers></TopSellers>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;