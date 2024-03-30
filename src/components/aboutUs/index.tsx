'use client'
import React from 'react'
import BreadCumb from '../shared/breadCumb'
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const AboutUs = () => {
    const url = usePathname();
    const pathname = url.replace('/', '')
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className=' text-[20px] lg:text-[36px] text-[#212529] font-medium mb-[10px] lg:mb-[24px]'>About Us</h1>
            <BreadCumb path={pathname} />
        </div>
    )
}

export default AboutUs