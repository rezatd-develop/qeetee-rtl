

import ProductCard from '@/src/components/card/ProductCard';
import redHoodie from '../../files/images/products/red_hoodie.png';

export default function HomePageOfferProducts() {
    return (
        <div className='white-background row mx-0 d-flex justify-content-center'>
            <div className='col-11 col-lg-8 col-md-8 col-sm-11'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-start'>
                        <span className='font-size-1500 fw-bold mb-5 me-4 yekan-bakh-fat-font'>بهترین تخفیف های امروز</span>
                        <div className='ms-2 d-none d-lg-block d-md-block d-sm-none mx-2'>
                            <p className='mb-0 font-size-750'>فقط دو روز <br /> فرصت دارید</p>
                        </div>
                    </div>
                    <div className='pink-color font-size-1000 yekan-bakh-fat-font text-nowrap'>نمایش همه محصولات</div>
                </div>
                <div className='d-flex justify-content-center flex-wrap row mx-0'>
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                    <ProductCard cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                        img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                </div>
            </div>
        </div>)
}
