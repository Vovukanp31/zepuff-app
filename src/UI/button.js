import React from 'react';

const Button = ({title, onClick}) => {
    return (
        <button className='bg-mainPurple text-white hover:bg-mainMagenta hover:text-black px-10 py-3 max-w-fit rounded-md transition-colors' title={title} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;