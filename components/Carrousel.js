'use client'
import React, { useRef } from 'react'
import Card from './Card'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { RightArrow, LeftArrow } from '@/ui/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Carrousel = () => {
  const swiperRef = useRef()

  return (
    <div className='flex justify-between pb-10'>
      <button className='ml-5' onClick={() => swiperRef.current.slidePrev()}><LeftArrow/></button>
      <Swiper
        className='w-5/6'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        loop={'true'}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => { console.log('slide change') }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
      </Swiper>
      <button className='mr-5' onClick={() => swiperRef.current.slideNext()}><RightArrow/></button>
    </div>

  )
}

export default Carrousel
