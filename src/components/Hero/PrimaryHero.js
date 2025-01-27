"use client"

import React, { useEffect } from 'react';
import clsx from 'clsx';

import '../../files/styles/view/home/home.scss'
import SecondaryPinkButton from '../button/SecondaryPinkButton';
import SbButton from '../button/SbButton';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';

export default function PrimaryHero({ onClick, bannerImage, title, detail, buttonText }) {

    // useEffect(() => {
    //     setFontSize()
    // }, [window.innerWidth])

    // const setFontSize = () => !!isMobileDevice() ? 'font-size-2000 lh-sm' : 'font-size-3500';

    return (
        <div className='home-hero-slider d-flex align-items-center' style={{ backgroundImage: `url(${bannerImage.src})` }}>
            <div className='p-2 p-lg-5 p-md-5 p-sm-2'>
                <div className='ms-3 ms-lg-5 ms-md-5 ms-sm-3'>
                    <p className={clsx('font-size-3000 lh-sm', 'white-color home-hero-slider-title yekan-bakh-fat-font')}>{title}</p>
                    <p className='text-color my-4 font-size-1000'>{detail}</p>
                    {!!buttonText && <SbButton variant='contained'
                        startIcon={<ThreeDRotationIcon />}
                        onClick={onClick}
                        className=' pink-background'>
                        {buttonText}
                    </SbButton>}
                </div>
            </div>
        </div>
    )
}
