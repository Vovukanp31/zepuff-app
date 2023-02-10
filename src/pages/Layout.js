import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const Layout = () => {
    return (
        <div className='min-h-screen min-w-full overflow-hidden'>
        <Header/>
        <div className='mt-28'><Outlet/></div>
        </div>
    );
};

export default Layout;