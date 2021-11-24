import React from 'react'
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute'
import Home from '../../screens/home/Home.jsx'
import SignUp from '../../screens/signup/SignUp';
import SignIn from '../../screens/signin/SignIn.jsx'



const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/' element={<Home />}></Route> */}
                <Route path='/' element={(<PrivateRoute ><Home /></PrivateRoute>)} />
                <Route path='/signin' element={(<PublicRoute ><SignIn /></PublicRoute>)} />
                <Route path='/signup' element={(<PublicRoute ><SignUp /></PublicRoute>)} />
            </Routes>
        </Router>
    )
}

export default MainRoutes

