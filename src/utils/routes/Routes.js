import React from 'react'
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";

import Home from '../../screens/home/Home'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Create from '../../screens/home/Create';
import BuyFlokin from '../../screens/home/Buy Flokin/BuyFlokin';
import MarketPlace from '../../screens/marketPlace/MarketPlace';
import About from '../../screens/About/About';



const MainRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/marketplace' element={<MarketPlace />} />
                <Route path='/create' element={<Create />} />
                <Route path='/buyflokin' element={<BuyFlokin />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer/>
            
        </Router>
    )
}

export default MainRoutes

