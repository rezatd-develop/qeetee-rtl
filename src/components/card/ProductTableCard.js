'use client'

import Image from 'next/image';

export default function ProductTableCard({ key, img, title, color, size, beforeDiscount, afterDiscount }) {
    return (
        <div key={key} className="row mx-0 px-2 py-4" >
            <Image className='col-6 d-none d-lg-block d-md-block d-sm-none h-100' src={img} />
            <div className='col-12 col-lg-6 col-md-6 col-sm-12'>
                <p className='font-size-875 fw-bold mt-2'>{title}</p>
                <div className='d-flex'>
                    <p className='font-size-750 info-color'>COLOR:</p>
                    <p className='font-size-750'> {color}</p>
                </div>
                <div className='d-flex'>
                    <p className='font-size-750 info-color mb-2'>SIZE:</p>
                    <p className='font-size-750 mb-2'> {size}</p>
                </div>
                <div className='d-flex'>
                    <p className='font-size-875 info-color text-decoration-line-through me-2'>{beforeDiscount}</p>
                    <p className='font-size-875 fw-bold'> {afterDiscount}</p>
                </div>
                {/* <p className='font-size-750 mb-0'> Import duties</p>
                <p className='font-size-750 mb-2'> included</p> */}
            </div>
        </div>
    )
}
