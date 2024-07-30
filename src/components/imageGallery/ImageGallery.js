import Image from 'next/image';

import productImgOne from '../../files/images/products/product_detail_1.png';
import productImgTwo from '../../files/images/products/product_detail_2.png';
import ProductImageThree from '../../files/images/products/product_detail_3.png';
import ProductImageFour from '../../files/images/products/product_detail_4.png';
import SocialBlackIcons from '../social/SocialBlackIcons';

export default function ImageGallery() {
    return (
        <div className='d-flex row mx-0 justify-content-start w-100 flex-column flex-lg-row flex-md-row flex-sm-column'>
            <SocialBlackIcons containerClassName='flex-row flex-lg-column flex-md-column flex-sm-row col-1 me-2 px-0' />
            <div className='col-12 col-lg-10 col-md-10 col-sm-12 d-flex d-lg-block d-md-block d-sm-flex px-0'>
                <Image className='m-1 w-100 h-auto' src={productImgOne} />
                <div className='d-flex justify-content-start row mx-0 flex-column flex-lg-row flex-md-row flex-sm-column'>
                    <Image className='col-12 col-lg-4 col-md-4 col-sm-12 h-auto px-1 my-1' src={productImgTwo} />
                    <Image className='col-12 col-lg-4 col-md-4 col-sm-12 h-auto px-1 my-1' src={ProductImageThree} />
                    <Image className='col-12 col-lg-4 col-md-4 col-sm-12 h-auto px-1 my-1' src={ProductImageFour} />
                </div>
            </div>
        </div>
    )
}
