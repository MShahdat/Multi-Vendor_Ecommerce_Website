import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Compare from '../Components/Compare';
import Footer from '../Components/Footer';
import HeaderSignin from '../Components/HeaderSignin';
const ComparePage = () => {
    return (
        <div>
            <HeaderSignin></HeaderSignin>
            <NavBar></NavBar>
            <Compare></Compare>
            <Footer></Footer>
        </div>
    );
};

export default ComparePage;