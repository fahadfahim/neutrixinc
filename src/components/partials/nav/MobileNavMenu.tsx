import Link from 'next/link'
import React from 'react'

const MobileNavMenu = () => {
    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about-us', label: 'About Us' },
        { href: '#', label: 'Contact' },
        { href: '#', label: 'Report a Claim' },
        { href: '#', label: 'Policyholder Portal' }
    ];
    return (
        <div className=' absolute w-full h-screen top-[86px] bg-[#000000a4] z-50 animate-fadeIn'>
            <ul className='flex flex-col bg-[#C81E1E]'>
                {menuItems.map((menuItem, index) => (
                    <li key={index} className='px-[20px] py-[10px] mb-[10px]'>
                        <Link href={menuItem.href} className='text-[#fff] text-[16px] font-medium'>
                            {menuItem.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileNavMenu