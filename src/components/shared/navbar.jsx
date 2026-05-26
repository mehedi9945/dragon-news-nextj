
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvater from "@/assets/user.png";
import NavLink from './navlink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-6'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-700 gap-4'>
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/about">About</NavLink>
                </li>
                <li>
                    <NavLink href="/career">Career</NavLink>
                </li>
            </ul>

            <div className='flex items-center gap-2'>
                <Image src={userAvater} width={40} height={40} alt="User Avater" />
                <button className='btn bg-gray-700 text-white'>
                    <Link href="/login">Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;