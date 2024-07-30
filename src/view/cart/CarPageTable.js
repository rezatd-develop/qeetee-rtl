'use client'

import { useState } from "react";
import ProductTableCard from "@/src/components/card/ProductTableCard";
import cartImg from '../../files/images/products/cart-product.png';
import Image from 'next/image';
import deleteIcon from '../../files/images/icons/delete.png';
import likeIcon from '../../files/images/icons/heart.png';


export default function CarPageTable() {
    const [quantity, setQuantity] = useState(1)

    const testData = [
        { id: 1, img: cartImg, title: 'Basketball Shirt', color: 'Black', beforeDiscount: '$240', afterDiscount: '$120', size: 'M' },
        { id: 1, img: cartImg, title: 'Basketball Shirt', color: 'Black', beforeDiscount: '$240', afterDiscount: '$120', size: 'M' },
    ]

    const decreaseQuantity = () => setQuantity(quantity - 1);
    const increaseQuantity = () => setQuantity(quantity + 1);

    return (
        <div className="row mx-0 d-flex justify-content-center mt-5 mb-4 px-4">
            <table className='col-12 col-lg-8 col-md-10 col-sm-12 cart-table'>
                <tr className="light-gray-background light-text-color">
                    <th className="font-prompt fw-light font-size-750 text-center py-2">PRODUCT</th>
                    <th className="font-prompt fw-light font-size-750 text-center py-2">QTY</th>
                    <th className="font-prompt fw-light font-size-750 text-center py-2">TOTAL</th>
                    <th className="font-prompt fw-light font-size-750 text-center py-2">OPTIONS</th>
                </tr>
                <tr className="border">
                    <td className="border min-width-available">
                        <ProductTableCard key={testData[0].id}
                            img={testData[0].img}
                            title={testData[0].title}
                            color={testData[0].color}
                            size={testData[0].size}
                            beforeDiscount={testData[0].beforeDiscount}
                            afterDiscount={testData[0].afterDiscount} />
                    </td>
                    <td className="border min-width-available">
                        <div className='d-flex justify-content-center'>
                            <div onClick={decreaseQuantity} className='py-2 px-2 px-lg-3 px-md-2 px-sm-2 border font-size-750 quantity-button'>-</div>
                            <div className='py-2 px-2 px-lg-4 px-md-3 px-sm-2 border font-size-750'>{quantity}</div>
                            <div onClick={increaseQuantity} className='py-2 px-2 px-lg-3 px-md-2 px-sm-2 border font-size-750 quantity-button'>+</div>
                        </div></td>
                    <td className="border px-1 px-lg-5 px-md-4 px-sm-1">
                        <p className="font-size-875 text-center">$240</p>
                    </td>
                    <td className="border">
                        <div className="d-flex justify-content-center flex-column align-items-center px-2 px-lg-5 px-md-4 px-sm-2">
                            <div className="mb-4">
                                <Image src={deleteIcon} />
                            </div>
                            <div>
                                <Image src={likeIcon} />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="border">
                    <td className="border min-width-available">
                        <ProductTableCard key={testData[0].id}
                            img={testData[0].img}
                            title={testData[0].title}
                            color={testData[0].color}
                            size={testData[0].size}
                            beforeDiscount={testData[0].beforeDiscount}
                            afterDiscount={testData[0].afterDiscount} />
                    </td>
                    <td className="border min-width-available">
                        <div className='d-flex justify-content-center'>
                            <div onClick={decreaseQuantity} className='py-2 px-2 px-lg-3 px-md-2 px-sm-2 border font-size-750 quantity-button'>-</div>
                            <div className='py-2 px-2 px-lg-4 px-md-3 px-sm-2 border font-size-750'>{quantity}</div>
                            <div onClick={increaseQuantity} className='py-2 px-2 px-lg-3 px-md-2 px-sm-2 border font-size-750 quantity-button'>+</div>
                        </div></td>
                    <td className="border px-1 px-lg-5 px-md-4 px-sm-1">
                        <p className="font-size-875 text-center">$240</p>
                    </td>
                    <td className="border">
                        <div className="d-flex justify-content-center flex-column align-items-center px-2 px-lg-5 px-md-4 px-sm-2">
                            <div className="mb-4">
                                <Image src={deleteIcon} />
                            </div>
                            <div>
                                <Image src={likeIcon} />
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}
