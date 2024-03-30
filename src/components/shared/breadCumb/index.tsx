import Link from 'next/link';
import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BreadCumb = ({ path }: any) => {
    const finalPath = path.replace('-', ' ')
    return (
        <div className='flex items-center mb-[20px] lg:mb-[50px]'>
            <div className='flex items-center'>
                <HiMiniHome color='#374151' className='h-[20px] w-[20px] mr-[16px] text-[#374151] ' />
                <Link href='/' className='mr-[16px] text-[#374151] text-[14px]'>
                    Home
                </Link>

            </div>
            <div className='flex items-center'>
                <MdOutlineKeyboardArrowRight className='text-[18px]' />
                <Link href={`/${path}`} className='text-[#6B7280] text-[14px] capitalize ml-[14px]'>
                    {finalPath}
                </Link>
            </div>
        </div>
    )
}

export default BreadCumb