'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import HeroBanner from './HeroBanner'

const Hero = () => {

    return (
        <>
            <Swiper
                pagination={{ type: 'bullets', clickable: true }}
                modules={[Pagination]}
                className='h-[450px] lg:h-[650px] xl:h-[550px] w-full rounded-lg'
            >
                <SwiperSlide>
                    <HeroBanner />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroBanner />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Hero