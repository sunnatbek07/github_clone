import Image from 'next/image';
import React from 'react';
import pImage from '@/assets/images/profile_image.png';
import followers from '@/assets/icons/followers.svg';
import location from '@/assets/icons/location.svg';
import link from '@/assets/icons/link.svg';
import quickdraw from '@/assets/images/quickdraw.png';
import pullShark from '@/assets/images/pull-shark.png';

const Aside = () => {
    return (
        <aside className='pt-8 max-w-[296px]'>
            <Image
                src={pImage}
                width="296px"
                height="296px"
                className='rounded-full w-[296px] h-[296px] border border-[#30363D]'
            />

            <div>
                <div className='py-4'>
                    <h3 className='text-[#C9D1D9] text-[23px] font-bold'>
                        Sunnatbek Qadamov
                    </h3>
                    <h4 className="text-[#8B949E] text-[18px] font-light">
                        sunnatbek07
                    </h4>
                </div>

                <div className='flex flex-col gap-y-4 pb-[18px] border-b border-[#282C31]'>
                    <h5 className='text-[#C9D1D9] text-base'>
                        Frontend developer. Currently studiying in Najot Ta'lim
                    </h5>
                    <button className='rounded-[6px] bg-[#21262D] border border-[#F0F6FC1A] text-sm text-[#C9D1D9] py-[6px]'>
                        Edit profile
                    </button>

                    <div className='flex items-center gap-x-[5px]'>
                        <div className='flex items-center gap-[3px]'>
                            <img src={followers.src} alt="Followers icon" />
                            <p className='text-sm text-[#6E7681] font-semibold'><span className='text-[#C2CAD1]'>4</span> followers</p>
                        </div>

                        <div className='w-1 h-1 bg-[#C2CAD1]'>
                        </div>

                        <div className='flex items-center gap-x-[3px]'>
                            <span className='text-[#C2CAD1] text-sm'>1</span>
                            <p className='text-sm text-[#6E7681]'>following</p>
                        </div>

                    </div>

                    <div className='flex flex-col gap-y-[5px]'>
                        <div className='flex gap-x-[6px]'>
                            <img src={location.src} alt="Location icon" />
                            <span className='text-sm text-[#C2CAD1] font-semibold'>Uzbekistan, Tashkent</span>
                        </div>

                        <div className='flex gap-x-[6px]'>
                            <img src={link.src} alt="Link icon" />
                            <span className='text-sm text-[#C2CAD1] font-semibold'>https://t.me/Sunnatbek_Qadamov</span>
                        </div>

                        <div className='flex gap-x-[6px]'>
                            <img src={link.src} alt="Link icon" />
                            <span className='text-sm text-[#C2CAD1] font-semibold'>in/sunnatbek-qadamov-b527a5268/</span>
                        </div>
                    </div>
                </div>

                <div className='py-[18px]'>
                    <p className='text-lg text-[#C2CAD1] font-semibold mb-2'>Achievements</p>

                    <div className='flex gap-x-[2px]'>
                        <img src={quickdraw.src} alt="Quickdraw image" />
                        <img src={pullShark.src} alt="Pull shark image" />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Aside