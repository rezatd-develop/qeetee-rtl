

import redHoodie from '../../files/images/products/red_hoodie.png';
import ProductCard from '@/src/components/card/ProductCard';

export default function ProductsPageProducts() {
    return (
        <div className='white-background row mx-0 d-flex justify-content-center  pt-5'>
            <div className='col-12 col-lg-8 col-md-8 col-sm-12'>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <div className='d-flex align-items-center'>
                        <span className='font-size-1500 fw-bold px-3'>FEATURED PRODUCTS</span>
                        <span className='d-none d-lg-block d-md-block d-sm-none px-3'>22 products</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <span className='font-size-750 info-color px-1 text-nowrap'>sort by</span>
                        <span className='font-size-875 px-1'>Selected</span>
                    </div>
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
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md- 4 col-sm-12'}
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
