"use client";
import Image from 'next/image'
import img1 from "@/assets/DSC00058_CAROUSEL_1_1440x650_crop_center 1.png"
import img5 from "@/assets/DSC00198_CAROUSEL_1_1440x650_crop_center 1.png"
import img3 from "@/assets/DSC09179_CAROUSEL_1_1440x650_crop_center 1.png"
import img4 from "@/assets/DSC09618_CAROUSEL_1_1440x650_crop_center 1.png"
import img2 from "@/assets/DSC09802_carousel_1440x650_crop_center 1.png"
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const images = [
    {
        id: 1,
        // url: '../assets/DSC00058_CAROUSEL_1_1440x650_crop_center 1.png'
        url: img1
    },
    {
        id: 2,
        // url: '../assets/DSC00198_CAROUSEL_1_1440x650_crop_center 1.png'
        url: img5
    },
    {
        id: 3,
        // url: '../assets/DSC09179_CAROUSEL_1_1440x650_crop_center 1.png'
        url: img3
    },
    {
        id: 4,
        // url: '../assets/DSC09618_CAROUSEL_1_1440x650_crop_center 1.png'
        url: img4
    },
    {
        id: 5,
        // url: '../assets/DSC09802_carousel_1440x650_crop_center 1.png'
        url: img2
    }
]

export default function Banner() {

    return (
        <main className='w-screen overflow-x-hidden'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                    pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='w-full h-[85vh] object-cover' src={img1} />
                        <div className='absolute z-20 left-[10%] top-[40%] flex flex-col gap-6'>
                            <h2 className='xl:text-7xl text-5xl md:pr-[20%] font-bold text-left text-white'>heritage hoodies</h2>
                            <button className='px-7 py-3 text-sm font-semibold bg-white w-fit rounded-3xl'>shop now</button>
                        </div>
                        <div className='absolute z-10 w-full h-[85vh] top-0 bg-[#0000003a]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='w-full h-[85vh] object-cover' src={img2} />
                        <div className='absolute z-20 right-[10%] top-[40%]  flex flex-col gap-6'>
                            <h2 className='xl:text-7xl text-5xl md:pr-[20%] font-bold text-right text-white'>heritage tees</h2>
                            <div className='flex justify-end'>
                                <button className='px-7 py-3 text-sm font-semibold bg-white w-fit rounded-3xl'>shop now</button>
                            </div>
                        </div>
                        <div className='absolute z-10 w-full h-[85vh] top-0 bg-[#0000002e]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='w-full h-[85vh] object-cover' src={img3} />
                        <div className='absolute z-20 left-[10%] top-[40%]  flex flex-col gap-6'>
                            <h2 className='xl:text-7xl text-5xl md:pr-[20%] font-bold text-left text-white'>premium tees</h2>
                            <button className='px-7 py-3 text-sm font-semibold bg-white w-fit rounded-3xl'>shop now</button>
                        </div>
                        <div className='absolute z-10 w-full h-[85vh] top-0 bg-[#0000002e]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='w-full h-[85vh] object-cover' src={img4} />
                        <div className='absolute z-20 right-[10%] top-[40%]  flex flex-col gap-6'>
                            <h2 className='xl:text-7xl text-5xl md:pl-[40%] font-bold text-right text-white'>heritage women's tanks</h2>
                            <div className='flex justify-end'>
                                <button className='px-7 py-3 text-sm font-semibold bg-white w-fit rounded-3xl'>shop now</button>
                            </div>
                        </div>
                        <div className='absolute z-10 w-full h-[85vh] top-0 bg-[#0000002e]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='w-full h-[85vh] object-cover' src={img5} />
                        <div className='absolute z-20 left-[10%] top-[40%]  flex flex-col gap-6'>
                            <h2 className='xl:text-7xl text-5xl md:pr-[20%] font-bold text-left text-white'>premium zip hoodies</h2>
                            <button className='px-7 py-3 text-sm font-semibold bg-white w-fit rounded-3xl'>shop now</button>
                        </div>
                        <div className='absolute z-10 w-full h-[85vh] top-0 bg-[#0000002e]' />
                    </div>
                </SwiperSlide>
            </Swiper>

        </main>
    )
}