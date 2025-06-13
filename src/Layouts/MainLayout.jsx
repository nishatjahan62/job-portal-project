import React from 'react';
import Navbar from '../Componenets/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componenets/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;