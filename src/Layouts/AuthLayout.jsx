import React from 'react';
import Navbar from '../Componenets/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componenets/Footer/Footer';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default AuthLayout;