import React from 'react'
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";

import Home from '../../screens/home/Home'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Create from '../../screens/home/Create';



const MainRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Create />} />
            </Routes>
            <Footer/>
            
        </Router>
    )
}

export default MainRoutes

