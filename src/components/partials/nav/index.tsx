'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import MobileNavMenu from './MobileNavMenu';
import Button from '@/components/shared/button';

interface NavLink {
    href: string;
    label: string;
}
const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'Policyholder Portal' },
];
const Nav = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false)
    const handleClick = () => {
        alert('Nav report claim click')
    }
    return (
        <nav className='shadow-md mb-[38px]'>
            <div className=' container mx-auto flex justify-center lg:justify-between items-center py-[20px] relative'>
                <div>
                    <Image src='/assets/navicon.png' width={90} height={44} alt='USA Under writer' />
                </div>
                <button className='block lg:hidden absolute right-[37px] cursor-pointer' onClick={() => setNavOpen(!navOpen)}>
                    {navOpen ? <LiaTimesSolid className='h-[28px] w-[28px] ' /> : <HiOutlineMenuAlt3 className='h-[28px] w-[28px] ' />}
                </button>

                <ul className='lg:flex justify-between items-center hidden '>
                    {navLinks.map((link, index) => (
                        <li className='py-[10px] px-[20px] mr-[24px]' key={index}>
                            <Link href={link.href} className='font-medium text-[#111928]'>{link.label}</Link>
                        </li>
                    ))}
                    <Button variant='primary-sm' onClick={handleClick} text='Report A claim' />
                </ul>
            </div>
            {navOpen && <MobileNavMenu />}
        </nav>
    )
}

export default Nav