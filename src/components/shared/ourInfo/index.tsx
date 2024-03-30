'use client'
import React, { FC } from 'react'
import Button from '../button';
interface OurInfoI {
    motto?: string;
    title?: string;
    info: string;
    isButton?: boolean;
    buttonText?: string;
    onClick?: () => void;
}
const OurInfo: FC<OurInfoI> = ({ motto, title, isButton, buttonText, info, onClick }) => {

    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2">
            <div className={`left-side ${isButton ? 'text-center' : 'text-start'} lg:text-start`}>
                {motto && <h4 className='text-[16px] leading-[20px] text-[#374151] font-medium'>{motto}</h4>}
                {title && <h3 className={`text-[20px] lg:text-[30px] uppercase font-semibold mb-0 lg:mb-[24px] ${isButton ? 'text-[#111928]' : 'text-[#C81E1E]'}`}>{title}</h3>}
                {isButton &&
                    <Button text={buttonText} onClick={onClick} variant='faq-primary' />
                }
            </div>
            <div className="text-[12px] lg:text-[16px] mb-0 text-[#6B7280] font-medium text-justify">{info}</div>
        </div>
    )
}

export default OurInfo