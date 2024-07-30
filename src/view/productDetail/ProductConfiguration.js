"use client"

import { useState } from 'react';
import Image from 'next/image';
import SecondarySelect from '@/src/components/select/SeconarySelect';
import ProductSizes from './ProductSizes';

import ratingElement from '../../files/images/elements/rating.png';
import divider from '../../files/images/elements/divider_line.png';
import questionIcon from '../../files/images/elements/question.png';
import myImg from '../../files/images/elements/dark-blue-color.png';
import sizeTableImg from '../../files/images/icons/size-table.png'
import OutlineButton from '@/src/components/button/OutlineButton';
import FileUploader from '@/src/components/fileUploader/FileUploader';
import SecondaryPinkButton from '@/src/components/button/SecondaryPinkButton';
import addToCart from '../../files/images/icons/add-to-cart.png';

export default function ProductConfiguration() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity - 1);

    return (
        <div>
            <p className="mb-1 info-color font-size-750">T-shirt</p>
            <p className="mb-1 font-size-1500 fw-bold">Basketball Shirt</p>
            <div className='d-flex justify-content-start'>
                <div className='d-flex'>
                    <Image className='m-1 me-2' width={60} src={ratingElement} />
                    <p className='mb-1 info-color font-size-750'>(4.5/5)</p>
                </div>
                <Image className='mx-3' src={divider} />
                <div className='d-flex'>
                    <p className='mb-1 me-1 font-size-875'>143</p>
                    <p className='mb-1 info-color font-size-750'>Reviews</p>
                </div>
                <Image className='mx-3' src={divider} />
                <div className='d-flex'>
                    <p className='mb-1 me-1 font-size-875'>2.3K</p>
                    <p className='mb-1 info-color font-size-750'>Sold</p>
                    <Image className='mx-1' src={questionIcon} />
                </div>
            </div>
            <div className='d-flex align-items-center mb-4'>
                <p className='mb-1 font-size-1750 pink-color fw-bold'>$19.99</p>
                <p className='font-size-750 white-color px-2 py-0 dark-blue-background discount-border mx-2 mb-0'>10%</p>
                <p className='mb-1 info-color font-size-750 text-decoration-line-through mb-0 mt-1'>$18.99</p>
            </div>
            <div>
                <p className='mb-1 info-color font-size-750'>COLOR</p>
                <SecondarySelect options={[{ id: 1, label: 'Black', icon: myImg }, { id: 2, label: 'Pink', icon: myImg }]} />
            </div>
            <div className='mt-3'>
                <p className='mb-1 info-color font-size-750'>SIZE</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <ProductSizes />
                    <div className='d-flex justify-content-center align-items-center'>
                        <p className='font-size-750 text-decoration-underline mb-0'>Size Table</p>
                        <Image className='mx-2' width={15} src={sizeTableImg} />
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <p className='mb-1 info-color font-size-750'>QUANTITY</p>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div onClick={decreaseQuantity} className='py-2 px-4 border font-size-750 quantity-button'>-</div>
                        <div className='py-2 px-5 border font-size-750'>{quantity}</div>
                        <div onClick={increaseQuantity} className='py-2 px-4 border font-size-750 quantity-button'>+</div>
                    </div>
                    <OutlineButton text='BUY IN ONE CLICK' />
                </div>
            </div>
            <div className='mt-4'>
                <FileUploader />
            </div>
            <div className='mt-3'>
                <p className='mb-1 info-color font-size-750'>URL/TEXT</p>
                <input className='w-100 p-1 purchase-message' type="text" placeholder="Type here ..."></input>
            </div>
            <SecondaryPinkButton buttonClassName='w-100 mt-3 justify-content-center' icon={addToCart} iconSize={10} text='ADD TO CART'/>
        </div>
    )
}
