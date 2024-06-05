import React from 'react';

interface FooterProps {
    // Define your props here
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className='flex justify-center items-center bg-indigo-950 text-white mt-4'>
           <p className='p-4'> © 2024 The Kerala Lottery. All rights reserved.</p>
        </footer>
    );
};

export default Footer;