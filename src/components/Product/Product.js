import React from 'react';
import './Product.css'

const Product = (probs) => {
    // console.log(probs);
  
    const{product, addTocart} =probs;
    const{name, img, price, seller, ratings}=product;
    // console.log(product);
    return (<div>
<div className='single-product'>
         <img src={img} alt="" />
         <h2>{name}</h2>
         <p>price:${price}</p>
          <div>
            <p>{seller}</p>
            <p>{ratings}starts</p>
          </div>

          <div className='cart-btn'>

          <button onClick={()=>addTocart(product)}>Add To Cart <i class="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
       
    </div>
        
    );
};

export default Product;