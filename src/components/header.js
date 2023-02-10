import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLogo from '../assets/svg/mainLogo';

const Header = () => {

    const navigate = useNavigate();

    const setLink = (link) => {
        navigate(link)
    };

    const navItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

    return (
        <header className='flex justify-between px-14 lg:px-24 py-4 fixed top-0 min-w-full backdrop-blur-md z-10'>
            <div 
                className='cursor-pointer' 
                onClick={() => setLink('/')}>
                <MainLogo/>
            </div>

                {<nav className='flex justify-center gap-10'>
                    {navItems.map((val, i) => <div
                    key={i} 
                    className='cursor-pointer hover:text-mainMagenta' 
                    onClick={() => setLink(val)}>
                    {val}
                    </div>)}
                </nav>}
        </header>
    );
};

export default Header;