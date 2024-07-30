import Image from 'next/image';

import shippingWay from '../../files/images/icons/shipping-way.png';
import shippingPrice from '../../files/images/icons/shipping-price.png';
import shippingTime from '../../files/images/icons/shipping-time.png';

export default function ShippingFeatures() {
    return (
        <>
            <div className='d-flex mb-4'>
                <Image src={shippingWay} className='me-2 mt-1' />
                <p className='info-color font-size-875 mb-0'>Free Shipping. All orders of $150 or more of eligible items across any product category qualify. </p>
            </div>
            <div className='d-flex mb-4'>
                <Image src={shippingPrice} className='me-2 mt-1' />
                <p className='info-color font-size-875 mb-0'>Payment Methods. Credit Card: Visa, MasterCard, Maestro, American Express. </p>
            </div>
            <div className='d-flex mb-4'>
                <Image src={shippingTime} className='me-2 mt-1' />
                <p className='info-color font-size-875 mb-0'>Returns & Refunds. You can return any item purchased on SectionHub within 20 days of the delivery date. </p>
            </div>
        </>
    )
}
