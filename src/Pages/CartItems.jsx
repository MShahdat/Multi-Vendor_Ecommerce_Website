import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import CartItemsHero from '../Components/CartItemsHero'
import RecommendedProducts from '../Components/RecommendedProducts';
import Footer from '../Components/Footer';
import HeaderSignin from '../Components/HeaderSignin';

const CartItems = () => {
    return (
        <div>
            <HeaderSignin></HeaderSignin>
            <NavBar></NavBar>
            <CartItemsHero></CartItemsHero>
            <Footer></Footer>
        </div>
    );
};

export default CartItems;