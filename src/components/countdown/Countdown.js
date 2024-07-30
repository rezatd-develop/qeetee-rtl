"use client"

import React, { useState, useEffect } from 'react';

const Countdown = ({ minutes }) => {
    const calculateTimeLeft = () => {
        const totalSeconds = minutes * 60;
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return { days, hours, minutes: minutesLeft, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [minutes]);

    return (
        <div className='pink-background d-flex justify-content-center  py-3 px-4 w-auto rounded'>
                <div className='d-flex flex-column mx-1 mx-lg-2 mx-md-1 mx-sm-0 align-items-center white-color'>
                    <p className='fw-bold mb-0 font-size-1500 '>{timeLeft.days}</p>
                    <p className='mb-0 font-size-750'>Days</p>
                </div>
                <div className='mx-1 mx-lg-2 mx-md-1 mx-sm-0 mt-2 white-color'>:</div>
                <div className='d-flex flex-column mx-1 mx-lg-2 mx-md-1 mx-sm-0 align-items-center white-color'>
                    <p className='fw-bold mb-0 font-size-1500'>{timeLeft.hours}</p>
                    <p className='mb-0 font-size-750'>Hours</p>
                </div>
                <div className='mx-1 mx-lg-2 mx-md-1 mx-sm-0 mt-2 white-color'>:</div>
                <div className='d-flex flex-column mx-1 mx-lg-2 mx-md-1 mx-sm-0 align-items-center white-color'>
                    <p className='fw-bold mb-0 font-size-1500'>{timeLeft.minutes}</p>
                    <p className='mb-0 font-size-750'>Minutes</p>
                </div>
                <div className='mx-1 mx-lg-2 mx-md-1 mx-sm-0 mt-2 white-color'>:</div>
                <div className='d-flex flex-column mx-1 mx-lg-2 mx-md-1 mx-sm-0 align-items-center white-color'>
                    <p className='fw-bold mb-0 font-size-1500'>{timeLeft.seconds}</p>
                    <p className='mb-0 font-size-750'>Seconds</p>
                </div>
        </div>
    );
};

export default Countdown;
