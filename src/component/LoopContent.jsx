"use client";

import Image from "next/image";
import img1 from '@/assets/Logo_375x_crop_center 1.png'
import img2 from '@/assets/FEcb3_Fr_400x400_adfb82ab-decb-4bd3-b9aa-a7b95da5b399.webp'
import img3 from '@/assets/Bitfins_logo_1f1299f3-eb5c-43bc-a76b-7b08dc7b454f_375x_crop_center 1.png'
import img4 from '@/assets/Future_Fest_Profile_Picture_2_375x_crop_center 1.png'
import img5 from '@/assets/meSG3lth_400x400_1_375x_crop_center 1.png'
import img6 from '@/assets/pendulum-brava-logo_375x_crop_center 1.png'
import img7 from '@/assets/cryptoraggies-logo-profilepic-trans-2000px_375x_crop_center 1.png'

export default function LoopContent(){

    return (
        <main className="w-max py-20 scroller overflow-hidden">
            <div className=" scroller__inner  flex gap-12">
                <div className="relative w-[400px] flex flex-row items-center rounded-l-full bg-[#236CD2]">
                    <Image className="w-40 object-cover rounded-full" src={img1} />
                    <div className="flex w-full flex-col gap-14 pr-8">
                        <p className="text-2xl text-right font-semibold text-white">$Husky</p>
                        <button className="underline w-full text-white text-right">
                            shop now
                        </button>
                    </div>
                </div>
                <div className="relative w-[400px] flex flex-row items-center rounded-l-full bg-[#A153D0]">
                    <Image className="w-40 object-cover rounded-full" src={img2} />
                    <div className="flex w-full flex-col gap-14 pr-8">
                        <p className="text-2xl text-right font-semibold text-white">Danketsu</p>
                        <button className="underline w-full text-white text-right">
                            shop now
                        </button>
                    </div>
                </div>
                <div className="relative w-[400px] flex flex-row items-center rounded-l-full bg-[#08212D]">
                    <Image className="w-40 object-cover rounded-full" src={img3} />
                    <div className="flex w-full flex-col gap-14 pr-8">
                        <p className="text-2xl text-right font-semibold text-white">bitfins</p>
                        <button className="underline w-full text-white text-right">
                            shop now
                        </button>
                    </div>
                </div>
                <div className="relative min-w-[400px] flex flex-row items-center rounded-l-full bg-[#010001]">
                    <Image className="w-40 object-cover rounded-full" src={img4} />
                    <div className="flex w-full flex-col gap-14 pr-8">
                        <p className="text-2xl text-right font-semibold text-white">future fest</p>
                        <button className="underline w-full text-white text-right">
                            shop now
                        </button>
                    </div>
                </div>
                <div className="relative min-w-[400px] flex flex-row items-center rounded-l-full bg-[#010001]">
                    <Image className="w-40 object-cover rounded-full" src={img5} />
                    <div className="flex w-full flex-col gap-14 pr-8">
                        <p className="text-2xl text-right font-semibold text-white">vud u brigada</p>
                        <button className="underline w-full text-white text-right">
                            shop now
                        </button>
                    </div>
                </div>
                <div className="relative min-w-[400px] flex flex-row items-center rounded-l-full bg-[#010001]">
                    <Image className="w-40 object-cover rounded-full" src={img6} />
                    <div className="flex w-full flex-col gap-14 pr-8">
                        <p className="text-2xl text-right font-semibold text-white">pendurum</p>
                        <button className="underline w-full text-white text-right">
                            shop now
                        </button>
                    </div>
                </div>
                <div className="relative min-w-[400px] flex flex-row items-center rounded-l-full bg-[#FF8A8A]">
                    <Image className="w-40 object-cover rounded-full" src={img7} />
                    <div className="flex w-full flex-col gap-14 pr-8">
                        <p className="text-2xl text-right font-semibold text-white">cryptoraggies</p>
                        <button className="underline w-full text-white text-right">
                            shop now
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}