'use client'
import { useMediaQuery } from '@/helpers/helper';
import Image from 'next/image'
import React from 'react'
import Button from '../shared/button';

const ReportClaim = () => {
  const isMobileView = useMediaQuery("(max-width: 425px)");
  const handleClick = () => {
    alert('Secondary Report Claim clicked')
  }
  return (
    <div className=' lg:relative mb-[70px]'>
      <div className="img-container w-full h-[514px] hidden lg:block relative">
        <Image src='/assets/women.png' fill alt='Women' />
      </div>
      <div className=' mx-auto w-[347px] lg:w-[461px] h[223px] px-[30px] pt-[28px] pb-[20px] rounded-[10px] lg:absolute bottom-[45px] xl:left-[121px] lg:left-[58px]  bg-[#C81E1E]'>
        <h6 className='text-[18px] font-bold text-[#fff] mb-[20px]'>Obtain cost-effective same-day insurance coverage quickly.</h6>
        <p className='text-[#fff] font-medium text-[12px] mb-[18px]'>Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna leo. Etiam enim varius dictum amet hac imperdiet facilisis malesuada.</p>
        <Button text='Report Claim' onClick={handleClick} variant='secondary' />

      </div>
    </div>
  )
}

export default ReportClaim