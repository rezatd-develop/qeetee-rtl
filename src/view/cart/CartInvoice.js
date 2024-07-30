import FlatButton from "@/src/components/button/FlatButton";
import Image from 'next/image'

import gPay from '../../files/images/elements/g-pay.png';
import applePay from '../../files/images/elements/apple-pay.png';


export default function CartInvoice() {
    return (
        <div className="light-gold-background p-4 mb-5">
            <div className="d-flex justify-content-between">
                <p className="mb-2 font-size-750">Cart Subtotal</p>
                <p className="mb-2 font-size-750">$340</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-2 font-size-750">Tax</p>
                <p className="mb-2 font-size-750">$0</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-2 font-size-750">Coupon Disccount</p>
                <p className="mb-2 font-size-750">$0</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-2 font-size-750">Shipping</p>
                <p className="mb-2 font-size-750">$10</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-2 font-size-750">Shipping Discount*</p>
                <p className="mb-2 font-size-750">-$10</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-3 fw-bold font-size-1125">Order Total</p>
                <p className="mb-3 fw-bold font-size-1125">$340</p>
            </div>
            <FlatButton buttonClassName='border-0 dark-blue-background white-color w-100 justify-content-center' text='GO TO CHECKOUT' />
            <div className="mt-3">
                <Image className='me-2' width={50} src={applePay} />
                <Image width={50} src={gPay} />
            </div>
        </div>
    )
}
