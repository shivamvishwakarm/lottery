import React from 'react';
import Image from 'next/image';

interface NavProps {
    // Define your component props here
}

const Nav: React.FC<NavProps> = () => {
    return (
        <nav className='flex justify-around border-t-4 border-blue-700 items-center shadow-lg'>
            <div className='flex items-center justify-center bg-blend-multiple'>
                <Image className="p-2" src='/logo.jpg' alt='logo' width={300} height={300} />
            </div>
            <div className='flex'>
                <ul className='flex'>
                    <li className='mx-2'>Home</li>
                    <li className='mx-2'>Account Details</li>
                    <li className='mx-2'>Contact</li>
                </ul>
            </div>
            <div className=''>
                <p>📞 +91 7894561230</p>
            </div>
        </nav>
    );
}
export default Nav;