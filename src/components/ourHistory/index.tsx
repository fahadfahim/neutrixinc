import Image from 'next/image'
import React from 'react'
import HistoryDetails from './HistoryDetails'

const OurHistory = () => {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-8 mb-[10px] lg:mb-[56px] '>
        <div className=' lg:col-span-1'>
          <p className='text-[16px] text-[#374151] font-medium !m-0 leading-[18px] hidden lg:block'>About Us</p>
          <h6 className='text-[20px] lg:text-[30px] font-semibold text-[#111928] leading-[32px]'>History</h6>
        </div>
        <div className='lg:col-span-7'>
          <p className='text-[12px] lg:text-[16px] text-[#6B7280] font-medium'>In 1962, the Southern Michigan Mutual Insurance Company celebrated it’s 100th year in continuous operation and was presented with a plaque by the State of Michigan as a Centenary Business.</p>
        </div>
      </div>
      <HistoryDetails />
    </>
  )
}

export default OurHistory