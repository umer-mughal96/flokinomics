import React from 'react'
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";

import Home from '../../screens/home/Home'
import Header from '../../components/Header'



const MainRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
              
            </Routes>
            
        </Router>
    )
}

export default MainRoutes

