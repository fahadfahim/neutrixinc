import Image from 'next/image'
import React from 'react'

const HistoryDetails = () => {
    return (
        <>
            <div className='h-[151px] lg:h-[496px] mb-[10px] lg:mb-[50px] '>
                <img src='/assets/menandwomen.png' alt='men womne' className='h-full w-full' />
            </div>
            <HistoryParagraph text='In 2013, Southern Michigan Mutual Insurance Company became USA Underwriters. The name may have changed, but the dedication to our customers, our drive to serve them and their communities hasn’t. USA Underwriters’ mission as a leading Property and Casualty Insurance company in Michigan, remains largely unchanged from the mission of it’s progenitor: to provide affordable, quality insurance solutions to families and individuals.' />
            <HistoryParagraph text='Insurance has changed a lot in the last century and a half. When Southern Michigan Mutual Insurance Company was founded, automobiles simply didn’t exist. That all changed — right in the company’s back yard — at the turn of the 20th century when Henry Ford’s Model T began rolling off the assembly line.' />
            <HistoryParagraph text='In an instant of history, the car supplanted the horse and buggy as American’s primary mode of transportation. The era of the Automobile had begun, and the Southern Michigan Mutual Insurance Company was front and center for one of the most dramatic shifts in American history. The car accelerated economic growth, and offered a freedom of travel that had been nigh-unimaginable for the vast majority of people through the whole of human history. ' isMargin />
        </>
    )
}

export default HistoryDetails


const HistoryParagraph = ({ text, isMargin }: any) => {
    return (
        <p className={`font-medium text-[12px] lg:text-[16px] text-[#6B7280] ${isMargin ? 'mb-0' : 'mb-[30px]'} text-justify`} >{text}</p>
    )
}