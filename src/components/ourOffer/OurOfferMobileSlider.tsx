'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ourOffer } from '@/data/data'
import Card from '../shared/card'

const OurOfferMobileSlider = () => {
    return (
        <div>
            <Swiper
                pagination={{ type: 'bullets', clickable: true }}
                modules={[Pagination]}

                className='h-[280px] w-full rounded-lg'
            >
                {ourOffer?.map((item, index) =>
                    <SwiperSlide key={index}>
                        <Card title={item?.title} subtitle={item.subtitle} />
                    </SwiperSlide>

                )}
            </Swiper>
        </div>
    )
}

export default OurOfferMobileSlider