'use client'
import React from 'react'
import Card from '../shared/card'
import { ourOffer } from '@/data/data'
import OurOfferMobileSlider from './OurOfferMobileSlider'


const OurOffer = () => {

    return (
        <>
            <div className=' hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-[28px] mb-[80px]'>
                {ourOffer?.map((item, index) => <Card key={index} title={item?.title} subtitle={item.subtitle} />)}
            </div>
            <div className='block lg:hidden slider'>
                <OurOfferMobileSlider />
            </div>
        </>
    )
}

export default OurOffer