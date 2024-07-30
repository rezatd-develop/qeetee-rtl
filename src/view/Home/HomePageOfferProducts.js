

import ProductCard from '@/src/components/card/ProductCard';
import redHoodie from '../../files/images/products/red_hoodie.png';

export default function HomePageOfferProducts() {
    return (
        <div className='white-background row mx-0 d-flex justify-content-center'>
            <div className='col-11 col-lg-8 col-md-8 col-sm-11'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-start'>
                        <span className='font-size-1500 fw-bold mb-5 me-4'>TOP DEALS OF THE DAY</span>
                        <div className='ms-2 d-none d-lg-block d-md-block d-sm-none'>
                            <p className='mb-0 font-size-750'>Hurry Up! Offer end in</p>
                            <p className='mb-0 font-size-750 fw-bold pink-color'>02 : 23 : 54</p>
                        </div>
                    </div>
                    <div className='pink-color font-size-1000 text-nowrap'>View All</div>
                </div>
                <div className='d-flex justify-content-center flex-wrap row mx-0'>
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='sale' title='wanna pay my drink?' price='$49.99' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='sale' title='wanna pay my drink?' price='$49.99' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='sale' title='wanna pay my drink?' price='$49.99' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='sale' title='wanna pay my drink?' price='$49.99' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='sale' title='wanna pay my drink?' price='$49.99' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='sale' title='wanna pay my drink?' price='$49.99' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='sale' title='wanna pay my drink?' price='$49.99' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='sale' title='wanna pay my drink?' price='$49.99' />
                </div>
            </div>
        </div>)
}
