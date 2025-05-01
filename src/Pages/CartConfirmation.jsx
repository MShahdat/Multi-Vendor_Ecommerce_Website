import React from 'react';
import CartSuccess from '../Components/CartSuccess';
import RecommendedProducts from '../Components/RecommendedProducts';
import RecommendedC from '../Components/RecommendedC';

const CartConfirmation = () => {
    return (
        <div>
            <CartSuccess></CartSuccess>
            <RecommendedC></RecommendedC>
        </div>
    );
};

export default CartConfirmation;