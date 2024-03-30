import { useMediaQuery } from '@/helpers/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import Button from '../shared/button'

const HeroBanner = () => {
    const isMobileView = useMediaQuery("(max-width: 425px)");
    const handleClick = () => {
        alert('Hero Report claim click')

    }
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 bg-[#C81E1E] px-[12px] lg:px-[48px] rounded-[10px] '>
            <div className=' my-[35px] lg:my-[72px]'>
                <h1 className='text-[30px] lg:text-[48px] text-[#fff] font-bold uppercase mb-[31px] leading-[36px] lg:leading-[55px]'>Get affordable, <br /> same-day coverage <br /> in no time.</h1>
                <p className='text-[16px] text-[#fff] mb-[32px]'>With roots over a century deep in the birthplace of the automobile {isMobileView ? <br /> : ''} industry, USA Underwriters has the knowledge and expertise to help tailor {isMobileView ? <br /> : ''} a policy to suit your lifestyle, your budget, and your priorities.</p>
                <div>
                    <Button text='Report A Claim' variant='info' onClick={handleClick} />
                    <Link href='#' className='text-[#fff] text-[16px] ml-[25px]'>Learn More <HiArrowLongRight color='#fff' size='26px' className=' inline-block' /></Link>
                </div>
            </div>
            <div className='hidden lg:flex justify-center'>
                <Image src='/assets/man.png' width={329} height={505} alt='Man' />
            </div>
        </div>
    )
}

export default HeroBanner