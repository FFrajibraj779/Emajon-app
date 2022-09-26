import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {


 let total=0;
 let shipping =0;
 for(const product of cart){
   total=total + product.price;
   shipping =shipping +product.shipping;
 }

const tax = (total*0.1).toFixed(2);

const grandTotal= total + shipping + parseFloat(tax);

 return (
        <div className='cart'>
              <h5>order summary</h5>
            <h6>selected item:{cart.length}</h6>
            <p>Total Price:${total}</p>
            <p>Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
             <p>Grand Total:${grandTotal.toFixed(2)}</p>

        </div>
    );
};

export default Cart;