import React, { useState } from 'react';
import Image from 'next/image';
import { MenuOutlined } from '@ant-design/icons';

interface NavProps {
    // Define your component props here
}

const Nav: React.FC<NavProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex flex-col sm:flex-row justify-between items-center p-4 border-t-4 border-blue-700 shadow-lg'>
            <div className='flex items-center justify-between w-full sm:w-auto'>
                <Image className="p-2" src='/logo.jpg' alt='logo' width={80} height={80} />
                <button 
                    className='sm:hidden p-2'
                    onClick={toggleMenu}
                >
                    <MenuOutlined className='text-2xl' />
                </button>
            </div>
            <div className={`flex-col sm:flex-row flex ${isOpen ? 'flex' : 'hidden'} sm:flex w-full sm:w-auto mt-4 sm:mt-0`}>
                <ul className='flex flex-col sm:flex-row w-full sm:w-auto'>
                    <li className='mx-2 my-1 sm:my-0'>Home</li>
                    <li className='mx-2 my-1 sm:my-0'>Account Details</li>
                    <li className='mx-2 my-1 sm:my-0'>Contact</li>
                </ul>
            </div>
            <div className='mt-4 sm:mt-0'>
                <p>📞 +91 84205 76740</p>
            </div>
        </nav>
    );
}
export default Nav;
