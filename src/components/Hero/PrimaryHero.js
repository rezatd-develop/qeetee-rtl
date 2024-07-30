"use client"

import React, { useEffect } from 'react';
import clsx from 'clsx';

import '../../files/styles/view/home/home.scss'
import SecondaryPinkButton from '../button/SecondaryPinkButton';

export default function PrimaryHero({ onClick, bannerImage, title, detail, buttonText }) {

    // useEffect(() => {
    //     setFontSize()
    // }, [window.innerWidth])

    // const setFontSize = () => !!isMobileDevice() ? 'font-size-2000 lh-sm' : 'font-size-3500';

    return (
        <div className='home-hero-slider d-flex align-items-center' style={{ backgroundImage: `url(${bannerImage.src})` }}>
            <div className='p-2 p-lg-5 p-md-5 p-sm-2'>
                <div className='ms-3 ms-lg-5 ms-md-5 ms-sm-3'>
                    <p className={clsx('font-size-3000 lh-sm', 'white-color fw-bold home-hero-slider-title')}>{title}</p>
                    <p className='text-color my-4 font-size-875 '>{detail}</p>
                    {!!buttonText && <SecondaryPinkButton onClick={onClick} buttonClassName='rounded' text={buttonText} />}
                </div>
            </div>
        </div>
    )
}
