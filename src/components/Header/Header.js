import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='nav-link'>
            <a href="/order">Order</a>
            <a href="/order-inventory">Order Inventory</a>
            <a href="/review">Review</a>
            <a href="/login">Login</a>
            </div>
       
        </nav>
    );
};

export default Header;