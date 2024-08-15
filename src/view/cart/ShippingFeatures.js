import Image from 'next/image';

import shippingWay from '../../files/images/icons/shipping-way.png';
import shippingPrice from '../../files/images/icons/shipping-price.png';
import shippingTime from '../../files/images/icons/shipping-time.png';

export default function ShippingFeatures() {
    return (
        <>
            <div className='d-flex mb-4'>
                <Image src={shippingWay} className='mx-2 mt-1' />
                <p className='info-color font-size-875 mb-0'>ارسال رایگان بالای ۱ میلیون تومان</p>
            </div>
            <div className='d-flex mb-4'>
                <Image src={shippingPrice} className='mx-2 mt-1' />
                <p className='info-color font-size-875 mb-0'>ارسال رایگان بالای ۱ میلیون تومان</p>
            </div>
            <div className='d-flex mb-4'>
                <Image src={shippingTime} className='mx-2 mt-1' />
                <p className='info-color font-size-875 mb-0'>ارسال رایگان بالای ۱ میلیون تومان</p>
            </div>
        </>
    )
}
