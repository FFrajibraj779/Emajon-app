import React from 'react';

const Cart = ({cart}) => {
 console.log(cart);









    return (
        <div>
            <h1>this is cart </h1>
            <h1>order summary {cart.length}</h1>
        </div>
    );
};

export default Cart;