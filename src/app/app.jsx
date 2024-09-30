import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/home/home';
import Shop from '../pages/shop/shop';
import About from '../pages/about/about';
import Contact from '../pages/contact/contact';


const App = () => {

    const navbarRef = useRef(null);
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect( () => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, []);

    return(
        <Router>
            <div className='app'>
                <div ref={navbarRef}>
                    <Navbar/>
                </div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    )
};

export default App