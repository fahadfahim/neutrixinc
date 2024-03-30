'use client'
import React from 'react'
import { HiClock } from "react-icons/hi2";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";
import FooterComponent from '../../shared/footerComponent';
import MobileFooter from './MobileFooter';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useMediaQuery } from '@/helpers/helper';

const Footer = () => {
  const isMobileView = useMediaQuery("(max-width: 426px)");

  const underWriter = [
    { title: 'NAIC # 30457' },
    { title: 'P.O. Box 2426' },
    { title: 'Rancho Cucamonga, CA, 91729' }
  ]
  const underwritingSupport = [
    {
      title: 'Monday - Friday, 9:00 AM - 6:00 PM ET',
      icon: <HiClock />
    },
    {
      title: '+1 (248) 541-2800',
      icon: <BsTelephoneFill />
    },
    {
      title: 'customerservices@underwriters.com',
      icon: <FaEnvelope />
    },
  ]
  const policySuspension = [
    {
      title: 'Monday - Friday, 9:00 AM - 6:00 PM ET',
      icon: <HiClock />
    }
  ]
  const customerService = [
    {
      title: 'Monday - Friday, 9:00 AM - 6:00 PM ET',
      icon: <HiClock />
    },
    {
      title: '+1 (248) 541-2800',
      icon: <BsTelephoneFill />
    },
    {
      title: 'customerservices@underwriters.com',
      icon: <FaEnvelope />
    },
  ]
  const claimAdministration = [
    {
      title: 'Monday - Friday, 9:00 AM - 6:00 PM ET',
      icon: <HiClock />
    },
    {
      title: '+1 (248) 541-2800',
      icon: <BsTelephoneFill />
    },
    {
      title: 'customerservices@underwriters.com',
      icon: <FaEnvelope />
    },
  ]
  const pipQualification = [
    {
      title: 'Monday - Friday, 9:00 AM - 6:00 PM ET',
      icon: <HiClock />
    },
    {
      title: '+1 (248) 541-2800',
      icon: <BsTelephoneFill />
    },
    {
      title: 'customerservices@underwriters.com',
      icon: <FaEnvelope />
    },
  ]

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <footer className=' relative'>
      <div className=' bg-[#1f2a37] py-[25px] lg:py-0 lg:pt-[55px]'>
        <div className=' container mx-auto hidden lg:block'>
          <div className=' grid grid-cols-3 justify-items-center '>
            <FooterComponent title="USA Underwriter & Support" data={underWriter} />
            <FooterComponent title="Underwriting Support" data={underwritingSupport} />
            <FooterComponent title="Policy Suspension and <br /> Coverage Approvals" data={policySuspension} />
            <FooterComponent title="Customer Service & Support" data={customerService} />
            <FooterComponent title="Claim Administration" data={claimAdministration} />
            <FooterComponent title="PIP Qualification Question and <br /> Submission for Coverage" data={pipQualification} />
          </div>

        </div>
        <div className='block lg:hidden'>
          <MobileFooter />
        </div>
      </div>
      <div className='bg-[#1f2a37] lg:bg-[#fff] py-[20px]'>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div>
            <div className='text-[#fff] lg:text-[#111928] text-[14px] text-center lg:text-start lg:text-[16px] mb-[10px] lg:mb-0'>Copyright 2022 USA Underwriters <span className=' font-semibold'>| Privacy Policy |</span><span className=' font-semibold'>Terms of Use</span></div>
          </div>
          <div>
            <p className='text-[#fff] lg:text-[#111928] text-[14px] lg:text-[16px]' >(Build by Neutrix - Powered by Neutrix System )</p>
          </div>
        </div>
      </div>
      <div>
        <button className='bg-[#C81E1E] px-3 py-2 absolute bottom-[66px] lg:bottom-[85px] right-[16px]' onClick={handleClick}>
          <MdOutlineKeyboardDoubleArrowUp color='#fff' />
        </button>
      </div>
    </footer>
  )
}

export default Footer