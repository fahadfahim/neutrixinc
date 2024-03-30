import { CardIcon } from '@/assets';
import React, { FC } from 'react'
interface CardI {
    title: string;
    subtitle: string;
}
const Card: FC<CardI> = ({ title, subtitle }) => {
    return (
        <div className='py-[18px] lg:py-[50px]  px-[18px] lg:px-[42px] rounded-[17px] border shadow-sm'>
            <div className='w-[62px] h-[62px] rounded-full bg-[#E5E7EB] flex justify-center items-center'>
                <CardIcon />
            </div>
            <h6 className='text-[20px] text-[#111928] font-semibold my-[20px]'>{title}</h6>
            <p className='text-[16px] text-[#6B7280] text-justify'>{subtitle}</p>
        </div>
    )
}

export default Card