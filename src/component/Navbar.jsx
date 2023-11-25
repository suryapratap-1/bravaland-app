"use client";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';
import logo from '@/assets/bravalogo.webp'
import Image from 'next/image'
import { useState } from 'react';

const navlinks = [
    "brands", "shop", "premium", "gift cards"
]

export default function Navbar() {
    const [sideBar, setSideBar] = useState(false)   

    return (
        <header className="overflow-x-hidden flex flex-col">
            <div className=" h-12 px-20 py-7 xl:py-3 bg-[#E1C300] flex items-center justify-center">
                <button className=" text-xs leading-4 xl:leading-none  font-bold">
                    <p>VIST US ON TIKTOK @BRAVALAND.COM</p>
                </button>
            </div>

            <div className='w-full lg:h-20 xl:h-24 h-16 md:px-14 px-3 flex flex-row justify-between items-center bg-[#212122] text-white font-semibold'>
                <button onClick={() => setSideBar(!sideBar)} className='xl:hidden block'>
                    {
                        sideBar ? <CloseIcon /> : <MenuIcon />
                    }
                </button>
                
                <div className='xl:flex hidden flex-row items-center gap-6'>

                    <div className='group flex flex-col overflow-hidden'>
                        <button className='flex flex-row gap-1 items-center'>
                            <p>brands</p>
                            <KeyboardArrowDownIcon fontSize='1rem'/>
                        </button>
                        <div className='group-hover:translate-x-0 -translate-x-full w-full h-[1px] bg-[#E1C300] transition-all duration-300'/>
                    </div>

                    <div className='group flex flex-col overflow-hidden'>
                        <button className='flex flex-row gap-1 items-center'>
                            <p>shop</p>
                            <KeyboardArrowDownIcon fontSize='1rem'/>
                        </button>
                        <div className='group-hover:translate-x-0 -translate-x-full w-full h-[1px] bg-[#E1C300] transition-all duration-300'/>
                    </div>

                    <div className='group flex flex-col overflow-hidden'>
                        <button className='flex flex-row gap-1 items-center'>
                            <p>premium</p>
                            
                        </button>
                        <div className='group-hover:translate-x-0 -translate-x-full w-full h-[1px] bg-[#E1C300] transition-all duration-300'/>
                    </div>

                    <div className='group flex flex-col overflow-hidden'>
                        <button className='flex flex-row gap-1 items-center'>
                            <p>gift card</p>
                        </button>
                        <div className='group-hover:translate-x-0 -translate-x-full w-full h-[1px] bg-[#E1C300] transition-all duration-300'/>
                    </div>
                </div>

                <div className="logo">
                    <Image className='xl:w-36 w-24'
                        src={logo} alt="logo"
                    />
                </div>

                <div className='flex flex-row gap-4'>
                    <div className='xl:flex hidden flex-row gap-6'>

                        <div className='group flex flex-col overflow-hidden'>
                            <button className='flex flex-row gap-1 items-center'>
                                <p>become an affiliate</p>
                            </button>
                            <div className='group-hover:translate-x-0 -translate-x-full w-full h-[1px] bg-[#E1C300] transition-all duration-300'/>
                        </div>          

                        <button>
                            <TwitterIcon className='hover:text-[#E1C300]' />
                        </button>

                        <button>
                            <svg className='fill-white hover:fill-[#E1C300]' width="18" aria-hidden="true" focusable="false" role="presentation" class="icon icon-tiktok" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.02 0H11s-.17 3.82 4.13 4.1v2.95s-2.3.14-4.13-1.26l.03 6.1a5.52 5.52 0 11-5.51-5.52h.77V9.4a2.5 2.5 0 101.76 2.4L8.02 0z" fill="var(--color-accent)"></path>
                            </svg>
                        </button>

                        <button>
                            <InstagramIcon className='hover:text-[#E1C300]' />
                        </button>

                    </div> 

                    <button>
                        <svg className='fill-white hover:fill-[#E1C300]' stroke='white' widths="18" width="19" height="21" viewBox="0 0 19 21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.3486 1C15.5436 1 15.5436 10.4387 9.3486 10.4387C3.15362 10.4387 3.15362 1 9.3486 1ZM1 19.9202C1.6647 9.36485 17.4579 9.31167 18.0694 19.9468L17.0857 20C16.5539 10.6145 2.56869 10.6411 2.01034 19.9734L1.02659 19.9202H1ZM9.3486 2.01034C4.45643 2.01034 4.45643 9.42836 9.3486 9.42836C14.2408 9.42836 14.2408 2.01034 9.3486 2.01034Z" fill="var(--color-header-icons, --color-accent)" stroke="var(--color-header-icons, --color-accent)" stroke-width="0.1"></path>
                        </svg>
                    </button>
                    <button>
                        <SearchIcon className='hover:text-[#E1C300]' />
                    </button>

                    <button className='relative group'>
                        <svg className='fill-transparent hover:stroke-[#E1C300]' stroke='white'  widths="18" width="19" height="20" viewBox="0 0 19 20"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4.58011L3.88304 1.09945V1H15.2164L18 4.58011M1 4.58011V17.2099C1 18.2044 1.89474 19 2.88889 19H16.1111C17.1053 19 18 18.2044 18 17.2099V4.58011M1 4.58011H18M13.3275 8.16022C13.3275 10.1492 11.6374 11.7403 9.54971 11.7403C7.46199 11.7403 5.67251 10.1492 5.67251 8.16022" stroke="var(--color-header-icons, --color-accent)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <div className='absolute z-10 -top-1 left-2.5 group-hover:bg-[#E1C300] w-4 h-4 rounded-full bg-white text-xs text-gray-700'>0</div>
                    </button>
                </div>
            </div>

            <div className={`${sideBar ? "flex -translate-y-0" : "hidden translate-y-full"} 
                xl:hidden md:px-14 px-3 w-full h-screen flex-col bg-[#212122] text-white`}>
                <div>
                    {
                        navlinks.map((nav, index) => (
                            <button key={index} className='w-full flex flex-row items-center justify-between py-4'>
                                <p className='text-xl font-bold'>{nav}</p>
                                <EastIcon className='text-base'/>
                            </button>
                        ))
                    }
                </div>

                <button className='w-full py-4 flex flex-row items-center justify-between '>
                    <p className='text-xl font-bold'>become affiliate</p>
                    <EastIcon className='text-base'/>
                </button>

                <div className='py-4 flex flex-row items-center gap-2 w-full'>
                    <button>
                        <TwitterIcon className='hover:text-[#E1C300]' />
                    </button>

                    <button>
                        <svg className='fill-white hover:fill-[#E1C300]' width="18" aria-hidden="true" focusable="false" role="presentation" class="icon icon-tiktok" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.02 0H11s-.17 3.82 4.13 4.1v2.95s-2.3.14-4.13-1.26l.03 6.1a5.52 5.52 0 11-5.51-5.52h.77V9.4a2.5 2.5 0 101.76 2.4L8.02 0z" fill="var(--color-accent)"></path>
                        </svg>
                    </button>

                    <button>
                        <InstagramIcon className='hover:text-[#E1C300]' />
                    </button>
                </div>
                
                <div className='flex flex-row gap-2 items-center mt-28 mb-5'>
                    <button>
                        <svg className='fill-white hover:fill-[#E1C300]' stroke='white' width="17" height="17" viewBox="0 0 19 21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.3486 1C15.5436 1 15.5436 10.4387 9.3486 10.4387C3.15362 10.4387 3.15362 1 9.3486 1ZM1 19.9202C1.6647 9.36485 17.4579 9.31167 18.0694 19.9468L17.0857 20C16.5539 10.6145 2.56869 10.6411 2.01034 19.9734L1.02659 19.9202H1ZM9.3486 2.01034C4.45643 2.01034 4.45643 9.42836 9.3486 9.42836C14.2408 9.42836 14.2408 2.01034 9.3486 2.01034Z" fill="var(--color-header-icons, --color-accent)" stroke="var(--color-header-icons, --color-accent)" stroke-width="0.1"></path>
                        </svg>
                    </button>
                    <button>login</button>
                </div>
  
            </div>
        </header>
    )
}