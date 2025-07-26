// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-black text-white px-4">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
