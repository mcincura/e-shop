import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {

    const [cartItems, setCartItems] = useState(420);

    return (
        <div className='main-navbar-container'>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <Link to="/">
                        <img src='./images/logo.png' alt='fake logo' />
                    </Link>
                    <Link to="/test">
                        <p>ALLADIN</p>
                    </Link>
                </div>
                <ul className='navbar-links'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                <div className='navbar-checkout'>
                    <div className='cart-container'>
                        <div className='main-cart-icon'>
                            <div className='cart-icon'>
                                <FaShoppingCart size={40} />
                            </div>
                            {cartItems > 0 && <span className='cart-count'>{cartItems}</span>}
                        </div>
                        <Link to="/cart" className='cart-text'>CART</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar